import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { FacetBucket } from "./facetbucket";



// FacetResult
/** 
 * Source specific facet response
**/
export class FacetResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=buckets", elemType: FacetBucket })
  buckets?: FacetBucket[];

  @SpeakeasyMetadata({ data: "json, name=objectType" })
  objectType?: string;

  @SpeakeasyMetadata({ data: "json, name=operatorName" })
  operatorName?: string;

  @SpeakeasyMetadata({ data: "json, name=sourceName" })
  sourceName?: string;
}
