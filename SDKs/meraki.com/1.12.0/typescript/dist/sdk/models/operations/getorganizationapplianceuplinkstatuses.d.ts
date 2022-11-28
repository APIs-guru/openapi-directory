import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetOrganizationApplianceUplinkStatusesPathParams extends SpeakeasyBase {
    organizationId: string;
}
export declare class GetOrganizationApplianceUplinkStatusesQueryParams extends SpeakeasyBase {
    endingBefore?: string;
    iccids?: string[];
    networkIds?: string[];
    perPage?: number;
    serials?: string[];
    startingAfter?: string;
}
export declare class GetOrganizationApplianceUplinkStatusesRequest extends SpeakeasyBase {
    pathParams: GetOrganizationApplianceUplinkStatusesPathParams;
    queryParams: GetOrganizationApplianceUplinkStatusesQueryParams;
}
export declare class GetOrganizationApplianceUplinkStatusesResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
    getOrganizationApplianceUplinkStatuses200ApplicationJsonObject?: Map<string, any>;
}
