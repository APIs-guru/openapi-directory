import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// PaymentMethodData
/** 
 * Credit card information.
**/
export class PaymentMethodData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=card_type" })
  cardType?: string;

  @SpeakeasyMetadata({ data: "json, name=expiry" })
  expiry?: string;

  @SpeakeasyMetadata({ data: "json, name=last_four" })
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
  @SpeakeasyMetadata({ data: "json, name=created" })
  created?: Date;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: PaymentMethodData;

  @SpeakeasyMetadata({ data: "json, name=is_default" })
  isDefault?: boolean;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: PaymentMethodTypeEnum;
}
