import { SpeakeasyBase } from "../../../internal/utils";
import { Key } from "./key";
import { Entity } from "./entity";
/**
 * A mutation to apply to an entity.
**/
export declare class Mutation extends SpeakeasyBase {
    baseVersion?: string;
    delete?: Key;
    insert?: Entity;
    update?: Entity;
    updateTime?: string;
    upsert?: Entity;
}
