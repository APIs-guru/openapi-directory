import { SpeakeasyBase } from "../../../internal/utils";
export declare class CreateOrganizationSamlIdpPathParams extends SpeakeasyBase {
    organizationId: string;
}
export declare class CreateOrganizationSamlIdpRequestBody extends SpeakeasyBase {
    sloLogoutUrl?: string;
    x509certSha1Fingerprint: string;
}
export declare class CreateOrganizationSamlIdpRequest extends SpeakeasyBase {
    pathParams: CreateOrganizationSamlIdpPathParams;
    request: CreateOrganizationSamlIdpRequestBody;
}
export declare class CreateOrganizationSamlIdpResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    createOrganizationSamlIdp201ApplicationJsonObject?: Map<string, any>;
}
