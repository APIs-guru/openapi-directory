import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateStackScriptPathParams extends SpeakeasyBase {
    stackscriptId: string;
}
export declare class UpdateStackScriptSecurity extends SpeakeasyBase {
    personalAccessToken?: shared.SchemePersonalAccessToken;
    oauth?: shared.SchemeOauth;
}
export declare class UpdateStackScriptDefaultApplicationJson extends SpeakeasyBase {
    errors?: shared.ErrorObject[];
}
export declare class UpdateStackScriptRequest extends SpeakeasyBase {
    pathParams: UpdateStackScriptPathParams;
    request?: shared.StackScriptInput;
    security: UpdateStackScriptSecurity;
}
export declare class UpdateStackScriptResponse extends SpeakeasyBase {
    contentType: string;
    stackScript?: shared.StackScript;
    statusCode: number;
    updateStackScriptDefaultApplicationJsonObject?: UpdateStackScriptDefaultApplicationJson;
}
