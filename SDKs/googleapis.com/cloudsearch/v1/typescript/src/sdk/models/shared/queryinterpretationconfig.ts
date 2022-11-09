import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// QueryInterpretationConfig
/** 
 * Default options to interpret user query.
**/
export class QueryInterpretationConfig extends SpeakeasyBase {
  @Metadata({ data: "json, name=forceDisableSupplementalResults" })
  forceDisableSupplementalResults?: boolean;

  @Metadata({ data: "json, name=forceVerbatimMode" })
  forceVerbatimMode?: boolean;
}
