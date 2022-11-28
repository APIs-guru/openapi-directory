import { SpeakeasyBase } from "../../../internal/utils";
import { PropertyValue } from "./propertyvalue";
export declare class MarketingEventPublicDefaultResponse extends SpeakeasyBase {
    createdAt: Date;
    customProperties?: PropertyValue[];
    endDateTime?: Date;
    eventCancelled?: boolean;
    eventDescription?: string;
    eventName: string;
    eventOrganizer: string;
    eventType?: string;
    eventUrl?: string;
    id: string;
    startDateTime?: Date;
    updatedAt: Date;
}
