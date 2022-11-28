import { SpeakeasyBase } from "../../../internal/utils";
import { BuildArtifact } from "./buildartifact";
import { DeliveryPipeline } from "./deliverypipeline";
import { TargetArtifact } from "./targetartifact";
import { TargetRender } from "./targetrender";
import { Target } from "./target";
import { DeliveryPipelineInput } from "./deliverypipeline";
export declare enum ReleaseRenderStateEnum {
    RenderStateUnspecified = "RENDER_STATE_UNSPECIFIED",
    Succeeded = "SUCCEEDED",
    Failed = "FAILED",
    InProgress = "IN_PROGRESS"
}
/**
 * A `Release` resource in the Google Cloud Deploy API. A `Release` defines a specific Skaffold configuration instance that can be deployed.
**/
export declare class Release extends SpeakeasyBase {
    abandoned?: boolean;
    annotations?: Map<string, string>;
    buildArtifacts?: BuildArtifact[];
    createTime?: string;
    deliveryPipelineSnapshot?: DeliveryPipeline;
    description?: string;
    etag?: string;
    labels?: Map<string, string>;
    name?: string;
    renderEndTime?: string;
    renderStartTime?: string;
    renderState?: ReleaseRenderStateEnum;
    skaffoldConfigPath?: string;
    skaffoldConfigUri?: string;
    skaffoldVersion?: string;
    targetArtifacts?: Map<string, TargetArtifact>;
    targetRenders?: Map<string, TargetRender>;
    targetSnapshots?: Target[];
    uid?: string;
}
/**
 * A `Release` resource in the Google Cloud Deploy API. A `Release` defines a specific Skaffold configuration instance that can be deployed.
**/
export declare class ReleaseInput extends SpeakeasyBase {
    annotations?: Map<string, string>;
    buildArtifacts?: BuildArtifact[];
    deliveryPipelineSnapshot?: DeliveryPipelineInput;
    description?: string;
    etag?: string;
    labels?: Map<string, string>;
    name?: string;
    skaffoldConfigPath?: string;
    skaffoldConfigUri?: string;
    skaffoldVersion?: string;
}
