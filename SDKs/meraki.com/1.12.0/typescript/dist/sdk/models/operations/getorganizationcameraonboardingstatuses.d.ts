import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetOrganizationCameraOnboardingStatusesPathParams extends SpeakeasyBase {
    organizationId: string;
}
export declare class GetOrganizationCameraOnboardingStatusesQueryParams extends SpeakeasyBase {
    networkIds?: string[];
    serials?: string[];
}
export declare class GetOrganizationCameraOnboardingStatusesRequest extends SpeakeasyBase {
    pathParams: GetOrganizationCameraOnboardingStatusesPathParams;
    queryParams: GetOrganizationCameraOnboardingStatusesQueryParams;
}
export declare class GetOrganizationCameraOnboardingStatusesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getOrganizationCameraOnboardingStatuses200ApplicationJsonObject?: Map<string, any>;
}
