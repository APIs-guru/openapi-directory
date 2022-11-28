import { SpeakeasyBase } from "../../../internal/utils";
export declare class UpdateOrganizationSamlIdpPathParams extends SpeakeasyBase {
    idpId: string;
    organizationId: string;
}
export declare class UpdateOrganizationSamlIdpRequestBody extends SpeakeasyBase {
    sloLogoutUrl?: string;
    x509certSha1Fingerprint?: string;
}
export declare class UpdateOrganizationSamlIdpRequest extends SpeakeasyBase {
    pathParams: UpdateOrganizationSamlIdpPathParams;
    request?: UpdateOrganizationSamlIdpRequestBody;
}
export declare class UpdateOrganizationSamlIdpResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    updateOrganizationSamlIdp200ApplicationJsonObject?: Map<string, any>;
}
