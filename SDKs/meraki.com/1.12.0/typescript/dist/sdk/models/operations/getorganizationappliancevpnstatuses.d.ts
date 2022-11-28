import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetOrganizationApplianceVpnStatusesPathParams extends SpeakeasyBase {
    organizationId: string;
}
export declare class GetOrganizationApplianceVpnStatusesQueryParams extends SpeakeasyBase {
    endingBefore?: string;
    networkIds?: string[];
    perPage?: number;
    startingAfter?: string;
}
export declare class GetOrganizationApplianceVpnStatusesRequest extends SpeakeasyBase {
    pathParams: GetOrganizationApplianceVpnStatusesPathParams;
    queryParams: GetOrganizationApplianceVpnStatusesQueryParams;
}
export declare class GetOrganizationApplianceVpnStatusesResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
    getOrganizationApplianceVpnStatuses200ApplicationJsonObject?: Map<string, any>;
}
