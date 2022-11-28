import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum CustomerFieldsWithPasswordNoIdStatusEnum {
    Approved = "approved",
    Pending = "pending",
    Disabled = "disabled"
}


export class CustomerFieldsWithPasswordNoId extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=billing_address" })
  billingAddress?: any;

  @SpeakeasyMetadata({ data: "json, name=customer_category" })
  customerCategory?: number[];

  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=password" })
  password?: string;

  @SpeakeasyMetadata({ data: "json, name=phone" })
  phone?: string;

  @SpeakeasyMetadata({ data: "json, name=shipping_address" })
  shippingAddress?: any;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: CustomerFieldsWithPasswordNoIdStatusEnum;
}
