import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudVisionV1p2beta1BoundingPoly } from "./googlecloudvisionv1p2beta1boundingpoly";
/**
 * Parameters for a product search request.
**/
export declare class GoogleCloudVisionV1p2beta1ProductSearchParams extends SpeakeasyBase {
    boundingPoly?: GoogleCloudVisionV1p2beta1BoundingPoly;
    filter?: string;
    productCategories?: string[];
    productSet?: string;
}
