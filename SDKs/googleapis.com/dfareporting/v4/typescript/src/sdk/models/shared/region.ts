import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Region
/** 
 * Contains information about a region that can be targeted by ads.
**/
export class Region extends SpeakeasyBase {
  @Metadata({ data: "json, name=countryCode" })
  countryCode?: string;

  @Metadata({ data: "json, name=countryDartId" })
  countryDartId?: string;

  @Metadata({ data: "json, name=dartId" })
  dartId?: string;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=regionCode" })
  regionCode?: string;
}
