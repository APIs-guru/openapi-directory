import { SpeakeasyBase } from "../../../internal/utils";
import { Key } from "./key";
/**
 * The result of applying a mutation.
**/
export declare class MutationResult extends SpeakeasyBase {
    conflictDetected?: boolean;
    key?: Key;
    updateTime?: string;
    version?: string;
}
