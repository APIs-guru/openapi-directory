import { SpeakeasyBase } from "../../../internal/utils";
import { CounterMetadata } from "./countermetadata";
import { CounterStructuredName } from "./counterstructuredname";
/**
 * A single message which encapsulates structured name and metadata for a given counter.
**/
export declare class CounterStructuredNameAndMetadata extends SpeakeasyBase {
    metadata?: CounterMetadata;
    name?: CounterStructuredName;
}
