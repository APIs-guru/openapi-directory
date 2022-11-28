import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Sink } from "./sink";



// SeqMapTaskOutputInfo
/** 
 * Information about an output of a SeqMapTask.
**/
export class SeqMapTaskOutputInfo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=sink" })
  sink?: Sink;

  @SpeakeasyMetadata({ data: "json, name=tag" })
  tag?: string;
}
