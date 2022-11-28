import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ContentDatafeedstatusesCustombatchQueryParams extends SpeakeasyBase {
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
export declare class ContentDatafeedstatusesCustombatchSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ContentDatafeedstatusesCustombatchRequest extends SpeakeasyBase {
    queryParams: ContentDatafeedstatusesCustombatchQueryParams;
    request?: shared.DatafeedstatusesCustomBatchRequest;
    security: ContentDatafeedstatusesCustombatchSecurity;
}
export declare class ContentDatafeedstatusesCustombatchResponse extends SpeakeasyBase {
    contentType: string;
    datafeedstatusesCustomBatchResponse?: shared.DatafeedstatusesCustomBatchResponse;
    statusCode: number;
}
