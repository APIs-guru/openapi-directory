import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// StreamingSideInputLocation
/** 
 * Identifies the location of a streaming side input.
**/
export class StreamingSideInputLocation extends SpeakeasyBase {
  @Metadata({ data: "json, name=stateFamily" })
  stateFamily?: string;

  @Metadata({ data: "json, name=tag" })
  tag?: string;
}
