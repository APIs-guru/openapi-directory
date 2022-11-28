import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CloudassetFeedsCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class CloudassetFeedsCreateQueryParams extends SpeakeasyBase {
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
export declare class CloudassetFeedsCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudassetFeedsCreateRequest extends SpeakeasyBase {
    pathParams: CloudassetFeedsCreatePathParams;
    queryParams: CloudassetFeedsCreateQueryParams;
    request?: shared.CreateFeedRequest;
    security: CloudassetFeedsCreateSecurity;
}
export declare class CloudassetFeedsCreateResponse extends SpeakeasyBase {
    contentType: string;
    feed?: shared.Feed;
    statusCode: number;
}
