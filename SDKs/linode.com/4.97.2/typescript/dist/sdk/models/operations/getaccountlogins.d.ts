import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetAccountLoginsSecurity extends SpeakeasyBase {
    personalAccessToken?: shared.SchemePersonalAccessToken;
    oauth?: shared.SchemeOauth;
}
export declare class GetAccountLogins200ApplicationJson extends SpeakeasyBase {
    data?: shared.Login[];
    page?: number;
    pages?: number;
    results?: number;
}
export declare class GetAccountLoginsDefaultApplicationJson extends SpeakeasyBase {
    errors?: shared.ErrorObject[];
}
export declare class GetAccountLoginsRequest extends SpeakeasyBase {
    security: GetAccountLoginsSecurity;
}
export declare class GetAccountLoginsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getAccountLogins200ApplicationJsonObject?: GetAccountLogins200ApplicationJson;
    getAccountLoginsDefaultApplicationJsonObject?: GetAccountLoginsDefaultApplicationJson;
}
