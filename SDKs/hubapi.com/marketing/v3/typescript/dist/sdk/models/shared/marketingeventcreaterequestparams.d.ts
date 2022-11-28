import { SpeakeasyBase } from "../../../internal/utils";
import { PropertyValue } from "./propertyvalue";
export declare class MarketingEventCreateRequestParams extends SpeakeasyBase {
    customProperties?: PropertyValue[];
    endDateTime?: Date;
    eventCancelled?: boolean;
    eventDescription?: string;
    eventName: string;
    eventOrganizer: string;
    eventType?: string;
    eventUrl?: string;
    externalAccountId: string;
    externalEventId: string;
    startDateTime?: Date;
}
