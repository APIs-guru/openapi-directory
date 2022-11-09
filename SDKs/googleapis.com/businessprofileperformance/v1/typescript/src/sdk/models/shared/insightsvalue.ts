import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// InsightsValue
/** 
 * Represents an insights value.
**/
export class InsightsValue extends SpeakeasyBase {
  @Metadata({ data: "json, name=threshold" })
  threshold?: string;

  @Metadata({ data: "json, name=value" })
  value?: string;
}
