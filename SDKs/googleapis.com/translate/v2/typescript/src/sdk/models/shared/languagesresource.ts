import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class LanguagesResource extends SpeakeasyBase {
  @Metadata({ data: "json, name=language" })
  language?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;
}
