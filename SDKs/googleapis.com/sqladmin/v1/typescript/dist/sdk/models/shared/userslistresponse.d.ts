import { SpeakeasyBase } from "../../../internal/utils";
import { User } from "./user";
/**
 * User list response.
**/
export declare class UsersListResponse extends SpeakeasyBase {
    items?: User[];
    kind?: string;
    nextPageToken?: string;
}
