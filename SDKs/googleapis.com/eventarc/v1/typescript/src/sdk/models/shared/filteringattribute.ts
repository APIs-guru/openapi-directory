import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// FilteringAttribute
/** 
 * A representation of the FilteringAttribute resource. Filtering attributes are per event type.
**/
export class FilteringAttribute extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=attribute" })
  attribute?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=pathPatternSupported" })
  pathPatternSupported?: boolean;

  @SpeakeasyMetadata({ data: "json, name=required" })
  required?: boolean;
}
