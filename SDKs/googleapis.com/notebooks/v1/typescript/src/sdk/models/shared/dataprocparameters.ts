import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DataprocParameters
/** 
 * Parameters used in Dataproc JobType executions.
**/
export class DataprocParameters extends SpeakeasyBase {
  @Metadata({ data: "json, name=cluster" })
  cluster?: string;
}
