import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Name
/** 
 * 2-letter ISO 639-1 language code for the corresponding item.
**/
export class Name extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=$" })
  dollar?: string;

  @SpeakeasyMetadata({ data: "json, name=@LanguageCode" })
  atLanguageCode?: string;
}
