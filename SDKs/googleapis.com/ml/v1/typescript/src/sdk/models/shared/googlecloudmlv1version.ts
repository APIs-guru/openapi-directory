import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudMlV1AcceleratorConfig } from "./googlecloudmlv1acceleratorconfig";
import { GoogleCloudMlV1AutoScaling } from "./googlecloudmlv1autoscaling";
import { GoogleCloudMlV1ContainerSpec } from "./googlecloudmlv1containerspec";
import { GoogleCloudMlV1ExplanationConfig } from "./googlecloudmlv1explanationconfig";
import { GoogleCloudMlV1ManualScaling } from "./googlecloudmlv1manualscaling";
import { GoogleCloudMlV1RequestLoggingConfig } from "./googlecloudmlv1requestloggingconfig";
import { GoogleCloudMlV1RouteMap } from "./googlecloudmlv1routemap";


export enum GoogleCloudMlV1VersionFrameworkEnum {
    FrameworkUnspecified = "FRAMEWORK_UNSPECIFIED",
    Tensorflow = "TENSORFLOW",
    ScikitLearn = "SCIKIT_LEARN",
    Xgboost = "XGBOOST"
}

export enum GoogleCloudMlV1VersionStateEnum {
    Unknown = "UNKNOWN",
    Ready = "READY",
    Creating = "CREATING",
    Failed = "FAILED",
    Deleting = "DELETING",
    Updating = "UPDATING"
}


// GoogleCloudMlV1Version
/** 
 * Represents a version of the model. Each version is a trained model deployed in the cloud, ready to handle prediction requests. A model can have multiple versions. You can get information about all of the versions of a given model by calling projects.models.versions.list.
**/
export class GoogleCloudMlV1Version extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=acceleratorConfig" })
  acceleratorConfig?: GoogleCloudMlV1AcceleratorConfig;

  @SpeakeasyMetadata({ data: "json, name=autoScaling" })
  autoScaling?: GoogleCloudMlV1AutoScaling;

  @SpeakeasyMetadata({ data: "json, name=container" })
  container?: GoogleCloudMlV1ContainerSpec;

  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=deploymentUri" })
  deploymentUri?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=errorMessage" })
  errorMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=etag" })
  etag?: string;

  @SpeakeasyMetadata({ data: "json, name=explanationConfig" })
  explanationConfig?: GoogleCloudMlV1ExplanationConfig;

  @SpeakeasyMetadata({ data: "json, name=framework" })
  framework?: GoogleCloudMlV1VersionFrameworkEnum;

  @SpeakeasyMetadata({ data: "json, name=isDefault" })
  isDefault?: boolean;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=lastMigrationModelId" })
  lastMigrationModelId?: string;

  @SpeakeasyMetadata({ data: "json, name=lastMigrationTime" })
  lastMigrationTime?: string;

  @SpeakeasyMetadata({ data: "json, name=lastUseTime" })
  lastUseTime?: string;

  @SpeakeasyMetadata({ data: "json, name=machineType" })
  machineType?: string;

  @SpeakeasyMetadata({ data: "json, name=manualScaling" })
  manualScaling?: GoogleCloudMlV1ManualScaling;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=packageUris" })
  packageUris?: string[];

  @SpeakeasyMetadata({ data: "json, name=predictionClass" })
  predictionClass?: string;

  @SpeakeasyMetadata({ data: "json, name=pythonVersion" })
  pythonVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=requestLoggingConfig" })
  requestLoggingConfig?: GoogleCloudMlV1RequestLoggingConfig;

  @SpeakeasyMetadata({ data: "json, name=routes" })
  routes?: GoogleCloudMlV1RouteMap;

  @SpeakeasyMetadata({ data: "json, name=runtimeVersion" })
  runtimeVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=serviceAccount" })
  serviceAccount?: string;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: GoogleCloudMlV1VersionStateEnum;
}


// GoogleCloudMlV1VersionInput
/** 
 * Represents a version of the model. Each version is a trained model deployed in the cloud, ready to handle prediction requests. A model can have multiple versions. You can get information about all of the versions of a given model by calling projects.models.versions.list.
**/
export class GoogleCloudMlV1VersionInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=acceleratorConfig" })
  acceleratorConfig?: GoogleCloudMlV1AcceleratorConfig;

  @SpeakeasyMetadata({ data: "json, name=autoScaling" })
  autoScaling?: GoogleCloudMlV1AutoScaling;

  @SpeakeasyMetadata({ data: "json, name=container" })
  container?: GoogleCloudMlV1ContainerSpec;

  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=deploymentUri" })
  deploymentUri?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=errorMessage" })
  errorMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=etag" })
  etag?: string;

  @SpeakeasyMetadata({ data: "json, name=explanationConfig" })
  explanationConfig?: GoogleCloudMlV1ExplanationConfig;

  @SpeakeasyMetadata({ data: "json, name=framework" })
  framework?: GoogleCloudMlV1VersionFrameworkEnum;

  @SpeakeasyMetadata({ data: "json, name=isDefault" })
  isDefault?: boolean;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=lastUseTime" })
  lastUseTime?: string;

  @SpeakeasyMetadata({ data: "json, name=machineType" })
  machineType?: string;

  @SpeakeasyMetadata({ data: "json, name=manualScaling" })
  manualScaling?: GoogleCloudMlV1ManualScaling;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=packageUris" })
  packageUris?: string[];

  @SpeakeasyMetadata({ data: "json, name=predictionClass" })
  predictionClass?: string;

  @SpeakeasyMetadata({ data: "json, name=pythonVersion" })
  pythonVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=requestLoggingConfig" })
  requestLoggingConfig?: GoogleCloudMlV1RequestLoggingConfig;

  @SpeakeasyMetadata({ data: "json, name=routes" })
  routes?: GoogleCloudMlV1RouteMap;

  @SpeakeasyMetadata({ data: "json, name=runtimeVersion" })
  runtimeVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=serviceAccount" })
  serviceAccount?: string;

  @SpeakeasyMetadata({ data: "json, name=state" })
  state?: GoogleCloudMlV1VersionStateEnum;
}
