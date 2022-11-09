import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// PipelineReadyCondition
/** 
 * PipelineReadyCondition contains information around the status of the Pipeline.
**/
export class PipelineReadyCondition extends SpeakeasyBase {
  @Metadata({ data: "json, name=status" })
  status?: boolean;

  @Metadata({ data: "json, name=updateTime" })
  updateTime?: string;
}
