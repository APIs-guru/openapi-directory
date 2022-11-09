import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GooglePrivacyDlpV2TransientCryptoKey
/** 
 * Use this to have a random data crypto key generated. It will be discarded after the request finishes.
**/
export class GooglePrivacyDlpV2TransientCryptoKey extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;
}
