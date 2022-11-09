import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Value } from "./value";


// FacetBucket
/** 
 * A bucket in a facet is the basic unit of operation. A bucket can comprise either a single value OR a contiguous range of values, depending on the type of the field bucketed. FacetBucket is currently used only for returning the response object.
**/
export class FacetBucket extends SpeakeasyBase {
  @Metadata({ data: "json, name=count" })
  count?: number;

  @Metadata({ data: "json, name=percentage" })
  percentage?: number;

  @Metadata({ data: "json, name=value" })
  value?: Value;
}
