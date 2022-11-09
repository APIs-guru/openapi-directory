import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { CryptoKeyVersion } from "./cryptokeyversion";


// ListCryptoKeyVersionsResponse
/** 
 * Response message for KeyManagementService.ListCryptoKeyVersions.
**/
export class ListCryptoKeyVersionsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=cryptoKeyVersions", elemType: shared.CryptoKeyVersion })
  cryptoKeyVersions?: CryptoKeyVersion[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=totalSize" })
  totalSize?: number;
}
