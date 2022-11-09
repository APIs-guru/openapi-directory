import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// I18nConfig
/** 
 * If provided, i18n rewrites are enabled.
**/
export class I18nConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=root" })
  root?: string;
}
