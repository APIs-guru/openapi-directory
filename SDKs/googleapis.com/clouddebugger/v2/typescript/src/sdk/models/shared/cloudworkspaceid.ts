import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RepoId } from "./repoid";



// CloudWorkspaceId
/** 
 * A CloudWorkspaceId is a unique identifier for a cloud workspace. A cloud workspace is a place associated with a repo where modified files can be stored before they are committed.
**/
export class CloudWorkspaceId extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=repoId" })
  repoId?: RepoId;
}
