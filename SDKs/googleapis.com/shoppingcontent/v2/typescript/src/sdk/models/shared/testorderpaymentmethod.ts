import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class TestOrderPaymentMethod extends SpeakeasyBase {
  @Metadata({ data: "json, name=expirationMonth" })
  expirationMonth?: number;

  @Metadata({ data: "json, name=expirationYear" })
  expirationYear?: number;

  @Metadata({ data: "json, name=lastFourDigits" })
  lastFourDigits?: string;

  @Metadata({ data: "json, name=predefinedBillingAddress" })
  predefinedBillingAddress?: string;

  @Metadata({ data: "json, name=type" })
  type?: string;
}
