import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ContentAccounttaxGetPathParams extends SpeakeasyBase {
    accountId: string;
    merchantId: string;
}
export declare class ContentAccounttaxGetQueryParams extends SpeakeasyBase {
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
export declare class ContentAccounttaxGetSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ContentAccounttaxGetRequest extends SpeakeasyBase {
    pathParams: ContentAccounttaxGetPathParams;
    queryParams: ContentAccounttaxGetQueryParams;
    security: ContentAccounttaxGetSecurity;
}
export declare class ContentAccounttaxGetResponse extends SpeakeasyBase {
    accountTax?: shared.AccountTax;
    contentType: string;
    statusCode: number;
}
