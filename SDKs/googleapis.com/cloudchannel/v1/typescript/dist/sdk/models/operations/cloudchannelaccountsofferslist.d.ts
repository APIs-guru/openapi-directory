import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CloudchannelAccountsOffersListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class CloudchannelAccountsOffersListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    filter?: string;
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
export declare class CloudchannelAccountsOffersListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudchannelAccountsOffersListRequest extends SpeakeasyBase {
    pathParams: CloudchannelAccountsOffersListPathParams;
    queryParams: CloudchannelAccountsOffersListQueryParams;
    security: CloudchannelAccountsOffersListSecurity;
}
export declare class CloudchannelAccountsOffersListResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudChannelV1ListOffersResponse?: shared.GoogleCloudChannelV1ListOffersResponse;
    statusCode: number;
}
