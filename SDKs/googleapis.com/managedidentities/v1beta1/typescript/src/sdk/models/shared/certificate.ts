import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Certificate } from "./certificate";


// Certificate
/** 
 * Certificate used to configure LDAPS.
**/
export class Certificate extends SpeakeasyBase {
  @Metadata({ data: "json, name=expireTime" })
  expireTime?: string;

  @Metadata({ data: "json, name=issuingCertificate" })
  issuingCertificate?: Certificate;

  @Metadata({ data: "json, name=subject" })
  subject?: string;

  @Metadata({ data: "json, name=subjectAlternativeName" })
  subjectAlternativeName?: string[];

  @Metadata({ data: "json, name=thumbprint" })
  thumbprint?: string;
}
