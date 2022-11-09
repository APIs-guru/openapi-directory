import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Name
/** 
 * 2-letter ISO 639-1 language code for the corresponding item.
**/
export class Name extends SpeakeasyBase {
  @Metadata({ data: "json, name=$" })
  dollar?: string;

  @Metadata({ data: "json, name=@LanguageCode" })
  atLanguageCode?: string;
}
