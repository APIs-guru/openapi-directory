import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { FilteringAttribute } from "./filteringattribute";


// EventType
/** 
 * A representation of the event type resource.
**/
export class EventType extends SpeakeasyBase {
  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=eventSchemaUri" })
  eventSchemaUri?: string;

  @Metadata({ data: "json, name=filteringAttributes", elemType: shared.FilteringAttribute })
  filteringAttributes?: FilteringAttribute[];

  @Metadata({ data: "json, name=type" })
  type?: string;
}
