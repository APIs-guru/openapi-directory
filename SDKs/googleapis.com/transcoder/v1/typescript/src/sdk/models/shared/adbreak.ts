import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AdBreak
/** 
 * Ad break.
**/
export class AdBreak extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=startTimeOffset" })
  startTimeOffset?: string;
}
