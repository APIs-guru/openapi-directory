import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Label
/** 
 * Label to be used when displaying the price list, section, or item.
**/
export class Label extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=languageCode" })
  languageCode?: string;
}
