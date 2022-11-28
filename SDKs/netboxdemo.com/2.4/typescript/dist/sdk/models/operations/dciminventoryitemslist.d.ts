import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DcimInventoryItemsListQueryParams extends SpeakeasyBase {
    assetTag?: string;
    device?: string;
    deviceId?: string;
    discovered?: string;
    limit?: number;
    manufacturer?: string;
    manufacturerId?: string;
    name?: string;
    offset?: number;
    parentId?: string;
    partId?: string;
    q?: string;
    serial?: string;
    tag?: string;
}
export declare class DcimInventoryItemsList200ApplicationJson extends SpeakeasyBase {
    count: number;
    next?: string;
    previous?: string;
    results: shared.InventoryItem[];
}
export declare class DcimInventoryItemsListRequest extends SpeakeasyBase {
    queryParams: DcimInventoryItemsListQueryParams;
}
export declare class DcimInventoryItemsListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    dcimInventoryItemsList200ApplicationJsonObject?: DcimInventoryItemsList200ApplicationJson;
}
