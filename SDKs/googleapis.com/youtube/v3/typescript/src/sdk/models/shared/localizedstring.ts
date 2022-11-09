import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class LocalizedString extends SpeakeasyBase {
  @Metadata({ data: "json, name=language" })
  language?: string;

  @Metadata({ data: "json, name=value" })
  value?: string;
}
