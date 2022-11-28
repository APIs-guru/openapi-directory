import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GitLabRepository } from "./gitlabrepository";



// ListGitLabRepositoriesResponse
/** 
 * RPC response object returned by the ListGitLabRepositories RPC method.
**/
export class ListGitLabRepositoriesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=gitlabRepositories", elemType: GitLabRepository })
  gitlabRepositories?: GitLabRepository[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
