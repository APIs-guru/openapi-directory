import { SpeakeasyBase } from "../../../internal/utils/utils";
import { FilteringAttribute } from "./filteringattribute";
/**
 * A representation of the event type resource.
**/
export declare class EventType extends SpeakeasyBase {
    description?: string;
    eventSchemaUri?: string;
    filteringAttributes?: FilteringAttribute[];
    type?: string;
}
