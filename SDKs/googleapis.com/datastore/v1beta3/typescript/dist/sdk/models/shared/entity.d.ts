import { SpeakeasyBase } from "../../../internal/utils";
import { Key } from "./key";
import { Value } from "./value";
/**
 * A Datastore data object. An entity is limited to 1 megabyte when stored. That _roughly_ corresponds to a limit of 1 megabyte for the serialized form of this message.
**/
export declare class Entity extends SpeakeasyBase {
    key?: Key;
    properties?: Map<string, Value>;
}
