import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Range
/** 
 * The range of the population values.
**/
export class Range extends SpeakeasyBase {
  @Metadata({ data: "json, name=max" })
  max?: number;

  @Metadata({ data: "json, name=min" })
  min?: number;
}
