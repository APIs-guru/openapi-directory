import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DcimInventoryItemsPartialUpdatePathParams extends SpeakeasyBase {
    id: number;
}
export declare class DcimInventoryItemsPartialUpdateRequest extends SpeakeasyBase {
    pathParams: DcimInventoryItemsPartialUpdatePathParams;
    request: shared.WritableInventoryItemInput;
}
export declare class DcimInventoryItemsPartialUpdateResponse extends SpeakeasyBase {
    contentType: string;
    inventoryItem?: shared.InventoryItem;
    statusCode: number;
}
