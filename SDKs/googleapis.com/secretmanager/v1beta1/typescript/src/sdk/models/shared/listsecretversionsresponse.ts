import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { SecretVersion } from "./secretversion";


// ListSecretVersionsResponse
/** 
 * Response message for SecretManagerService.ListSecretVersions.
**/
export class ListSecretVersionsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=totalSize" })
  totalSize?: number;

  @Metadata({ data: "json, name=versions", elemType: shared.SecretVersion })
  versions?: SecretVersion[];
}
