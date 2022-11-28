import { SpeakeasyBase } from "../../../internal/utils";
import { KeySet } from "./keyset";
/**
 * Arguments to delete operations.
**/
export declare class Delete extends SpeakeasyBase {
    keySet?: KeySet;
    table?: string;
}
