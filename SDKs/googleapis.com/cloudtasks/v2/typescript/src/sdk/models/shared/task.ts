import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AppEngineHttpRequest } from "./appenginehttprequest";
import { Attempt } from "./attempt";
import { HttpRequest } from "./httprequest";


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

  @SpeakeasyMetadata({ data: "json, name=dispatchCount" })
  dispatchCount?: number;

  @SpeakeasyMetadata({ data: "json, name=dispatchDeadline" })
  dispatchDeadline?: string;

  @SpeakeasyMetadata({ data: "json, name=firstAttempt" })
  firstAttempt?: Attempt;

  @SpeakeasyMetadata({ data: "json, name=httpRequest" })
  httpRequest?: HttpRequest;

  @SpeakeasyMetadata({ data: "json, name=lastAttempt" })
  lastAttempt?: Attempt;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=responseCount" })
  responseCount?: number;

  @SpeakeasyMetadata({ data: "json, name=scheduleTime" })
  scheduleTime?: string;

  @SpeakeasyMetadata({ data: "json, name=view" })
  view?: TaskViewEnum;
}
