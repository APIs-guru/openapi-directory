import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { PipelineCondition } from "./pipelinecondition";
import { SerialPipeline } from "./serialpipeline";



// DeliveryPipelineInput
/** 
 * A `DeliveryPipeline` resource in the Google Cloud Deploy API. A `DeliveryPipeline` defines a pipeline through which a Skaffold configuration can progress.
**/
export class DeliveryPipelineInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=annotations" })
  annotations?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=condition" })
  condition?: PipelineCondition;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=etag" })
  etag?: string;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=serialPipeline" })
  serialPipeline?: SerialPipeline;

  @SpeakeasyMetadata({ data: "json, name=suspended" })
  suspended?: boolean;
}


// DeliveryPipeline
/** 
 * A `DeliveryPipeline` resource in the Google Cloud Deploy API. A `DeliveryPipeline` defines a pipeline through which a Skaffold configuration can progress.
**/
export class DeliveryPipeline extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=annotations" })
  annotations?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=condition" })
  condition?: PipelineCondition;

  @SpeakeasyMetadata({ data: "json, name=createTime" })
  createTime?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=etag" })
  etag?: string;

  @SpeakeasyMetadata({ data: "json, name=labels" })
  labels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=serialPipeline" })
  serialPipeline?: SerialPipeline;

  @SpeakeasyMetadata({ data: "json, name=suspended" })
  suspended?: boolean;

  @SpeakeasyMetadata({ data: "json, name=uid" })
  uid?: string;

  @SpeakeasyMetadata({ data: "json, name=updateTime" })
  updateTime?: string;
}
