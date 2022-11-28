import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DfareportingFloodlightActivityGroupsListPathParams extends SpeakeasyBase {
    profileId: string;
}
export declare enum DfareportingFloodlightActivityGroupsListSortFieldEnum {
    Id = "ID",
    Name = "NAME"
}
export declare enum DfareportingFloodlightActivityGroupsListSortOrderEnum {
    Ascending = "ASCENDING",
    Descending = "DESCENDING"
}
export declare enum DfareportingFloodlightActivityGroupsListTypeEnum {
    Counter = "COUNTER",
    Sale = "SALE"
}
export declare class DfareportingFloodlightActivityGroupsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    advertiserId?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    floodlightConfigurationId?: string;
    ids?: string[];
    key?: string;
    maxResults?: number;
    oauthToken?: string;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    searchString?: string;
    sortField?: DfareportingFloodlightActivityGroupsListSortFieldEnum;
    sortOrder?: DfareportingFloodlightActivityGroupsListSortOrderEnum;
    type?: DfareportingFloodlightActivityGroupsListTypeEnum;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class DfareportingFloodlightActivityGroupsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DfareportingFloodlightActivityGroupsListRequest extends SpeakeasyBase {
    pathParams: DfareportingFloodlightActivityGroupsListPathParams;
    queryParams: DfareportingFloodlightActivityGroupsListQueryParams;
    security: DfareportingFloodlightActivityGroupsListSecurity;
}
export declare class DfareportingFloodlightActivityGroupsListResponse extends SpeakeasyBase {
    contentType: string;
    floodlightActivityGroupsListResponse?: shared.FloodlightActivityGroupsListResponse;
    statusCode: number;
}
