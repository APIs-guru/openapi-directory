import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GitLabRepositoryId } from "./gitlabrepositoryid";



// GitLabRepository
/** 
 * Proto Representing a GitLabRepository
**/
export class GitLabRepository extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=browseUri" })
  browseUri?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=repositoryId" })
  repositoryId?: GitLabRepositoryId;
}
