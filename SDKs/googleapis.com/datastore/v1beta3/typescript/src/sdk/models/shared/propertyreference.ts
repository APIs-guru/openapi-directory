import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// PropertyReference
/** 
 * A reference to a property relative to the kind expressions.
**/
export class PropertyReference extends SpeakeasyBase {
  @Metadata({ data: "json, name=name" })
  name?: string;
}
