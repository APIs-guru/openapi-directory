import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DfareportingPlacementStrategiesListPathParams extends SpeakeasyBase {
    profileId: string;
}
export declare enum DfareportingPlacementStrategiesListSortFieldEnum {
    Id = "ID",
    Name = "NAME"
}
export declare enum DfareportingPlacementStrategiesListSortOrderEnum {
    Ascending = "ASCENDING",
    Descending = "DESCENDING"
}
export declare class DfareportingPlacementStrategiesListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    ids?: string[];
    key?: string;
    maxResults?: number;
    oauthToken?: string;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    searchString?: string;
    sortField?: DfareportingPlacementStrategiesListSortFieldEnum;
    sortOrder?: DfareportingPlacementStrategiesListSortOrderEnum;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class DfareportingPlacementStrategiesListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DfareportingPlacementStrategiesListRequest extends SpeakeasyBase {
    pathParams: DfareportingPlacementStrategiesListPathParams;
    queryParams: DfareportingPlacementStrategiesListQueryParams;
    security: DfareportingPlacementStrategiesListSecurity;
}
export declare class DfareportingPlacementStrategiesListResponse extends SpeakeasyBase {
    contentType: string;
    placementStrategiesListResponse?: shared.PlacementStrategiesListResponse;
    statusCode: number;
}
