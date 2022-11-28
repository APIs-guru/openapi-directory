import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ContentRegionalinventoryCustombatchQueryParams extends SpeakeasyBase {
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
export declare class ContentRegionalinventoryCustombatchSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ContentRegionalinventoryCustombatchRequest extends SpeakeasyBase {
    queryParams: ContentRegionalinventoryCustombatchQueryParams;
    request?: shared.RegionalinventoryCustomBatchRequest;
    security: ContentRegionalinventoryCustombatchSecurity;
}
export declare class ContentRegionalinventoryCustombatchResponse extends SpeakeasyBase {
    contentType: string;
    regionalinventoryCustomBatchResponse?: shared.RegionalinventoryCustomBatchResponse;
    statusCode: number;
}
