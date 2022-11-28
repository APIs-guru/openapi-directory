import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetOrganizationOpenapiSpecPathParams extends SpeakeasyBase {
    organizationId: string;
}
export declare class GetOrganizationOpenapiSpecRequest extends SpeakeasyBase {
    pathParams: GetOrganizationOpenapiSpecPathParams;
}
export declare class GetOrganizationOpenapiSpecResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getOrganizationOpenapiSpec200ApplicationJsonObject?: Map<string, any>;
}
