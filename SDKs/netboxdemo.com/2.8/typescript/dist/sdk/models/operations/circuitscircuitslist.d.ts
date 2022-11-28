import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CircuitsCircuitsListQueryParams extends SpeakeasyBase {
    cid?: string;
    cidIc?: string;
    cidIe?: string;
    cidIew?: string;
    cidIsw?: string;
    cidN?: string;
    cidNic?: string;
    cidNie?: string;
    cidNiew?: string;
    cidNisw?: string;
    commitRate?: string;
    commitRateGt?: string;
    commitRateGte?: string;
    commitRateLt?: string;
    commitRateLte?: string;
    commitRateN?: string;
    created?: string;
    createdGte?: string;
    createdLte?: string;
    id?: string;
    idGt?: string;
    idGte?: string;
    idLt?: string;
    idLte?: string;
    idN?: string;
    installDate?: string;
    installDateGt?: string;
    installDateGte?: string;
    installDateLt?: string;
    installDateLte?: string;
    installDateN?: string;
    lastUpdated?: string;
    lastUpdatedGte?: string;
    lastUpdatedLte?: string;
    limit?: number;
    offset?: number;
    provider?: string;
    providerN?: string;
    providerId?: string;
    providerIdN?: string;
    q?: string;
    region?: string;
    regionN?: string;
    regionId?: string;
    regionIdN?: string;
    site?: string;
    siteN?: string;
    siteId?: string;
    siteIdN?: string;
    status?: string;
    statusN?: string;
    tag?: string;
    tagN?: string;
    tenant?: string;
    tenantN?: string;
    tenantGroup?: string;
    tenantGroupN?: string;
    tenantGroupId?: string;
    tenantGroupIdN?: string;
    tenantId?: string;
    tenantIdN?: string;
    type?: string;
    typeN?: string;
    typeId?: string;
    typeIdN?: string;
}
export declare class CircuitsCircuitsList200ApplicationJson extends SpeakeasyBase {
    count: number;
    next?: string;
    previous?: string;
    results: shared.Circuit[];
}
export declare class CircuitsCircuitsListRequest extends SpeakeasyBase {
    queryParams: CircuitsCircuitsListQueryParams;
}
export declare class CircuitsCircuitsListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    circuitsCircuitsList200ApplicationJsonObject?: CircuitsCircuitsList200ApplicationJson;
}
