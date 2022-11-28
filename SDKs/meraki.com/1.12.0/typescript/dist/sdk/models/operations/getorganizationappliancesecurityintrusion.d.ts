import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetOrganizationApplianceSecurityIntrusionPathParams extends SpeakeasyBase {
    organizationId: string;
}
export declare class GetOrganizationApplianceSecurityIntrusionRequest extends SpeakeasyBase {
    pathParams: GetOrganizationApplianceSecurityIntrusionPathParams;
}
export declare class GetOrganizationApplianceSecurityIntrusionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getOrganizationApplianceSecurityIntrusion200ApplicationJsonObject?: Map<string, any>;
}
