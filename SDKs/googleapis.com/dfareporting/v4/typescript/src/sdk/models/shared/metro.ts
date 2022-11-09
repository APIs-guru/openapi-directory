import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Metro
/** 
 * Contains information about a metro region that can be targeted by ads.
**/
export class Metro extends SpeakeasyBase {
  @Metadata({ data: "json, name=countryCode" })
  countryCode?: string;

  @Metadata({ data: "json, name=countryDartId" })
  countryDartId?: string;

  @Metadata({ data: "json, name=dartId" })
  dartId?: string;

  @Metadata({ data: "json, name=dmaId" })
  dmaId?: string;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=metroCode" })
  metroCode?: string;

  @Metadata({ data: "json, name=name" })
  name?: string;
}
