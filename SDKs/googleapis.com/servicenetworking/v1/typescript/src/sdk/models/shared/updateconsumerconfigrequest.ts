import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ConsumerConfig } from "./consumerconfig";


// UpdateConsumerConfigRequest
/** 
 * Request to update the configuration of a service networking connection including the import/export of custom routes and subnetwork routes with public IP.
**/
export class UpdateConsumerConfigRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=consumerConfig" })
  consumerConfig?: ConsumerConfig;
}
