import { SpeakeasyBase } from "../../../internal/utils";
import { KnownUser } from "./knownuser";
/**
 * Information about an end user.
**/
export declare class User extends SpeakeasyBase {
    deletedUser?: Map<string, any>;
    knownUser?: KnownUser;
    unknownUser?: Map<string, any>;
}
