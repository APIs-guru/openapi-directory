import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetOrganizationLicensesPathParams extends SpeakeasyBase {
    organizationId: string;
}
export declare enum GetOrganizationLicensesStateEnum {
    Active = "active",
    Expired = "expired",
    Expiring = "expiring",
    Unused = "unused",
    UnusedActive = "unusedActive",
    RecentlyQueued = "recentlyQueued"
}
export declare class GetOrganizationLicensesQueryParams extends SpeakeasyBase {
    deviceSerial?: string;
    endingBefore?: string;
    networkId?: string;
    perPage?: number;
    startingAfter?: string;
    state?: GetOrganizationLicensesStateEnum;
}
export declare class GetOrganizationLicensesRequest extends SpeakeasyBase {
    pathParams: GetOrganizationLicensesPathParams;
    queryParams: GetOrganizationLicensesQueryParams;
}
export declare class GetOrganizationLicensesResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
    getOrganizationLicenses200ApplicationJsonObject?: Map<string, any>;
}
