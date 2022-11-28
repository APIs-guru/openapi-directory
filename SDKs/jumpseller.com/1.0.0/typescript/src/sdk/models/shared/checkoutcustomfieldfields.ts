import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum CheckoutCustomFieldFieldsAreaEnum {
    Contact = "contact",
    BillingShipping = "billing_shipping",
    Other = "other"
}

export enum CheckoutCustomFieldFieldsTypeEnum {
    Text = "text",
    Select = "select",
    Input = "input",
    Checkbox = "checkbox"
}


export class CheckoutCustomFieldFields extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=area" })
  area?: CheckoutCustomFieldFieldsAreaEnum;

  @SpeakeasyMetadata({ data: "json, name=custom_field_select_options" })
  customFieldSelectOptions?: string[];

  @SpeakeasyMetadata({ data: "json, name=deletable" })
  deletable?: boolean;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=label" })
  label?: string;

  @SpeakeasyMetadata({ data: "json, name=position" })
  position?: number;

  @SpeakeasyMetadata({ data: "json, name=required" })
  required?: boolean;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: CheckoutCustomFieldFieldsTypeEnum;
}
