import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CloudchannelAccountsReportsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class CloudchannelAccountsReportsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
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
export declare class CloudchannelAccountsReportsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudchannelAccountsReportsListRequest extends SpeakeasyBase {
    pathParams: CloudchannelAccountsReportsListPathParams;
    queryParams: CloudchannelAccountsReportsListQueryParams;
    security: CloudchannelAccountsReportsListSecurity;
}
export declare class CloudchannelAccountsReportsListResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudChannelV1ListReportsResponse?: shared.GoogleCloudChannelV1ListReportsResponse;
    statusCode: number;
}
