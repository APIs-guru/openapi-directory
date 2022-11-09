import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { TestOrderCustomer } from "./testordercustomer";
import { TestOrderLineItem } from "./testorderlineitem";
import { TestOrderPaymentMethod } from "./testorderpaymentmethod";
import { OrderLegacyPromotion } from "./orderlegacypromotion";
import { Price } from "./price";
import { Price } from "./price";


export class TestOrder extends SpeakeasyBase {
  @Metadata({ data: "json, name=customer" })
  customer?: TestOrderCustomer;

  @Metadata({ data: "json, name=enableOrderinvoices" })
  enableOrderinvoices?: boolean;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=lineItems", elemType: shared.TestOrderLineItem })
  lineItems?: TestOrderLineItem[];

  @Metadata({ data: "json, name=notificationMode" })
  notificationMode?: string;

  @Metadata({ data: "json, name=paymentMethod" })
  paymentMethod?: TestOrderPaymentMethod;

  @Metadata({ data: "json, name=predefinedDeliveryAddress" })
  predefinedDeliveryAddress?: string;

  @Metadata({ data: "json, name=predefinedPickupDetails" })
  predefinedPickupDetails?: string;

  @Metadata({ data: "json, name=promotions", elemType: shared.OrderLegacyPromotion })
  promotions?: OrderLegacyPromotion[];

  @Metadata({ data: "json, name=shippingCost" })
  shippingCost?: Price;

  @Metadata({ data: "json, name=shippingCostTax" })
  shippingCostTax?: Price;

  @Metadata({ data: "json, name=shippingOption" })
  shippingOption?: string;
}
