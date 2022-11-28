import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LanguageTag } from "./languagetag";
import { LocalizedString } from "./localizedstring";



export class LocalizedProperty extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=defaultLanguage" })
  defaultLanguage?: LanguageTag;

  @SpeakeasyMetadata({ data: "json, name=localized", elemType: LocalizedString })
  localized?: LocalizedString[];
}
