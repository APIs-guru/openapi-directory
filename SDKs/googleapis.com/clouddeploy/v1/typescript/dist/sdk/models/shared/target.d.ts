import { SpeakeasyBase } from "../../../internal/utils";
import { AnthosCluster } from "./anthoscluster";
import { ExecutionConfig } from "./executionconfig";
import { GkeCluster } from "./gkecluster";
import { CloudRunLocation } from "./cloudrunlocation";
/**
 * A `Target` resource in the Google Cloud Deploy API. A `Target` defines a location to which a Skaffold configuration can be deployed.
**/
export declare class TargetInput extends SpeakeasyBase {
    annotations?: Map<string, string>;
    anthosCluster?: AnthosCluster;
    description?: string;
    etag?: string;
    executionConfigs?: ExecutionConfig[];
    gke?: GkeCluster;
    labels?: Map<string, string>;
    name?: string;
    requireApproval?: boolean;
    run?: CloudRunLocation;
}
/**
 * A `Target` resource in the Google Cloud Deploy API. A `Target` defines a location to which a Skaffold configuration can be deployed.
**/
export declare class Target extends SpeakeasyBase {
    annotations?: Map<string, string>;
    anthosCluster?: AnthosCluster;
    createTime?: string;
    description?: string;
    etag?: string;
    executionConfigs?: ExecutionConfig[];
    gke?: GkeCluster;
    labels?: Map<string, string>;
    name?: string;
    requireApproval?: boolean;
    run?: CloudRunLocation;
    targetId?: string;
    uid?: string;
    updateTime?: string;
}
