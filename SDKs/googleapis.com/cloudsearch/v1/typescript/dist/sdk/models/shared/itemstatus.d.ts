import { SpeakeasyBase } from "../../../internal/utils";
import { ProcessingError } from "./processingerror";
import { RepositoryError } from "./repositoryerror";
export declare enum ItemStatusCodeEnum {
    CodeUnspecified = "CODE_UNSPECIFIED",
    Error = "ERROR",
    Modified = "MODIFIED",
    NewItem = "NEW_ITEM",
    Accepted = "ACCEPTED"
}
/**
 * This contains item's status and any errors.
**/
export declare class ItemStatus extends SpeakeasyBase {
    code?: ItemStatusCodeEnum;
    processingErrors?: ProcessingError[];
    repositoryErrors?: RepositoryError[];
}
