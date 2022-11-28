import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GitLabConfig } from "./gitlabconfig";



// ListGitLabConfigsResponse
/** 
 * RPC response object returned by ListGitLabConfigs RPC method.
**/
export class ListGitLabConfigsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=gitlabConfigs", elemType: GitLabConfig })
  gitlabConfigs?: GitLabConfig[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
