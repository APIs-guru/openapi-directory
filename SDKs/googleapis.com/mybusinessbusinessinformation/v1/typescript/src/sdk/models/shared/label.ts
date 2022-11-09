import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Label
/** 
 * Label to be used when displaying the price list, section, or item.
**/
export class Label extends SpeakeasyBase {
  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=languageCode" })
  languageCode?: string;
}
