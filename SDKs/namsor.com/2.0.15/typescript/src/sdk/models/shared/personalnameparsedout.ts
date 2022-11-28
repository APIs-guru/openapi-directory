import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FirstLastNameOut } from "./firstlastnameout";



export class PersonalNameParsedOut extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=firstLastName" })
  firstLastName?: FirstLastNameOut;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=nameParserType" })
  nameParserType?: string;

  @SpeakeasyMetadata({ data: "json, name=nameParserTypeAlt" })
  nameParserTypeAlt?: string;

  @SpeakeasyMetadata({ data: "json, name=score" })
  score?: number;

  @SpeakeasyMetadata({ data: "json, name=script" })
  script?: string;
}
