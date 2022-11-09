import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GooglePrivacyDlpV2UnwrappedCryptoKey
/** 
 * Using raw keys is prone to security risks due to accidentally leaking the key. Choose another type of key if possible.
**/
export class GooglePrivacyDlpV2UnwrappedCryptoKey extends SpeakeasyBase {
  @Metadata({ data: "json, name=key" })
  key?: string;
}
