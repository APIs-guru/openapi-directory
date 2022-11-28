import { SpeakeasyBase } from "../../../internal/utils";
import { MergeConflict } from "./mergeconflict";
import { Entity } from "./entity";
/**
 * The changes that have occurred in the workspace since the base container version.
**/
export declare class GetWorkspaceStatusResponse extends SpeakeasyBase {
    mergeConflict?: MergeConflict[];
    workspaceChange?: Entity[];
}
