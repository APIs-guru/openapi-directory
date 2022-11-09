import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum CheckoutCustomFieldEditFieldsAreaEnum {
    Contact = "contact"
,    BillingShipping = "billing_shipping"
,    Other = "other"
}

export enum CheckoutCustomFieldEditFieldsTypeEnum {
    Text = "text"
,    Select = "select"
,    Input = "input"
,    Checkbox = "checkbox"
,    Date = "date"
}


export class CheckoutCustomFieldEditFields extends SpeakeasyBase {
  @Metadata({ data: "json, name=area" })
  area?: CheckoutCustomFieldEditFieldsAreaEnum;

  @Metadata({ data: "json, name=custom_field_select_options" })
  customFieldSelectOptions?: string[];

  @Metadata({ data: "json, name=deletable" })
  deletable?: boolean;

  @Metadata({ data: "json, name=label" })
  label?: string;

  @Metadata({ data: "json, name=position" })
  position?: number;

  @Metadata({ data: "json, name=required" })
  required?: boolean;

  @Metadata({ data: "json, name=type" })
  type?: CheckoutCustomFieldEditFieldsTypeEnum;
}
