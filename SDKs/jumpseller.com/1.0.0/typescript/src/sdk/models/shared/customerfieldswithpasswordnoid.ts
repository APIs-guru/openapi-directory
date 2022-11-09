import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum CustomerFieldsWithPasswordNoIdStatusEnum {
    Approved = "approved"
,    Pending = "pending"
,    Disabled = "disabled"
}


export class CustomerFieldsWithPasswordNoId extends SpeakeasyBase {
  @Metadata({ data: "json, name=billing_address" })
  billingAddress?: any;

  @Metadata({ data: "json, name=customer_category" })
  customerCategory?: number[];

  @Metadata({ data: "json, name=email" })
  email?: string;

  @Metadata({ data: "json, name=password" })
  password?: string;

  @Metadata({ data: "json, name=phone" })
  phone?: string;

  @Metadata({ data: "json, name=shipping_address" })
  shippingAddress?: any;

  @Metadata({ data: "json, name=status" })
  status?: CustomerFieldsWithPasswordNoIdStatusEnum;
}
