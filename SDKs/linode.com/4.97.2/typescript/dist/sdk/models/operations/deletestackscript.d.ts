import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteStackScriptPathParams extends SpeakeasyBase {
    stackscriptId: string;
}
export declare class DeleteStackScriptSecurity extends SpeakeasyBase {
    personalAccessToken?: shared.SchemePersonalAccessToken;
    oauth?: shared.SchemeOauth;
}
export declare class DeleteStackScriptDefaultApplicationJson extends SpeakeasyBase {
    errors?: shared.ErrorObject[];
}
export declare class DeleteStackScriptRequest extends SpeakeasyBase {
    pathParams: DeleteStackScriptPathParams;
    security: DeleteStackScriptSecurity;
}
export declare class DeleteStackScriptResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    deleteStackScript200ApplicationJsonObject?: Map<string, any>;
    deleteStackScriptDefaultApplicationJsonObject?: DeleteStackScriptDefaultApplicationJson;
}
