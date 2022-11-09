import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// LocalizedString
/** 
 * A localized string resource.
**/
export class LocalizedString extends SpeakeasyBase {
  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=locale" })
  locale?: string;

  @Metadata({ data: "json, name=value" })
  value?: string;
}
