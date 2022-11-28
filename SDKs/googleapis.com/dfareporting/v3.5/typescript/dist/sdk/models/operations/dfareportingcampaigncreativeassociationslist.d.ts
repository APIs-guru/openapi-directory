import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DfareportingCampaignCreativeAssociationsListPathParams extends SpeakeasyBase {
    campaignId: string;
    profileId: string;
}
export declare enum DfareportingCampaignCreativeAssociationsListSortOrderEnum {
    Ascending = "ASCENDING",
    Descending = "DESCENDING"
}
export declare class DfareportingCampaignCreativeAssociationsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    maxResults?: number;
    oauthToken?: string;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    sortOrder?: DfareportingCampaignCreativeAssociationsListSortOrderEnum;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class DfareportingCampaignCreativeAssociationsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DfareportingCampaignCreativeAssociationsListRequest extends SpeakeasyBase {
    pathParams: DfareportingCampaignCreativeAssociationsListPathParams;
    queryParams: DfareportingCampaignCreativeAssociationsListQueryParams;
    security: DfareportingCampaignCreativeAssociationsListSecurity;
}
export declare class DfareportingCampaignCreativeAssociationsListResponse extends SpeakeasyBase {
    campaignCreativeAssociationsListResponse?: shared.CampaignCreativeAssociationsListResponse;
    contentType: string;
    statusCode: number;
}
