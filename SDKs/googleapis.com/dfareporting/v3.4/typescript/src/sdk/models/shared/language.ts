import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Language
/** 
 * Contains information about a language that can be targeted by ads.
**/
export class Language extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=languageCode" })
  languageCode?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
