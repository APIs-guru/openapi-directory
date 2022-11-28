import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CryptoKeyVersion } from "./cryptokeyversion";



// ListCryptoKeyVersionsResponse
/** 
 * Response message for KeyManagementService.ListCryptoKeyVersions.
**/
export class ListCryptoKeyVersionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cryptoKeyVersions", elemType: CryptoKeyVersion })
  cryptoKeyVersions?: CryptoKeyVersion[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=totalSize" })
  totalSize?: number;
}
