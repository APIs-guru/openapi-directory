import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DcimInventoryItemsListQueryParams extends SpeakeasyBase {
    assetTag?: string;
    assetTagIc?: string;
    assetTagIe?: string;
    assetTagIew?: string;
    assetTagIsw?: string;
    assetTagN?: string;
    assetTagNic?: string;
    assetTagNie?: string;
    assetTagNiew?: string;
    assetTagNisw?: string;
    device?: string;
    deviceN?: string;
    deviceId?: string;
    deviceIdN?: string;
    discovered?: string;
    id?: string;
    idGt?: string;
    idGte?: string;
    idLt?: string;
    idLte?: string;
    idN?: string;
    limit?: number;
    manufacturer?: string;
    manufacturerN?: string;
    manufacturerId?: string;
    manufacturerIdN?: string;
    name?: string;
    nameIc?: string;
    nameIe?: string;
    nameIew?: string;
    nameIsw?: string;
    nameN?: string;
    nameNic?: string;
    nameNie?: string;
    nameNiew?: string;
    nameNisw?: string;
    offset?: number;
    parentId?: string;
    parentIdN?: string;
    partId?: string;
    partIdIc?: string;
    partIdIe?: string;
    partIdIew?: string;
    partIdIsw?: string;
    partIdN?: string;
    partIdNic?: string;
    partIdNie?: string;
    partIdNiew?: string;
    partIdNisw?: string;
    q?: string;
    region?: string;
    regionN?: string;
    regionId?: string;
    regionIdN?: string;
    serial?: string;
    site?: string;
    siteN?: string;
    siteId?: string;
    siteIdN?: string;
    tag?: string;
    tagN?: string;
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
