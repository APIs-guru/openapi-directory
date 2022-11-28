import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CertificateDescription } from "./certificatedescription";
import { CertificateConfig } from "./certificateconfig";
import { RevocationDetails } from "./revocationdetails";


export enum CertificateSubjectModeEnum {
    SubjectRequestModeUnspecified = "SUBJECT_REQUEST_MODE_UNSPECIFIED",
    Default = "DEFAULT",
    ReflectedSpiffe = "REFLECTED_SPIFFE"
}


// CertificateInput
/** 
 * A Certificate corresponds to a signed X.509 certificate issued by a CertificateAuthority.
**/
export class CertificateInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=certificateDescription" })
  certificateDescription?: CertificateDescription;

  @SpeakeasyMetadata({ data: "json, name=certificateTemplate" })
  certificateTemplate?: string;

  @SpeakeasyMetadata({ data: "json, name=config" })
  config?: CertificateConfig;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=lifetime" })
  lifetime?: string;

  @SpeakeasyMetadata({ data: "json, name=pemCsr" })
  pemCsr?: string;

  @SpeakeasyMetadata({ data: "json, name=revocationDetails" })
  revocationDetails?: RevocationDetails;

  @SpeakeasyMetadata({ data: "json, name=subjectMode" })
  subjectMode?: CertificateSubjectModeEnum;
}


// Certificate
/** 
 * A Certificate corresponds to a signed X.509 certificate issued by a CertificateAuthority.
**/
export class Certificate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=certificateDescription" })
  certificateDescription?: CertificateDescription;

  @SpeakeasyMetadata({ data: "json, name=certificateTemplate" })
  certificateTemplate?: string;

  @SpeakeasyMetadata({ data: "json, name=config" })
  config?: CertificateConfig;

  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=issuerCertificateAuthority" })
  issuerCertificateAuthority?: string;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=lifetime" })
  lifetime?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=pemCertificate" })
  pemCertificate?: string;

  @SpeakeasyMetadata({ data: "json, name=pemCertificateChain" })
  pemCertificateChain?: string[];

  @SpeakeasyMetadata({ data: "json, name=pemCsr" })
  pemCsr?: string;

  @SpeakeasyMetadata({ data: "json, name=revocationDetails" })
  revocationDetails?: RevocationDetails;

  @SpeakeasyMetadata({ data: "json, name=subjectMode" })
  subjectMode?: CertificateSubjectModeEnum;

  @SpeakeasyMetadata({ data: "json, name=updateTime" })
  updateTime?: string;
}
