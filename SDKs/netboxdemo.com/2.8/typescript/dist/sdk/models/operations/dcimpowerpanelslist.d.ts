import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DcimPowerPanelsListQueryParams extends SpeakeasyBase {
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
    rackGroupId?: string;
    rackGroupIdN?: string;
    region?: string;
    regionN?: string;
    regionId?: string;
    regionIdN?: string;
    site?: string;
    siteN?: string;
    siteId?: string;
    siteIdN?: string;
}
export declare class DcimPowerPanelsList200ApplicationJson extends SpeakeasyBase {
    count: number;
    next?: string;
    previous?: string;
    results: shared.PowerPanel[];
}
export declare class DcimPowerPanelsListRequest extends SpeakeasyBase {
    queryParams: DcimPowerPanelsListQueryParams;
}
export declare class DcimPowerPanelsListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    dcimPowerPanelsList200ApplicationJsonObject?: DcimPowerPanelsList200ApplicationJson;
}
