import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CloudchannelProductsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    account?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    languageCode?: string;
    oauthToken?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class CloudchannelProductsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudchannelProductsListRequest extends SpeakeasyBase {
    queryParams: CloudchannelProductsListQueryParams;
    security: CloudchannelProductsListSecurity;
}
export declare class CloudchannelProductsListResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudChannelV1ListProductsResponse?: shared.GoogleCloudChannelV1ListProductsResponse;
    statusCode: number;
}
