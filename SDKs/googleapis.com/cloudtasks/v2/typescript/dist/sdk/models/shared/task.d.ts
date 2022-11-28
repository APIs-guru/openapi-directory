import { SpeakeasyBase } from "../../../internal/utils";
import { AppEngineHttpRequest } from "./appenginehttprequest";
import { Attempt } from "./attempt";
import { HttpRequest } from "./httprequest";
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
    dispatchCount?: number;
    dispatchDeadline?: string;
    firstAttempt?: Attempt;
    httpRequest?: HttpRequest;
    lastAttempt?: Attempt;
    name?: string;
    responseCount?: number;
    scheduleTime?: string;
    view?: TaskViewEnum;
}
