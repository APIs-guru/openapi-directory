import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CryptoKey } from "./cryptokey";



// ListCryptoKeysResponse
/** 
 * Response message for KeyManagementService.ListCryptoKeys.
**/
export class ListCryptoKeysResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cryptoKeys", elemType: CryptoKey })
  cryptoKeys?: CryptoKey[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=totalSize" })
  totalSize?: number;
}
