import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetJsappsCodeJsonPathParams extends SpeakeasyBase {
    code: string;
}
export declare class GetJsappsCodeJsonQueryParams extends SpeakeasyBase {
    authtoken: string;
    login: string;
}
export declare class GetJsappsCodeJsonRequest extends SpeakeasyBase {
    pathParams: GetJsappsCodeJsonPathParams;
    queryParams: GetJsappsCodeJsonQueryParams;
}
export declare class GetJsappsCodeJsonResponse extends SpeakeasyBase {
    contentType: string;
    jsApp?: shared.JsApp;
    statusCode: number;
}
