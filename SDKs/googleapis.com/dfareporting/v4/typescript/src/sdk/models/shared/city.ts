import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// City
/** 
 * Contains information about a city that can be targeted by ads.
**/
export class City extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=countryCode" })
  countryCode?: string;

  @SpeakeasyMetadata({ data: "json, name=countryDartId" })
  countryDartId?: string;

  @SpeakeasyMetadata({ data: "json, name=dartId" })
  dartId?: string;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=metroCode" })
  metroCode?: string;

  @SpeakeasyMetadata({ data: "json, name=metroDmaId" })
  metroDmaId?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=regionCode" })
  regionCode?: string;

  @SpeakeasyMetadata({ data: "json, name=regionDartId" })
  regionDartId?: string;
}
