import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DfareportingFloodlightActivitiesListPathParams extends SpeakeasyBase {
    profileId: string;
}
export declare enum DfareportingFloodlightActivitiesListFloodlightActivityGroupTypeEnum {
    Counter = "COUNTER",
    Sale = "SALE"
}
export declare enum DfareportingFloodlightActivitiesListSortFieldEnum {
    Id = "ID",
    Name = "NAME"
}
export declare enum DfareportingFloodlightActivitiesListSortOrderEnum {
    Ascending = "ASCENDING",
    Descending = "DESCENDING"
}
export declare class DfareportingFloodlightActivitiesListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    advertiserId?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    floodlightActivityGroupIds?: string[];
    floodlightActivityGroupName?: string;
    floodlightActivityGroupTagString?: string;
    floodlightActivityGroupType?: DfareportingFloodlightActivitiesListFloodlightActivityGroupTypeEnum;
    floodlightConfigurationId?: string;
    ids?: string[];
    key?: string;
    maxResults?: number;
    oauthToken?: string;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    searchString?: string;
    sortField?: DfareportingFloodlightActivitiesListSortFieldEnum;
    sortOrder?: DfareportingFloodlightActivitiesListSortOrderEnum;
    tagString?: string;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class DfareportingFloodlightActivitiesListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DfareportingFloodlightActivitiesListRequest extends SpeakeasyBase {
    pathParams: DfareportingFloodlightActivitiesListPathParams;
    queryParams: DfareportingFloodlightActivitiesListQueryParams;
    security: DfareportingFloodlightActivitiesListSecurity;
}
export declare class DfareportingFloodlightActivitiesListResponse extends SpeakeasyBase {
    contentType: string;
    floodlightActivitiesListResponse?: shared.FloodlightActivitiesListResponse;
    statusCode: number;
}
