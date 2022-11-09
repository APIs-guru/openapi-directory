import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class GetLanguagesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=languages" })
  languages: string[];
}
