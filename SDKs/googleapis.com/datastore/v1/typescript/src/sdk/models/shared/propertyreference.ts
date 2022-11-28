import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// PropertyReference
/** 
 * A reference to a property relative to the kind expressions.
**/
export class PropertyReference extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
