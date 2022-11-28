import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class MybusinessaccountmanagementAccountsGetPathParams extends SpeakeasyBase {
    name: string;
}
export declare class MybusinessaccountmanagementAccountsGetQueryParams extends SpeakeasyBase {
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
export declare class MybusinessaccountmanagementAccountsGetRequest extends SpeakeasyBase {
    pathParams: MybusinessaccountmanagementAccountsGetPathParams;
    queryParams: MybusinessaccountmanagementAccountsGetQueryParams;
}
export declare class MybusinessaccountmanagementAccountsGetResponse extends SpeakeasyBase {
    account?: shared.Account;
    contentType: string;
    statusCode: number;
}
