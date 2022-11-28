import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// QueryInterpretationOptions
/** 
 * Options to interpret user query.
**/
export class QueryInterpretationOptions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=disableNlInterpretation" })
  disableNlInterpretation?: boolean;

  @SpeakeasyMetadata({ data: "json, name=disableSupplementalResults" })
  disableSupplementalResults?: boolean;

  @SpeakeasyMetadata({ data: "json, name=enableVerbatimMode" })
  enableVerbatimMode?: boolean;
}
