import { SpeakeasyBase } from "../../../internal/utils";
import { Document } from "./document";
/**
 * A Document has changed. May be the result of multiple writes, including deletes, that ultimately resulted in a new value for the Document. Multiple DocumentChange messages may be returned for the same logical change, if multiple targets are affected.
**/
export declare class DocumentChange extends SpeakeasyBase {
    document?: Document;
    removedTargetIds?: number[];
    targetIds?: number[];
}
