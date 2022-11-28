import { SpeakeasyBase } from "../../../internal/utils";
import { LastModifiedInfo } from "./lastmodifiedinfo";
export declare enum OrderDocumentTypeEnum {
    PlanningOrderTypeInsertionOrder = "PLANNING_ORDER_TYPE_INSERTION_ORDER",
    PlanningOrderTypeChangeOrder = "PLANNING_ORDER_TYPE_CHANGE_ORDER"
}
/**
 * Contains properties of a Planning order document.
**/
export declare class OrderDocument extends SpeakeasyBase {
    accountId?: string;
    advertiserId?: string;
    amendedOrderDocumentId?: string;
    approvedByUserProfileIds?: string[];
    cancelled?: boolean;
    createdInfo?: LastModifiedInfo;
    effectiveDate?: Date;
    id?: string;
    kind?: string;
    lastSentRecipients?: string[];
    lastSentTime?: Date;
    orderId?: string;
    projectId?: string;
    signed?: boolean;
    subaccountId?: string;
    title?: string;
    type?: OrderDocumentTypeEnum;
}
