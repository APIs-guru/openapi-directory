import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// GooglePrivacyDlpV2UnwrappedCryptoKey
/** 
 * Using raw keys is prone to security risks due to accidentally leaking the key. Choose another type of key if possible.
**/
export class GooglePrivacyDlpV2UnwrappedCryptoKey extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=key" })
  key?: string;
}
