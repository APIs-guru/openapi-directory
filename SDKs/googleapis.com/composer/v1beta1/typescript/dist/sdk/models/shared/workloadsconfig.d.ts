import { SpeakeasyBase } from "../../../internal/utils/utils";
import { SchedulerResource } from "./schedulerresource";
import { WebServerResource } from "./webserverresource";
import { WorkerResource } from "./workerresource";
/**
 * The Kubernetes workloads configuration for GKE cluster associated with the Cloud Composer environment. Supported for Cloud Composer environments in versions composer-2.*.*-airflow-*.*.* and newer.
**/
export declare class WorkloadsConfig extends SpeakeasyBase {
    scheduler?: SchedulerResource;
    webServer?: WebServerResource;
    worker?: WorkerResource;
}
