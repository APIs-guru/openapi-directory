import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetOrganizationSamlRolesPathParams extends SpeakeasyBase {
    organizationId: string;
}
export declare class GetOrganizationSamlRolesRequest extends SpeakeasyBase {
    pathParams: GetOrganizationSamlRolesPathParams;
}
export declare class GetOrganizationSamlRolesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getOrganizationSamlRoles200ApplicationJsonObject?: Map<string, any>;
}
