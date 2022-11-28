import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetJsappsJsonQueryParams extends SpeakeasyBase {
    authtoken: string;
    login: string;
}
export declare class GetJsappsJsonRequest extends SpeakeasyBase {
    queryParams: GetJsappsJsonQueryParams;
}
export declare class GetJsappsJsonResponse extends SpeakeasyBase {
    app?: shared.App;
    contentType: string;
    statusCode: number;
}
