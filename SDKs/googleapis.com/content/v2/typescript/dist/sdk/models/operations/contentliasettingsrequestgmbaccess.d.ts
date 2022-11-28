import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ContentLiasettingsRequestgmbaccessPathParams extends SpeakeasyBase {
    accountId: string;
    merchantId: string;
}
export declare class ContentLiasettingsRequestgmbaccessQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    gmbEmail: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class ContentLiasettingsRequestgmbaccessSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ContentLiasettingsRequestgmbaccessRequest extends SpeakeasyBase {
    pathParams: ContentLiasettingsRequestgmbaccessPathParams;
    queryParams: ContentLiasettingsRequestgmbaccessQueryParams;
    security: ContentLiasettingsRequestgmbaccessSecurity;
}
export declare class ContentLiasettingsRequestgmbaccessResponse extends SpeakeasyBase {
    contentType: string;
    liasettingsRequestGmbAccessResponse?: shared.LiasettingsRequestGmbAccessResponse;
    statusCode: number;
}
