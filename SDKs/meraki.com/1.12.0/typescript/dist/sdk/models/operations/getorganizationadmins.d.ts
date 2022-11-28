import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetOrganizationAdminsPathParams extends SpeakeasyBase {
    organizationId: string;
}
export declare class GetOrganizationAdminsRequest extends SpeakeasyBase {
    pathParams: GetOrganizationAdminsPathParams;
}
export declare class GetOrganizationAdminsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getOrganizationAdmins200ApplicationJsonObject?: Map<string, any>;
}
