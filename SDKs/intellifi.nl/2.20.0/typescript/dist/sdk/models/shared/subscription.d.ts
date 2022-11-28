import { SpeakeasyBase } from "../../../internal/utils";
export declare class Subscription extends SpeakeasyBase {
    custom?: any;
    databaseHoldTimeH?: number;
    description?: string;
    eventsUrl?: string;
    id?: string;
    populateEvents?: boolean;
    targetDeliveryLastFailure?: Map<string, any>;
    targetDeliveryStatus?: Map<string, any>;
    targetRetry?: boolean;
    targetUrl?: string;
    timeCreated?: string;
    timeUpdated?: string;
    topicFilter?: string;
    url?: string;
    verifyTargetCertificate?: boolean;
}
export declare class SubscriptionInput extends SpeakeasyBase {
    custom?: any;
    databaseHoldTimeH?: number;
    description?: string;
    populateEvents?: boolean;
    targetRetry?: boolean;
    targetUrl?: string;
    topicFilter?: string;
    verifyTargetCertificate?: boolean;
}
