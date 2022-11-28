import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Range
/** 
 * The range of the population values.
**/
export class Range extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=max" })
  max?: number;

  @SpeakeasyMetadata({ data: "json, name=min" })
  min?: number;
}
