import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleCloudRunV2TaskTemplate } from "./googlecloudrunv2tasktemplate";


// GoogleCloudRunV2ExecutionTemplate
/** 
 * ExecutionTemplate describes the data an execution should have when created from a template.
**/
export class GoogleCloudRunV2ExecutionTemplate extends SpeakeasyBase {
  @Metadata({ data: "json, name=annotations" })
  annotations?: Map<string, string>;

  @Metadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @Metadata({ data: "json, name=parallelism" })
  parallelism?: number;

  @Metadata({ data: "json, name=taskCount" })
  taskCount?: number;

  @Metadata({ data: "json, name=template" })
  template?: GoogleCloudRunV2TaskTemplate;
}
