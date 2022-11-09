import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { BuildArtifact } from "./buildartifact";
import { DeliveryPipeline } from "./deliverypipeline";
import { TargetArtifact } from "./targetartifact";
import { TargetRender } from "./targetrender";
import { Target } from "./target";

export enum ReleaseRenderStateEnum {
    RenderStateUnspecified = "RENDER_STATE_UNSPECIFIED"
,    Succeeded = "SUCCEEDED"
,    Failed = "FAILED"
,    InProgress = "IN_PROGRESS"
}


// Release
/** 
 * A `Release` resource in the Google Cloud Deploy API. A `Release` defines a specific Skaffold configuration instance that can be deployed.
**/
export class Release extends SpeakeasyBase {
  @Metadata({ data: "json, name=abandoned" })
  abandoned?: boolean;

  @Metadata({ data: "json, name=annotations" })
  annotations?: Map<string, string>;

  @Metadata({ data: "json, name=buildArtifacts", elemType: shared.BuildArtifact })
  buildArtifacts?: BuildArtifact[];

  @Metadata({ data: "json, name=createTime" })
  createTime?: string;

  @Metadata({ data: "json, name=deliveryPipelineSnapshot" })
  deliveryPipelineSnapshot?: DeliveryPipeline;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=etag" })
  etag?: string;

  @Metadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=renderEndTime" })
  renderEndTime?: string;

  @Metadata({ data: "json, name=renderStartTime" })
  renderStartTime?: string;

  @Metadata({ data: "json, name=renderState" })
  renderState?: ReleaseRenderStateEnum;

  @Metadata({ data: "json, name=skaffoldConfigPath" })
  skaffoldConfigPath?: string;

  @Metadata({ data: "json, name=skaffoldConfigUri" })
  skaffoldConfigUri?: string;

  @Metadata({ data: "json, name=skaffoldVersion" })
  skaffoldVersion?: string;

  @Metadata({ data: "json, name=targetArtifacts", elemType: shared.TargetArtifact })
  targetArtifacts?: Map<string, TargetArtifact>;

  @Metadata({ data: "json, name=targetRenders", elemType: shared.TargetRender })
  targetRenders?: Map<string, TargetRender>;

  @Metadata({ data: "json, name=targetSnapshots", elemType: shared.Target })
  targetSnapshots?: Target[];

  @Metadata({ data: "json, name=uid" })
  uid?: string;
}
