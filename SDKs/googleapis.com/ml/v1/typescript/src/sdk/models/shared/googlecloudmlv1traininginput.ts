import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudMlV1EncryptionConfig } from "./googlecloudmlv1encryptionconfig";
import { GoogleCloudMlV1ReplicaConfig } from "./googlecloudmlv1replicaconfig";
import { GoogleCloudMlV1HyperparameterSpec } from "./googlecloudmlv1hyperparameterspec";
import { GoogleCloudMlV1Scheduling } from "./googlecloudmlv1scheduling";


export enum GoogleCloudMlV1TrainingInputScaleTierEnum {
    Basic = "BASIC",
    Standard1 = "STANDARD_1",
    Premium1 = "PREMIUM_1",
    BasicGpu = "BASIC_GPU",
    BasicTpu = "BASIC_TPU",
    Custom = "CUSTOM"
}


// GoogleCloudMlV1TrainingInput
/** 
 * Represents input parameters for a training job. When using the gcloud command to submit your training job, you can specify the input parameters as command-line arguments and/or in a YAML configuration file referenced from the --config command-line argument. For details, see the guide to [submitting a training job](/ai-platform/training/docs/training-jobs).
**/
export class GoogleCloudMlV1TrainingInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=args" })
  args?: string[];

  @SpeakeasyMetadata({ data: "json, name=enableWebAccess" })
  enableWebAccess?: boolean;

  @SpeakeasyMetadata({ data: "json, name=encryptionConfig" })
  encryptionConfig?: GoogleCloudMlV1EncryptionConfig;

  @SpeakeasyMetadata({ data: "json, name=evaluatorConfig" })
  evaluatorConfig?: GoogleCloudMlV1ReplicaConfig;

  @SpeakeasyMetadata({ data: "json, name=evaluatorCount" })
  evaluatorCount?: string;

  @SpeakeasyMetadata({ data: "json, name=evaluatorType" })
  evaluatorType?: string;

  @SpeakeasyMetadata({ data: "json, name=hyperparameters" })
  hyperparameters?: GoogleCloudMlV1HyperparameterSpec;

  @SpeakeasyMetadata({ data: "json, name=jobDir" })
  jobDir?: string;

  @SpeakeasyMetadata({ data: "json, name=masterConfig" })
  masterConfig?: GoogleCloudMlV1ReplicaConfig;

  @SpeakeasyMetadata({ data: "json, name=masterType" })
  masterType?: string;

  @SpeakeasyMetadata({ data: "json, name=network" })
  network?: string;

  @SpeakeasyMetadata({ data: "json, name=packageUris" })
  packageUris?: string[];

  @SpeakeasyMetadata({ data: "json, name=parameterServerConfig" })
  parameterServerConfig?: GoogleCloudMlV1ReplicaConfig;

  @SpeakeasyMetadata({ data: "json, name=parameterServerCount" })
  parameterServerCount?: string;

  @SpeakeasyMetadata({ data: "json, name=parameterServerType" })
  parameterServerType?: string;

  @SpeakeasyMetadata({ data: "json, name=pythonModule" })
  pythonModule?: string;

  @SpeakeasyMetadata({ data: "json, name=pythonVersion" })
  pythonVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=region" })
  region?: string;

  @SpeakeasyMetadata({ data: "json, name=runtimeVersion" })
  runtimeVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=scaleTier" })
  scaleTier?: GoogleCloudMlV1TrainingInputScaleTierEnum;

  @SpeakeasyMetadata({ data: "json, name=scheduling" })
  scheduling?: GoogleCloudMlV1Scheduling;

  @SpeakeasyMetadata({ data: "json, name=serviceAccount" })
  serviceAccount?: string;

  @SpeakeasyMetadata({ data: "json, name=useChiefInTfConfig" })
  useChiefInTfConfig?: boolean;

  @SpeakeasyMetadata({ data: "json, name=workerConfig" })
  workerConfig?: GoogleCloudMlV1ReplicaConfig;

  @SpeakeasyMetadata({ data: "json, name=workerCount" })
  workerCount?: string;

  @SpeakeasyMetadata({ data: "json, name=workerType" })
  workerType?: string;
}
