import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { StructuredQuery } from "./structuredquery";



// QueryTarget
/** 
 * A target specified by a query.
**/
export class QueryTarget extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=parent" })
  parent?: string;

  @SpeakeasyMetadata({ data: "json, name=structuredQuery" })
  structuredQuery?: StructuredQuery;
}
