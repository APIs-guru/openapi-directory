import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CustomSourceLocation } from "./customsourcelocation";
import { PubsubLocation } from "./pubsublocation";
import { StreamingSideInputLocation } from "./streamingsideinputlocation";
import { StreamingStageLocation } from "./streamingstagelocation";



// StreamLocation
/** 
 * Describes a stream of data, either as input to be processed or as output of a streaming Dataflow job.
**/
export class StreamLocation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=customSourceLocation" })
  customSourceLocation?: CustomSourceLocation;

  @SpeakeasyMetadata({ data: "json, name=pubsubLocation" })
  pubsubLocation?: PubsubLocation;

  @SpeakeasyMetadata({ data: "json, name=sideInputLocation" })
  sideInputLocation?: StreamingSideInputLocation;

  @SpeakeasyMetadata({ data: "json, name=streamingStageLocation" })
  streamingStageLocation?: StreamingStageLocation;
}
