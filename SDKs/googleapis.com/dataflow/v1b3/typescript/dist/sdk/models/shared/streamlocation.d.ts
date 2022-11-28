import { SpeakeasyBase } from "../../../internal/utils";
import { CustomSourceLocation } from "./customsourcelocation";
import { PubsubLocation } from "./pubsublocation";
import { StreamingSideInputLocation } from "./streamingsideinputlocation";
import { StreamingStageLocation } from "./streamingstagelocation";
/**
 * Describes a stream of data, either as input to be processed or as output of a streaming Dataflow job.
**/
export declare class StreamLocation extends SpeakeasyBase {
    customSourceLocation?: CustomSourceLocation;
    pubsubLocation?: PubsubLocation;
    sideInputLocation?: StreamingSideInputLocation;
    streamingStageLocation?: StreamingStageLocation;
}
