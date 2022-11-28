import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// LookbackWindow
/** 
 * Specifies how many days into the past to look when determining whether to record a conversion.
**/
export class LookbackWindow extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=clickDays" })
  clickDays?: number;

  @SpeakeasyMetadata({ data: "json, name=impressionDays" })
  impressionDays?: number;
}
