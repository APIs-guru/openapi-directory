import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class LanguagesResource extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=language" })
  language?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
