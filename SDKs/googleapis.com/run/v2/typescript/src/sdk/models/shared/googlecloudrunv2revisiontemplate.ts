import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { GoogleCloudRunV2Container } from "./googlecloudrunv2container";
import { GoogleCloudRunV2RevisionScaling } from "./googlecloudrunv2revisionscaling";
import { GoogleCloudRunV2Volume } from "./googlecloudrunv2volume";
import { GoogleCloudRunV2VpcAccess } from "./googlecloudrunv2vpcaccess";

export enum GoogleCloudRunV2RevisionTemplateExecutionEnvironmentEnum {
    ExecutionEnvironmentUnspecified = "EXECUTION_ENVIRONMENT_UNSPECIFIED"
,    ExecutionEnvironmentGen1 = "EXECUTION_ENVIRONMENT_GEN1"
,    ExecutionEnvironmentGen2 = "EXECUTION_ENVIRONMENT_GEN2"
}


// GoogleCloudRunV2RevisionTemplate
/** 
 * RevisionTemplate describes the data a revision should have when created from a template.
**/
export class GoogleCloudRunV2RevisionTemplate extends SpeakeasyBase {
  @Metadata({ data: "json, name=annotations" })
  annotations?: Map<string, string>;

  @Metadata({ data: "json, name=containers", elemType: shared.GoogleCloudRunV2Container })
  containers?: GoogleCloudRunV2Container[];

  @Metadata({ data: "json, name=encryptionKey" })
  encryptionKey?: string;

  @Metadata({ data: "json, name=executionEnvironment" })
  executionEnvironment?: GoogleCloudRunV2RevisionTemplateExecutionEnvironmentEnum;

  @Metadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @Metadata({ data: "json, name=maxInstanceRequestConcurrency" })
  maxInstanceRequestConcurrency?: number;

  @Metadata({ data: "json, name=revision" })
  revision?: string;

  @Metadata({ data: "json, name=scaling" })
  scaling?: GoogleCloudRunV2RevisionScaling;

  @Metadata({ data: "json, name=serviceAccount" })
  serviceAccount?: string;

  @Metadata({ data: "json, name=timeout" })
  timeout?: string;

  @Metadata({ data: "json, name=volumes", elemType: shared.GoogleCloudRunV2Volume })
  volumes?: GoogleCloudRunV2Volume[];

  @Metadata({ data: "json, name=vpcAccess" })
  vpcAccess?: GoogleCloudRunV2VpcAccess;
}
