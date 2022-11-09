import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Source } from "./source";


// SourceResultCount
/** 
 * Per source result count information.
**/
export class SourceResultCount extends SpeakeasyBase {
  @Metadata({ data: "json, name=hasMoreResults" })
  hasMoreResults?: boolean;

  @Metadata({ data: "json, name=resultCountEstimate" })
  resultCountEstimate?: string;

  @Metadata({ data: "json, name=resultCountExact" })
  resultCountExact?: string;

  @Metadata({ data: "json, name=source" })
  source?: Source;
}
