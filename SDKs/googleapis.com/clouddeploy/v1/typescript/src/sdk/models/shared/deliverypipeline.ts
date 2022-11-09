import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { PipelineCondition } from "./pipelinecondition";
import { SerialPipeline } from "./serialpipeline";


// DeliveryPipeline
/** 
 * A `DeliveryPipeline` resource in the Google Cloud Deploy API. A `DeliveryPipeline` defines a pipeline through which a Skaffold configuration can progress.
**/
export class DeliveryPipeline extends SpeakeasyBase {
  @Metadata({ data: "json, name=annotations" })
  annotations?: Map<string, string>;

  @Metadata({ data: "json, name=condition" })
  condition?: PipelineCondition;

  @Metadata({ data: "json, name=createTime" })
  createTime?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=etag" })
  etag?: string;

  @Metadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @Metadata({ data: "json, name=name" })
  name?: string;

  @Metadata({ data: "json, name=serialPipeline" })
  serialPipeline?: SerialPipeline;

  @Metadata({ data: "json, name=suspended" })
  suspended?: boolean;

  @Metadata({ data: "json, name=uid" })
  uid?: string;

  @Metadata({ data: "json, name=updateTime" })
  updateTime?: string;
}
