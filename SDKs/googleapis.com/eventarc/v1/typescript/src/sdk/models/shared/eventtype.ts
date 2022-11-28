import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FilteringAttribute } from "./filteringattribute";



// EventType
/** 
 * A representation of the event type resource.
**/
export class EventType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=eventSchemaUri" })
  eventSchemaUri?: string;

  @SpeakeasyMetadata({ data: "json, name=filteringAttributes", elemType: FilteringAttribute })
  filteringAttributes?: FilteringAttribute[];

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}
