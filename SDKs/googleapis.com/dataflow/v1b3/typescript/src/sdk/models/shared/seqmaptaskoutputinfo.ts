import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Sink } from "./sink";


// SeqMapTaskOutputInfo
/** 
 * Information about an output of a SeqMapTask.
**/
export class SeqMapTaskOutputInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=sink" })
  sink?: Sink;

  @Metadata({ data: "json, name=tag" })
  tag?: string;
}
