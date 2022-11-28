import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DcimRacksListQueryParams extends SpeakeasyBase {
    descUnits?: string;
    facilityId?: string;
    group?: string;
    groupId?: string;
    idIn?: string;
    limit?: number;
    name?: string;
    offset?: number;
    q?: string;
    role?: string;
    roleId?: string;
    serial?: string;
    site?: string;
    siteId?: string;
    tag?: string;
    tenant?: string;
    tenantId?: string;
    type?: string;
    uHeight?: number;
    width?: string;
}
export declare class DcimRacksList200ApplicationJson extends SpeakeasyBase {
    count: number;
    next?: string;
    previous?: string;
    results: shared.Rack[];
}
export declare class DcimRacksListRequest extends SpeakeasyBase {
    queryParams: DcimRacksListQueryParams;
}
export declare class DcimRacksListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    dcimRacksList200ApplicationJsonObject?: DcimRacksList200ApplicationJson;
}
