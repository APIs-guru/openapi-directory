import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum HookEditFieldsEventEnum {
    OrderUpdated = "order_updated"
,    OrderPendingPayment = "order_pending_payment"
,    OrderPaid = "order_paid"
,    OrderShipped = "order_shipped"
,    OrderCanceled = "order_canceled"
,    OrderAbandoned = "order_abandoned"
,    ProductCreated = "product_created"
,    ProductUpdated = "product_updated"
,    ProductDeleted = "product_deleted"
,    CustomerCreated = "customer_created"
,    CustomerUpdated = "customer_updated"
,    CustomerDeleted = "customer_deleted"
}


export class HookEditFields extends SpeakeasyBase {
  @Metadata({ data: "json, name=event" })
  event: HookEditFieldsEventEnum;

  @Metadata({ data: "json, name=url" })
  url: string;
}
