import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// FailedLocation
/** 
 * Indicates which [regional endpoint] (https://cloud.google.com/dataflow/docs/concepts/regional-endpoints) failed to respond to a request for data.
**/
export class FailedLocation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
