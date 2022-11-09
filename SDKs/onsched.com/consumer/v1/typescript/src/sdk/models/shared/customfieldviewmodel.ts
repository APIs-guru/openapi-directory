import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class CustomFieldViewModel extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=value" })
  value?: string;
}
