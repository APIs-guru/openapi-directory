import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OrderMerchantProvidedAnnotation } from "./ordermerchantprovidedannotation";
import { OrderCancellation } from "./ordercancellation";
import { Price } from "./price";
import { OrderLineItemProduct } from "./orderlineitemproduct";
import { OrderLineItemReturnInfo } from "./orderlineitemreturninfo";
import { OrderReturn } from "./orderreturn";
import { OrderLineItemShippingDetails } from "./orderlineitemshippingdetails";



export class OrderLineItem extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=annotations", elemType: OrderMerchantProvidedAnnotation })
  annotations?: OrderMerchantProvidedAnnotation[];

  @SpeakeasyMetadata({ data: "json, name=cancellations", elemType: OrderCancellation })
  cancellations?: OrderCancellation[];

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=price" })
  price?: Price;

  @SpeakeasyMetadata({ data: "json, name=product" })
  product?: OrderLineItemProduct;

  @SpeakeasyMetadata({ data: "json, name=quantityCanceled" })
  quantityCanceled?: number;

  @SpeakeasyMetadata({ data: "json, name=quantityDelivered" })
  quantityDelivered?: number;

  @SpeakeasyMetadata({ data: "json, name=quantityOrdered" })
  quantityOrdered?: number;

  @SpeakeasyMetadata({ data: "json, name=quantityPending" })
  quantityPending?: number;

  @SpeakeasyMetadata({ data: "json, name=quantityReadyForPickup" })
  quantityReadyForPickup?: number;

  @SpeakeasyMetadata({ data: "json, name=quantityReturned" })
  quantityReturned?: number;

  @SpeakeasyMetadata({ data: "json, name=quantityShipped" })
  quantityShipped?: number;

  @SpeakeasyMetadata({ data: "json, name=returnInfo" })
  returnInfo?: OrderLineItemReturnInfo;

  @SpeakeasyMetadata({ data: "json, name=returns", elemType: OrderReturn })
  returns?: OrderReturn[];

  @SpeakeasyMetadata({ data: "json, name=shippingDetails" })
  shippingDetails?: OrderLineItemShippingDetails;

  @SpeakeasyMetadata({ data: "json, name=tax" })
  tax?: Price;
}
