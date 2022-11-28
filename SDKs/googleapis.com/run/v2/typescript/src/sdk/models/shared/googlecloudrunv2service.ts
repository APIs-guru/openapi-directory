import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRunV2BinaryAuthorization } from "./googlecloudrunv2binaryauthorization";
import { GoogleCloudRunV2Condition } from "./googlecloudrunv2condition";
import { GoogleCloudRunV2RevisionTemplate } from "./googlecloudrunv2revisiontemplate";
import { GoogleCloudRunV2TrafficTarget } from "./googlecloudrunv2traffictarget";
import { GoogleCloudRunV2TrafficTargetStatus } from "./googlecloudrunv2traffictargetstatus";


export enum GoogleCloudRunV2ServiceIngressEnum {
    IngressTrafficUnspecified = "INGRESS_TRAFFIC_UNSPECIFIED",
    IngressTrafficAll = "INGRESS_TRAFFIC_ALL",
    IngressTrafficInternalOnly = "INGRESS_TRAFFIC_INTERNAL_ONLY",
    IngressTrafficInternalLoadBalancer = "INGRESS_TRAFFIC_INTERNAL_LOAD_BALANCER"
}

export enum GoogleCloudRunV2ServiceLaunchStageEnum {
    LaunchStageUnspecified = "LAUNCH_STAGE_UNSPECIFIED",
    Unimplemented = "UNIMPLEMENTED",
    Prelaunch = "PRELAUNCH",
    EarlyAccess = "EARLY_ACCESS",
    Alpha = "ALPHA",
    Beta = "BETA",
    Ga = "GA",
    Deprecated = "DEPRECATED"
}


// GoogleCloudRunV2Service
/** 
 * Service acts as a top-level container that manages a set of configurations and revision templates which implement a network service. Service exists to provide a singular abstraction which can be access controlled, reasoned about, and which encapsulates software lifecycle decisions such as rollout policy and team resource ownership.
**/
export class GoogleCloudRunV2Service extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=annotations" })
  annotations?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=binaryAuthorization" })
  binaryAuthorization?: GoogleCloudRunV2BinaryAuthorization;

  @SpeakeasyMetadata({ data: "json, name=client" })
  client?: string;

  @SpeakeasyMetadata({ data: "json, name=clientVersion" })
  clientVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=conditions", elemType: GoogleCloudRunV2Condition })
  conditions?: GoogleCloudRunV2Condition[];

  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=creator" })
  creator?: string;

  @SpeakeasyMetadata({ data: "json, name=deleteTime" })
  deleteTime?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=etag" })
  etag?: string;

  @SpeakeasyMetadata({ data: "json, name=expireTime" })
  expireTime?: string;

  @SpeakeasyMetadata({ data: "json, name=generation" })
  generation?: string;

  @SpeakeasyMetadata({ data: "json, name=ingress" })
  ingress?: GoogleCloudRunV2ServiceIngressEnum;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=lastModifier" })
  lastModifier?: string;

  @SpeakeasyMetadata({ data: "json, name=latestCreatedRevision" })
  latestCreatedRevision?: string;

  @SpeakeasyMetadata({ data: "json, name=latestReadyRevision" })
  latestReadyRevision?: string;

  @SpeakeasyMetadata({ data: "json, name=launchStage" })
  launchStage?: GoogleCloudRunV2ServiceLaunchStageEnum;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=observedGeneration" })
  observedGeneration?: string;

  @SpeakeasyMetadata({ data: "json, name=reconciling" })
  reconciling?: boolean;

  @SpeakeasyMetadata({ data: "json, name=template" })
  template?: GoogleCloudRunV2RevisionTemplate;

  @SpeakeasyMetadata({ data: "json, name=terminalCondition" })
  terminalCondition?: GoogleCloudRunV2Condition;

  @SpeakeasyMetadata({ data: "json, name=traffic", elemType: GoogleCloudRunV2TrafficTarget })
  traffic?: GoogleCloudRunV2TrafficTarget[];

  @SpeakeasyMetadata({ data: "json, name=trafficStatuses", elemType: GoogleCloudRunV2TrafficTargetStatus })
  trafficStatuses?: GoogleCloudRunV2TrafficTargetStatus[];

  @SpeakeasyMetadata({ data: "json, name=uid" })
  uid?: string;

  @SpeakeasyMetadata({ data: "json, name=updateTime" })
  updateTime?: string;

  @SpeakeasyMetadata({ data: "json, name=uri" })
  uri?: string;
}


// GoogleCloudRunV2ServiceInput
/** 
 * Service acts as a top-level container that manages a set of configurations and revision templates which implement a network service. Service exists to provide a singular abstraction which can be access controlled, reasoned about, and which encapsulates software lifecycle decisions such as rollout policy and team resource ownership.
**/
export class GoogleCloudRunV2ServiceInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=annotations" })
  annotations?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=binaryAuthorization" })
  binaryAuthorization?: GoogleCloudRunV2BinaryAuthorization;

  @SpeakeasyMetadata({ data: "json, name=client" })
  client?: string;

  @SpeakeasyMetadata({ data: "json, name=clientVersion" })
  clientVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=ingress" })
  ingress?: GoogleCloudRunV2ServiceIngressEnum;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=launchStage" })
  launchStage?: GoogleCloudRunV2ServiceLaunchStageEnum;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=template" })
  template?: GoogleCloudRunV2RevisionTemplate;

  @SpeakeasyMetadata({ data: "json, name=terminalCondition" })
  terminalCondition?: GoogleCloudRunV2Condition;

  @SpeakeasyMetadata({ data: "json, name=traffic", elemType: GoogleCloudRunV2TrafficTarget })
  traffic?: GoogleCloudRunV2TrafficTarget[];
}
