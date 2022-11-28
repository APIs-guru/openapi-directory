import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DfareportingRemarketingListsListPathParams extends SpeakeasyBase {
    profileId: string;
}
export declare enum DfareportingRemarketingListsListSortFieldEnum {
    Id = "ID",
    Name = "NAME"
}
export declare enum DfareportingRemarketingListsListSortOrderEnum {
    Ascending = "ASCENDING",
    Descending = "DESCENDING"
}
export declare class DfareportingRemarketingListsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    active?: boolean;
    advertiserId: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    floodlightActivityId?: string;
    key?: string;
    maxResults?: number;
    name?: string;
    oauthToken?: string;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    sortField?: DfareportingRemarketingListsListSortFieldEnum;
    sortOrder?: DfareportingRemarketingListsListSortOrderEnum;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class DfareportingRemarketingListsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DfareportingRemarketingListsListRequest extends SpeakeasyBase {
    pathParams: DfareportingRemarketingListsListPathParams;
    queryParams: DfareportingRemarketingListsListQueryParams;
    security: DfareportingRemarketingListsListSecurity;
}
export declare class DfareportingRemarketingListsListResponse extends SpeakeasyBase {
    contentType: string;
    remarketingListsListResponse?: shared.RemarketingListsListResponse;
    statusCode: number;
}
