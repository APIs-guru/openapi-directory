import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { FacetBucket } from "./facetbucket";


// FacetResult
/** 
 * Source specific facet response
**/
export class FacetResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=buckets", elemType: shared.FacetBucket })
  buckets?: FacetBucket[];

  @Metadata({ data: "json, name=objectType" })
  objectType?: string;

  @Metadata({ data: "json, name=operatorName" })
  operatorName?: string;

  @Metadata({ data: "json, name=sourceName" })
  sourceName?: string;
}
