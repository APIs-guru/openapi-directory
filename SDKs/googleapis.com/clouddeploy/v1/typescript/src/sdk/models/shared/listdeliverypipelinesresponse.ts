import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { DeliveryPipeline } from "./deliverypipeline";



// ListDeliveryPipelinesResponse
/** 
 * The response object from `ListDeliveryPipelines`.
**/
export class ListDeliveryPipelinesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=deliveryPipelines", elemType: DeliveryPipeline })
  deliveryPipelines?: DeliveryPipeline[];

  @SpeakeasyMetadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=unreachable" })
  unreachable?: string[];
}
