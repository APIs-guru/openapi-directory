import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// GoogleSearchIdeahubV1betaAvailableLocale
/** 
 * Represents locales that are available for a web property.
**/
export class GoogleSearchIdeahubV1betaAvailableLocale extends SpeakeasyBase {
  @Metadata({ data: "json, name=locale" })
  locale?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;
}
