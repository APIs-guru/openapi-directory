import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// StreamingSideInputLocation
/** 
 * Identifies the location of a streaming side input.
**/
export class StreamingSideInputLocation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=stateFamily" })
  stateFamily?: string;

  @SpeakeasyMetadata({ data: "json, name=tag" })
  tag?: string;
}
