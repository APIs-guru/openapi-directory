import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ContentOrderreturnsListPathParams extends SpeakeasyBase {
    merchantId: string;
}
export declare enum ContentOrderreturnsListOrderByEnum {
    ReturnCreationTimeDesc = "RETURN_CREATION_TIME_DESC",
    ReturnCreationTimeAsc = "RETURN_CREATION_TIME_ASC"
}
export declare enum ContentOrderreturnsListShipmentStatesEnum {
    New = "NEW",
    Shipped = "SHIPPED",
    Completed = "COMPLETED",
    Undeliverable = "UNDELIVERABLE",
    Pending = "PENDING"
}
export declare enum ContentOrderreturnsListShipmentStatusEnum {
    New = "NEW",
    InProgress = "IN_PROGRESS",
    Processed = "PROCESSED"
}
export declare enum ContentOrderreturnsListShipmentTypesEnum {
    ByMail = "BY_MAIL",
    Returnless = "RETURNLESS",
    ContactCustomerSupport = "CONTACT_CUSTOMER_SUPPORT"
}
export declare class ContentOrderreturnsListQueryParams extends SpeakeasyBase {
    dollarXgafv?: shared.XgafvEnum;
    accessToken?: string;
    acknowledged?: boolean;
    alt?: shared.AltEnum;
    callback?: string;
    createdEndDate?: string;
    createdStartDate?: string;
    fields?: string;
    googleOrderIds?: string[];
    key?: string;
    maxResults?: number;
    oauthToken?: string;
    orderBy?: ContentOrderreturnsListOrderByEnum;
    pageToken?: string;
    prettyPrint?: boolean;
    quotaUser?: string;
    shipmentStates?: ContentOrderreturnsListShipmentStatesEnum[];
    shipmentStatus?: ContentOrderreturnsListShipmentStatusEnum[];
    shipmentTrackingNumbers?: string[];
    shipmentTypes?: ContentOrderreturnsListShipmentTypesEnum[];
    uploadType?: string;
    uploadProtocol?: string;
}
export declare class ContentOrderreturnsListSecurity extends SpeakeasyBase {
    oauth2: shared.SchemeOauth2;
    oauth2c: shared.SchemeOauth2c;
}
export declare class ContentOrderreturnsListRequest extends SpeakeasyBase {
    pathParams: ContentOrderreturnsListPathParams;
    queryParams: ContentOrderreturnsListQueryParams;
    security: ContentOrderreturnsListSecurity;
}
export declare class ContentOrderreturnsListResponse extends SpeakeasyBase {
    contentType: string;
    orderreturnsListResponse?: shared.OrderreturnsListResponse;
    statusCode: number;
}
