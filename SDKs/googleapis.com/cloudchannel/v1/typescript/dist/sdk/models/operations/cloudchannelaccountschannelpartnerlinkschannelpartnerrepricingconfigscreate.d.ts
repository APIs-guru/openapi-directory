import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CloudchannelAccountsChannelPartnerLinksChannelPartnerRepricingConfigsCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class CloudchannelAccountsChannelPartnerLinksChannelPartnerRepricingConfigsCreateQueryParams extends SpeakeasyBase {
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
export declare class CloudchannelAccountsChannelPartnerLinksChannelPartnerRepricingConfigsCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudchannelAccountsChannelPartnerLinksChannelPartnerRepricingConfigsCreateRequest extends SpeakeasyBase {
    pathParams: CloudchannelAccountsChannelPartnerLinksChannelPartnerRepricingConfigsCreatePathParams;
    queryParams: CloudchannelAccountsChannelPartnerLinksChannelPartnerRepricingConfigsCreateQueryParams;
    request?: shared.GoogleCloudChannelV1ChannelPartnerRepricingConfigInput;
    security: CloudchannelAccountsChannelPartnerLinksChannelPartnerRepricingConfigsCreateSecurity;
}
export declare class CloudchannelAccountsChannelPartnerLinksChannelPartnerRepricingConfigsCreateResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudChannelV1ChannelPartnerRepricingConfig?: shared.GoogleCloudChannelV1ChannelPartnerRepricingConfig;
    statusCode: number;
}
