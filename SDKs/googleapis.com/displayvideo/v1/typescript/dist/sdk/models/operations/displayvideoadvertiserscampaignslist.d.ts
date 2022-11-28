import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DisplayvideoAdvertisersCampaignsListPathParams extends SpeakeasyBase {
    advertiserId: string;
}
export declare class DisplayvideoAdvertisersCampaignsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    filter?: string;
    key?: string;
    oauthToken?: string;
    orderBy?: string;
    pageSize?: number;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class DisplayvideoAdvertisersCampaignsListSecurityOption1 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DisplayvideoAdvertisersCampaignsListSecurityOption2 extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DisplayvideoAdvertisersCampaignsListSecurity extends SpeakeasyBase {
    option1?: DisplayvideoAdvertisersCampaignsListSecurityOption1;
    option2?: DisplayvideoAdvertisersCampaignsListSecurityOption2;
}
export declare class DisplayvideoAdvertisersCampaignsListRequest extends SpeakeasyBase {
    pathParams: DisplayvideoAdvertisersCampaignsListPathParams;
    queryParams: DisplayvideoAdvertisersCampaignsListQueryParams;
    security: DisplayvideoAdvertisersCampaignsListSecurity;
}
export declare class DisplayvideoAdvertisersCampaignsListResponse extends SpeakeasyBase {
    contentType: string;
    listCampaignsResponse?: shared.ListCampaignsResponse;
    statusCode: number;
}
