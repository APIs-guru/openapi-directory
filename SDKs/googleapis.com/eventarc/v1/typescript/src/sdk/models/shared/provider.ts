import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EventType } from "./eventtype";



// Provider
/** 
 * A representation of the Provider resource.
**/
export class Provider extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=eventTypes", elemType: EventType })
  eventTypes?: EventType[];

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
