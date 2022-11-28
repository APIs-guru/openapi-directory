import { SpeakeasyBase } from "../../../internal/utils";
export declare enum DeleteTypeEnum {
    TypeUnspecified = "TYPE_UNSPECIFIED",
    Trash = "TRASH",
    PermanentDelete = "PERMANENT_DELETE"
}
/**
 * An object was deleted.
**/
export declare class Delete extends SpeakeasyBase {
    type?: DeleteTypeEnum;
}
