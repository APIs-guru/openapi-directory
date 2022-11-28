import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ContentDatafeedsDeletePathParams extends SpeakeasyBase {
    datafeedId: string;
    merchantId: string;
}
export declare class ContentDatafeedsDeleteQueryParams extends SpeakeasyBase {
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
export declare class ContentDatafeedsDeleteSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ContentDatafeedsDeleteRequest extends SpeakeasyBase {
    pathParams: ContentDatafeedsDeletePathParams;
    queryParams: ContentDatafeedsDeleteQueryParams;
    security: ContentDatafeedsDeleteSecurity;
}
export declare class ContentDatafeedsDeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
