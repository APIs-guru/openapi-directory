import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class MybusinessAccountsGenerateAccountNumberPathParams extends SpeakeasyBase {
    name: string;
}
export declare class MybusinessAccountsGenerateAccountNumberQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class MybusinessAccountsGenerateAccountNumberRequest extends SpeakeasyBase {
    pathParams: MybusinessAccountsGenerateAccountNumberPathParams;
    queryParams: MybusinessAccountsGenerateAccountNumberQueryParams;
    request?: Map<string, any>;
}
export declare class MybusinessAccountsGenerateAccountNumberResponse extends SpeakeasyBase {
    account?: shared.Account;
    contentType: string;
    statusCode: number;
}
