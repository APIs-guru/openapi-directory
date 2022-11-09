import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GitLabRepository } from "./gitlabrepository";


// ListGitLabRepositoriesResponse
/** 
 * RPC response object returned by the ListGitLabRepositories RPC method.
**/
export class ListGitLabRepositoriesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=gitlabRepositories", elemType: shared.GitLabRepository })
  gitlabRepositories?: GitLabRepository[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;
}
