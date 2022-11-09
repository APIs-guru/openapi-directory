import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { OrderLineItemAdjustment } from "./orderlineitemadjustment";
import { OrderMerchantProvidedAnnotation } from "./ordermerchantprovidedannotation";
import { OrderCancellation } from "./ordercancellation";
import { Price } from "./price";
import { OrderLineItemProduct } from "./orderlineitemproduct";
import { OrderLineItemReturnInfo } from "./orderlineitemreturninfo";
import { OrderReturn } from "./orderreturn";
import { OrderLineItemShippingDetails } from "./orderlineitemshippingdetails";
import { Price } from "./price";


export class OrderLineItem extends SpeakeasyBase {
  @Metadata({ data: "json, name=adjustments", elemType: shared.OrderLineItemAdjustment })
  adjustments?: OrderLineItemAdjustment[];

  @Metadata({ data: "json, name=annotations", elemType: shared.OrderMerchantProvidedAnnotation })
  annotations?: OrderMerchantProvidedAnnotation[];

  @Metadata({ data: "json, name=cancellations", elemType: shared.OrderCancellation })
  cancellations?: OrderCancellation[];

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=price" })
  price?: Price;

  @Metadata({ data: "json, name=product" })
  product?: OrderLineItemProduct;

  @Metadata({ data: "json, name=quantityCanceled" })
  quantityCanceled?: number;

  @Metadata({ data: "json, name=quantityDelivered" })
  quantityDelivered?: number;

  @Metadata({ data: "json, name=quantityOrdered" })
  quantityOrdered?: number;

  @Metadata({ data: "json, name=quantityPending" })
  quantityPending?: number;

  @Metadata({ data: "json, name=quantityReadyForPickup" })
  quantityReadyForPickup?: number;

  @Metadata({ data: "json, name=quantityReturned" })
  quantityReturned?: number;

  @Metadata({ data: "json, name=quantityShipped" })
  quantityShipped?: number;

  @Metadata({ data: "json, name=quantityUndeliverable" })
  quantityUndeliverable?: number;

  @Metadata({ data: "json, name=returnInfo" })
  returnInfo?: OrderLineItemReturnInfo;

  @Metadata({ data: "json, name=returns", elemType: shared.OrderReturn })
  returns?: OrderReturn[];

  @Metadata({ data: "json, name=shippingDetails" })
  shippingDetails?: OrderLineItemShippingDetails;

  @Metadata({ data: "json, name=tax" })
  tax?: Price;
}
