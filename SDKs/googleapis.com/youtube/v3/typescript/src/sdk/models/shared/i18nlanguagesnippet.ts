import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// I18nLanguageSnippet
/** 
 * Basic details about an i18n language, such as language code and human-readable name.
**/
export class I18nLanguageSnippet extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=hl" })
  hl?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
