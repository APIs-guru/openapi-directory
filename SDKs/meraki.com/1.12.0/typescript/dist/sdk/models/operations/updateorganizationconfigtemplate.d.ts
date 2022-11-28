import { SpeakeasyBase } from "../../../internal/utils";
export declare class UpdateOrganizationConfigTemplatePathParams extends SpeakeasyBase {
    configTemplateId: string;
    organizationId: string;
}
export declare class UpdateOrganizationConfigTemplateRequestBody extends SpeakeasyBase {
    name?: string;
    timeZone?: string;
}
export declare class UpdateOrganizationConfigTemplateRequest extends SpeakeasyBase {
    pathParams: UpdateOrganizationConfigTemplatePathParams;
    request?: UpdateOrganizationConfigTemplateRequestBody;
}
export declare class UpdateOrganizationConfigTemplateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    updateOrganizationConfigTemplate200ApplicationJsonObject?: Map<string, any>;
}
