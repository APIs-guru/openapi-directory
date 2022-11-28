import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CloudassetFeedsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class CloudassetFeedsListQueryParams extends SpeakeasyBase {
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
export declare class CloudassetFeedsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudassetFeedsListRequest extends SpeakeasyBase {
    pathParams: CloudassetFeedsListPathParams;
    queryParams: CloudassetFeedsListQueryParams;
    security: CloudassetFeedsListSecurity;
}
export declare class CloudassetFeedsListResponse extends SpeakeasyBase {
    contentType: string;
    listFeedsResponse?: shared.ListFeedsResponse;
    statusCode: number;
}
