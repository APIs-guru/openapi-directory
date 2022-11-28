import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Request message for ProductService.RemoveFulfillmentPlaces method.
**/
export declare class GoogleCloudRetailV2betaRemoveFulfillmentPlacesRequest extends SpeakeasyBase {
    allowMissing?: boolean;
    placeIds?: string[];
    removeTime?: string;
    type?: string;
}
