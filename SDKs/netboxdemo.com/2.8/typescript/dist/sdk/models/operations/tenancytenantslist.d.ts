import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TenancyTenantsListQueryParams extends SpeakeasyBase {
    created?: string;
    createdGte?: string;
    createdLte?: string;
    group?: string;
    groupN?: string;
    groupId?: string;
    groupIdN?: string;
    id?: string;
    idGt?: string;
    idGte?: string;
    idLt?: string;
    idLte?: string;
    idN?: string;
    lastUpdated?: string;
    lastUpdatedGte?: string;
    lastUpdatedLte?: string;
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
    slug?: string;
    slugIc?: string;
    slugIe?: string;
    slugIew?: string;
    slugIsw?: string;
    slugN?: string;
    slugNic?: string;
    slugNie?: string;
    slugNiew?: string;
    slugNisw?: string;
    tag?: string;
    tagN?: string;
}
export declare class TenancyTenantsList200ApplicationJson extends SpeakeasyBase {
    count: number;
    next?: string;
    previous?: string;
    results: shared.Tenant[];
}
export declare class TenancyTenantsListRequest extends SpeakeasyBase {
    queryParams: TenancyTenantsListQueryParams;
}
export declare class TenancyTenantsListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    tenancyTenantsList200ApplicationJsonObject?: TenancyTenantsList200ApplicationJson;
}
