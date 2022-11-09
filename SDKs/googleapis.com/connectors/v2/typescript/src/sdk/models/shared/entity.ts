import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Entity
/** 
 * 'Entity row'/ 'Entity' refers to a single row of an entity type.
**/
export class Entity extends SpeakeasyBase {
  @Metadata({ data: "json, name=fields" })
  fields?: Map<string, any>;

  @Metadata({ data: "json, name=name" })
  name?: string;
}
