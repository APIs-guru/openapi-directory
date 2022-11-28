import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { I18nLanguageSnippet } from "./i18nlanguagesnippet";



// I18nLanguage
/** 
 * An *i18nLanguage* resource identifies a UI language currently supported by YouTube.
**/
export class I18nLanguage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=etag" })
  etag?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=snippet" })
  snippet?: I18nLanguageSnippet;
}
