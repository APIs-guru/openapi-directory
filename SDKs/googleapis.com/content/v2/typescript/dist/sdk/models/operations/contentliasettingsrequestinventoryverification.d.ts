import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ContentLiasettingsRequestinventoryverificationPathParams extends SpeakeasyBase {
    accountId: string;
    country: string;
    merchantId: string;
}
export declare class ContentLiasettingsRequestinventoryverificationQueryParams extends SpeakeasyBase {
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
export declare class ContentLiasettingsRequestinventoryverificationSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ContentLiasettingsRequestinventoryverificationRequest extends SpeakeasyBase {
    pathParams: ContentLiasettingsRequestinventoryverificationPathParams;
    queryParams: ContentLiasettingsRequestinventoryverificationQueryParams;
    security: ContentLiasettingsRequestinventoryverificationSecurity;
}
export declare class ContentLiasettingsRequestinventoryverificationResponse extends SpeakeasyBase {
    contentType: string;
    liasettingsRequestInventoryVerificationResponse?: shared.LiasettingsRequestInventoryVerificationResponse;
    statusCode: number;
}
