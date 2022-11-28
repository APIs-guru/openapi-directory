import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// FacetOptions
/** 
 * Specifies operators to return facet results for. There will be one FacetResult for every source_name/object_type/operator_name combination.
**/
export class FacetOptions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=numFacetBuckets" })
  numFacetBuckets?: number;

  @SpeakeasyMetadata({ data: "json, name=objectType" })
  objectType?: string;

  @SpeakeasyMetadata({ data: "json, name=operatorName" })
  operatorName?: string;

  @SpeakeasyMetadata({ data: "json, name=sourceName" })
  sourceName?: string;
}
