import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CustomFieldSelectOptionEditFields extends SpeakeasyBase {
  @Metadata({ data: "json, name=value" })
  value?: string;
}
