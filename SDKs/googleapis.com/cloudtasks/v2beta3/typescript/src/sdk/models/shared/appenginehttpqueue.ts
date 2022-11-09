import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AppEngineRouting } from "./appenginerouting";


// AppEngineHttpQueue
/** 
 * App Engine HTTP queue. The task will be delivered to the App Engine application hostname specified by its AppEngineHttpQueue and AppEngineHttpRequest. The documentation for AppEngineHttpRequest explains how the task's host URL is constructed. Using AppEngineHttpQueue requires [`appengine.applications.get`](https://cloud.google.com/appengine/docs/admin-api/access-control) Google IAM permission for the project and the following scope: `https://www.googleapis.com/auth/cloud-platform`
**/
export class AppEngineHttpQueue extends SpeakeasyBase {
  @Metadata({ data: "json, name=appEngineRoutingOverride" })
  appEngineRoutingOverride?: AppEngineRouting;
}
