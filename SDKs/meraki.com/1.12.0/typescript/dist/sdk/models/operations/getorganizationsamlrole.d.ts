import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetOrganizationSamlRolePathParams extends SpeakeasyBase {
    organizationId: string;
    samlRoleId: string;
}
export declare class GetOrganizationSamlRoleRequest extends SpeakeasyBase {
    pathParams: GetOrganizationSamlRolePathParams;
}
export declare class GetOrganizationSamlRoleResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getOrganizationSamlRole200ApplicationJsonObject?: Map<string, any>;
}
