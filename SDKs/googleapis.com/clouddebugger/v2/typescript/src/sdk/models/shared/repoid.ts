import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ProjectRepoId } from "./projectrepoid";



// RepoId
/** 
 * A unique identifier for a cloud repo.
**/
export class RepoId extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=projectRepoId" })
  projectRepoId?: ProjectRepoId;

  @SpeakeasyMetadata({ data: "json, name=uid" })
  uid?: string;
}
