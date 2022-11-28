import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetLanguagesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=languages" })
  languages: string[];
}
