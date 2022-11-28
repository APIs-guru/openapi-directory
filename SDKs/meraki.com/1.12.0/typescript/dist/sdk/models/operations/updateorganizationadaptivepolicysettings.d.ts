import { SpeakeasyBase } from "../../../internal/utils";
export declare class UpdateOrganizationAdaptivePolicySettingsPathParams extends SpeakeasyBase {
    organizationId: string;
}
export declare class UpdateOrganizationAdaptivePolicySettingsRequestBody extends SpeakeasyBase {
    enabledNetworks?: string[];
}
export declare class UpdateOrganizationAdaptivePolicySettingsRequest extends SpeakeasyBase {
    pathParams: UpdateOrganizationAdaptivePolicySettingsPathParams;
    request?: UpdateOrganizationAdaptivePolicySettingsRequestBody;
}
export declare class UpdateOrganizationAdaptivePolicySettingsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    updateOrganizationAdaptivePolicySettings200ApplicationJsonObject?: Map<string, any>;
}
