import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GooglePrivacyDlpV2TransientCryptoKey
/** 
 * Use this to have a random data crypto key generated. It will be discarded after the request finishes.
**/
export class GooglePrivacyDlpV2TransientCryptoKey extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
