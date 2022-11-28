import { SpeakeasyBase } from "../../../internal/utils";
import { Cursor } from "./cursor";
/**
 * Request for CommitCursor.
**/
export declare class CommitCursorRequest extends SpeakeasyBase {
    cursor?: Cursor;
    partition?: string;
}
