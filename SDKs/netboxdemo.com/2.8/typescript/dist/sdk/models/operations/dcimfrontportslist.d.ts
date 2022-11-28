import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DcimFrontPortsListQueryParams extends SpeakeasyBase {
    cabled?: string;
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
    type?: string;
    typeN?: string;
}
export declare class DcimFrontPortsList200ApplicationJson extends SpeakeasyBase {
    count: number;
    next?: string;
    previous?: string;
    results: shared.FrontPort[];
}
export declare class DcimFrontPortsListRequest extends SpeakeasyBase {
    queryParams: DcimFrontPortsListQueryParams;
}
export declare class DcimFrontPortsListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    dcimFrontPortsList200ApplicationJsonObject?: DcimFrontPortsList200ApplicationJson;
}
