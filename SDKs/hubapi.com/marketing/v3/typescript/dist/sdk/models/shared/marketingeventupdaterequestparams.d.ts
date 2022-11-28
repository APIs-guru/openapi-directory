import { SpeakeasyBase } from "../../../internal/utils";
import { PropertyValue } from "./propertyvalue";
export declare class MarketingEventUpdateRequestParams extends SpeakeasyBase {
    customProperties?: PropertyValue[];
    endDateTime?: Date;
    eventCancelled?: boolean;
    eventDescription?: string;
    eventName?: string;
    eventOrganizer?: string;
    eventType?: string;
    eventUrl?: string;
    startDateTime?: Date;
}
