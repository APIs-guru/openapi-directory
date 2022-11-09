import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GitLabConfig } from "./gitlabconfig";


// ListGitLabConfigsResponse
/** 
 * RPC response object returned by ListGitLabConfigs RPC method.
**/
export class ListGitLabConfigsResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=gitlabConfigs", elemType: shared.GitLabConfig })
  gitlabConfigs?: GitLabConfig[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
