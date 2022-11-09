import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CertificateDescription } from "./certificatedescription";
import { CertificateConfig } from "./certificateconfig";
import { RevocationDetails } from "./revocationdetails";

export enum CertificateSubjectModeEnum {
    SubjectRequestModeUnspecified = "SUBJECT_REQUEST_MODE_UNSPECIFIED"
,    Default = "DEFAULT"
,    ReflectedSpiffe = "REFLECTED_SPIFFE"
}


// Certificate
/** 
 * A Certificate corresponds to a signed X.509 certificate issued by a CertificateAuthority.
**/
export class Certificate extends SpeakeasyBase {
  @Metadata({ data: "json, name=certificateDescription" })
  certificateDescription?: CertificateDescription;

  @Metadata({ data: "json, name=certificateTemplate" })
  certificateTemplate?: string;

  @Metadata({ data: "json, name=config" })
  config?: CertificateConfig;

  @Metadata({ data: "json, name=createTime" })
  createTime?: string;

  @Metadata({ data: "json, name=issuerCertificateAuthority" })
  issuerCertificateAuthority?: string;

  @Metadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @Metadata({ data: "json, name=lifetime" })
  lifetime?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=pemCertificate" })
  pemCertificate?: string;

  @Metadata({ data: "json, name=pemCertificateChain" })
  pemCertificateChain?: string[];

  @Metadata({ data: "json, name=pemCsr" })
  pemCsr?: string;

  @Metadata({ data: "json, name=revocationDetails" })
  revocationDetails?: RevocationDetails;

  @Metadata({ data: "json, name=subjectMode" })
  subjectMode?: CertificateSubjectModeEnum;

  @Metadata({ data: "json, name=updateTime" })
  updateTime?: string;
}
