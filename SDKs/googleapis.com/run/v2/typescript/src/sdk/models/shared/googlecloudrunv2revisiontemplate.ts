import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRunV2Container } from "./googlecloudrunv2container";
import { GoogleCloudRunV2RevisionScaling } from "./googlecloudrunv2revisionscaling";
import { GoogleCloudRunV2Volume } from "./googlecloudrunv2volume";
import { GoogleCloudRunV2VpcAccess } from "./googlecloudrunv2vpcaccess";


export enum GoogleCloudRunV2RevisionTemplateExecutionEnvironmentEnum {
    ExecutionEnvironmentUnspecified = "EXECUTION_ENVIRONMENT_UNSPECIFIED",
    ExecutionEnvironmentGen1 = "EXECUTION_ENVIRONMENT_GEN1",
    ExecutionEnvironmentGen2 = "EXECUTION_ENVIRONMENT_GEN2"
}


// GoogleCloudRunV2RevisionTemplate
/** 
 * RevisionTemplate describes the data a revision should have when created from a template.
**/
export class GoogleCloudRunV2RevisionTemplate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=annotations" })
  annotations?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=containers", elemType: GoogleCloudRunV2Container })
  containers?: GoogleCloudRunV2Container[];

  @SpeakeasyMetadata({ data: "json, name=encryptionKey" })
  encryptionKey?: string;

  @SpeakeasyMetadata({ data: "json, name=executionEnvironment" })
  executionEnvironment?: GoogleCloudRunV2RevisionTemplateExecutionEnvironmentEnum;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=maxInstanceRequestConcurrency" })
  maxInstanceRequestConcurrency?: number;

  @SpeakeasyMetadata({ data: "json, name=revision" })
  revision?: string;

  @SpeakeasyMetadata({ data: "json, name=scaling" })
  scaling?: GoogleCloudRunV2RevisionScaling;

  @SpeakeasyMetadata({ data: "json, name=serviceAccount" })
  serviceAccount?: string;

  @SpeakeasyMetadata({ data: "json, name=timeout" })
  timeout?: string;

  @SpeakeasyMetadata({ data: "json, name=volumes", elemType: GoogleCloudRunV2Volume })
  volumes?: GoogleCloudRunV2Volume[];

  @SpeakeasyMetadata({ data: "json, name=vpcAccess" })
  vpcAccess?: GoogleCloudRunV2VpcAccess;
}
