import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DfareportingTargetableRemarketingListsListPathParams extends SpeakeasyBase {
    profileId: string;
}
export declare enum DfareportingTargetableRemarketingListsListSortFieldEnum {
    Id = "ID",
    Name = "NAME"
}
export declare enum DfareportingTargetableRemarketingListsListSortOrderEnum {
    Ascending = "ASCENDING",
    Descending = "DESCENDING"
}
export declare class DfareportingTargetableRemarketingListsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    active?: boolean;
    advertiserId: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    maxResults?: number;
    name?: string;
    oauthToken?: string;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    sortField?: DfareportingTargetableRemarketingListsListSortFieldEnum;
    sortOrder?: DfareportingTargetableRemarketingListsListSortOrderEnum;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class DfareportingTargetableRemarketingListsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DfareportingTargetableRemarketingListsListRequest extends SpeakeasyBase {
    pathParams: DfareportingTargetableRemarketingListsListPathParams;
    queryParams: DfareportingTargetableRemarketingListsListQueryParams;
    security: DfareportingTargetableRemarketingListsListSecurity;
}
export declare class DfareportingTargetableRemarketingListsListResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    targetableRemarketingListsListResponse?: shared.TargetableRemarketingListsListResponse;
}
