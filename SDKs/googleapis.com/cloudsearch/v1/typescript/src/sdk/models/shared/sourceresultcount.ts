import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Source } from "./source";



// SourceResultCount
/** 
 * Per source result count information.
**/
export class SourceResultCount extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=hasMoreResults" })
  hasMoreResults?: boolean;

  @SpeakeasyMetadata({ data: "json, name=resultCountEstimate" })
  resultCountEstimate?: string;

  @SpeakeasyMetadata({ data: "json, name=resultCountExact" })
  resultCountExact?: string;

  @SpeakeasyMetadata({ data: "json, name=source" })
  source?: Source;
}
