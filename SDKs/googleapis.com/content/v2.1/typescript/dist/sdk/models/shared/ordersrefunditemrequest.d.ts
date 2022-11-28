import { SpeakeasyBase } from "../../../internal/utils";
import { OrdersCustomBatchRequestEntryRefundItemItem } from "./orderscustombatchrequestentryrefunditemitem";
import { OrdersCustomBatchRequestEntryRefundItemShipping } from "./orderscustombatchrequestentryrefunditemshipping";
export declare class OrdersRefundItemRequest extends SpeakeasyBase {
    items?: OrdersCustomBatchRequestEntryRefundItemItem[];
    operationId?: string;
    reason?: string;
    reasonText?: string;
    shipping?: OrdersCustomBatchRequestEntryRefundItemShipping;
}
