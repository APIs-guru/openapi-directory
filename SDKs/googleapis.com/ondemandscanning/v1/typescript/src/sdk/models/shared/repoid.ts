import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ProjectRepoId } from "./projectrepoid";


// RepoId
/** 
 * A unique identifier for a Cloud Repo.
**/
export class RepoId extends SpeakeasyBase {
  @Metadata({ data: "json, name=projectRepoId" })
  projectRepoId?: ProjectRepoId;

  @Metadata({ data: "json, name=uid" })
  uid?: string;
}
