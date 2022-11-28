import { SpeakeasyBase } from "../../../internal/utils";
export declare class UpdateOrganizationPathParams extends SpeakeasyBase {
    organizationId: string;
}
/**
 * API-specific settings
**/
export declare class UpdateOrganizationRequestBodyApi extends SpeakeasyBase {
    enabled?: boolean;
}
export declare class UpdateOrganizationRequestBody extends SpeakeasyBase {
    api?: UpdateOrganizationRequestBodyApi;
    name?: string;
}
export declare class UpdateOrganizationRequest extends SpeakeasyBase {
    pathParams: UpdateOrganizationPathParams;
    request?: UpdateOrganizationRequestBody;
}
export declare class UpdateOrganizationResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    updateOrganization200ApplicationJsonObject?: Map<string, any>;
}
