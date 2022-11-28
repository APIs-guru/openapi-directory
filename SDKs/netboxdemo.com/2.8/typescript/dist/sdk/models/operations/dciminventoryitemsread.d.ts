import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DcimInventoryItemsReadPathParams extends SpeakeasyBase {
    id: number;
}
export declare class DcimInventoryItemsReadRequest extends SpeakeasyBase {
    pathParams: DcimInventoryItemsReadPathParams;
}
export declare class DcimInventoryItemsReadResponse extends SpeakeasyBase {
    contentType: string;
    inventoryItem?: shared.InventoryItem;
    statusCode: number;
}
