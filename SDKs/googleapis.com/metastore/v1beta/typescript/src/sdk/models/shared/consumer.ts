import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Consumer
/** 
 * Contains information of the customer's network configurations.
**/
export class Consumer extends SpeakeasyBase {
  @Metadata({ data: "json, name=endpointUri" })
  endpointUri?: string;

  @Metadata({ data: "json, name=subnetwork" })
  subnetwork?: string;
}
