import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudMlV1EncryptionConfig } from "./googlecloudmlv1encryptionconfig";
import { GoogleCloudMlV1ReplicaConfig } from "./googlecloudmlv1replicaconfig";
import { GoogleCloudMlV1HyperparameterSpec } from "./googlecloudmlv1hyperparameterspec";
import { GoogleCloudMlV1Scheduling } from "./googlecloudmlv1scheduling";
export declare enum GoogleCloudMlV1TrainingInputScaleTierEnum {
    Basic = "BASIC",
    Standard1 = "STANDARD_1",
    Premium1 = "PREMIUM_1",
    BasicGpu = "BASIC_GPU",
    BasicTpu = "BASIC_TPU",
    Custom = "CUSTOM"
}
/**
 * Represents input parameters for a training job. When using the gcloud command to submit your training job, you can specify the input parameters as command-line arguments and/or in a YAML configuration file referenced from the --config command-line argument. For details, see the guide to [submitting a training job](/ai-platform/training/docs/training-jobs).
**/
export declare class GoogleCloudMlV1TrainingInput extends SpeakeasyBase {
    args?: string[];
    enableWebAccess?: boolean;
    encryptionConfig?: GoogleCloudMlV1EncryptionConfig;
    evaluatorConfig?: GoogleCloudMlV1ReplicaConfig;
    evaluatorCount?: string;
    evaluatorType?: string;
    hyperparameters?: GoogleCloudMlV1HyperparameterSpec;
    jobDir?: string;
    masterConfig?: GoogleCloudMlV1ReplicaConfig;
    masterType?: string;
    network?: string;
    packageUris?: string[];
    parameterServerConfig?: GoogleCloudMlV1ReplicaConfig;
    parameterServerCount?: string;
    parameterServerType?: string;
    pythonModule?: string;
    pythonVersion?: string;
    region?: string;
    runtimeVersion?: string;
    scaleTier?: GoogleCloudMlV1TrainingInputScaleTierEnum;
    scheduling?: GoogleCloudMlV1Scheduling;
    serviceAccount?: string;
    useChiefInTfConfig?: boolean;
    workerConfig?: GoogleCloudMlV1ReplicaConfig;
    workerCount?: string;
    workerType?: string;
}
