import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SchedulerResource } from "./schedulerresource";
import { WebServerResource } from "./webserverresource";
import { WorkerResource } from "./workerresource";


// WorkloadsConfig
/** 
 * The Kubernetes workloads configuration for GKE cluster associated with the Cloud Composer environment. Supported for Cloud Composer environments in versions composer-2.*.*-airflow-*.*.* and newer.
**/
export class WorkloadsConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=scheduler" })
  scheduler?: SchedulerResource;

  @Metadata({ data: "json, name=webServer" })
  webServer?: WebServerResource;

  @Metadata({ data: "json, name=worker" })
  worker?: WorkerResource;
}
