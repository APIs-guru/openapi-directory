import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CloudchannelAccountsChannelPartnerLinksListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare enum CloudchannelAccountsChannelPartnerLinksListViewEnum {
    Unspecified = "UNSPECIFIED",
    Basic = "BASIC",
    Full = "FULL"
}
export declare class CloudchannelAccountsChannelPartnerLinksListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
    view?: CloudchannelAccountsChannelPartnerLinksListViewEnum;
}
export declare class CloudchannelAccountsChannelPartnerLinksListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudchannelAccountsChannelPartnerLinksListRequest extends SpeakeasyBase {
    pathParams: CloudchannelAccountsChannelPartnerLinksListPathParams;
    queryParams: CloudchannelAccountsChannelPartnerLinksListQueryParams;
    security: CloudchannelAccountsChannelPartnerLinksListSecurity;
}
export declare class CloudchannelAccountsChannelPartnerLinksListResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudChannelV1ListChannelPartnerLinksResponse?: shared.GoogleCloudChannelV1ListChannelPartnerLinksResponse;
    statusCode: number;
}
