import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OrdersCustomBatchRequestEntryRefundItemItem } from "./orderscustombatchrequestentryrefunditemitem";
import { OrdersCustomBatchRequestEntryRefundItemShipping } from "./orderscustombatchrequestentryrefunditemshipping";



export class OrdersRefundItemRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=items", elemType: OrdersCustomBatchRequestEntryRefundItemItem })
  items?: OrdersCustomBatchRequestEntryRefundItemItem[];

  @SpeakeasyMetadata({ data: "json, name=operationId" })
  operationId?: string;

  @SpeakeasyMetadata({ data: "json, name=reason" })
  reason?: string;

  @SpeakeasyMetadata({ data: "json, name=reasonText" })
  reasonText?: string;

  @SpeakeasyMetadata({ data: "json, name=shipping" })
  shipping?: OrdersCustomBatchRequestEntryRefundItemShipping;
}
