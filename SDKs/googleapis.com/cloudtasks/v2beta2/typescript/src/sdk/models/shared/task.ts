import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AppEngineHttpRequest } from "./appenginehttprequest";
import { HttpRequest } from "./httprequest";
import { PullMessage } from "./pullmessage";
import { TaskStatus } from "./taskstatus";

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

  @Metadata({ data: "json, name=httpRequest" })
  httpRequest?: HttpRequest;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=pullMessage" })
  pullMessage?: PullMessage;

  @Metadata({ data: "json, name=scheduleTime" })
  scheduleTime?: string;

  @Metadata({ data: "json, name=status" })
  status?: TaskStatus;

  @Metadata({ data: "json, name=view" })
  view?: TaskViewEnum;
}
