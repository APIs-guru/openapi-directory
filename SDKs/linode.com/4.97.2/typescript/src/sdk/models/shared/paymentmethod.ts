import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// PaymentMethodData
/** 
 * Credit card information.
**/
export class PaymentMethodData extends SpeakeasyBase {
  @Metadata({ data: "json, name=card_type" })
  cardType?: string;

  @Metadata({ data: "json, name=expiry" })
  expiry?: string;

  @Metadata({ data: "json, name=last_four" })
  lastFour?: string;
}

export enum PaymentMethodTypeEnum {
    CreditCard = "credit_card"
}


// PaymentMethod
/** 
 * Payment Method Response Object.
**/
export class PaymentMethod extends SpeakeasyBase {
  @Metadata({ data: "json, name=created" })
  created?: Date;

  @Metadata({ data: "json, name=data" })
  data?: PaymentMethodData;

  @Metadata({ data: "json, name=is_default" })
  isDefault?: boolean;

  @Metadata({ data: "json, name=type" })
  type?: PaymentMethodTypeEnum;
}
