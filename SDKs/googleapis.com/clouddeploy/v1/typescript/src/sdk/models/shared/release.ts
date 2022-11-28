import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BuildArtifact } from "./buildartifact";
import { DeliveryPipeline } from "./deliverypipeline";
import { TargetArtifact } from "./targetartifact";
import { TargetRender } from "./targetrender";
import { Target } from "./target";
import { DeliveryPipelineInput } from "./deliverypipeline";


export enum ReleaseRenderStateEnum {
    RenderStateUnspecified = "RENDER_STATE_UNSPECIFIED",
    Succeeded = "SUCCEEDED",
    Failed = "FAILED",
    InProgress = "IN_PROGRESS"
}


// Release
/** 
 * A `Release` resource in the Google Cloud Deploy API. A `Release` defines a specific Skaffold configuration instance that can be deployed.
**/
export class Release extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=abandoned" })
  abandoned?: boolean;

  @SpeakeasyMetadata({ data: "json, name=annotations" })
  annotations?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=buildArtifacts", elemType: BuildArtifact })
  buildArtifacts?: BuildArtifact[];

  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=deliveryPipelineSnapshot" })
  deliveryPipelineSnapshot?: DeliveryPipeline;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=etag" })
  etag?: string;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=renderEndTime" })
  renderEndTime?: string;

  @SpeakeasyMetadata({ data: "json, name=renderStartTime" })
  renderStartTime?: string;

  @SpeakeasyMetadata({ data: "json, name=renderState" })
  renderState?: ReleaseRenderStateEnum;

  @SpeakeasyMetadata({ data: "json, name=skaffoldConfigPath" })
  skaffoldConfigPath?: string;

  @SpeakeasyMetadata({ data: "json, name=skaffoldConfigUri" })
  skaffoldConfigUri?: string;

  @SpeakeasyMetadata({ data: "json, name=skaffoldVersion" })
  skaffoldVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=targetArtifacts", elemType: TargetArtifact })
  targetArtifacts?: Map<string, TargetArtifact>;

  @SpeakeasyMetadata({ data: "json, name=targetRenders", elemType: TargetRender })
  targetRenders?: Map<string, TargetRender>;

  @SpeakeasyMetadata({ data: "json, name=targetSnapshots", elemType: Target })
  targetSnapshots?: Target[];

  @SpeakeasyMetadata({ data: "json, name=uid" })
  uid?: string;
}


// ReleaseInput
/** 
 * A `Release` resource in the Google Cloud Deploy API. A `Release` defines a specific Skaffold configuration instance that can be deployed.
**/
export class ReleaseInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=annotations" })
  annotations?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=buildArtifacts", elemType: BuildArtifact })
  buildArtifacts?: BuildArtifact[];

  @SpeakeasyMetadata({ data: "json, name=deliveryPipelineSnapshot" })
  deliveryPipelineSnapshot?: DeliveryPipelineInput;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=etag" })
  etag?: string;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=skaffoldConfigPath" })
  skaffoldConfigPath?: string;

  @SpeakeasyMetadata({ data: "json, name=skaffoldConfigUri" })
  skaffoldConfigUri?: string;

  @SpeakeasyMetadata({ data: "json, name=skaffoldVersion" })
  skaffoldVersion?: string;
}
