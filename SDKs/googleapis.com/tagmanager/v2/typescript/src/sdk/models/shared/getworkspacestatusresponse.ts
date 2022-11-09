import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { MergeConflict } from "./mergeconflict";
import { Entity } from "./entity";


// GetWorkspaceStatusResponse
/** 
 * The changes that have occurred in the workspace since the base container version.
**/
export class GetWorkspaceStatusResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=mergeConflict", elemType: shared.MergeConflict })
  mergeConflict?: MergeConflict[];

  @Metadata({ data: "json, name=workspaceChange", elemType: shared.Entity })
  workspaceChange?: Entity[];
}
