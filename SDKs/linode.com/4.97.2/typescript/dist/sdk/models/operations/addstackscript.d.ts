import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class AddStackScriptRequestBodyInput extends SpeakeasyBase {
    description?: string;
    images: string[];
    isPublic?: boolean;
    label: string;
    revNote?: string;
    script: string;
}
export declare class AddStackScriptSecurity extends SpeakeasyBase {
    personalAccessToken?: shared.SchemePersonalAccessToken;
    oauth?: shared.SchemeOauth;
}
export declare class AddStackScriptDefaultApplicationJson extends SpeakeasyBase {
    errors?: shared.ErrorObject[];
}
export declare class AddStackScriptRequest extends SpeakeasyBase {
    request: AddStackScriptRequestBodyInput;
    security: AddStackScriptSecurity;
}
export declare class AddStackScriptResponse extends SpeakeasyBase {
    contentType: string;
    stackScript?: shared.StackScript;
    statusCode: number;
    addStackScriptDefaultApplicationJsonObject?: AddStackScriptDefaultApplicationJson;
}
