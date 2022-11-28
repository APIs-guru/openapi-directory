import { SpeakeasyBase } from "../../../internal/utils";
export declare class CreateOrganizationConfigTemplatePathParams extends SpeakeasyBase {
    organizationId: string;
}
export declare class CreateOrganizationConfigTemplateRequestBody extends SpeakeasyBase {
    copyFromNetworkId?: string;
    name: string;
    timeZone?: string;
}
export declare class CreateOrganizationConfigTemplateRequest extends SpeakeasyBase {
    pathParams: CreateOrganizationConfigTemplatePathParams;
    request: CreateOrganizationConfigTemplateRequestBody;
}
export declare class CreateOrganizationConfigTemplateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    createOrganizationConfigTemplate201ApplicationJsonObject?: Map<string, any>;
}
