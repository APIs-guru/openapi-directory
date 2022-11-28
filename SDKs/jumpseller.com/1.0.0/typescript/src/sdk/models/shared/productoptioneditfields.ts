import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum ProductOptionEditFieldsOptionTypeEnum {
    Option = "option",
    Input = "input",
    Text = "text",
    File = "file"
}


export class ProductOptionEditFields extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=option_type" })
  optionType?: ProductOptionEditFieldsOptionTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=position" })
  position?: number;
}
