import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// FacetOptions
/** 
 * Specifies operators to return facet results for. There will be one FacetResult for every source_name/object_type/operator_name combination.
**/
export class FacetOptions extends SpeakeasyBase {
  @Metadata({ data: "json, name=numFacetBuckets" })
  numFacetBuckets?: number;

  @Metadata({ data: "json, name=objectType" })
  objectType?: string;

  @Metadata({ data: "json, name=operatorName" })
  operatorName?: string;

  @Metadata({ data: "json, name=sourceName" })
  sourceName?: string;
}
