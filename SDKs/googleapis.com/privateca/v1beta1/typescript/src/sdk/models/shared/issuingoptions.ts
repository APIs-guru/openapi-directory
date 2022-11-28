import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// IssuingOptions
/** 
 * Options that affect all certificates issued by a CertificateAuthority.
**/
export class IssuingOptions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=includeCaCertUrl" })
  includeCaCertUrl?: boolean;

  @SpeakeasyMetadata({ data: "json, name=includeCrlAccessUrl" })
  includeCrlAccessUrl?: boolean;
}
