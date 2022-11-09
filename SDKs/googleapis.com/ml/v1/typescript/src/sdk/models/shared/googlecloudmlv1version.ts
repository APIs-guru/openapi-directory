import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudMlV1AcceleratorConfig } from "./googlecloudmlv1acceleratorconfig";
import { GoogleCloudMlV1AutoScaling } from "./googlecloudmlv1autoscaling";
import { GoogleCloudMlV1ContainerSpec } from "./googlecloudmlv1containerspec";
import { GoogleCloudMlV1ExplanationConfig } from "./googlecloudmlv1explanationconfig";
import { GoogleCloudMlV1ManualScaling } from "./googlecloudmlv1manualscaling";
import { GoogleCloudMlV1RequestLoggingConfig } from "./googlecloudmlv1requestloggingconfig";
import { GoogleCloudMlV1RouteMap } from "./googlecloudmlv1routemap";

export enum GoogleCloudMlV1VersionFrameworkEnum {
    FrameworkUnspecified = "FRAMEWORK_UNSPECIFIED"
,    Tensorflow = "TENSORFLOW"
,    ScikitLearn = "SCIKIT_LEARN"
,    Xgboost = "XGBOOST"
}

export enum GoogleCloudMlV1VersionStateEnum {
    Unknown = "UNKNOWN"
,    Ready = "READY"
,    Creating = "CREATING"
,    Failed = "FAILED"
,    Deleting = "DELETING"
,    Updating = "UPDATING"
}


// GoogleCloudMlV1Version
/** 
 * Represents a version of the model. Each version is a trained model deployed in the cloud, ready to handle prediction requests. A model can have multiple versions. You can get information about all of the versions of a given model by calling projects.models.versions.list.
**/
export class GoogleCloudMlV1Version extends SpeakeasyBase {
  @Metadata({ data: "json, name=acceleratorConfig" })
  acceleratorConfig?: GoogleCloudMlV1AcceleratorConfig;

  @Metadata({ data: "json, name=autoScaling" })
  autoScaling?: GoogleCloudMlV1AutoScaling;

  @Metadata({ data: "json, name=container" })
  container?: GoogleCloudMlV1ContainerSpec;

  @Metadata({ data: "json, name=createTime" })
  createTime?: string;

  @Metadata({ data: "json, name=deploymentUri" })
  deploymentUri?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=errorMessage" })
  errorMessage?: string;

  @Metadata({ data: "json, name=etag" })
  etag?: string;

  @Metadata({ data: "json, name=explanationConfig" })
  explanationConfig?: GoogleCloudMlV1ExplanationConfig;

  @Metadata({ data: "json, name=framework" })
  framework?: GoogleCloudMlV1VersionFrameworkEnum;

  @Metadata({ data: "json, name=isDefault" })
  isDefault?: boolean;

  @Metadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @Metadata({ data: "json, name=lastMigrationModelId" })
  lastMigrationModelId?: string;

  @Metadata({ data: "json, name=lastMigrationTime" })
  lastMigrationTime?: string;

  @Metadata({ data: "json, name=lastUseTime" })
  lastUseTime?: string;

  @Metadata({ data: "json, name=machineType" })
  machineType?: string;

  @Metadata({ data: "json, name=manualScaling" })
  manualScaling?: GoogleCloudMlV1ManualScaling;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=packageUris" })
  packageUris?: string[];

  @Metadata({ data: "json, name=predictionClass" })
  predictionClass?: string;

  @Metadata({ data: "json, name=pythonVersion" })
  pythonVersion?: string;

  @Metadata({ data: "json, name=requestLoggingConfig" })
  requestLoggingConfig?: GoogleCloudMlV1RequestLoggingConfig;

  @Metadata({ data: "json, name=routes" })
  routes?: GoogleCloudMlV1RouteMap;

  @Metadata({ data: "json, name=runtimeVersion" })
  runtimeVersion?: string;

  @Metadata({ data: "json, name=serviceAccount" })
  serviceAccount?: string;

  @Metadata({ data: "json, name=state" })
  state?: GoogleCloudMlV1VersionStateEnum;
}
