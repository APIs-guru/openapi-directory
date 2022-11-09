import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Timepoint
/** 
 * This contains a mapping between a certain point in the input text and a corresponding time in the output audio.
**/
export class Timepoint extends SpeakeasyBase {
  @Metadata({ data: "json, name=markName" })
  markName?: string;

  @Metadata({ data: "json, name=timeSeconds" })
  timeSeconds?: number;
}
