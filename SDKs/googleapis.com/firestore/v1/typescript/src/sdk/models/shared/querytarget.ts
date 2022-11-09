import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { StructuredQuery } from "./structuredquery";


// QueryTarget
/** 
 * A target specified by a query.
**/
export class QueryTarget extends SpeakeasyBase {
  @Metadata({ data: "json, name=parent" })
  parent?: string;

  @Metadata({ data: "json, name=structuredQuery" })
  structuredQuery?: StructuredQuery;
}
