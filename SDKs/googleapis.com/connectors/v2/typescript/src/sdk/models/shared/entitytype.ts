import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Field } from "./field";



// EntityType
/** 
 * EntityType message contains metadata information about a single entity type present in the external system.
**/
export class EntityType extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=fields", elemType: Field })
  fields?: Field[];

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
