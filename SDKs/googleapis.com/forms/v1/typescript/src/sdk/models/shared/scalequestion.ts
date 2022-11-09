import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ScaleQuestion
/** 
 * A scale question. The user has a range of numeric values to choose from.
**/
export class ScaleQuestion extends SpeakeasyBase {
  @Metadata({ data: "json, name=high" })
  high?: number;

  @Metadata({ data: "json, name=highLabel" })
  highLabel?: string;

  @Metadata({ data: "json, name=low" })
  low?: number;

  @Metadata({ data: "json, name=lowLabel" })
  lowLabel?: string;
}
