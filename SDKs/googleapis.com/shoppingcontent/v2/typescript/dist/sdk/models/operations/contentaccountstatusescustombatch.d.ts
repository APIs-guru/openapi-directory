import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ContentAccountstatusesCustombatchQueryParams extends SpeakeasyBase {
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
export declare class ContentAccountstatusesCustombatchSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ContentAccountstatusesCustombatchRequest extends SpeakeasyBase {
    queryParams: ContentAccountstatusesCustombatchQueryParams;
    request?: shared.AccountstatusesCustomBatchRequest;
    security: ContentAccountstatusesCustombatchSecurity;
}
export declare class ContentAccountstatusesCustombatchResponse extends SpeakeasyBase {
    accountstatusesCustomBatchResponse?: shared.AccountstatusesCustomBatchResponse;
    contentType: string;
    statusCode: number;
}
