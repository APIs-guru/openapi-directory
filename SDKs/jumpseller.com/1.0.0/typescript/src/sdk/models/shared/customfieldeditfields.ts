import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum CustomFieldEditFieldsTypeEnum {
    Text = "text"
,    Selection = "selection"
,    Input = "input"
}


export class CustomFieldEditFields extends SpeakeasyBase {
  @Metadata({ data: "json, name=label" })
  label?: string;

  @Metadata({ data: "json, name=type" })
  type?: CustomFieldEditFieldsTypeEnum;

  @Metadata({ data: "json, name=values" })
  values?: string[];
}
