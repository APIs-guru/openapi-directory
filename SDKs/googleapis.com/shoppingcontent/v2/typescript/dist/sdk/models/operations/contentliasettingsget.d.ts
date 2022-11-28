import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ContentLiasettingsGetPathParams extends SpeakeasyBase {
    accountId: string;
    merchantId: string;
}
export declare class ContentLiasettingsGetQueryParams extends SpeakeasyBase {
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
export declare class ContentLiasettingsGetSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ContentLiasettingsGetRequest extends SpeakeasyBase {
    pathParams: ContentLiasettingsGetPathParams;
    queryParams: ContentLiasettingsGetQueryParams;
    security: ContentLiasettingsGetSecurity;
}
export declare class ContentLiasettingsGetResponse extends SpeakeasyBase {
    contentType: string;
    liaSettings?: shared.LiaSettings;
    statusCode: number;
}
