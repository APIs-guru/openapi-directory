import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// QueryInterpretationOptions
/** 
 * Options to interpret user query.
**/
export class QueryInterpretationOptions extends SpeakeasyBase {
  @Metadata({ data: "json, name=disableNlInterpretation" })
  disableNlInterpretation?: boolean;

  @Metadata({ data: "json, name=disableSupplementalResults" })
  disableSupplementalResults?: boolean;

  @Metadata({ data: "json, name=enableVerbatimMode" })
  enableVerbatimMode?: boolean;
}
