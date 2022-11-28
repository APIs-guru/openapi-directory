import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ContentLiasettingsCustombatchQueryParams extends SpeakeasyBase {
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
export declare class ContentLiasettingsCustombatchSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ContentLiasettingsCustombatchRequest extends SpeakeasyBase {
    queryParams: ContentLiasettingsCustombatchQueryParams;
    request?: shared.LiasettingsCustomBatchRequest;
    security: ContentLiasettingsCustombatchSecurity;
}
export declare class ContentLiasettingsCustombatchResponse extends SpeakeasyBase {
    contentType: string;
    liasettingsCustomBatchResponse?: shared.LiasettingsCustomBatchResponse;
    statusCode: number;
}
