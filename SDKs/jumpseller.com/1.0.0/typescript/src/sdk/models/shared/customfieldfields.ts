import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum CustomFieldFieldsTypeEnum {
    Text = "text",
    Selection = "selection",
    Input = "input"
}


export class CustomFieldFields extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=label" })
  label?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: CustomFieldFieldsTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=values" })
  values?: string[];
}
