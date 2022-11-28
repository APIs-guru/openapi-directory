import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudMlV1AcceleratorConfig } from "./googlecloudmlv1acceleratorconfig";
import { GoogleCloudMlV1AutoScaling } from "./googlecloudmlv1autoscaling";
import { GoogleCloudMlV1ContainerSpec } from "./googlecloudmlv1containerspec";
import { GoogleCloudMlV1ExplanationConfig } from "./googlecloudmlv1explanationconfig";
import { GoogleCloudMlV1ManualScaling } from "./googlecloudmlv1manualscaling";
import { GoogleCloudMlV1RequestLoggingConfig } from "./googlecloudmlv1requestloggingconfig";
import { GoogleCloudMlV1RouteMap } from "./googlecloudmlv1routemap";
export declare enum GoogleCloudMlV1VersionFrameworkEnum {
    FrameworkUnspecified = "FRAMEWORK_UNSPECIFIED",
    Tensorflow = "TENSORFLOW",
    ScikitLearn = "SCIKIT_LEARN",
    Xgboost = "XGBOOST"
}
export declare enum GoogleCloudMlV1VersionStateEnum {
    Unknown = "UNKNOWN",
    Ready = "READY",
    Creating = "CREATING",
    Failed = "FAILED",
    Deleting = "DELETING",
    Updating = "UPDATING"
}
/**
 * Represents a version of the model. Each version is a trained model deployed in the cloud, ready to handle prediction requests. A model can have multiple versions. You can get information about all of the versions of a given model by calling projects.models.versions.list.
**/
export declare class GoogleCloudMlV1Version extends SpeakeasyBase {
    acceleratorConfig?: GoogleCloudMlV1AcceleratorConfig;
    autoScaling?: GoogleCloudMlV1AutoScaling;
    container?: GoogleCloudMlV1ContainerSpec;
    createTime?: string;
    deploymentUri?: string;
    description?: string;
    errorMessage?: string;
    etag?: string;
    explanationConfig?: GoogleCloudMlV1ExplanationConfig;
    framework?: GoogleCloudMlV1VersionFrameworkEnum;
    isDefault?: boolean;
    labels?: Map<string, string>;
    lastMigrationModelId?: string;
    lastMigrationTime?: string;
    lastUseTime?: string;
    machineType?: string;
    manualScaling?: GoogleCloudMlV1ManualScaling;
    name?: string;
    packageUris?: string[];
    predictionClass?: string;
    pythonVersion?: string;
    requestLoggingConfig?: GoogleCloudMlV1RequestLoggingConfig;
    routes?: GoogleCloudMlV1RouteMap;
    runtimeVersion?: string;
    serviceAccount?: string;
    state?: GoogleCloudMlV1VersionStateEnum;
}
/**
 * Represents a version of the model. Each version is a trained model deployed in the cloud, ready to handle prediction requests. A model can have multiple versions. You can get information about all of the versions of a given model by calling projects.models.versions.list.
**/
export declare class GoogleCloudMlV1VersionInput extends SpeakeasyBase {
    acceleratorConfig?: GoogleCloudMlV1AcceleratorConfig;
    autoScaling?: GoogleCloudMlV1AutoScaling;
    container?: GoogleCloudMlV1ContainerSpec;
    createTime?: string;
    deploymentUri?: string;
    description?: string;
    errorMessage?: string;
    etag?: string;
    explanationConfig?: GoogleCloudMlV1ExplanationConfig;
    framework?: GoogleCloudMlV1VersionFrameworkEnum;
    isDefault?: boolean;
    labels?: Map<string, string>;
    lastUseTime?: string;
    machineType?: string;
    manualScaling?: GoogleCloudMlV1ManualScaling;
    name?: string;
    packageUris?: string[];
    predictionClass?: string;
    pythonVersion?: string;
    requestLoggingConfig?: GoogleCloudMlV1RequestLoggingConfig;
    routes?: GoogleCloudMlV1RouteMap;
    runtimeVersion?: string;
    serviceAccount?: string;
    state?: GoogleCloudMlV1VersionStateEnum;
}
