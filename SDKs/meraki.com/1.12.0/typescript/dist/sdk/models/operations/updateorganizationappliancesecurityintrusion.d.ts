import { SpeakeasyBase } from "../../../internal/utils";
export declare class UpdateOrganizationApplianceSecurityIntrusionPathParams extends SpeakeasyBase {
    organizationId: string;
}
export declare class UpdateOrganizationApplianceSecurityIntrusionRequestBodyAllowedRules extends SpeakeasyBase {
    message?: string;
    ruleId: string;
}
export declare class UpdateOrganizationApplianceSecurityIntrusionRequestBody extends SpeakeasyBase {
    allowedRules: UpdateOrganizationApplianceSecurityIntrusionRequestBodyAllowedRules[];
}
export declare class UpdateOrganizationApplianceSecurityIntrusionRequest extends SpeakeasyBase {
    pathParams: UpdateOrganizationApplianceSecurityIntrusionPathParams;
    request: UpdateOrganizationApplianceSecurityIntrusionRequestBody;
}
export declare class UpdateOrganizationApplianceSecurityIntrusionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    updateOrganizationApplianceSecurityIntrusion200ApplicationJsonObject?: Map<string, any>;
}
