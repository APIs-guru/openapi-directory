import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetStackScriptPathParams extends SpeakeasyBase {
    stackscriptId: string;
}
export declare class GetStackScriptSecurity extends SpeakeasyBase {
    personalAccessToken?: shared.SchemePersonalAccessToken;
    oauth?: shared.SchemeOauth;
}
export declare class GetStackScriptDefaultApplicationJson extends SpeakeasyBase {
    errors?: shared.ErrorObject[];
}
export declare class GetStackScriptRequest extends SpeakeasyBase {
    pathParams: GetStackScriptPathParams;
    security: GetStackScriptSecurity;
}
export declare class GetStackScriptResponse extends SpeakeasyBase {
    contentType: string;
    stackScript?: shared.StackScript;
    statusCode: number;
    getStackScriptDefaultApplicationJsonObject?: GetStackScriptDefaultApplicationJson;
}
