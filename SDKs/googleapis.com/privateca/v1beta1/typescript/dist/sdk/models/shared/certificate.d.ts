import { SpeakeasyBase } from "../../../internal/utils";
import { CertificateDescription } from "./certificatedescription";
import { CertificateConfig } from "./certificateconfig";
import { RevocationDetails } from "./revocationdetails";
/**
 * A Certificate corresponds to a signed X.509 certificate issued by a CertificateAuthority.
**/
export declare class CertificateInput extends SpeakeasyBase {
    certificateDescription?: CertificateDescription;
    config?: CertificateConfig;
    labels?: Map<string, string>;
    lifetime?: string;
    pemCsr?: string;
    revocationDetails?: RevocationDetails;
}
/**
 * A Certificate corresponds to a signed X.509 certificate issued by a CertificateAuthority.
**/
export declare class Certificate extends SpeakeasyBase {
    certificateDescription?: CertificateDescription;
    config?: CertificateConfig;
    createTime?: string;
    labels?: Map<string, string>;
    lifetime?: string;
    name?: string;
    pemCertificate?: string;
    pemCertificateChain?: string[];
    pemCsr?: string;
    revocationDetails?: RevocationDetails;
    updateTime?: string;
}
