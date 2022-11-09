import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum CustomFieldFieldsTypeEnum {
    Text = "text"
,    Selection = "selection"
,    Input = "input"
}


export class CustomFieldFields extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=label" })
  label?: string;

  @Metadata({ data: "json, name=type" })
  type?: CustomFieldFieldsTypeEnum;

  @Metadata({ data: "json, name=values" })
  values?: string[];
}
