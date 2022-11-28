import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DcimDeviceBaysListQueryParams extends SpeakeasyBase {
    description?: string;
    descriptionIc?: string;
    descriptionIe?: string;
    descriptionIew?: string;
    descriptionIsw?: string;
    descriptionN?: string;
    descriptionNic?: string;
    descriptionNie?: string;
    descriptionNiew?: string;
    descriptionNisw?: string;
    device?: string;
    deviceN?: string;
    deviceId?: string;
    deviceIdN?: string;
    id?: string;
    idGt?: string;
    idGte?: string;
    idLt?: string;
    idLte?: string;
    idN?: string;
    limit?: number;
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
    q?: string;
    region?: string;
    regionN?: string;
    regionId?: string;
    regionIdN?: string;
    site?: string;
    siteN?: string;
    siteId?: string;
    siteIdN?: string;
    tag?: string;
    tagN?: string;
}
export declare class DcimDeviceBaysList200ApplicationJson extends SpeakeasyBase {
    count: number;
    next?: string;
    previous?: string;
    results: shared.DeviceBay[];
}
export declare class DcimDeviceBaysListRequest extends SpeakeasyBase {
    queryParams: DcimDeviceBaysListQueryParams;
}
export declare class DcimDeviceBaysListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    dcimDeviceBaysList200ApplicationJsonObject?: DcimDeviceBaysList200ApplicationJson;
}
