import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { OrderAddress } from "./orderaddress";


export class OrderPaymentMethod extends SpeakeasyBase {
  @Metadata({ data: "json, name=billingAddress" })
  billingAddress?: OrderAddress;

  @Metadata({ data: "json, name=expirationMonth" })
  expirationMonth?: number;

  @Metadata({ data: "json, name=expirationYear" })
  expirationYear?: number;

  @Metadata({ data: "json, name=lastFourDigits" })
  lastFourDigits?: string;

  @Metadata({ data: "json, name=phoneNumber" })
  phoneNumber?: string;

  @Metadata({ data: "json, name=type" })
  type?: string;
}
