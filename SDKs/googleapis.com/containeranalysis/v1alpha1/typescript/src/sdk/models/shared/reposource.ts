import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// RepoSource
/** 
 * RepoSource describes the location of the source in a Google Cloud Source Repository.
**/
export class RepoSource extends SpeakeasyBase {
  @Metadata({ data: "json, name=branchName" })
  branchName?: string;

  @Metadata({ data: "json, name=commitSha" })
  commitSha?: string;

  @Metadata({ data: "json, name=projectId" })
  projectId?: string;

  @Metadata({ data: "json, name=repoName" })
  repoName?: string;

  @Metadata({ data: "json, name=tagName" })
  tagName?: string;
}
