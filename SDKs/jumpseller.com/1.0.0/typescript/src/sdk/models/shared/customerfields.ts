import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { CustomerAdditionalField } from "./customeradditionalfield";
import { CustomerCategory } from "./customercategory";

export enum CustomerFieldsStatusEnum {
    Approved = "approved"
,    Pending = "pending"
,    Disabled = "disabled"
}


export class CustomerFields extends SpeakeasyBase {
  @Metadata({ data: "json, name=billing_address" })
  billingAddress?: any;

  @Metadata({ data: "json, name=customer_additional_fields", elemType: shared.CustomerAdditionalField })
  customerAdditionalFields?: CustomerAdditionalField[];

  @Metadata({ data: "json, name=customer_categories", elemType: shared.CustomerCategory })
  customerCategories?: CustomerCategory[];

  @Metadata({ data: "json, name=email" })
  email?: string;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=phone" })
  phone?: string;

  @Metadata({ data: "json, name=shipping_address" })
  shippingAddress?: any;

  @Metadata({ data: "json, name=status" })
  status?: CustomerFieldsStatusEnum;

  @Metadata({ data: "json, name=surname" })
  surname?: string;
}
