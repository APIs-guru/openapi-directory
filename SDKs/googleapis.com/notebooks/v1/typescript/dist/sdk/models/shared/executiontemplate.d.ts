import { SpeakeasyBase } from "../../../internal/utils/utils";
import { SchedulerAcceleratorConfig } from "./scheduleracceleratorconfig";
import { DataprocParameters } from "./dataprocparameters";
import { VertexAiParameters } from "./vertexaiparameters";
export declare enum ExecutionTemplateJobTypeEnum {
    JobTypeUnspecified = "JOB_TYPE_UNSPECIFIED",
    VertexAi = "VERTEX_AI",
    Dataproc = "DATAPROC"
}
export declare enum ExecutionTemplateScaleTierEnum {
    ScaleTierUnspecified = "SCALE_TIER_UNSPECIFIED",
    Basic = "BASIC",
    Standard1 = "STANDARD_1",
    Premium1 = "PREMIUM_1",
    BasicGpu = "BASIC_GPU",
    BasicTpu = "BASIC_TPU",
    Custom = "CUSTOM"
}
/**
 * The description a notebook execution workload.
**/
export declare class ExecutionTemplate extends SpeakeasyBase {
    acceleratorConfig?: SchedulerAcceleratorConfig;
    containerImageUri?: string;
    dataprocParameters?: DataprocParameters;
    inputNotebookFile?: string;
    jobType?: ExecutionTemplateJobTypeEnum;
    kernelSpec?: string;
    labels?: Map<string, string>;
    masterType?: string;
    outputNotebookFolder?: string;
    parameters?: string;
    paramsYamlFile?: string;
    scaleTier?: ExecutionTemplateScaleTierEnum;
    serviceAccount?: string;
    tensorboard?: string;
    vertexAiParameters?: VertexAiParameters;
}
