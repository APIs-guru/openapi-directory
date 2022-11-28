import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// QueryInterpretationConfig
/** 
 * Default options to interpret user query.
**/
export class QueryInterpretationConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=forceDisableSupplementalResults" })
  forceDisableSupplementalResults?: boolean;

  @SpeakeasyMetadata({ data: "json, name=forceVerbatimMode" })
  forceVerbatimMode?: boolean;
}
