import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// EventFilter
/** 
 * Filters events based on exact matches on the CloudEvents attributes.
**/
export class EventFilter extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attribute" })
  attribute?: string;

  @SpeakeasyMetadata({ data: "json, name=operator" })
  operator?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}
