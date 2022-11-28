import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ContentDatafeedsInsertPathParams extends SpeakeasyBase {
    merchantId: string;
}
export declare class ContentDatafeedsInsertQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    dryRun?: boolean;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class ContentDatafeedsInsertSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ContentDatafeedsInsertRequest extends SpeakeasyBase {
    pathParams: ContentDatafeedsInsertPathParams;
    queryParams: ContentDatafeedsInsertQueryParams;
    request?: shared.Datafeed;
    security: ContentDatafeedsInsertSecurity;
}
export declare class ContentDatafeedsInsertResponse extends SpeakeasyBase {
    contentType: string;
    datafeed?: shared.Datafeed;
    statusCode: number;
}
