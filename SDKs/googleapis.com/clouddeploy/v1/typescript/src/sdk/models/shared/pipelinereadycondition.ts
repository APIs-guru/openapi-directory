import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// PipelineReadyCondition
/** 
 * PipelineReadyCondition contains information around the status of the Pipeline.
**/
export class PipelineReadyCondition extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: boolean;

  @SpeakeasyMetadata({ data: "json, name=updateTime" })
  updateTime?: string;
}
