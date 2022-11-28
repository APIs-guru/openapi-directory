import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CloudchannelAccountsChannelPartnerLinksChannelPartnerRepricingConfigsListPathParams extends SpeakeasyBase {
    parent: string;
}
export declare class CloudchannelAccountsChannelPartnerLinksChannelPartnerRepricingConfigsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    filter?: string;
    key?: string;
    oauthToken?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class CloudchannelAccountsChannelPartnerLinksChannelPartnerRepricingConfigsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudchannelAccountsChannelPartnerLinksChannelPartnerRepricingConfigsListRequest extends SpeakeasyBase {
    pathParams: CloudchannelAccountsChannelPartnerLinksChannelPartnerRepricingConfigsListPathParams;
    queryParams: CloudchannelAccountsChannelPartnerLinksChannelPartnerRepricingConfigsListQueryParams;
    security: CloudchannelAccountsChannelPartnerLinksChannelPartnerRepricingConfigsListSecurity;
}
export declare class CloudchannelAccountsChannelPartnerLinksChannelPartnerRepricingConfigsListResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudChannelV1ListChannelPartnerRepricingConfigsResponse?: shared.GoogleCloudChannelV1ListChannelPartnerRepricingConfigsResponse;
    statusCode: number;
}
