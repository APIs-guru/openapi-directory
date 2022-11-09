import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// FilteringAttribute
/** 
 * A representation of the FilteringAttribute resource. Filtering attributes are per event type.
**/
export class FilteringAttribute extends SpeakeasyBase {
  @Metadata({ data: "json, name=attribute" })
  attribute?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=pathPatternSupported" })
  pathPatternSupported?: boolean;

  @Metadata({ data: "json, name=required" })
  required?: boolean;
}
