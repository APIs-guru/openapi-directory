import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Entity } from "./entity";


// EntityResult
/** 
 * The result of fetching an entity from Datastore.
**/
export class EntityResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=cursor" })
  cursor?: string;

  @Metadata({ data: "json, name=entity" })
  entity?: Entity;

  @Metadata({ data: "json, name=updateTime" })
  updateTime?: string;

  @Metadata({ data: "json, name=version" })
  version?: string;
}
