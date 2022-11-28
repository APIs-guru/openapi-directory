import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BoundingPoly } from "./boundingpoly";



// ProductSearchParams
/** 
 * Parameters for a product search request.
**/
export class ProductSearchParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=boundingPoly" })
  boundingPoly?: BoundingPoly;

  @SpeakeasyMetadata({ data: "json, name=filter" })
  filter?: string;

  @SpeakeasyMetadata({ data: "json, name=productCategories" })
  productCategories?: string[];

  @SpeakeasyMetadata({ data: "json, name=productSet" })
  productSet?: string;
}
