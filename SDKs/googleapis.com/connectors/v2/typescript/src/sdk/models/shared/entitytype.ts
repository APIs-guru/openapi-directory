import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Field } from "./field";


// EntityType
/** 
 * EntityType message contains metadata information about a single entity type present in the external system.
**/
export class EntityType extends SpeakeasyBase {
  @Metadata({ data: "json, name=fields", elemType: shared.Field })
  fields?: Field[];

  @Metadata({ data: "json, name=name" })
  name?: string;
}
