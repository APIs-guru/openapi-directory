import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Country
/** 
 * Contains information about a country that can be targeted by ads.
**/
export class Country extends SpeakeasyBase {
  @Metadata({ data: "json, name=countryCode" })
  countryCode?: string;

  @Metadata({ data: "json, name=dartId" })
  dartId?: string;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=sslEnabled" })
  sslEnabled?: boolean;
}
