import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { CryptoKey } from "./cryptokey";


// ListCryptoKeysResponse
/** 
 * Response message for KeyManagementService.ListCryptoKeys.
**/
export class ListCryptoKeysResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=cryptoKeys", elemType: shared.CryptoKey })
  cryptoKeys?: CryptoKey[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=totalSize" })
  totalSize?: number;
}
