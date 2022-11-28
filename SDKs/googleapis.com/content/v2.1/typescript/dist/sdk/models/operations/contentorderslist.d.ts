import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ContentOrdersListPathParams extends SpeakeasyBase {
    merchantId: string;
}
export declare enum ContentOrdersListStatusesEnum {
    Active = "ACTIVE",
    Completed = "COMPLETED",
    Canceled = "CANCELED",
    InProgress = "IN_PROGRESS",
    PendingShipment = "PENDING_SHIPMENT",
    PartiallyShipped = "PARTIALLY_SHIPPED",
    Shipped = "SHIPPED",
    PartiallyDelivered = "PARTIALLY_DELIVERED",
    Delivered = "DELIVERED",
    PartiallyReturned = "PARTIALLY_RETURNED",
    Returned = "RETURNED"
}
export declare class ContentOrdersListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    acknowledged?: boolean;
    alt?: shared.AltEnum;
    callback?: string;
    fields?: string;
    key?: string;
    maxResults?: number;
    oauthToken?: string;
    orderBy?: string;
    pageToken?: string;
    placedDateEnd?: string;
    placedDateStart?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    statuses?: ContentOrdersListStatusesEnum[];
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class ContentOrdersListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ContentOrdersListRequest extends SpeakeasyBase {
    pathParams: ContentOrdersListPathParams;
    queryParams: ContentOrdersListQueryParams;
    security: ContentOrdersListSecurity;
}
export declare class ContentOrdersListResponse extends SpeakeasyBase {
    contentType: string;
    ordersListResponse?: shared.OrdersListResponse;
    statusCode: number;
}
