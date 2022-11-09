import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CustomSourceLocation } from "./customsourcelocation";
import { PubsubLocation } from "./pubsublocation";
import { StreamingSideInputLocation } from "./streamingsideinputlocation";
import { StreamingStageLocation } from "./streamingstagelocation";


// StreamLocation
/** 
 * Describes a stream of data, either as input to be processed or as output of a streaming Dataflow job.
**/
export class StreamLocation extends SpeakeasyBase {
  @Metadata({ data: "json, name=customSourceLocation" })
  customSourceLocation?: CustomSourceLocation;

  @Metadata({ data: "json, name=pubsubLocation" })
  pubsubLocation?: PubsubLocation;

  @Metadata({ data: "json, name=sideInputLocation" })
  sideInputLocation?: StreamingSideInputLocation;

  @Metadata({ data: "json, name=streamingStageLocation" })
  streamingStageLocation?: StreamingStageLocation;
}
