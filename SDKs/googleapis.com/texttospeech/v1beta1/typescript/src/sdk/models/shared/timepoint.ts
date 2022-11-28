import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Timepoint
/** 
 * This contains a mapping between a certain point in the input text and a corresponding time in the output audio.
**/
export class Timepoint extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=markName" })
  markName?: string;

  @SpeakeasyMetadata({ data: "json, name=timeSeconds" })
  timeSeconds?: number;
}
