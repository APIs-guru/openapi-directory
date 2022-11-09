import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AppEngineHttpRequest } from "./appenginehttprequest";
import { Attempt } from "./attempt";
import { HttpRequest } from "./httprequest";
import { Attempt } from "./attempt";

export enum TaskViewEnum {
    ViewUnspecified = "VIEW_UNSPECIFIED"
,    Basic = "BASIC"
,    Full = "FULL"
}


// Task
/** 
 * A unit of scheduled work.
**/
export class Task extends SpeakeasyBase {
  @Metadata({ data: "json, name=appEngineHttpRequest" })
  appEngineHttpRequest?: AppEngineHttpRequest;

  @Metadata({ data: "json, name=createTime" })
  createTime?: string;

  @Metadata({ data: "json, name=dispatchCount" })
  dispatchCount?: number;

  @Metadata({ data: "json, name=dispatchDeadline" })
  dispatchDeadline?: string;

  @Metadata({ data: "json, name=firstAttempt" })
  firstAttempt?: Attempt;

  @Metadata({ data: "json, name=httpRequest" })
  httpRequest?: HttpRequest;

  @Metadata({ data: "json, name=lastAttempt" })
  lastAttempt?: Attempt;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=responseCount" })
  responseCount?: number;

  @Metadata({ data: "json, name=scheduleTime" })
  scheduleTime?: string;

  @Metadata({ data: "json, name=view" })
  view?: TaskViewEnum;
}
