import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// I18nLanguageSnippet
/** 
 * Basic details about an i18n language, such as language code and human-readable name.
**/
export class I18nLanguageSnippet extends SpeakeasyBase {
  @Metadata({ data: "json, name=hl" })
  hl?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;
}
