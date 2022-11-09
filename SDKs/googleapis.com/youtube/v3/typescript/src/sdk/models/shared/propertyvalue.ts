import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// PropertyValue
/** 
 * A pair Property / Value.
**/
export class PropertyValue extends SpeakeasyBase {
  @Metadata({ data: "json, name=property" })
  property?: string;

  @Metadata({ data: "json, name=value" })
  value?: string;
}
