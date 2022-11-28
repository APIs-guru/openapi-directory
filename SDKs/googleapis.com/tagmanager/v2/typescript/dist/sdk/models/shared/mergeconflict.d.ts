import { SpeakeasyBase } from "../../../internal/utils";
import { Entity } from "./entity";
/**
 * Represents a merge conflict.
**/
export declare class MergeConflict extends SpeakeasyBase {
    entityInBaseVersion?: Entity;
    entityInWorkspace?: Entity;
}
