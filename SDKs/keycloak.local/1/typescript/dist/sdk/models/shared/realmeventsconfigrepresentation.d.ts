import { SpeakeasyBase } from "../../../internal/utils";
export declare class RealmEventsConfigRepresentation extends SpeakeasyBase {
    adminEventsDetailsEnabled?: boolean;
    adminEventsEnabled?: boolean;
    enabledEventTypes?: string[];
    eventsEnabled?: boolean;
    eventsExpiration?: number;
    eventsListeners?: string[];
}
