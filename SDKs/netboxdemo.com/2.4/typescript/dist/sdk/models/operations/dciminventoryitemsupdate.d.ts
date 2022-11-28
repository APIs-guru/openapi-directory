import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DcimInventoryItemsUpdatePathParams extends SpeakeasyBase {
    id: number;
}
export declare class DcimInventoryItemsUpdateRequest extends SpeakeasyBase {
    pathParams: DcimInventoryItemsUpdatePathParams;
    request: shared.WritableInventoryItemInput;
}
export declare class DcimInventoryItemsUpdateResponse extends SpeakeasyBase {
    contentType: string;
    inventoryItem?: shared.InventoryItem;
    statusCode: number;
}
