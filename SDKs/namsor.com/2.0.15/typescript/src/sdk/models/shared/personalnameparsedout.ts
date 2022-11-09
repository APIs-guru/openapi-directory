import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { FirstLastNameOut } from "./firstlastnameout";


export class PersonalNameParsedOut extends SpeakeasyBase {
  @Metadata({ data: "json, name=firstLastName" })
  firstLastName?: FirstLastNameOut;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=nameParserType" })
  nameParserType?: string;

  @Metadata({ data: "json, name=nameParserTypeAlt" })
  nameParserTypeAlt?: string;

  @Metadata({ data: "json, name=score" })
  score?: number;

  @Metadata({ data: "json, name=script" })
  script?: string;
}
