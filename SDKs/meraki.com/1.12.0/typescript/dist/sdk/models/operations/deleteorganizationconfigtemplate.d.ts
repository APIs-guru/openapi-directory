import { SpeakeasyBase } from "../../../internal/utils";
export declare class DeleteOrganizationConfigTemplatePathParams extends SpeakeasyBase {
    configTemplateId: string;
    organizationId: string;
}
export declare class DeleteOrganizationConfigTemplateRequest extends SpeakeasyBase {
    pathParams: DeleteOrganizationConfigTemplatePathParams;
}
export declare class DeleteOrganizationConfigTemplateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
