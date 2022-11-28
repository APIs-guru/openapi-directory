import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRunV2BinaryAuthorization } from "./googlecloudrunv2binaryauthorization";
import { GoogleCloudRunV2Condition } from "./googlecloudrunv2condition";
import { GoogleCloudRunV2RevisionTemplate } from "./googlecloudrunv2revisiontemplate";
import { GoogleCloudRunV2TrafficTarget } from "./googlecloudrunv2traffictarget";
import { GoogleCloudRunV2TrafficTargetStatus } from "./googlecloudrunv2traffictargetstatus";
export declare enum GoogleCloudRunV2ServiceIngressEnum {
    IngressTrafficUnspecified = "INGRESS_TRAFFIC_UNSPECIFIED",
    IngressTrafficAll = "INGRESS_TRAFFIC_ALL",
    IngressTrafficInternalOnly = "INGRESS_TRAFFIC_INTERNAL_ONLY",
    IngressTrafficInternalLoadBalancer = "INGRESS_TRAFFIC_INTERNAL_LOAD_BALANCER"
}
export declare enum GoogleCloudRunV2ServiceLaunchStageEnum {
    LaunchStageUnspecified = "LAUNCH_STAGE_UNSPECIFIED",
    Unimplemented = "UNIMPLEMENTED",
    Prelaunch = "PRELAUNCH",
    EarlyAccess = "EARLY_ACCESS",
    Alpha = "ALPHA",
    Beta = "BETA",
    Ga = "GA",
    Deprecated = "DEPRECATED"
}
/**
 * Service acts as a top-level container that manages a set of configurations and revision templates which implement a network service. Service exists to provide a singular abstraction which can be access controlled, reasoned about, and which encapsulates software lifecycle decisions such as rollout policy and team resource ownership.
**/
export declare class GoogleCloudRunV2Service extends SpeakeasyBase {
    annotations?: Map<string, string>;
    binaryAuthorization?: GoogleCloudRunV2BinaryAuthorization;
    client?: string;
    clientVersion?: string;
    conditions?: GoogleCloudRunV2Condition[];
    createTime?: string;
    creator?: string;
    deleteTime?: string;
    description?: string;
    etag?: string;
    expireTime?: string;
    generation?: string;
    ingress?: GoogleCloudRunV2ServiceIngressEnum;
    labels?: Map<string, string>;
    lastModifier?: string;
    latestCreatedRevision?: string;
    latestReadyRevision?: string;
    launchStage?: GoogleCloudRunV2ServiceLaunchStageEnum;
    name?: string;
    observedGeneration?: string;
    reconciling?: boolean;
    template?: GoogleCloudRunV2RevisionTemplate;
    terminalCondition?: GoogleCloudRunV2Condition;
    traffic?: GoogleCloudRunV2TrafficTarget[];
    trafficStatuses?: GoogleCloudRunV2TrafficTargetStatus[];
    uid?: string;
    updateTime?: string;
    uri?: string;
}
/**
 * Service acts as a top-level container that manages a set of configurations and revision templates which implement a network service. Service exists to provide a singular abstraction which can be access controlled, reasoned about, and which encapsulates software lifecycle decisions such as rollout policy and team resource ownership.
**/
export declare class GoogleCloudRunV2ServiceInput extends SpeakeasyBase {
    annotations?: Map<string, string>;
    binaryAuthorization?: GoogleCloudRunV2BinaryAuthorization;
    client?: string;
    clientVersion?: string;
    description?: string;
    ingress?: GoogleCloudRunV2ServiceIngressEnum;
    labels?: Map<string, string>;
    launchStage?: GoogleCloudRunV2ServiceLaunchStageEnum;
    name?: string;
    template?: GoogleCloudRunV2RevisionTemplate;
    terminalCondition?: GoogleCloudRunV2Condition;
    traffic?: GoogleCloudRunV2TrafficTarget[];
}
