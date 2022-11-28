import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DfareportingDirectorySitesListPathParams extends SpeakeasyBase {
    profileId: string;
}
export declare enum DfareportingDirectorySitesListSortFieldEnum {
    Id = "ID",
    Name = "NAME"
}
export declare enum DfareportingDirectorySitesListSortOrderEnum {
    Ascending = "ASCENDING",
    Descending = "DESCENDING"
}
export declare class DfareportingDirectorySitesListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    acceptsInStreamVideoPlacements?: boolean;
    acceptsInterstitialPlacements?: boolean;
    acceptsPublisherPaidPlacements?: boolean;
    accessToken?: string;
    active?: boolean;
    alt?: shared.AltEnum;
    callback?: string;
    dfpNetworkCode?: string;
    fields?: string;
    ids?: string[];
    key?: string;
    maxResults?: number;
    oauthToken?: string;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    searchString?: string;
    sortField?: DfareportingDirectorySitesListSortFieldEnum;
    sortOrder?: DfareportingDirectorySitesListSortOrderEnum;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class DfareportingDirectorySitesListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DfareportingDirectorySitesListRequest extends SpeakeasyBase {
    pathParams: DfareportingDirectorySitesListPathParams;
    queryParams: DfareportingDirectorySitesListQueryParams;
    security: DfareportingDirectorySitesListSecurity;
}
export declare class DfareportingDirectorySitesListResponse extends SpeakeasyBase {
    contentType: string;
    directorySitesListResponse?: shared.DirectorySitesListResponse;
    statusCode: number;
}
