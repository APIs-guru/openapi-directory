import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DfareportingOrdersListPathParams extends SpeakeasyBase {
    profileId: string;
    projectId: string;
}
export declare enum DfareportingOrdersListSortFieldEnum {
    Id = "ID",
    Name = "NAME"
}
export declare enum DfareportingOrdersListSortOrderEnum {
    Ascending = "ASCENDING",
    Descending = "DESCENDING"
}
export declare class DfareportingOrdersListQueryParams extends SpeakeasyBase {
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
    siteId?: string[];
    sortField?: DfareportingOrdersListSortFieldEnum;
    sortOrder?: DfareportingOrdersListSortOrderEnum;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class DfareportingOrdersListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DfareportingOrdersListRequest extends SpeakeasyBase {
    pathParams: DfareportingOrdersListPathParams;
    queryParams: DfareportingOrdersListQueryParams;
    security: DfareportingOrdersListSecurity;
}
export declare class DfareportingOrdersListResponse extends SpeakeasyBase {
    contentType: string;
    ordersListResponse?: shared.OrdersListResponse;
    statusCode: number;
}
