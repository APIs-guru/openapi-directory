import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Translation } from "./translation";
import { Translation } from "./translation";


export class TranslateTextResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=glossaryTranslations", elemType: shared.Translation })
  glossaryTranslations?: Translation[];

  @Metadata({ data: "json, name=translations", elemType: shared.Translation })
  translations?: Translation[];
}
