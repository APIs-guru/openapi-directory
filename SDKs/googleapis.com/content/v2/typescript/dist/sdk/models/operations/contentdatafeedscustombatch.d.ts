import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ContentDatafeedsCustombatchQueryParams extends SpeakeasyBase {
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
export declare class ContentDatafeedsCustombatchSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ContentDatafeedsCustombatchRequest extends SpeakeasyBase {
    queryParams: ContentDatafeedsCustombatchQueryParams;
    request?: shared.DatafeedsCustomBatchRequest;
    security: ContentDatafeedsCustombatchSecurity;
}
export declare class ContentDatafeedsCustombatchResponse extends SpeakeasyBase {
    contentType: string;
    datafeedsCustomBatchResponse?: shared.DatafeedsCustomBatchResponse;
    statusCode: number;
}
