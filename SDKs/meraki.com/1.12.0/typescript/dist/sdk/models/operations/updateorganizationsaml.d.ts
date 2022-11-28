import { SpeakeasyBase } from "../../../internal/utils";
export declare class UpdateOrganizationSamlPathParams extends SpeakeasyBase {
    organizationId: string;
}
export declare class UpdateOrganizationSamlRequestBody extends SpeakeasyBase {
    enabled?: boolean;
}
export declare class UpdateOrganizationSamlRequest extends SpeakeasyBase {
    pathParams: UpdateOrganizationSamlPathParams;
    request?: UpdateOrganizationSamlRequestBody;
}
export declare class UpdateOrganizationSamlResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    updateOrganizationSaml200ApplicationJsonObject?: Map<string, any>;
}
