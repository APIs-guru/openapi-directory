import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TfaEnableSecurity extends SpeakeasyBase {
    personalAccessToken?: shared.SchemePersonalAccessToken;
    oauth?: shared.SchemeOauth;
}
export declare class TfaEnableDefaultApplicationJson extends SpeakeasyBase {
    errors?: shared.ErrorObject[];
}
export declare class TfaEnableRequest extends SpeakeasyBase {
    security: TfaEnableSecurity;
}
export declare class TfaEnableResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    tfaEnable200ApplicationJsonAny?: any;
    tfaEnableDefaultApplicationJsonObject?: TfaEnableDefaultApplicationJson;
}
