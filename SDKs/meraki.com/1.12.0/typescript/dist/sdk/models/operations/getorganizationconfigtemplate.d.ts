import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetOrganizationConfigTemplatePathParams extends SpeakeasyBase {
    configTemplateId: string;
    organizationId: string;
}
export declare class GetOrganizationConfigTemplateRequest extends SpeakeasyBase {
    pathParams: GetOrganizationConfigTemplatePathParams;
}
export declare class GetOrganizationConfigTemplateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getOrganizationConfigTemplate200ApplicationJsonObject?: Map<string, any>;
}
