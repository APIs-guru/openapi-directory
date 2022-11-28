import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DisplayvideoAdvertisersCampaignsListAssignedTargetingOptionsPathParams extends SpeakeasyBase {
    advertiserId: string;
    campaignId: string;
}
export declare class DisplayvideoAdvertisersCampaignsListAssignedTargetingOptionsQueryParams extends SpeakeasyBase {
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
export declare class DisplayvideoAdvertisersCampaignsListAssignedTargetingOptionsSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DisplayvideoAdvertisersCampaignsListAssignedTargetingOptionsRequest extends SpeakeasyBase {
    pathParams: DisplayvideoAdvertisersCampaignsListAssignedTargetingOptionsPathParams;
    queryParams: DisplayvideoAdvertisersCampaignsListAssignedTargetingOptionsQueryParams;
    security: DisplayvideoAdvertisersCampaignsListAssignedTargetingOptionsSecurity;
}
export declare class DisplayvideoAdvertisersCampaignsListAssignedTargetingOptionsResponse extends SpeakeasyBase {
    bulkListCampaignAssignedTargetingOptionsResponse?: shared.BulkListCampaignAssignedTargetingOptionsResponse;
    contentType: string;
    statusCode: number;
}
