import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { MergeConflict } from "./mergeconflict";
import { Entity } from "./entity";



// GetWorkspaceStatusResponse
/** 
 * The changes that have occurred in the workspace since the base container version.
**/
export class GetWorkspaceStatusResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=mergeConflict", elemType: MergeConflict })
  mergeConflict?: MergeConflict[];

  @SpeakeasyMetadata({ data: "json, name=workspaceChange", elemType: Entity })
  workspaceChange?: Entity[];
}
