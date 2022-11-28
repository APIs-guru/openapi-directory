import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DataprocParameters
/** 
 * Parameters used in Dataproc JobType executions.
**/
export class DataprocParameters extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cluster" })
  cluster?: string;
}
