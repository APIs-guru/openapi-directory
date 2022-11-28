import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Translation } from "./translation";



export class TranslateTextResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=glossaryTranslations", elemType: Translation })
  glossaryTranslations?: Translation[];

  @SpeakeasyMetadata({ data: "json, name=translations", elemType: Translation })
  translations?: Translation[];
}
