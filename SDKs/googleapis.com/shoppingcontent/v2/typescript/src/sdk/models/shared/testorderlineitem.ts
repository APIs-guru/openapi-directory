import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { TestOrderLineItemProduct } from "./testorderlineitemproduct";
import { OrderLineItemReturnInfo } from "./orderlineitemreturninfo";
import { OrderLineItemShippingDetails } from "./orderlineitemshippingdetails";
import { Price } from "./price";


export class TestOrderLineItem extends SpeakeasyBase {
  @Metadata({ data: "json, name=product" })
  product?: TestOrderLineItemProduct;

  @Metadata({ data: "json, name=quantityOrdered" })
  quantityOrdered?: number;

  @Metadata({ data: "json, name=returnInfo" })
  returnInfo?: OrderLineItemReturnInfo;

  @Metadata({ data: "json, name=shippingDetails" })
  shippingDetails?: OrderLineItemShippingDetails;

  @Metadata({ data: "json, name=unitTax" })
  unitTax?: Price;
}
