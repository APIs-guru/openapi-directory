import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetOrganizationAdaptivePolicySettingsPathParams extends SpeakeasyBase {
    organizationId: string;
}
export declare class GetOrganizationAdaptivePolicySettingsRequest extends SpeakeasyBase {
    pathParams: GetOrganizationAdaptivePolicySettingsPathParams;
}
export declare class GetOrganizationAdaptivePolicySettingsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getOrganizationAdaptivePolicySettings200ApplicationJsonObject?: Map<string, any>;
}
