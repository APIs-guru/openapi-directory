import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ConsumerInput
/** 
 * Contains information of the customer's network configurations.
**/
export class ConsumerInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=subnetwork" })
  subnetwork?: string;
}


// Consumer
/** 
 * Contains information of the customer's network configurations.
**/
export class Consumer extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=endpointUri" })
  endpointUri?: string;

  @SpeakeasyMetadata({ data: "json, name=subnetwork" })
  subnetwork?: string;
}
