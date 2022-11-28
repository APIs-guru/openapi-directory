import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetOrganizationApplianceVpnStatsPathParams extends SpeakeasyBase {
    organizationId: string;
}
export declare class GetOrganizationApplianceVpnStatsQueryParams extends SpeakeasyBase {
    endingBefore?: string;
    networkIds?: string[];
    perPage?: number;
    startingAfter?: string;
    t0?: string;
    t1?: string;
    timespan?: number;
}
export declare class GetOrganizationApplianceVpnStatsRequest extends SpeakeasyBase {
    pathParams: GetOrganizationApplianceVpnStatsPathParams;
    queryParams: GetOrganizationApplianceVpnStatsQueryParams;
}
export declare class GetOrganizationApplianceVpnStatsResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
    getOrganizationApplianceVpnStats200ApplicationJsonObject?: Map<string, any>;
}
