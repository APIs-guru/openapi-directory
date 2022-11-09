import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// LookbackWindow
/** 
 * Specifies how many days into the past to look when determining whether to record a conversion.
**/
export class LookbackWindow extends SpeakeasyBase {
  @Metadata({ data: "json, name=clickDays" })
  clickDays?: number;

  @Metadata({ data: "json, name=impressionDays" })
  impressionDays?: number;
}
