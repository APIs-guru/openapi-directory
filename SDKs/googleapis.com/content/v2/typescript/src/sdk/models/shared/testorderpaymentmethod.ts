import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class TestOrderPaymentMethod extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=expirationMonth" })
  expirationMonth?: number;

  @SpeakeasyMetadata({ data: "json, name=expirationYear" })
  expirationYear?: number;

  @SpeakeasyMetadata({ data: "json, name=lastFourDigits" })
  lastFourDigits?: string;

  @SpeakeasyMetadata({ data: "json, name=predefinedBillingAddress" })
  predefinedBillingAddress?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}
