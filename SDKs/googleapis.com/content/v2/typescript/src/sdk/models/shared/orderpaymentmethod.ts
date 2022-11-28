import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { OrderAddress } from "./orderaddress";



export class OrderPaymentMethod extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=billingAddress" })
  billingAddress?: OrderAddress;

  @SpeakeasyMetadata({ data: "json, name=expirationMonth" })
  expirationMonth?: number;

  @SpeakeasyMetadata({ data: "json, name=expirationYear" })
  expirationYear?: number;

  @SpeakeasyMetadata({ data: "json, name=lastFourDigits" })
  lastFourDigits?: string;

  @SpeakeasyMetadata({ data: "json, name=phoneNumber" })
  phoneNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}
