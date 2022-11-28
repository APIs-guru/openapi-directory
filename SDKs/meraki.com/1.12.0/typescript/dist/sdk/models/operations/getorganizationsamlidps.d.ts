import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetOrganizationSamlIdpsPathParams extends SpeakeasyBase {
    organizationId: string;
}
export declare class GetOrganizationSamlIdpsRequest extends SpeakeasyBase {
    pathParams: GetOrganizationSamlIdpsPathParams;
}
export declare class GetOrganizationSamlIdpsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getOrganizationSamlIdps200ApplicationJsonObject?: Map<string, any>;
}
