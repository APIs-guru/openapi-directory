import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { Key } from "./key";
import { Entity } from "./entity";
import { Entity } from "./entity";
import { Entity } from "./entity";


// Mutation
/** 
 * A mutation to apply to an entity.
**/
export class Mutation extends SpeakeasyBase {
  @Metadata({ data: "json, name=baseVersion" })
  baseVersion?: string;

  @Metadata({ data: "json, name=delete" })
  delete?: Key;

  @Metadata({ data: "json, name=insert" })
  insert?: Entity;

  @Metadata({ data: "json, name=update" })
  update?: Entity;

  @Metadata({ data: "json, name=updateTime" })
  updateTime?: string;

  @Metadata({ data: "json, name=upsert" })
  upsert?: Entity;
}
