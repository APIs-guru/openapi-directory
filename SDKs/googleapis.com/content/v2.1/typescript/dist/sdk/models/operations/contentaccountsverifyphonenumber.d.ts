import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ContentAccountsVerifyphonenumberPathParams extends SpeakeasyBase {
    accountId: string;
    merchantId: string;
}
export declare class ContentAccountsVerifyphonenumberQueryParams extends SpeakeasyBase {
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
export declare class ContentAccountsVerifyphonenumberSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ContentAccountsVerifyphonenumberRequest extends SpeakeasyBase {
    pathParams: ContentAccountsVerifyphonenumberPathParams;
    queryParams: ContentAccountsVerifyphonenumberQueryParams;
    request?: shared.VerifyPhoneNumberRequest;
    security: ContentAccountsVerifyphonenumberSecurity;
}
export declare class ContentAccountsVerifyphonenumberResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    verifyPhoneNumberResponse?: shared.VerifyPhoneNumberResponse;
}
