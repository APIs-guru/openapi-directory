import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DisplayvideoAdvertisersCampaignsCreatePathParams extends SpeakeasyBase {
    advertiserId: string;
}
export declare class DisplayvideoAdvertisersCampaignsCreateQueryParams extends SpeakeasyBase {
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
export declare class DisplayvideoAdvertisersCampaignsCreateSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DisplayvideoAdvertisersCampaignsCreateSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DisplayvideoAdvertisersCampaignsCreateSecurity extends SpeakeasyBase {
    option1?: DisplayvideoAdvertisersCampaignsCreateSecurityOption1;
    option2?: DisplayvideoAdvertisersCampaignsCreateSecurityOption2;
}
export declare class DisplayvideoAdvertisersCampaignsCreateRequest extends SpeakeasyBase {
    pathParams: DisplayvideoAdvertisersCampaignsCreatePathParams;
    queryParams: DisplayvideoAdvertisersCampaignsCreateQueryParams;
    request?: shared.CampaignInput;
    security: DisplayvideoAdvertisersCampaignsCreateSecurity;
}
export declare class DisplayvideoAdvertisersCampaignsCreateResponse extends SpeakeasyBase {
    campaign?: shared.Campaign;
    contentType: string;
    statusCode: number;
}
