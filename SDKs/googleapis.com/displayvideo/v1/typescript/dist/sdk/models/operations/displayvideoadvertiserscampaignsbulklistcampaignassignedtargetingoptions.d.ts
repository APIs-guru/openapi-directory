import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DisplayvideoAdvertisersCampaignsBulkListCampaignAssignedTargetingOptionsPathParams extends SpeakeasyBase {
    advertiserId: string;
    campaignId: string;
}
export declare class DisplayvideoAdvertisersCampaignsBulkListCampaignAssignedTargetingOptionsQueryParams extends SpeakeasyBase {
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
export declare class DisplayvideoAdvertisersCampaignsBulkListCampaignAssignedTargetingOptionsSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DisplayvideoAdvertisersCampaignsBulkListCampaignAssignedTargetingOptionsRequest extends SpeakeasyBase {
    pathParams: DisplayvideoAdvertisersCampaignsBulkListCampaignAssignedTargetingOptionsPathParams;
    queryParams: DisplayvideoAdvertisersCampaignsBulkListCampaignAssignedTargetingOptionsQueryParams;
    security: DisplayvideoAdvertisersCampaignsBulkListCampaignAssignedTargetingOptionsSecurity;
}
export declare class DisplayvideoAdvertisersCampaignsBulkListCampaignAssignedTargetingOptionsResponse extends SpeakeasyBase {
    bulkListCampaignAssignedTargetingOptionsResponse?: shared.BulkListCampaignAssignedTargetingOptionsResponse;
    contentType: string;
    statusCode: number;
}
