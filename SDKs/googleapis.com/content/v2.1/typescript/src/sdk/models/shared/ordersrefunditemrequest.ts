import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { OrdersCustomBatchRequestEntryRefundItemItem } from "./orderscustombatchrequestentryrefunditemitem";
import { OrdersCustomBatchRequestEntryRefundItemShipping } from "./orderscustombatchrequestentryrefunditemshipping";


export class OrdersRefundItemRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=items", elemType: shared.OrdersCustomBatchRequestEntryRefundItemItem })
  items?: OrdersCustomBatchRequestEntryRefundItemItem[];

  @Metadata({ data: "json, name=operationId" })
  operationId?: string;

  @Metadata({ data: "json, name=reason" })
  reason?: string;

  @Metadata({ data: "json, name=reasonText" })
  reasonText?: string;

  @Metadata({ data: "json, name=shipping" })
  shipping?: OrdersCustomBatchRequestEntryRefundItemShipping;
}
