import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ContentAccounttaxUpdatePathParams extends SpeakeasyBase {
    accountId: string;
    merchantId: string;
}
export declare class ContentAccounttaxUpdateQueryParams extends SpeakeasyBase {
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
export declare class ContentAccounttaxUpdateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ContentAccounttaxUpdateRequest extends SpeakeasyBase {
    pathParams: ContentAccounttaxUpdatePathParams;
    queryParams: ContentAccounttaxUpdateQueryParams;
    request?: shared.AccountTax;
    security: ContentAccounttaxUpdateSecurity;
}
export declare class ContentAccounttaxUpdateResponse extends SpeakeasyBase {
    accountTax?: shared.AccountTax;
    contentType: string;
    statusCode: number;
}
