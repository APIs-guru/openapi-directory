import { SpeakeasyBase } from "../../../internal/utils";
export declare class GetOrganizationConfigTemplatesPathParams extends SpeakeasyBase {
    organizationId: string;
}
export declare class GetOrganizationConfigTemplatesRequest extends SpeakeasyBase {
    pathParams: GetOrganizationConfigTemplatesPathParams;
}
export declare class GetOrganizationConfigTemplatesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getOrganizationConfigTemplates200ApplicationJsonObject?: Map<string, any>;
}
