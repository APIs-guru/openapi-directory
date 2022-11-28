import { SpeakeasyBase } from "../../../internal/utils";
import { Cursor } from "./cursor";
import { CollectionSelector } from "./collectionselector";
import { Order } from "./order";
import { Projection } from "./projection";
import { Filter } from "./filter";
/**
 * A Firestore query.
**/
export declare class StructuredQuery extends SpeakeasyBase {
    endAt?: Cursor;
    from?: CollectionSelector[];
    limit?: number;
    offset?: number;
    orderBy?: Order[];
    select?: Projection;
    startAt?: Cursor;
    where?: Filter;
}
