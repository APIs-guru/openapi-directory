import { SpeakeasyBase } from "../../../internal/utils";
import { LanguageTag } from "./languagetag";
import { LocalizedString } from "./localizedstring";
export declare class LocalizedProperty extends SpeakeasyBase {
    defaultLanguage?: LanguageTag;
    localized?: LocalizedString[];
}
