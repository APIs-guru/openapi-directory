import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DfareportingInventoryItemsListPathParams extends SpeakeasyBase {
    profileId: string;
    projectId: string;
}
export declare enum DfareportingInventoryItemsListSortFieldEnum {
    Id = "ID",
    Name = "NAME"
}
export declare enum DfareportingInventoryItemsListSortOrderEnum {
    Ascending = "ASCENDING",
    Descending = "DESCENDING"
}
export declare enum DfareportingInventoryItemsListTypeEnum {
    PlanningPlacementTypeRegular = "PLANNING_PLACEMENT_TYPE_REGULAR",
    PlanningPlacementTypeCredit = "PLANNING_PLACEMENT_TYPE_CREDIT"
}
export declare class DfareportingInventoryItemsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    ids?: string[];
    inPlan?: boolean;
    key?: string;
    maxResults?: number;
    oauthToken?: string;
    orderId?: string[];
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    siteId?: string[];
    sortField?: DfareportingInventoryItemsListSortFieldEnum;
    sortOrder?: DfareportingInventoryItemsListSortOrderEnum;
    type?: DfareportingInventoryItemsListTypeEnum;
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class DfareportingInventoryItemsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class DfareportingInventoryItemsListRequest extends SpeakeasyBase {
    pathParams: DfareportingInventoryItemsListPathParams;
    queryParams: DfareportingInventoryItemsListQueryParams;
    security: DfareportingInventoryItemsListSecurity;
}
export declare class DfareportingInventoryItemsListResponse extends SpeakeasyBase {
    contentType: string;
    inventoryItemsListResponse?: shared.InventoryItemsListResponse;
    statusCode: number;
}
