import { SpeakeasyBase } from "../../../internal/utils";
import { CertificateDescription } from "./certificatedescription";
import { CertificateConfig } from "./certificateconfig";
import { RevocationDetails } from "./revocationdetails";
export declare enum CertificateSubjectModeEnum {
    SubjectRequestModeUnspecified = "SUBJECT_REQUEST_MODE_UNSPECIFIED",
    Default = "DEFAULT",
    ReflectedSpiffe = "REFLECTED_SPIFFE"
}
/**
 * A Certificate corresponds to a signed X.509 certificate issued by a CertificateAuthority.
**/
export declare class CertificateInput extends SpeakeasyBase {
    certificateDescription?: CertificateDescription;
    certificateTemplate?: string;
    config?: CertificateConfig;
    labels?: Map<string, string>;
    lifetime?: string;
    pemCsr?: string;
    revocationDetails?: RevocationDetails;
    subjectMode?: CertificateSubjectModeEnum;
}
/**
 * A Certificate corresponds to a signed X.509 certificate issued by a CertificateAuthority.
**/
export declare class Certificate extends SpeakeasyBase {
    certificateDescription?: CertificateDescription;
    certificateTemplate?: string;
    config?: CertificateConfig;
    createTime?: string;
    issuerCertificateAuthority?: string;
    labels?: Map<string, string>;
    lifetime?: string;
    name?: string;
    pemCertificate?: string;
    pemCertificateChain?: string[];
    pemCsr?: string;
    revocationDetails?: RevocationDetails;
    subjectMode?: CertificateSubjectModeEnum;
    updateTime?: string;
}
