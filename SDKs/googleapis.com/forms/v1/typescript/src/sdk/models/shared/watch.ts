import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { WatchTarget } from "./watchtarget";

export enum WatchErrorTypeEnum {
    ErrorTypeUnspecified = "ERROR_TYPE_UNSPECIFIED"
,    ProjectNotAuthorized = "PROJECT_NOT_AUTHORIZED"
,    NoUserAccess = "NO_USER_ACCESS"
,    OtherErrors = "OTHER_ERRORS"
}

export enum WatchEventTypeEnum {
    EventTypeUnspecified = "EVENT_TYPE_UNSPECIFIED"
,    Schema = "SCHEMA"
,    Responses = "RESPONSES"
}

export enum WatchStateEnum {
    StateUnspecified = "STATE_UNSPECIFIED"
,    Active = "ACTIVE"
,    Suspended = "SUSPENDED"
}


// Watch
/** 
 * A watch for events for a form. When the designated event happens, a notification will be published to the specified target. The notification's attributes will include a `formId` key that has the ID of the watched form and an `eventType` key that has the string of the type. Messages are sent with at-least-once delivery and are only dropped in extraordinary circumstances. Typically all notifications should be reliably delivered within a few seconds; however, in some situations notifications may be delayed. A watch expires seven days after it is created unless it is renewed with watches.renew
**/
export class Watch extends SpeakeasyBase {
  @Metadata({ data: "json, name=createTime" })
  createTime?: string;

  @Metadata({ data: "json, name=errorType" })
  errorType?: WatchErrorTypeEnum;

  @Metadata({ data: "json, name=eventType" })
  eventType?: WatchEventTypeEnum;

  @Metadata({ data: "json, name=expireTime" })
  expireTime?: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=state" })
  state?: WatchStateEnum;

  @Metadata({ data: "json, name=target" })
  target?: WatchTarget;
}
