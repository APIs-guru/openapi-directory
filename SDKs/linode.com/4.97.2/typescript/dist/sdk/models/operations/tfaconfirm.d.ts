import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TfaConfirmSecurity extends SpeakeasyBase {
    personalAccessToken?: shared.SchemePersonalAccessToken;
    oauth?: shared.SchemeOauth;
}
export declare class TfaConfirmDefaultApplicationJson extends SpeakeasyBase {
    errors?: shared.ErrorObject[];
}
export declare class TfaConfirmRequest extends SpeakeasyBase {
    request: any;
    security: TfaConfirmSecurity;
}
export declare class TfaConfirmResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    tfaConfirm200ApplicationJsonAny?: any;
    tfaConfirmDefaultApplicationJsonObject?: TfaConfirmDefaultApplicationJson;
}
