import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// MobileCarrier
/** 
 * Contains information about a mobile carrier that can be targeted by ads.
**/
export class MobileCarrier extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=countryCode" })
  countryCode?: string;

  @SpeakeasyMetadata({ data: "json, name=countryDartId" })
  countryDartId?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
