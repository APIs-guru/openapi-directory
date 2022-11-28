import { SpeakeasyBase } from "../../../internal/utils";
import { Notification } from "./notification";
/**
 * A subscription to events on a collection.
**/
export declare class Subscription extends SpeakeasyBase {
    callbackUrl?: string;
    collection?: string;
    id?: string;
    kind?: string;
    notification?: Notification;
    operation?: string[];
    updated?: Date;
    userToken?: string;
    verifyToken?: string;
}
