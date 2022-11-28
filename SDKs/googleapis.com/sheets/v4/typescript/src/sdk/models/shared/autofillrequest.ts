import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GridRange } from "./gridrange";
import { SourceAndDestination } from "./sourceanddestination";



// AutoFillRequest
/** 
 * Fills in more data based on existing data.
**/
export class AutoFillRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=range" })
  range?: GridRange;

  @SpeakeasyMetadata({ data: "json, name=sourceAndDestination" })
  sourceAndDestination?: SourceAndDestination;

  @SpeakeasyMetadata({ data: "json, name=useAlternateSeries" })
  useAlternateSeries?: boolean;
}
