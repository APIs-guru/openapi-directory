import { SpeakeasyBase } from "../../../internal/utils";
import { DatabaseRole } from "./databaserole";
/**
 * The response for ListDatabaseRoles.
**/
export declare class ListDatabaseRolesResponse extends SpeakeasyBase {
    databaseRoles?: DatabaseRole[];
    nextPageToken?: string;
}
