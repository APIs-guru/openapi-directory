import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudRunV2BinaryAuthorization } from "./googlecloudrunv2binaryauthorization";
import { GoogleCloudRunV2Condition } from "./googlecloudrunv2condition";
import { GoogleCloudRunV2RevisionTemplate } from "./googlecloudrunv2revisiontemplate";
import { GoogleCloudRunV2Condition } from "./googlecloudrunv2condition";
import { GoogleCloudRunV2TrafficTarget } from "./googlecloudrunv2traffictarget";
import { GoogleCloudRunV2TrafficTargetStatus } from "./googlecloudrunv2traffictargetstatus";

export enum GoogleCloudRunV2ServiceIngressEnum {
    IngressTrafficUnspecified = "INGRESS_TRAFFIC_UNSPECIFIED"
,    IngressTrafficAll = "INGRESS_TRAFFIC_ALL"
,    IngressTrafficInternalOnly = "INGRESS_TRAFFIC_INTERNAL_ONLY"
,    IngressTrafficInternalLoadBalancer = "INGRESS_TRAFFIC_INTERNAL_LOAD_BALANCER"
}

export enum GoogleCloudRunV2ServiceLaunchStageEnum {
    LaunchStageUnspecified = "LAUNCH_STAGE_UNSPECIFIED"
,    Unimplemented = "UNIMPLEMENTED"
,    Prelaunch = "PRELAUNCH"
,    EarlyAccess = "EARLY_ACCESS"
,    Alpha = "ALPHA"
,    Beta = "BETA"
,    Ga = "GA"
,    Deprecated = "DEPRECATED"
}


// GoogleCloudRunV2Service
/** 
 * Service acts as a top-level container that manages a set of configurations and revision templates which implement a network service. Service exists to provide a singular abstraction which can be access controlled, reasoned about, and which encapsulates software lifecycle decisions such as rollout policy and team resource ownership.
**/
export class GoogleCloudRunV2Service extends SpeakeasyBase {
  @Metadata({ data: "json, name=annotations" })
  annotations?: Map<string, string>;

  @Metadata({ data: "json, name=binaryAuthorization" })
  binaryAuthorization?: GoogleCloudRunV2BinaryAuthorization;

  @Metadata({ data: "json, name=client" })
  client?: string;

  @Metadata({ data: "json, name=clientVersion" })
  clientVersion?: string;

  @Metadata({ data: "json, name=conditions", elemType: shared.GoogleCloudRunV2Condition })
  conditions?: GoogleCloudRunV2Condition[];

  @Metadata({ data: "json, name=createTime" })
  createTime?: string;

  @Metadata({ data: "json, name=creator" })
  creator?: string;

  @Metadata({ data: "json, name=deleteTime" })
  deleteTime?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=etag" })
  etag?: string;

  @Metadata({ data: "json, name=expireTime" })
  expireTime?: string;

  @Metadata({ data: "json, name=generation" })
  generation?: string;

  @Metadata({ data: "json, name=ingress" })
  ingress?: GoogleCloudRunV2ServiceIngressEnum;

  @Metadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @Metadata({ data: "json, name=lastModifier" })
  lastModifier?: string;

  @Metadata({ data: "json, name=latestCreatedRevision" })
  latestCreatedRevision?: string;

  @Metadata({ data: "json, name=latestReadyRevision" })
  latestReadyRevision?: string;

  @Metadata({ data: "json, name=launchStage" })
  launchStage?: GoogleCloudRunV2ServiceLaunchStageEnum;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=observedGeneration" })
  observedGeneration?: string;

  @Metadata({ data: "json, name=reconciling" })
  reconciling?: boolean;

  @Metadata({ data: "json, name=template" })
  template?: GoogleCloudRunV2RevisionTemplate;

  @Metadata({ data: "json, name=terminalCondition" })
  terminalCondition?: GoogleCloudRunV2Condition;

  @Metadata({ data: "json, name=traffic", elemType: shared.GoogleCloudRunV2TrafficTarget })
  traffic?: GoogleCloudRunV2TrafficTarget[];

  @Metadata({ data: "json, name=trafficStatuses", elemType: shared.GoogleCloudRunV2TrafficTargetStatus })
  trafficStatuses?: GoogleCloudRunV2TrafficTargetStatus[];

  @Metadata({ data: "json, name=uid" })
  uid?: string;

  @Metadata({ data: "json, name=updateTime" })
  updateTime?: string;

  @Metadata({ data: "json, name=uri" })
  uri?: string;
}
