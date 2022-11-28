import { SpeakeasyBase } from "../../../internal/utils";
import { DeliveryPipeline } from "./deliverypipeline";
/**
 * The response object from `ListDeliveryPipelines`.
**/
export declare class ListDeliveryPipelinesResponse extends SpeakeasyBase {
    deliveryPipelines?: DeliveryPipeline[];
    nextPageToken?: string;
    unreachable?: string[];
}
