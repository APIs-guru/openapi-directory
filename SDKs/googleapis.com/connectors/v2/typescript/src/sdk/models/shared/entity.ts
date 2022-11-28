import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// EntityInput
/** 
 * 'Entity row'/ 'Entity' refers to a single row of an entity type.
**/
export class EntityInput extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=fields" })
  fields?: Map<string, any>;
}


// Entity
/** 
 * 'Entity row'/ 'Entity' refers to a single row of an entity type.
**/
export class Entity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=fields" })
  fields?: Map<string, any>;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
