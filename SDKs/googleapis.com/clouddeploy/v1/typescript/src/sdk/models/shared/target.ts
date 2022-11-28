import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AnthosCluster } from "./anthoscluster";
import { ExecutionConfig } from "./executionconfig";
import { GkeCluster } from "./gkecluster";
import { CloudRunLocation } from "./cloudrunlocation";



// TargetInput
/** 
 * A `Target` resource in the Google Cloud Deploy API. A `Target` defines a location to which a Skaffold configuration can be deployed.
**/
export class TargetInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=annotations" })
  annotations?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=anthosCluster" })
  anthosCluster?: AnthosCluster;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=etag" })
  etag?: string;

  @SpeakeasyMetadata({ data: "json, name=executionConfigs", elemType: ExecutionConfig })
  executionConfigs?: ExecutionConfig[];

  @SpeakeasyMetadata({ data: "json, name=gke" })
  gke?: GkeCluster;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=requireApproval" })
  requireApproval?: boolean;

  @SpeakeasyMetadata({ data: "json, name=run" })
  run?: CloudRunLocation;
}


// Target
/** 
 * A `Target` resource in the Google Cloud Deploy API. A `Target` defines a location to which a Skaffold configuration can be deployed.
**/
export class Target extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=annotations" })
  annotations?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=anthosCluster" })
  anthosCluster?: AnthosCluster;

  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=etag" })
  etag?: string;

  @SpeakeasyMetadata({ data: "json, name=executionConfigs", elemType: ExecutionConfig })
  executionConfigs?: ExecutionConfig[];

  @SpeakeasyMetadata({ data: "json, name=gke" })
  gke?: GkeCluster;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=requireApproval" })
  requireApproval?: boolean;

  @SpeakeasyMetadata({ data: "json, name=run" })
  run?: CloudRunLocation;

  @SpeakeasyMetadata({ data: "json, name=targetId" })
  targetId?: string;

  @SpeakeasyMetadata({ data: "json, name=uid" })
  uid?: string;

  @SpeakeasyMetadata({ data: "json, name=updateTime" })
  updateTime?: string;
}
