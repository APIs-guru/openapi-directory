import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ScaleQuestion
/** 
 * A scale question. The user has a range of numeric values to choose from.
**/
export class ScaleQuestion extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=high" })
  high?: number;

  @SpeakeasyMetadata({ data: "json, name=highLabel" })
  highLabel?: string;

  @SpeakeasyMetadata({ data: "json, name=low" })
  low?: number;

  @SpeakeasyMetadata({ data: "json, name=lowLabel" })
  lowLabel?: string;
}
