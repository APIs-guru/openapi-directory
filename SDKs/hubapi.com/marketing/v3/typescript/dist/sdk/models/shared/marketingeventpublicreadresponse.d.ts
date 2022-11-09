import { SpeakeasyBase } from "../../../internal/utils/utils";
import { PropertyValue } from "./propertyvalue";
export declare class MarketingEventPublicReadResponse extends SpeakeasyBase {
    attendees: number;
    cancellations: number;
    createdAt: Date;
    customProperties?: PropertyValue[];
    endDateTime?: Date;
    eventCancelled?: boolean;
    eventDescription?: string;
    eventName: string;
    eventOrganizer: string;
    eventType?: string;
    eventUrl?: string;
    externalEventId: string;
    id: string;
    noShows: number;
    registrants: number;
    startDateTime?: Date;
    updatedAt: Date;
}
