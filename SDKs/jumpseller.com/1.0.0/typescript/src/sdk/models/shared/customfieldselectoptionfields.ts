import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CustomFieldSelectOptionFields extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: number;

  @Metadata({ data: "json, name=value" })
  value?: string;
}
