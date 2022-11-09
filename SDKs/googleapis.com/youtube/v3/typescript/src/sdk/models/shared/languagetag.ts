import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class LanguageTag extends SpeakeasyBase {
  @Metadata({ data: "json, name=value" })
  value?: string;
}
