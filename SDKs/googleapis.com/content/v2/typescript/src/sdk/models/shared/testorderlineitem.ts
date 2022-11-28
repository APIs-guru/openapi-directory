import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TestOrderLineItemProduct } from "./testorderlineitemproduct";
import { OrderLineItemReturnInfo } from "./orderlineitemreturninfo";
import { OrderLineItemShippingDetails } from "./orderlineitemshippingdetails";
import { Price } from "./price";



export class TestOrderLineItem extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=product" })
  product?: TestOrderLineItemProduct;

  @SpeakeasyMetadata({ data: "json, name=quantityOrdered" })
  quantityOrdered?: number;

  @SpeakeasyMetadata({ data: "json, name=returnInfo" })
  returnInfo?: OrderLineItemReturnInfo;

  @SpeakeasyMetadata({ data: "json, name=shippingDetails" })
  shippingDetails?: OrderLineItemShippingDetails;

  @SpeakeasyMetadata({ data: "json, name=unitTax" })
  unitTax?: Price;
}
