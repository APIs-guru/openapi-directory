import { SpeakeasyBase } from "../../../internal/utils";
import { PipelineCondition } from "./pipelinecondition";
import { SerialPipeline } from "./serialpipeline";
/**
 * A `DeliveryPipeline` resource in the Google Cloud Deploy API. A `DeliveryPipeline` defines a pipeline through which a Skaffold configuration can progress.
**/
export declare class DeliveryPipelineInput extends SpeakeasyBase {
    annotations?: Map<string, string>;
    condition?: PipelineCondition;
    description?: string;
    etag?: string;
    labels?: Map<string, string>;
    name?: string;
    serialPipeline?: SerialPipeline;
    suspended?: boolean;
}
/**
 * A `DeliveryPipeline` resource in the Google Cloud Deploy API. A `DeliveryPipeline` defines a pipeline through which a Skaffold configuration can progress.
**/
export declare class DeliveryPipeline extends SpeakeasyBase {
    annotations?: Map<string, string>;
    condition?: PipelineCondition;
    createTime?: string;
    description?: string;
    etag?: string;
    labels?: Map<string, string>;
    name?: string;
    serialPipeline?: SerialPipeline;
    suspended?: boolean;
    uid?: string;
    updateTime?: string;
}
