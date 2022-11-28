import { SpeakeasyBase } from "../../../internal/utils";
import { WatchTarget } from "./watchtarget";
export declare enum WatchErrorTypeEnum {
    ErrorTypeUnspecified = "ERROR_TYPE_UNSPECIFIED",
    ProjectNotAuthorized = "PROJECT_NOT_AUTHORIZED",
    NoUserAccess = "NO_USER_ACCESS",
    OtherErrors = "OTHER_ERRORS"
}
export declare enum WatchEventTypeEnum {
    EventTypeUnspecified = "EVENT_TYPE_UNSPECIFIED",
    Schema = "SCHEMA",
    Responses = "RESPONSES"
}
export declare enum WatchStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED",
    Active = "ACTIVE",
    Suspended = "SUSPENDED"
}
/**
 * A watch for events for a form. When the designated event happens, a notification will be published to the specified target. The notification's attributes will include a `formId` key that has the ID of the watched form and an `eventType` key that has the string of the type. Messages are sent with at-least-once delivery and are only dropped in extraordinary circumstances. Typically all notifications should be reliably delivered within a few seconds; however, in some situations notifications may be delayed. A watch expires seven days after it is created unless it is renewed with watches.renew
**/
export declare class WatchInput extends SpeakeasyBase {
    eventType?: WatchEventTypeEnum;
    target?: WatchTarget;
}
/**
 * A watch for events for a form. When the designated event happens, a notification will be published to the specified target. The notification's attributes will include a `formId` key that has the ID of the watched form and an `eventType` key that has the string of the type. Messages are sent with at-least-once delivery and are only dropped in extraordinary circumstances. Typically all notifications should be reliably delivered within a few seconds; however, in some situations notifications may be delayed. A watch expires seven days after it is created unless it is renewed with watches.renew
**/
export declare class Watch extends SpeakeasyBase {
    createTime?: string;
    errorType?: WatchErrorTypeEnum;
    eventType?: WatchEventTypeEnum;
    expireTime?: string;
    id?: string;
    state?: WatchStateEnum;
    target?: WatchTarget;
}
