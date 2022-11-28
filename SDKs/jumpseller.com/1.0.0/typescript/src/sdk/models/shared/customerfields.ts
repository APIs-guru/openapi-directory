import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CustomerAdditionalField } from "./customeradditionalfield";
import { CustomerCategory } from "./customercategory";


export enum CustomerFieldsStatusEnum {
    Approved = "approved",
    Pending = "pending",
    Disabled = "disabled"
}


export class CustomerFields extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=billing_address" })
  billingAddress?: any;

  @SpeakeasyMetadata({ data: "json, name=customer_additional_fields", elemType: CustomerAdditionalField })
  customerAdditionalFields?: CustomerAdditionalField[];

  @SpeakeasyMetadata({ data: "json, name=customer_categories", elemType: CustomerCategory })
  customerCategories?: CustomerCategory[];

  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=phone" })
  phone?: string;

  @SpeakeasyMetadata({ data: "json, name=shipping_address" })
  shippingAddress?: any;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: CustomerFieldsStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=surname" })
  surname?: string;
}
