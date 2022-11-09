import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// FailedLocation
/** 
 * Indicates which [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) failed to respond to a request for data.
**/
export class FailedLocation extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;
}
