import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DisplayvideoAdvertisersCampaignsDeletePathParams extends SpeakeasyBase {
    advertiserId: string;
    campaignId: string;
}
export declare class DisplayvideoAdvertisersCampaignsDeleteQueryParams extends SpeakeasyBase {
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
export declare class DisplayvideoAdvertisersCampaignsDeleteSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DisplayvideoAdvertisersCampaignsDeleteSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DisplayvideoAdvertisersCampaignsDeleteSecurity extends SpeakeasyBase {
    option1?: DisplayvideoAdvertisersCampaignsDeleteSecurityOption1;
    option2?: DisplayvideoAdvertisersCampaignsDeleteSecurityOption2;
}
export declare class DisplayvideoAdvertisersCampaignsDeleteRequest extends SpeakeasyBase {
    pathParams: DisplayvideoAdvertisersCampaignsDeletePathParams;
    queryParams: DisplayvideoAdvertisersCampaignsDeleteQueryParams;
    security: DisplayvideoAdvertisersCampaignsDeleteSecurity;
}
export declare class DisplayvideoAdvertisersCampaignsDeleteResponse extends SpeakeasyBase {
    contentType: string;
    empty?: Map<string, any>;
    statusCode: number;
}
