import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetOrganizationSamlIdpPathParams extends SpeakeasyBase {
    idpId: string;
    organizationId: string;
}
export declare class GetOrganizationSamlIdpRequest extends SpeakeasyBase {
    pathParams: GetOrganizationSamlIdpPathParams;
}
export declare class GetOrganizationSamlIdpResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getOrganizationSamlIdp200ApplicationJsonObject?: Map<string, any>;
}
