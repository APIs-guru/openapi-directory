import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// RepoSource
/** 
 * RepoSource describes the location of the source in a Google Cloud Source Repository.
**/
export class RepoSource extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=branchName" })
  branchName?: string;

  @SpeakeasyMetadata({ data: "json, name=commitSha" })
  commitSha?: string;

  @SpeakeasyMetadata({ data: "json, name=projectId" })
  projectId?: string;

  @SpeakeasyMetadata({ data: "json, name=repoName" })
  repoName?: string;

  @SpeakeasyMetadata({ data: "json, name=tagName" })
  tagName?: string;
}
