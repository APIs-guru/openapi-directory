import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class LabelColor extends SpeakeasyBase {
  @Metadata({ data: "json, name=backgroundColor" })
  backgroundColor?: string;

  @Metadata({ data: "json, name=textColor" })
  textColor?: string;
}
