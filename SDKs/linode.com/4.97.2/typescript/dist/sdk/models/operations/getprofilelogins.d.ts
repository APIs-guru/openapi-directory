import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetProfileLoginsSecurity extends SpeakeasyBase {
    personalAccessToken?: shared.SchemePersonalAccessToken;
    oauth?: shared.SchemeOauth;
}
export declare class GetProfileLogins200ApplicationJson extends SpeakeasyBase {
    data?: shared.Login[];
    page?: number;
    pages?: number;
    results?: number;
}
export declare class GetProfileLoginsDefaultApplicationJson extends SpeakeasyBase {
    errors?: shared.ErrorObject[];
}
export declare class GetProfileLoginsRequest extends SpeakeasyBase {
    security: GetProfileLoginsSecurity;
}
export declare class GetProfileLoginsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    getProfileLogins200ApplicationJsonObject?: GetProfileLogins200ApplicationJson;
    getProfileLoginsDefaultApplicationJsonObject?: GetProfileLoginsDefaultApplicationJson;
}
