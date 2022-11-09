import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { LanguageTag } from "./languagetag";
import { LocalizedString } from "./localizedstring";


export class LocalizedProperty extends SpeakeasyBase {
  @Metadata({ data: "json, name=defaultLanguage" })
  defaultLanguage?: LanguageTag;

  @Metadata({ data: "json, name=localized", elemType: shared.LocalizedString })
  localized?: LocalizedString[];
}
