import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// InsightsValue
/** 
 * Represents an insights value.
**/
export class InsightsValue extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=threshold" })
  threshold?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}
