import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { EventChild } from "./eventchild";


export enum EventDefinitionVisibilityEnum {
    EventVisibilityUnspecified = "EVENT_VISIBILITY_UNSPECIFIED",
    Revealed = "REVEALED",
    Hidden = "HIDDEN"
}


// EventDefinition
/** 
 * An event definition resource.
**/
export class EventDefinition extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=childEvents", elemType: EventChild })
  childEvents?: EventChild[];

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=displayName" })
  displayName?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=imageUrl" })
  imageUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=isDefaultImageUrl" })
  isDefaultImageUrl?: boolean;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=visibility" })
  visibility?: EventDefinitionVisibilityEnum;
}
