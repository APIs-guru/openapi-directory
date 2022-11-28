import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AppEngineHttpRequest } from "./appenginehttprequest";
import { HttpRequest } from "./httprequest";
import { PullMessage } from "./pullmessage";
import { TaskStatus } from "./taskstatus";


export enum TaskViewEnum {
    ViewUnspecified = "VIEW_UNSPECIFIED",
    Basic = "BASIC",
    Full = "FULL"
}


// Task
/** 
 * A unit of scheduled work.
**/
export class Task extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=appEngineHttpRequest" })
  appEngineHttpRequest?: AppEngineHttpRequest;

  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=httpRequest" })
  httpRequest?: HttpRequest;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=pullMessage" })
  pullMessage?: PullMessage;

  @SpeakeasyMetadata({ data: "json, name=scheduleTime" })
  scheduleTime?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: TaskStatus;

  @SpeakeasyMetadata({ data: "json, name=view" })
  view?: TaskViewEnum;
}
