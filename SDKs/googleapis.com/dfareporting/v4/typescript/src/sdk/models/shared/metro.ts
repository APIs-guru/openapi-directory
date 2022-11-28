import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Metro
/** 
 * Contains information about a metro region that can be targeted by ads.
**/
export class Metro extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=countryCode" })
  countryCode?: string;

  @SpeakeasyMetadata({ data: "json, name=countryDartId" })
  countryDartId?: string;

  @SpeakeasyMetadata({ data: "json, name=dartId" })
  dartId?: string;

  @SpeakeasyMetadata({ data: "json, name=dmaId" })
  dmaId?: string;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=metroCode" })
  metroCode?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
