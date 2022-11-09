import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AdBreak
/** 
 * Ad break.
**/
export class AdBreak extends SpeakeasyBase {
  @Metadata({ data: "json, name=startTimeOffset" })
  startTimeOffset?: string;
}
