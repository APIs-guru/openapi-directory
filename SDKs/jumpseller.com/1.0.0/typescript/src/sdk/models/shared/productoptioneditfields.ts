import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum ProductOptionEditFieldsOptionTypeEnum {
    Option = "option"
,    Input = "input"
,    Text = "text"
,    File = "file"
}


export class ProductOptionEditFields extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=option_type" })
  optionType?: ProductOptionEditFieldsOptionTypeEnum;

  @Metadata({ data: "json, name=position" })
  position?: number;
}
