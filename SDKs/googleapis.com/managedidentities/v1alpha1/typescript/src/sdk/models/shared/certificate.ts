import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Certificate
/** 
 * Certificate used to configure LDAPS.
**/
export class Certificate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=expireTime" })
  expireTime?: string;

  @SpeakeasyMetadata({ data: "json, name=issuingCertificate" })
  issuingCertificate?: Certificate;

  @SpeakeasyMetadata({ data: "json, name=subject" })
  subject?: string;

  @SpeakeasyMetadata({ data: "json, name=subjectAlternativeName" })
  subjectAlternativeName?: string[];

  @SpeakeasyMetadata({ data: "json, name=thumbprint" })
  thumbprint?: string;
}
