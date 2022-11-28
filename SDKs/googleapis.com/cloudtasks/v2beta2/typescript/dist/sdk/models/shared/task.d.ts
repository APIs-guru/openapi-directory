import { SpeakeasyBase } from "../../../internal/utils";
import { AppEngineHttpRequest } from "./appenginehttprequest";
import { HttpRequest } from "./httprequest";
import { PullMessage } from "./pullmessage";
import { TaskStatus } from "./taskstatus";
export declare enum TaskViewEnum {
    ViewUnspecified = "VIEW_UNSPECIFIED",
    Basic = "BASIC",
    Full = "FULL"
}
/**
 * A unit of scheduled work.
**/
export declare class Task extends SpeakeasyBase {
    appEngineHttpRequest?: AppEngineHttpRequest;
    createTime?: string;
    httpRequest?: HttpRequest;
    name?: string;
    pullMessage?: PullMessage;
    scheduleTime?: string;
    status?: TaskStatus;
    view?: TaskViewEnum;
}
