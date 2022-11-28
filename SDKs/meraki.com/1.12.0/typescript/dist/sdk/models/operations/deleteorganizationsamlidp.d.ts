import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeleteOrganizationSamlIdpPathParams extends SpeakeasyBase {
    idpId: string;
    organizationId: string;
}
export declare class DeleteOrganizationSamlIdpRequest extends SpeakeasyBase {
    pathParams: DeleteOrganizationSamlIdpPathParams;
}
export declare class DeleteOrganizationSamlIdpResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
