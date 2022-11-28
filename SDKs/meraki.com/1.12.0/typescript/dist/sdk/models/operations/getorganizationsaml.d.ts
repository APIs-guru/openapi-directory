import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetOrganizationSamlPathParams extends SpeakeasyBase {
    organizationId: string;
}
export declare class GetOrganizationSamlRequest extends SpeakeasyBase {
    pathParams: GetOrganizationSamlPathParams;
}
export declare class GetOrganizationSamlResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getOrganizationSaml200ApplicationJsonObject?: Map<string, any>;
}
