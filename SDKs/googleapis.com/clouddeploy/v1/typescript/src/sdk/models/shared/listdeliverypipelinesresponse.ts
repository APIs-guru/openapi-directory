import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { DeliveryPipeline } from "./deliverypipeline";


// ListDeliveryPipelinesResponse
/** 
 * The response object from `ListDeliveryPipelines`.
**/
export class ListDeliveryPipelinesResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=deliveryPipelines", elemType: shared.DeliveryPipeline })
  deliveryPipelines?: DeliveryPipeline[];

  @Metadata({ data: "json, name=nextPageToken" })
  nextPageToken?: string;

  @Metadata({ data: "json, name=unreachable" })
  unreachable?: string[];
}
