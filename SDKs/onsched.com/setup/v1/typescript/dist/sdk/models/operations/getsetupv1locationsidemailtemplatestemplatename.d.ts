import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetSetupV1LocationsIdEmailTemplatesTemplateNamePathParams extends SpeakeasyBase {
    id: string;
    templateName: string;
}
export declare class GetSetupV1LocationsIdEmailTemplatesTemplateNameRequest extends SpeakeasyBase {
    pathParams: GetSetupV1LocationsIdEmailTemplatesTemplateNamePathParams;
}
export declare class GetSetupV1LocationsIdEmailTemplatesTemplateNameResponse extends SpeakeasyBase {
    contentResult?: shared.ContentResult;
    contentType: string;
    statusCode: number;
}
