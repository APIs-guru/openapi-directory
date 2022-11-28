import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Cursor } from "./cursor";
import { CollectionSelector } from "./collectionselector";
import { Order } from "./order";
import { Projection } from "./projection";
import { Filter } from "./filter";



// StructuredQuery
/** 
 * A Firestore query.
**/
export class StructuredQuery extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=endAt" })
  endAt?: Cursor;

  @SpeakeasyMetadata({ data: "json, name=from", elemType: CollectionSelector })
  from?: CollectionSelector[];

  @SpeakeasyMetadata({ data: "json, name=limit" })
  limit?: number;

  @SpeakeasyMetadata({ data: "json, name=offset" })
  offset?: number;

  @SpeakeasyMetadata({ data: "json, name=orderBy", elemType: Order })
  orderBy?: Order[];

  @SpeakeasyMetadata({ data: "json, name=select" })
  select?: Projection;

  @SpeakeasyMetadata({ data: "json, name=startAt" })
  startAt?: Cursor;

  @SpeakeasyMetadata({ data: "json, name=where" })
  where?: Filter;
}
