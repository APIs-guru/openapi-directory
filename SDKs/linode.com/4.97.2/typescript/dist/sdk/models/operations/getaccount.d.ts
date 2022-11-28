import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetAccountSecurity extends SpeakeasyBase {
    personalAccessToken?: shared.SchemePersonalAccessToken;
    oauth?: shared.SchemeOauth;
}
export declare class GetAccountDefaultApplicationJson extends SpeakeasyBase {
    errors?: shared.ErrorObject[];
}
export declare class GetAccountRequest extends SpeakeasyBase {
    security: GetAccountSecurity;
}
export declare class GetAccountResponse extends SpeakeasyBase {
    account?: shared.Account;
    contentType: string;
    statusCode: number;
    getAccountDefaultApplicationJsonObject?: GetAccountDefaultApplicationJson;
}
