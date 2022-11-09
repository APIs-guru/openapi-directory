import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { EventType } from "./eventtype";


// Provider
/** 
 * A representation of the Provider resource.
**/
export class Provider extends SpeakeasyBase {
  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=eventTypes", elemType: shared.EventType })
  eventTypes?: EventType[];

  @Metadata({ data: "json, name=name" })
  name?: string;
}
