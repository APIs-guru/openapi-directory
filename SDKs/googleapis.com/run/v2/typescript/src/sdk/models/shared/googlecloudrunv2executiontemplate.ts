import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudRunV2TaskTemplate } from "./googlecloudrunv2tasktemplate";



// GoogleCloudRunV2ExecutionTemplate
/** 
 * ExecutionTemplate describes the data an execution should have when created from a template.
**/
export class GoogleCloudRunV2ExecutionTemplate extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=annotations" })
  annotations?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=parallelism" })
  parallelism?: number;

  @SpeakeasyMetadata({ data: "json, name=taskCount" })
  taskCount?: number;

  @SpeakeasyMetadata({ data: "json, name=template" })
  template?: GoogleCloudRunV2TaskTemplate;
}
