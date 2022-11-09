import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { CompositeFilter } from "./compositefilter";
import { ValueFilter } from "./valuefilter";


// Filter
/** 
 * A generic way of expressing filters in a query, which supports two approaches: **1. Setting a ValueFilter.** The name must match an operator_name defined in the schema for your data source. **2. Setting a CompositeFilter.** The filters are evaluated using the logical operator. The top-level operators can only be either an AND or a NOT. AND can appear only at the top-most level. OR can appear only under a top-level AND.
**/
export class Filter extends SpeakeasyBase {
  @Metadata({ data: "json, name=compositeFilter" })
  compositeFilter?: CompositeFilter;

  @Metadata({ data: "json, name=valueFilter" })
  valueFilter?: ValueFilter;
}
