import { SpeakeasyBase } from "../../../internal/utils";
export declare enum ItemCountByStatusStatusCodeEnum {
    CodeUnspecified = "CODE_UNSPECIFIED",
    Error = "ERROR",
    Modified = "MODIFIED",
    NewItem = "NEW_ITEM",
    Accepted = "ACCEPTED"
}
export declare class ItemCountByStatus extends SpeakeasyBase {
    count?: string;
    indexedItemsCount?: string;
    statusCode?: ItemCountByStatusStatusCodeEnum;
}
