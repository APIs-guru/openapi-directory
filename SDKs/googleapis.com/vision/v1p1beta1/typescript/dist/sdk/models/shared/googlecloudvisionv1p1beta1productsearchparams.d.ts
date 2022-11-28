import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudVisionV1p1beta1BoundingPoly } from "./googlecloudvisionv1p1beta1boundingpoly";
/**
 * Parameters for a product search request.
**/
export declare class GoogleCloudVisionV1p1beta1ProductSearchParams extends SpeakeasyBase {
    boundingPoly?: GoogleCloudVisionV1p1beta1BoundingPoly;
    filter?: string;
    productCategories?: string[];
    productSet?: string;
}
