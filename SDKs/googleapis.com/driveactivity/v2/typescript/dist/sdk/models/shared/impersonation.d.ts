import { SpeakeasyBase } from "../../../internal/utils";
import { User } from "./user";
/**
 * Information about an impersonation, where an admin acts on behalf of an end user. Information about the acting admin is not currently available.
**/
export declare class Impersonation extends SpeakeasyBase {
    impersonatedUser?: User;
}
