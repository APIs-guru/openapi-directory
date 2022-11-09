import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { TestOrderDeliveryDetails } from "./testorderdeliverydetails";
import { TestOrderLineItem } from "./testorderlineitem";
import { TestOrderPickupDetails } from "./testorderpickupdetails";
import { OrderPromotion } from "./orderpromotion";
import { Price } from "./price";


export class TestOrder extends SpeakeasyBase {
  @Metadata({ data: "json, name=deliveryDetails" })
  deliveryDetails?: TestOrderDeliveryDetails;

  @Metadata({ data: "json, name=enableOrderinvoices" })
  enableOrderinvoices?: boolean;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=lineItems", elemType: shared.TestOrderLineItem })
  lineItems?: TestOrderLineItem[];

  @Metadata({ data: "json, name=notificationMode" })
  notificationMode?: string;

  @Metadata({ data: "json, name=pickupDetails" })
  pickupDetails?: TestOrderPickupDetails;

  @Metadata({ data: "json, name=predefinedBillingAddress" })
  predefinedBillingAddress?: string;

  @Metadata({ data: "json, name=predefinedDeliveryAddress" })
  predefinedDeliveryAddress?: string;

  @Metadata({ data: "json, name=predefinedEmail" })
  predefinedEmail?: string;

  @Metadata({ data: "json, name=predefinedPickupDetails" })
  predefinedPickupDetails?: string;

  @Metadata({ data: "json, name=promotions", elemType: shared.OrderPromotion })
  promotions?: OrderPromotion[];

  @Metadata({ data: "json, name=shippingCost" })
  shippingCost?: Price;

  @Metadata({ data: "json, name=shippingOption" })
  shippingOption?: string;
}
