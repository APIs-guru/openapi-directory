import { SpeakeasyBase } from "../../../internal/utils";
import { DebugOptions } from "./debugoptions";
import { PushItem } from "./pushitem";
export declare class PushItemRequest extends SpeakeasyBase {
    connectorName?: string;
    debugOptions?: DebugOptions;
    item?: PushItem;
}
