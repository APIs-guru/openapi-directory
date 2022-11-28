import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Key } from "./key";
import { Entity } from "./entity";



// Mutation
/** 
 * A mutation to apply to an entity.
**/
export class Mutation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=baseVersion" })
  baseVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=delete" })
  delete?: Key;

  @SpeakeasyMetadata({ data: "json, name=insert" })
  insert?: Entity;

  @SpeakeasyMetadata({ data: "json, name=update" })
  update?: Entity;

  @SpeakeasyMetadata({ data: "json, name=updateTime" })
  updateTime?: string;

  @SpeakeasyMetadata({ data: "json, name=upsert" })
  upsert?: Entity;
}
