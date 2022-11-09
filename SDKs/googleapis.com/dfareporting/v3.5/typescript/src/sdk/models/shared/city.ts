import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// City
/** 
 * Contains information about a city that can be targeted by ads.
**/
export class City extends SpeakeasyBase {
  @Metadata({ data: "json, name=countryCode" })
  countryCode?: string;

  @Metadata({ data: "json, name=countryDartId" })
  countryDartId?: string;

  @Metadata({ data: "json, name=dartId" })
  dartId?: string;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=metroCode" })
  metroCode?: string;

  @Metadata({ data: "json, name=metroDmaId" })
  metroDmaId?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=regionCode" })
  regionCode?: string;

  @Metadata({ data: "json, name=regionDartId" })
  regionDartId?: string;
}
