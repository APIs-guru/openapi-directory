import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { SourceResultCount } from "./sourceresultcount";



// ResultCounts
/** 
 * Result count information
**/
export class ResultCounts extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=sourceResultCounts", elemType: SourceResultCount })
  sourceResultCounts?: SourceResultCount[];
}
