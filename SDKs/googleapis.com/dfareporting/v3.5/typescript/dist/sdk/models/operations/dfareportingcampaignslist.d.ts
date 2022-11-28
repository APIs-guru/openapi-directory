import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DfareportingCampaignsListPathParams extends SpeakeasyBase {
    profileId: string;
}
export declare enum DfareportingCampaignsListSortFieldEnum {
    Id = "ID",
    Name = "NAME"
}
export declare enum DfareportingCampaignsListSortOrderEnum {
    Ascending = "ASCENDING",
    Descending = "DESCENDING"
}
export declare class DfareportingCampaignsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    advertiserGroupIds?: string[];
    advertiserIds?: string[];
    alt?: shared.AltEnum;
    archived?: boolean;
    atLeastOneOptimizationActivity?: boolean;
    callback?: string;
    excludedIds?: string[];
    fields?: string;
    ids?: string[];
    key?: string;
    maxResults?: number;
    oauthToken?: string;
    overriddenEventTagId?: string;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    searchString?: string;
    sortField?: DfareportingCampaignsListSortFieldEnum;
    sortOrder?: DfareportingCampaignsListSortOrderEnum;
    subaccountId?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class DfareportingCampaignsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DfareportingCampaignsListRequest extends SpeakeasyBase {
    pathParams: DfareportingCampaignsListPathParams;
    queryParams: DfareportingCampaignsListQueryParams;
    security: DfareportingCampaignsListSecurity;
}
export declare class DfareportingCampaignsListResponse extends SpeakeasyBase {
    campaignsListResponse?: shared.CampaignsListResponse;
    contentType: string;
    statusCode: number;
}
