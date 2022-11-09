import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// MobileCarrier
/** 
 * Contains information about a mobile carrier that can be targeted by ads.
**/
export class MobileCarrier extends SpeakeasyBase {
  @Metadata({ data: "json, name=countryCode" })
  countryCode?: string;

  @Metadata({ data: "json, name=countryDartId" })
  countryDartId?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;
}
