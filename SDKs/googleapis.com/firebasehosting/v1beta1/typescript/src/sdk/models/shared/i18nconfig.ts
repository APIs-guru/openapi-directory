import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// I18nConfig
/** 
 * If provided, i18n rewrites are enabled.
**/
export class I18nConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=root" })
  root?: string;
}
