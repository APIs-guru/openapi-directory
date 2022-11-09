import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// JobExecutionStageInfo
/** 
 * Contains information about how a particular google.dataflow.v1beta3.Step will be executed.
**/
export class JobExecutionStageInfo extends SpeakeasyBase {
  @Metadata({ data: "json, name=stepName" })
  stepName?: string[];
}
