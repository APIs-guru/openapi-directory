import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetSetupV1CompaniesEmailTemplatesTemplateNamePathParams extends SpeakeasyBase {
    templateName: string;
}
export declare class GetSetupV1CompaniesEmailTemplatesTemplateNameRequest extends SpeakeasyBase {
    pathParams: GetSetupV1CompaniesEmailTemplatesTemplateNamePathParams;
}
export declare class GetSetupV1CompaniesEmailTemplatesTemplateNameResponse extends SpeakeasyBase {
    contentResult?: shared.ContentResult;
    contentType: string;
    statusCode: number;
}
