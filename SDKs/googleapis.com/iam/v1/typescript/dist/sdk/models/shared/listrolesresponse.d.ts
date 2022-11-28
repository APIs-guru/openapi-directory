import { SpeakeasyBase } from "../../../internal/utils";
import { Role } from "./role";
/**
 * The response containing the roles defined under a resource.
**/
export declare class ListRolesResponse extends SpeakeasyBase {
    nextPageToken?: string;
    roles?: Role[];
}
