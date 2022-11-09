import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// PostalCode
/** 
 * Contains information about a postal code that can be targeted by ads.
**/
export class PostalCode extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: string;

  @Metadata({ data: "json, name=countryCode" })
  countryCode?: string;

  @Metadata({ data: "json, name=countryDartId" })
  countryDartId?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=kind" })
  kind?: string;
}
