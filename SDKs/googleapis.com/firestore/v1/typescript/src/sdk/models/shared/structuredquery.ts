import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Cursor } from "./cursor";
import { CollectionSelector } from "./collectionselector";
import { Order } from "./order";
import { Projection } from "./projection";
import { Cursor } from "./cursor";
import { Filter } from "./filter";


// StructuredQuery
/** 
 * A Firestore query.
**/
export class StructuredQuery extends SpeakeasyBase {
  @Metadata({ data: "json, name=endAt" })
  endAt?: Cursor;

  @Metadata({ data: "json, name=from", elemType: shared.CollectionSelector })
  from?: CollectionSelector[];

  @Metadata({ data: "json, name=limit" })
  limit?: number;

  @Metadata({ data: "json, name=offset" })
  offset?: number;

  @Metadata({ data: "json, name=orderBy", elemType: shared.Order })
  orderBy?: Order[];

  @Metadata({ data: "json, name=select" })
  select?: Projection;

  @Metadata({ data: "json, name=startAt" })
  startAt?: Cursor;

  @Metadata({ data: "json, name=where" })
  where?: Filter;
}
