import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ContentFreelistingsprogramRequestreviewPathParams extends SpeakeasyBase {
    merchantId: string;
}
export declare class ContentFreelistingsprogramRequestreviewQueryParams extends SpeakeasyBase {
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
export declare class ContentFreelistingsprogramRequestreviewSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ContentFreelistingsprogramRequestreviewRequest extends SpeakeasyBase {
    pathParams: ContentFreelistingsprogramRequestreviewPathParams;
    queryParams: ContentFreelistingsprogramRequestreviewQueryParams;
    request?: shared.RequestReviewFreeListingsRequest;
    security: ContentFreelistingsprogramRequestreviewSecurity;
}
export declare class ContentFreelistingsprogramRequestreviewResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
