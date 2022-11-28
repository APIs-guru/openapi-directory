import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Request message for ProductService.RemoveFulfillmentPlaces method.
**/
export declare class GoogleCloudRetailV2RemoveFulfillmentPlacesRequest extends SpeakeasyBase {
    allowMissing?: boolean;
    placeIds?: string[];
    removeTime?: string;
    type?: string;
}
