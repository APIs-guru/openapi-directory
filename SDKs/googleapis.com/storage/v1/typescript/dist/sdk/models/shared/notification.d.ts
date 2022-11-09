import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * A subscription to receive Google PubSub notifications.
**/
export declare class Notification extends SpeakeasyBase {
    customAttributes?: Map<string, string>;
    etag?: string;
    eventTypes?: string[];
    id?: string;
    kind?: string;
    objectNamePrefix?: string;
    payloadFormat?: string;
    selfLink?: string;
    topic?: string;
}
