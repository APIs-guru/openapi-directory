import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SchedulerAcceleratorConfig } from "./scheduleracceleratorconfig";
import { DataprocParameters } from "./dataprocparameters";
import { VertexAiParameters } from "./vertexaiparameters";


export enum ExecutionTemplateJobTypeEnum {
    JobTypeUnspecified = "JOB_TYPE_UNSPECIFIED",
    VertexAi = "VERTEX_AI",
    Dataproc = "DATAPROC"
}

export enum ExecutionTemplateScaleTierEnum {
    ScaleTierUnspecified = "SCALE_TIER_UNSPECIFIED",
    Basic = "BASIC",
    Standard1 = "STANDARD_1",
    Premium1 = "PREMIUM_1",
    BasicGpu = "BASIC_GPU",
    BasicTpu = "BASIC_TPU",
    Custom = "CUSTOM"
}


// ExecutionTemplate
/** 
 * The description a notebook execution workload.
**/
export class ExecutionTemplate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=acceleratorConfig" })
  acceleratorConfig?: SchedulerAcceleratorConfig;

  @SpeakeasyMetadata({ data: "json, name=containerImageUri" })
  containerImageUri?: string;

  @SpeakeasyMetadata({ data: "json, name=dataprocParameters" })
  dataprocParameters?: DataprocParameters;

  @SpeakeasyMetadata({ data: "json, name=inputNotebookFile" })
  inputNotebookFile?: string;

  @SpeakeasyMetadata({ data: "json, name=jobType" })
  jobType?: ExecutionTemplateJobTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=kernelSpec" })
  kernelSpec?: string;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=masterType" })
  masterType?: string;

  @SpeakeasyMetadata({ data: "json, name=outputNotebookFolder" })
  outputNotebookFolder?: string;

  @SpeakeasyMetadata({ data: "json, name=parameters" })
  parameters?: string;

  @SpeakeasyMetadata({ data: "json, name=paramsYamlFile" })
  paramsYamlFile?: string;

  @SpeakeasyMetadata({ data: "json, name=scaleTier" })
  scaleTier?: ExecutionTemplateScaleTierEnum;

  @SpeakeasyMetadata({ data: "json, name=serviceAccount" })
  serviceAccount?: string;

  @SpeakeasyMetadata({ data: "json, name=tensorboard" })
  tensorboard?: string;

  @SpeakeasyMetadata({ data: "json, name=vertexAiParameters" })
  vertexAiParameters?: VertexAiParameters;
}
