import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { SchedulerAcceleratorConfig } from "./scheduleracceleratorconfig";
import { DataprocParameters } from "./dataprocparameters";
import { VertexAiParameters } from "./vertexaiparameters";

export enum ExecutionTemplateJobTypeEnum {
    JobTypeUnspecified = "JOB_TYPE_UNSPECIFIED"
,    VertexAi = "VERTEX_AI"
,    Dataproc = "DATAPROC"
}

export enum ExecutionTemplateScaleTierEnum {
    ScaleTierUnspecified = "SCALE_TIER_UNSPECIFIED"
,    Basic = "BASIC"
,    Standard1 = "STANDARD_1"
,    Premium1 = "PREMIUM_1"
,    BasicGpu = "BASIC_GPU"
,    BasicTpu = "BASIC_TPU"
,    Custom = "CUSTOM"
}


// ExecutionTemplate
/** 
 * The description a notebook execution workload.
**/
export class ExecutionTemplate extends SpeakeasyBase {
  @Metadata({ data: "json, name=acceleratorConfig" })
  acceleratorConfig?: SchedulerAcceleratorConfig;

  @Metadata({ data: "json, name=containerImageUri" })
  containerImageUri?: string;

  @Metadata({ data: "json, name=dataprocParameters" })
  dataprocParameters?: DataprocParameters;

  @Metadata({ data: "json, name=inputNotebookFile" })
  inputNotebookFile?: string;

  @Metadata({ data: "json, name=jobType" })
  jobType?: ExecutionTemplateJobTypeEnum;

  @Metadata({ data: "json, name=kernelSpec" })
  kernelSpec?: string;

  @Metadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @Metadata({ data: "json, name=masterType" })
  masterType?: string;

  @Metadata({ data: "json, name=outputNotebookFolder" })
  outputNotebookFolder?: string;

  @Metadata({ data: "json, name=parameters" })
  parameters?: string;

  @Metadata({ data: "json, name=paramsYamlFile" })
  paramsYamlFile?: string;

  @Metadata({ data: "json, name=scaleTier" })
  scaleTier?: ExecutionTemplateScaleTierEnum;

  @Metadata({ data: "json, name=serviceAccount" })
  serviceAccount?: string;

  @Metadata({ data: "json, name=tensorboard" })
  tensorboard?: string;

  @Metadata({ data: "json, name=vertexAiParameters" })
  vertexAiParameters?: VertexAiParameters;
}
