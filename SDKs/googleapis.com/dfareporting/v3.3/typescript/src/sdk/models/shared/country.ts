import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Country
/** 
 * Contains information about a country that can be targeted by ads.
**/
export class Country extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=countryCode" })
  countryCode?: string;

  @SpeakeasyMetadata({ data: "json, name=dartId" })
  dartId?: string;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=sslEnabled" })
  sslEnabled?: boolean;
}
