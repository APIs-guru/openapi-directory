import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SecretVersion } from "./secretversion";



// ListSecretVersionsResponse
/** 
 * Response message for SecretManagerService.ListSecretVersions.
**/
export class ListSecretVersionsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=totalSize" })
  totalSize?: number;

  @SpeakeasyMetadata({ data: "json, name=versions", elemType: SecretVersion })
  versions?: SecretVersion[];
}
