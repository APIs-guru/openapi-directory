import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Language
/** 
 * Contains information about a language that can be targeted by ads.
**/
export class Language extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=languageCode" })
  languageCode?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;
}
