import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRunV2Container } from "./googlecloudrunv2container";
import { GoogleCloudRunV2Volume } from "./googlecloudrunv2volume";
import { GoogleCloudRunV2VpcAccess } from "./googlecloudrunv2vpcaccess";


export enum GoogleCloudRunV2TaskTemplateExecutionEnvironmentEnum {
    ExecutionEnvironmentUnspecified = "EXECUTION_ENVIRONMENT_UNSPECIFIED",
    ExecutionEnvironmentGen1 = "EXECUTION_ENVIRONMENT_GEN1",
    ExecutionEnvironmentGen2 = "EXECUTION_ENVIRONMENT_GEN2"
}


// GoogleCloudRunV2TaskTemplate
/** 
 * TaskTemplate describes the data a task should have when created from a template.
**/
export class GoogleCloudRunV2TaskTemplate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=containers", elemType: GoogleCloudRunV2Container })
  containers?: GoogleCloudRunV2Container[];

  @SpeakeasyMetadata({ data: "json, name=encryptionKey" })
  encryptionKey?: string;

  @SpeakeasyMetadata({ data: "json, name=executionEnvironment" })
  executionEnvironment?: GoogleCloudRunV2TaskTemplateExecutionEnvironmentEnum;

  @SpeakeasyMetadata({ data: "json, name=maxRetries" })
  maxRetries?: number;

  @SpeakeasyMetadata({ data: "json, name=serviceAccount" })
  serviceAccount?: string;

  @SpeakeasyMetadata({ data: "json, name=timeout" })
  timeout?: string;

  @SpeakeasyMetadata({ data: "json, name=volumes", elemType: GoogleCloudRunV2Volume })
  volumes?: GoogleCloudRunV2Volume[];

  @SpeakeasyMetadata({ data: "json, name=vpcAccess" })
  vpcAccess?: GoogleCloudRunV2VpcAccess;
}
