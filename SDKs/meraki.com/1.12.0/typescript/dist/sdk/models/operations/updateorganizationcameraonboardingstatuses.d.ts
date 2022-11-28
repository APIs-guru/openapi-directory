import { SpeakeasyBase } from "../../../internal/utils";
export declare class UpdateOrganizationCameraOnboardingStatusesPathParams extends SpeakeasyBase {
    organizationId: string;
}
export declare class UpdateOrganizationCameraOnboardingStatusesRequestBody extends SpeakeasyBase {
    serial?: string;
    wirelessCredentialsSent?: boolean;
}
export declare class UpdateOrganizationCameraOnboardingStatusesRequest extends SpeakeasyBase {
    pathParams: UpdateOrganizationCameraOnboardingStatusesPathParams;
    request?: UpdateOrganizationCameraOnboardingStatusesRequestBody;
}
export declare class UpdateOrganizationCameraOnboardingStatusesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    updateOrganizationCameraOnboardingStatuses200ApplicationJsonObject?: Map<string, any>;
}
