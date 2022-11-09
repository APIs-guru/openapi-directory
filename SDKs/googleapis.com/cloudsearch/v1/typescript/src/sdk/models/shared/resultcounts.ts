import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { SourceResultCount } from "./sourceresultcount";


// ResultCounts
/** 
 * Result count information
**/
export class ResultCounts extends SpeakeasyBase {
  @Metadata({ data: "json, name=sourceResultCounts", elemType: shared.SourceResultCount })
  sourceResultCounts?: SourceResultCount[];
}
