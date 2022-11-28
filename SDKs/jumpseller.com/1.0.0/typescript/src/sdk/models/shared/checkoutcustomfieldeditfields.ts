import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum CheckoutCustomFieldEditFieldsAreaEnum {
    Contact = "contact",
    BillingShipping = "billing_shipping",
    Other = "other"
}

export enum CheckoutCustomFieldEditFieldsTypeEnum {
    Text = "text",
    Select = "select",
    Input = "input",
    Checkbox = "checkbox",
    Date = "date"
}


export class CheckoutCustomFieldEditFields extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=area" })
  area?: CheckoutCustomFieldEditFieldsAreaEnum;

  @SpeakeasyMetadata({ data: "json, name=custom_field_select_options" })
  customFieldSelectOptions?: string[];

  @SpeakeasyMetadata({ data: "json, name=deletable" })
  deletable?: boolean;

  @SpeakeasyMetadata({ data: "json, name=label" })
  label?: string;

  @SpeakeasyMetadata({ data: "json, name=position" })
  position?: number;

  @SpeakeasyMetadata({ data: "json, name=required" })
  required?: boolean;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: CheckoutCustomFieldEditFieldsTypeEnum;
}
