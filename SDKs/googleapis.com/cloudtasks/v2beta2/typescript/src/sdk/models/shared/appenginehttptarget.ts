import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AppEngineRouting } from "./appenginerouting";



// AppEngineHttpTarget
/** 
 * App Engine HTTP target. The task will be delivered to the App Engine application hostname specified by its AppEngineHttpTarget and AppEngineHttpRequest. The documentation for AppEngineHttpRequest explains how the task's host URL is constructed. Using AppEngineHttpTarget requires [`appengine.applications.get`](https://cloud.google.com/appengine/docs/admin-api/access-control) Google IAM permission for the project and the following scope: `https://www.googleapis.com/auth/cloud-platform`
**/
export class AppEngineHttpTarget extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=appEngineRoutingOverride" })
  appEngineRoutingOverride?: AppEngineRouting;
}
