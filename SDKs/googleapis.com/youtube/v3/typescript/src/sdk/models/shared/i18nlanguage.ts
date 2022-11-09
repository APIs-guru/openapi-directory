import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { I18nLanguageSnippet } from "./i18nlanguagesnippet";


// I18nLanguage
/** 
 * An *i18nLanguage* resource identifies a UI language currently supported by YouTube.
**/
export class I18nLanguage extends SpeakeasyBase {
  @Metadata({ data: "json, name=etag" })
  etag?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=snippet" })
  snippet?: I18nLanguageSnippet;
}
