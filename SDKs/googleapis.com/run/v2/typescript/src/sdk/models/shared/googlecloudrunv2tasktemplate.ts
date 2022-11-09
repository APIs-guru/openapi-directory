import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudRunV2Container } from "./googlecloudrunv2container";
import { GoogleCloudRunV2Volume } from "./googlecloudrunv2volume";
import { GoogleCloudRunV2VpcAccess } from "./googlecloudrunv2vpcaccess";

export enum GoogleCloudRunV2TaskTemplateExecutionEnvironmentEnum {
    ExecutionEnvironmentUnspecified = "EXECUTION_ENVIRONMENT_UNSPECIFIED"
,    ExecutionEnvironmentGen1 = "EXECUTION_ENVIRONMENT_GEN1"
,    ExecutionEnvironmentGen2 = "EXECUTION_ENVIRONMENT_GEN2"
}


// GoogleCloudRunV2TaskTemplate
/** 
 * TaskTemplate describes the data a task should have when created from a template.
**/
export class GoogleCloudRunV2TaskTemplate extends SpeakeasyBase {
  @Metadata({ data: "json, name=containers", elemType: shared.GoogleCloudRunV2Container })
  containers?: GoogleCloudRunV2Container[];

  @Metadata({ data: "json, name=encryptionKey" })
  encryptionKey?: string;

  @Metadata({ data: "json, name=executionEnvironment" })
  executionEnvironment?: GoogleCloudRunV2TaskTemplateExecutionEnvironmentEnum;

  @Metadata({ data: "json, name=maxRetries" })
  maxRetries?: number;

  @Metadata({ data: "json, name=serviceAccount" })
  serviceAccount?: string;

  @Metadata({ data: "json, name=timeout" })
  timeout?: string;

  @Metadata({ data: "json, name=volumes", elemType: shared.GoogleCloudRunV2Volume })
  volumes?: GoogleCloudRunV2Volume[];

  @Metadata({ data: "json, name=vpcAccess" })
  vpcAccess?: GoogleCloudRunV2VpcAccess;
}
