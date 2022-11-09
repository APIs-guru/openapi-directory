import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { BoundingPoly } from "./boundingpoly";


// ProductSearchParams
/** 
 * Parameters for a product search request.
**/
export class ProductSearchParams extends SpeakeasyBase {
  @Metadata({ data: "json, name=boundingPoly" })
  boundingPoly?: BoundingPoly;

  @Metadata({ data: "json, name=filter" })
  filter?: string;

  @Metadata({ data: "json, name=productCategories" })
  productCategories?: string[];

  @Metadata({ data: "json, name=productSet" })
  productSet?: string;
}
