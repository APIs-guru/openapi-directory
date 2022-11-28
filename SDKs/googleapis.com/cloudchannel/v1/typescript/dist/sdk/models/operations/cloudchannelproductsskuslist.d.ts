import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CloudchannelProductsSkusListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class CloudchannelProductsSkusListQueryParams extends SpeakeasyBase {
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
export declare class CloudchannelProductsSkusListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudchannelProductsSkusListRequest extends SpeakeasyBase {
    pathParams: CloudchannelProductsSkusListPathParams;
    queryParams: CloudchannelProductsSkusListQueryParams;
    security: CloudchannelProductsSkusListSecurity;
}
export declare class CloudchannelProductsSkusListResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudChannelV1ListSkusResponse?: shared.GoogleCloudChannelV1ListSkusResponse;
    statusCode: number;
}
