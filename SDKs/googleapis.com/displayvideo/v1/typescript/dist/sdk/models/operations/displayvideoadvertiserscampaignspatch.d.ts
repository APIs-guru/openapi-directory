import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DisplayvideoAdvertisersCampaignsPatchPathParams extends SpeakeasyBase {
    advertiserId: string;
    campaignId: string;
}
export declare class DisplayvideoAdvertisersCampaignsPatchQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    oauthToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    updateMask?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class DisplayvideoAdvertisersCampaignsPatchSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DisplayvideoAdvertisersCampaignsPatchSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DisplayvideoAdvertisersCampaignsPatchSecurity extends SpeakeasyBase {
    option1?: DisplayvideoAdvertisersCampaignsPatchSecurityOption1;
    option2?: DisplayvideoAdvertisersCampaignsPatchSecurityOption2;
}
export declare class DisplayvideoAdvertisersCampaignsPatchRequest extends SpeakeasyBase {
    pathParams: DisplayvideoAdvertisersCampaignsPatchPathParams;
    queryParams: DisplayvideoAdvertisersCampaignsPatchQueryParams;
    request?: shared.CampaignInput;
    security: DisplayvideoAdvertisersCampaignsPatchSecurity;
}
export declare class DisplayvideoAdvertisersCampaignsPatchResponse extends SpeakeasyBase {
    campaign?: shared.Campaign;
    contentType: string;
    statusCode: number;
}
