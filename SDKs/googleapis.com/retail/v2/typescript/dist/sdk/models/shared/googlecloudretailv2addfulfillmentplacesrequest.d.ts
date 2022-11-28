import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Request message for ProductService.AddFulfillmentPlaces method.
**/
export declare class GoogleCloudRetailV2AddFulfillmentPlacesRequest extends SpeakeasyBase {
    addTime?: string;
    allowMissing?: boolean;
    placeIds?: string[];
    type?: string;
}
