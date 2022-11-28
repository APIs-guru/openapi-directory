import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CloudchannelAccountsChannelPartnerLinksCreatePathParams extends SpeakeasyBase {
    parent: string;
}
export declare class CloudchannelAccountsChannelPartnerLinksCreateQueryParams extends SpeakeasyBase {
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
export declare class CloudchannelAccountsChannelPartnerLinksCreateSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class CloudchannelAccountsChannelPartnerLinksCreateRequest extends SpeakeasyBase {
    pathParams: CloudchannelAccountsChannelPartnerLinksCreatePathParams;
    queryParams: CloudchannelAccountsChannelPartnerLinksCreateQueryParams;
    request?: shared.GoogleCloudChannelV1ChannelPartnerLinkInput;
    security: CloudchannelAccountsChannelPartnerLinksCreateSecurity;
}
export declare class CloudchannelAccountsChannelPartnerLinksCreateResponse extends SpeakeasyBase {
    contentType: string;
    googleCloudChannelV1ChannelPartnerLink?: shared.GoogleCloudChannelV1ChannelPartnerLink;
    statusCode: number;
}
