import { SpeakeasyBase } from "../../../internal/utils";
import { User } from "./user";
export declare class ListUsersResponse extends SpeakeasyBase {
    nextPageToken?: string;
    users?: User[];
}
