import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { TestOrderDeliveryDetails } from "./testorderdeliverydetails";
import { TestOrderLineItem } from "./testorderlineitem";
import { TestOrderPickupDetails } from "./testorderpickupdetails";
import { OrderPromotion } from "./orderpromotion";
import { Price } from "./price";



export class TestOrder extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=deliveryDetails" })
  deliveryDetails?: TestOrderDeliveryDetails;

  @SpeakeasyMetadata({ data: "json, name=enableOrderinvoices" })
  enableOrderinvoices?: boolean;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=lineItems", elemType: TestOrderLineItem })
  lineItems?: TestOrderLineItem[];

  @SpeakeasyMetadata({ data: "json, name=notificationMode" })
  notificationMode?: string;

  @SpeakeasyMetadata({ data: "json, name=pickupDetails" })
  pickupDetails?: TestOrderPickupDetails;

  @SpeakeasyMetadata({ data: "json, name=predefinedBillingAddress" })
  predefinedBillingAddress?: string;

  @SpeakeasyMetadata({ data: "json, name=predefinedDeliveryAddress" })
  predefinedDeliveryAddress?: string;

  @SpeakeasyMetadata({ data: "json, name=predefinedEmail" })
  predefinedEmail?: string;

  @SpeakeasyMetadata({ data: "json, name=predefinedPickupDetails" })
  predefinedPickupDetails?: string;

  @SpeakeasyMetadata({ data: "json, name=promotions", elemType: OrderPromotion })
  promotions?: OrderPromotion[];

  @SpeakeasyMetadata({ data: "json, name=shippingCost" })
  shippingCost?: Price;

  @SpeakeasyMetadata({ data: "json, name=shippingOption" })
  shippingOption?: string;
}
