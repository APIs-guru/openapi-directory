import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ContentAccountsRequestphoneverificationPathParams extends SpeakeasyBase {
    accountId: string;
    merchantId: string;
}
export declare class ContentAccountsRequestphoneverificationQueryParams extends SpeakeasyBase {
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
export declare class ContentAccountsRequestphoneverificationSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ContentAccountsRequestphoneverificationRequest extends SpeakeasyBase {
    pathParams: ContentAccountsRequestphoneverificationPathParams;
    queryParams: ContentAccountsRequestphoneverificationQueryParams;
    request?: shared.RequestPhoneVerificationRequest;
    security: ContentAccountsRequestphoneverificationSecurity;
}
export declare class ContentAccountsRequestphoneverificationResponse extends SpeakeasyBase {
    contentType: string;
    requestPhoneVerificationResponse?: shared.RequestPhoneVerificationResponse;
    statusCode: number;
}
