import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GridRange } from "./gridrange";
import { SourceAndDestination } from "./sourceanddestination";


// AutoFillRequest
/** 
 * Fills in more data based on existing data.
**/
export class AutoFillRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=range" })
  range?: GridRange;

  @Metadata({ data: "json, name=sourceAndDestination" })
  sourceAndDestination?: SourceAndDestination;

  @Metadata({ data: "json, name=useAlternateSeries" })
  useAlternateSeries?: boolean;
}
