import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CounterMetadata } from "./countermetadata";
import { CounterStructuredName } from "./counterstructuredname";



// CounterStructuredNameAndMetadata
/** 
 * A single message which encapsulates structured name and metadata for a given counter.
**/
export class CounterStructuredNameAndMetadata extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=metadata" })
  metadata?: CounterMetadata;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: CounterStructuredName;
}
