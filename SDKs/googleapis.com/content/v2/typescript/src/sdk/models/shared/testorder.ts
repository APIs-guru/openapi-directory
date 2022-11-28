import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TestOrderCustomer } from "./testordercustomer";
import { TestOrderLineItem } from "./testorderlineitem";
import { TestOrderPaymentMethod } from "./testorderpaymentmethod";
import { OrderLegacyPromotion } from "./orderlegacypromotion";
import { Price } from "./price";



export class TestOrder extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=customer" })
  customer?: TestOrderCustomer;

  @SpeakeasyMetadata({ data: "json, name=enableOrderinvoices" })
  enableOrderinvoices?: boolean;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=lineItems", elemType: TestOrderLineItem })
  lineItems?: TestOrderLineItem[];

  @SpeakeasyMetadata({ data: "json, name=notificationMode" })
  notificationMode?: string;

  @SpeakeasyMetadata({ data: "json, name=paymentMethod" })
  paymentMethod?: TestOrderPaymentMethod;

  @SpeakeasyMetadata({ data: "json, name=predefinedDeliveryAddress" })
  predefinedDeliveryAddress?: string;

  @SpeakeasyMetadata({ data: "json, name=predefinedPickupDetails" })
  predefinedPickupDetails?: string;

  @SpeakeasyMetadata({ data: "json, name=promotions", elemType: OrderLegacyPromotion })
  promotions?: OrderLegacyPromotion[];

  @SpeakeasyMetadata({ data: "json, name=shippingCost" })
  shippingCost?: Price;

  @SpeakeasyMetadata({ data: "json, name=shippingCostTax" })
  shippingCostTax?: Price;

  @SpeakeasyMetadata({ data: "json, name=shippingOption" })
  shippingOption?: string;
}
