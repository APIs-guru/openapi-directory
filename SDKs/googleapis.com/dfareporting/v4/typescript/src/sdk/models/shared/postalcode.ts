import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// PostalCode
/** 
 * Contains information about a postal code that can be targeted by ads.
**/
export class PostalCode extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: string;

  @SpeakeasyMetadata({ data: "json, name=countryCode" })
  countryCode?: string;

  @SpeakeasyMetadata({ data: "json, name=countryDartId" })
  countryDartId?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;
}
