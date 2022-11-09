import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum CheckoutCustomFieldFieldsAreaEnum {
    Contact = "contact"
,    BillingShipping = "billing_shipping"
,    Other = "other"
}

export enum CheckoutCustomFieldFieldsTypeEnum {
    Text = "text"
,    Select = "select"
,    Input = "input"
,    Checkbox = "checkbox"
}


export class CheckoutCustomFieldFields extends SpeakeasyBase {
  @Metadata({ data: "json, name=area" })
  area?: CheckoutCustomFieldFieldsAreaEnum;

  @Metadata({ data: "json, name=custom_field_select_options" })
  customFieldSelectOptions?: string[];

  @Metadata({ data: "json, name=deletable" })
  deletable?: boolean;

  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=label" })
  label?: string;

  @Metadata({ data: "json, name=position" })
  position?: number;

  @Metadata({ data: "json, name=required" })
  required?: boolean;

  @Metadata({ data: "json, name=type" })
  type?: CheckoutCustomFieldFieldsTypeEnum;
}
