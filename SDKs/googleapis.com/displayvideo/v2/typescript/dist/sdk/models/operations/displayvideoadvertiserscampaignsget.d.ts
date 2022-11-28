import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DisplayvideoAdvertisersCampaignsGetPathParams extends SpeakeasyBase {
    advertiserId: string;
    campaignId: string;
}
export declare class DisplayvideoAdvertisersCampaignsGetQueryParams extends SpeakeasyBase {
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
export declare class DisplayvideoAdvertisersCampaignsGetSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DisplayvideoAdvertisersCampaignsGetSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DisplayvideoAdvertisersCampaignsGetSecurity extends SpeakeasyBase {
    option1?: DisplayvideoAdvertisersCampaignsGetSecurityOption1;
    option2?: DisplayvideoAdvertisersCampaignsGetSecurityOption2;
}
export declare class DisplayvideoAdvertisersCampaignsGetRequest extends SpeakeasyBase {
    pathParams: DisplayvideoAdvertisersCampaignsGetPathParams;
    queryParams: DisplayvideoAdvertisersCampaignsGetQueryParams;
    security: DisplayvideoAdvertisersCampaignsGetSecurity;
}
export declare class DisplayvideoAdvertisersCampaignsGetResponse extends SpeakeasyBase {
    campaign?: shared.Campaign;
    contentType: string;
    statusCode: number;
}
