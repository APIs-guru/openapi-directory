import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum CustomFieldEditFieldsTypeEnum {
    Text = "text",
    Selection = "selection",
    Input = "input"
}


export class CustomFieldEditFields extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=label" })
  label?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: CustomFieldEditFieldsTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=values" })
  values?: string[];
}
