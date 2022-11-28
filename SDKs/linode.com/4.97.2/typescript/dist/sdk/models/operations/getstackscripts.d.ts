import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetStackScriptsQueryParams extends SpeakeasyBase {
    page?: number;
    pageSize?: number;
}
export declare class GetStackScriptsSecurity extends SpeakeasyBase {
    personalAccessToken?: shared.SchemePersonalAccessToken;
    oauth?: shared.SchemeOauth;
}
export declare class GetStackScripts200ApplicationJson extends SpeakeasyBase {
    data?: shared.StackScript[];
    page?: number;
    pages?: number;
    results?: number;
}
export declare class GetStackScriptsDefaultApplicationJson extends SpeakeasyBase {
    errors?: shared.ErrorObject[];
}
export declare class GetStackScriptsRequest extends SpeakeasyBase {
    queryParams: GetStackScriptsQueryParams;
    security: GetStackScriptsSecurity;
}
export declare class GetStackScriptsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getStackScripts200ApplicationJsonObject?: GetStackScripts200ApplicationJson;
    getStackScriptsDefaultApplicationJsonObject?: GetStackScriptsDefaultApplicationJson;
}
