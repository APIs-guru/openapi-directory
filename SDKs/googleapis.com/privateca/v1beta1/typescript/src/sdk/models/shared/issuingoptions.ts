import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// IssuingOptions
/** 
 * Options that affect all certificates issued by a CertificateAuthority.
**/
export class IssuingOptions extends SpeakeasyBase {
  @Metadata({ data: "json, name=includeCaCertUrl" })
  includeCaCertUrl?: boolean;

  @Metadata({ data: "json, name=includeCrlAccessUrl" })
  includeCrlAccessUrl?: boolean;
}
