import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostJsappsJsonQueryParams extends SpeakeasyBase {
    authtoken: string;
    login: string;
}
export declare class PostJsappsJsonRequest extends SpeakeasyBase {
    queryParams: PostJsappsJsonQueryParams;
    request: shared.JsAppEdit;
}
export declare class PostJsappsJsonResponse extends SpeakeasyBase {
    contentType: string;
    jsApp?: shared.JsApp;
    statusCode: number;
}
