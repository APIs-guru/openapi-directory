import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DcimInventoryItemsCreateRequest extends SpeakeasyBase {
    request: shared.WritableInventoryItemInput;
}
export declare class DcimInventoryItemsCreateResponse extends SpeakeasyBase {
    contentType: string;
    inventoryItem?: shared.InventoryItem;
    statusCode: number;
}
