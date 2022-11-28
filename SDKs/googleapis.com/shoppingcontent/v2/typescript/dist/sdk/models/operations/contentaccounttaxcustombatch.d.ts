import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ContentAccounttaxCustombatchQueryParams extends SpeakeasyBase {
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
export declare class ContentAccounttaxCustombatchSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ContentAccounttaxCustombatchRequest extends SpeakeasyBase {
    queryParams: ContentAccounttaxCustombatchQueryParams;
    request?: shared.AccounttaxCustomBatchRequest;
    security: ContentAccounttaxCustombatchSecurity;
}
export declare class ContentAccounttaxCustombatchResponse extends SpeakeasyBase {
    accounttaxCustomBatchResponse?: shared.AccounttaxCustomBatchResponse;
    contentType: string;
    statusCode: number;
}
