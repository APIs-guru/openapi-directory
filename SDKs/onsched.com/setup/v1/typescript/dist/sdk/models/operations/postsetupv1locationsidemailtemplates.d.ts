import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostSetupV1LocationsIdEmailTemplatesPathParams extends SpeakeasyBase {
    id: string;
}
export declare class PostSetupV1LocationsIdEmailTemplatesRequests extends SpeakeasyBase {
    emailTemplateInputModel?: Map<string, any>;
    emailTemplateInputModel1?: Map<string, any>;
    emailTemplateInputModel2?: Map<string, any>;
    emailTemplateInputModel3?: Map<string, any>;
}
export declare class PostSetupV1LocationsIdEmailTemplatesRequest extends SpeakeasyBase {
    pathParams: PostSetupV1LocationsIdEmailTemplatesPathParams;
    request?: PostSetupV1LocationsIdEmailTemplatesRequests;
}
export declare class PostSetupV1LocationsIdEmailTemplatesResponse extends SpeakeasyBase {
    contentResult?: shared.ContentResult;
    contentType: string;
    statusCode: number;
}
