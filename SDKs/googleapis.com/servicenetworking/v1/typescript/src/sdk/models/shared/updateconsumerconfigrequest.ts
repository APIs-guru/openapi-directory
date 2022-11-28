import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ConsumerConfigInput } from "./consumerconfig";



// UpdateConsumerConfigRequestInput
/** 
 * Request to update the configuration of a service networking connection including the import/export of custom routes and subnetwork routes with public IP.
**/
export class UpdateConsumerConfigRequestInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=consumerConfig" })
  consumerConfig?: ConsumerConfigInput;
}
