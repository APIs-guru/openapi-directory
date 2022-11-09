import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { EventChild } from "./eventchild";

export enum EventDefinitionVisibilityEnum {
    EventVisibilityUnspecified = "EVENT_VISIBILITY_UNSPECIFIED"
,    Revealed = "REVEALED"
,    Hidden = "HIDDEN"
}


// EventDefinition
/** 
 * An event definition resource.
**/
export class EventDefinition extends SpeakeasyBase {
  @Metadata({ data: "json, name=childEvents", elemType: shared.EventChild })
  childEvents?: EventChild[];

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=displayName" })
  displayName?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=imageUrl" })
  imageUrl?: string;

  @Metadata({ data: "json, name=isDefaultImageUrl" })
  isDefaultImageUrl?: boolean;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=visibility" })
  visibility?: EventDefinitionVisibilityEnum;
}
