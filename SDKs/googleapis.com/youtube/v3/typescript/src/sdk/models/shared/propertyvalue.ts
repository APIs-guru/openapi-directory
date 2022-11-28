import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// PropertyValue
/** 
 * A pair Property / Value.
**/
export class PropertyValue extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=property" })
  property?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}
