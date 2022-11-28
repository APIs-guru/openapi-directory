import { SpeakeasyBase } from "../../../internal/utils";
import { Entity } from "./entity";
/**
 * The result of fetching an entity from Datastore.
**/
export declare class EntityResult extends SpeakeasyBase {
    cursor?: string;
    entity?: Entity;
    updateTime?: string;
    version?: string;
}
