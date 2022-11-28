import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ContentPosCustombatchQueryParams extends SpeakeasyBase {
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
export declare class ContentPosCustombatchSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ContentPosCustombatchRequest extends SpeakeasyBase {
    queryParams: ContentPosCustombatchQueryParams;
    request?: shared.PosCustomBatchRequest;
    security: ContentPosCustombatchSecurity;
}
export declare class ContentPosCustombatchResponse extends SpeakeasyBase {
    contentType: string;
    posCustomBatchResponse?: shared.PosCustomBatchResponse;
    statusCode: number;
}
