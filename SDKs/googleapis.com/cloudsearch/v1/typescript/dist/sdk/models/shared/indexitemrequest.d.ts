import { SpeakeasyBase } from "../../../internal/utils";
import { DebugOptions } from "./debugoptions";
import { IndexItemOptions } from "./indexitemoptions";
import { Item } from "./item";
export declare enum IndexItemRequestModeEnum {
    Unspecified = "UNSPECIFIED",
    Synchronous = "SYNCHRONOUS",
    Asynchronous = "ASYNCHRONOUS"
}
export declare class IndexItemRequest extends SpeakeasyBase {
    connectorName?: string;
    debugOptions?: DebugOptions;
    indexItemOptions?: IndexItemOptions;
    item?: Item;
    mode?: IndexItemRequestModeEnum;
}
