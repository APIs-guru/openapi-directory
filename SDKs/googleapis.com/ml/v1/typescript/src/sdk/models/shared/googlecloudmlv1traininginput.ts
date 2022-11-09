import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudMlV1EncryptionConfig } from "./googlecloudmlv1encryptionconfig";
import { GoogleCloudMlV1ReplicaConfig } from "./googlecloudmlv1replicaconfig";
import { GoogleCloudMlV1HyperparameterSpec } from "./googlecloudmlv1hyperparameterspec";
import { GoogleCloudMlV1ReplicaConfig } from "./googlecloudmlv1replicaconfig";
import { GoogleCloudMlV1ReplicaConfig } from "./googlecloudmlv1replicaconfig";
import { GoogleCloudMlV1Scheduling } from "./googlecloudmlv1scheduling";
import { GoogleCloudMlV1ReplicaConfig } from "./googlecloudmlv1replicaconfig";

export enum GoogleCloudMlV1TrainingInputScaleTierEnum {
    Basic = "BASIC"
,    Standard1 = "STANDARD_1"
,    Premium1 = "PREMIUM_1"
,    BasicGpu = "BASIC_GPU"
,    BasicTpu = "BASIC_TPU"
,    Custom = "CUSTOM"
}


// GoogleCloudMlV1TrainingInput
/** 
 * Represents input parameters for a training job. When using the gcloud command to submit your training job, you can specify the input parameters as command-line arguments and/or in a YAML configuration file referenced from the --config command-line argument. For details, see the guide to [submitting a training job](/ai-platform/training/docs/training-jobs).
**/
export class GoogleCloudMlV1TrainingInput extends SpeakeasyBase {
  @Metadata({ data: "json, name=args" })
  args?: string[];

  @Metadata({ data: "json, name=enableWebAccess" })
  enableWebAccess?: boolean;

  @Metadata({ data: "json, name=encryptionConfig" })
  encryptionConfig?: GoogleCloudMlV1EncryptionConfig;

  @Metadata({ data: "json, name=evaluatorConfig" })
  evaluatorConfig?: GoogleCloudMlV1ReplicaConfig;

  @Metadata({ data: "json, name=evaluatorCount" })
  evaluatorCount?: string;

  @Metadata({ data: "json, name=evaluatorType" })
  evaluatorType?: string;

  @Metadata({ data: "json, name=hyperparameters" })
  hyperparameters?: GoogleCloudMlV1HyperparameterSpec;

  @Metadata({ data: "json, name=jobDir" })
  jobDir?: string;

  @Metadata({ data: "json, name=masterConfig" })
  masterConfig?: GoogleCloudMlV1ReplicaConfig;

  @Metadata({ data: "json, name=masterType" })
  masterType?: string;

  @Metadata({ data: "json, name=network" })
  network?: string;

  @Metadata({ data: "json, name=packageUris" })
  packageUris?: string[];

  @Metadata({ data: "json, name=parameterServerConfig" })
  parameterServerConfig?: GoogleCloudMlV1ReplicaConfig;

  @Metadata({ data: "json, name=parameterServerCount" })
  parameterServerCount?: string;

  @Metadata({ data: "json, name=parameterServerType" })
  parameterServerType?: string;

  @Metadata({ data: "json, name=pythonModule" })
  pythonModule?: string;

  @Metadata({ data: "json, name=pythonVersion" })
  pythonVersion?: string;

  @Metadata({ data: "json, name=region" })
  region?: string;

  @Metadata({ data: "json, name=runtimeVersion" })
  runtimeVersion?: string;

  @Metadata({ data: "json, name=scaleTier" })
  scaleTier?: GoogleCloudMlV1TrainingInputScaleTierEnum;

  @Metadata({ data: "json, name=scheduling" })
  scheduling?: GoogleCloudMlV1Scheduling;

  @Metadata({ data: "json, name=serviceAccount" })
  serviceAccount?: string;

  @Metadata({ data: "json, name=useChiefInTfConfig" })
  useChiefInTfConfig?: boolean;

  @Metadata({ data: "json, name=workerConfig" })
  workerConfig?: GoogleCloudMlV1ReplicaConfig;

  @Metadata({ data: "json, name=workerCount" })
  workerCount?: string;

  @Metadata({ data: "json, name=workerType" })
  workerType?: string;
}
