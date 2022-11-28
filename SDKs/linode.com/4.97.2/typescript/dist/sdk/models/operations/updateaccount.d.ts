import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateAccountSecurity extends SpeakeasyBase {
    personalAccessToken?: shared.SchemePersonalAccessToken;
    oauth?: shared.SchemeOauth;
}
export declare class UpdateAccountDefaultApplicationJson extends SpeakeasyBase {
    errors?: shared.ErrorObject[];
}
export declare class UpdateAccountRequest extends SpeakeasyBase {
    request: shared.AccountInput;
    security: UpdateAccountSecurity;
}
export declare class UpdateAccountResponse extends SpeakeasyBase {
    account?: shared.Account;
    contentType: string;
    statusCode: number;
    updateAccountDefaultApplicationJsonObject?: UpdateAccountDefaultApplicationJson;
}
