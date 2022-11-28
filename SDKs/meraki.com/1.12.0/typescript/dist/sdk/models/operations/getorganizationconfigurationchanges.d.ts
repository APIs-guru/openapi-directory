import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetOrganizationConfigurationChangesPathParams extends SpeakeasyBase {
    organizationId: string;
}
export declare class GetOrganizationConfigurationChangesQueryParams extends SpeakeasyBase {
    adminId?: string;
    endingBefore?: string;
    networkId?: string;
    perPage?: number;
    startingAfter?: string;
    t0?: string;
    t1?: string;
    timespan?: number;
}
export declare class GetOrganizationConfigurationChangesRequest extends SpeakeasyBase {
    pathParams: GetOrganizationConfigurationChangesPathParams;
    queryParams: GetOrganizationConfigurationChangesQueryParams;
}
export declare class GetOrganizationConfigurationChangesResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
    getOrganizationConfigurationChanges200ApplicationJsonObject?: Map<string, any>;
}
