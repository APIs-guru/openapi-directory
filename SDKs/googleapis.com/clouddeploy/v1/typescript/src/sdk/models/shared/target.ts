import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AnthosCluster } from "./anthoscluster";
import { ExecutionConfig } from "./executionconfig";
import { GkeCluster } from "./gkecluster";
import { CloudRunLocation } from "./cloudrunlocation";


// Target
/** 
 * A `Target` resource in the Google Cloud Deploy API. A `Target` defines a location to which a Skaffold configuration can be deployed.
**/
export class Target extends SpeakeasyBase {
  @Metadata({ data: "json, name=annotations" })
  annotations?: Map<string, string>;

  @Metadata({ data: "json, name=anthosCluster" })
  anthosCluster?: AnthosCluster;

  @Metadata({ data: "json, name=createTime" })
  createTime?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=etag" })
  etag?: string;

  @Metadata({ data: "json, name=executionConfigs", elemType: shared.ExecutionConfig })
  executionConfigs?: ExecutionConfig[];

  @Metadata({ data: "json, name=gke" })
  gke?: GkeCluster;

  @Metadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=requireApproval" })
  requireApproval?: boolean;

  @Metadata({ data: "json, name=run" })
  run?: CloudRunLocation;

  @Metadata({ data: "json, name=targetId" })
  targetId?: string;

  @Metadata({ data: "json, name=uid" })
  uid?: string;

  @Metadata({ data: "json, name=updateTime" })
  updateTime?: string;
}
