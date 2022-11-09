import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CounterMetadata } from "./countermetadata";
import { CounterStructuredName } from "./counterstructuredname";


// CounterStructuredNameAndMetadata
/** 
 * A single message which encapsulates structured name and metadata for a given counter.
**/
export class CounterStructuredNameAndMetadata extends SpeakeasyBase {
  @Metadata({ data: "json, name=metadata" })
  metadata?: CounterMetadata;

  @Metadata({ data: "json, name=name" })
  name?: CounterStructuredName;
}
