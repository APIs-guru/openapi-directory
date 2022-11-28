import { SpeakeasyBase } from "../../../internal/utils";
import { EventChild } from "./eventchild";
export declare enum EventDefinitionVisibilityEnum {
    EventVisibilityUnspecified = "EVENT_VISIBILITY_UNSPECIFIED",
    Revealed = "REVEALED",
    Hidden = "HIDDEN"
}
/**
 * An event definition resource.
**/
export declare class EventDefinition extends SpeakeasyBase {
    childEvents?: EventChild[];
    description?: string;
    displayName?: string;
    id?: string;
    imageUrl?: string;
    isDefaultImageUrl?: boolean;
    kind?: string;
    visibility?: EventDefinitionVisibilityEnum;
}
