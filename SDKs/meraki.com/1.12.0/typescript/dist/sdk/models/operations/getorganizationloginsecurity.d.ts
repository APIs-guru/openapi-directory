import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetOrganizationLoginSecurityPathParams extends SpeakeasyBase {
    organizationId: string;
}
export declare class GetOrganizationLoginSecurityRequest extends SpeakeasyBase {
    pathParams: GetOrganizationLoginSecurityPathParams;
}
export declare class GetOrganizationLoginSecurityResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getOrganizationLoginSecurity200ApplicationJsonObject?: Map<string, any>;
}
