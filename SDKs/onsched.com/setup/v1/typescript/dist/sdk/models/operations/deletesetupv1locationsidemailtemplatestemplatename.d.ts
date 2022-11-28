import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteSetupV1LocationsIdEmailTemplatesTemplateNamePathParams extends SpeakeasyBase {
    id: string;
    templateName: string;
}
export declare class DeleteSetupV1LocationsIdEmailTemplatesTemplateNameRequest extends SpeakeasyBase {
    pathParams: DeleteSetupV1LocationsIdEmailTemplatesTemplateNamePathParams;
}
export declare class DeleteSetupV1LocationsIdEmailTemplatesTemplateNameResponse extends SpeakeasyBase {
    contentResult?: shared.ContentResult;
    contentType: string;
    statusCode: number;
}
