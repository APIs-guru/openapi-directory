import { SpeakeasyBase } from "../../../internal/utils/utils";
import { Role } from "./role";
/**
 * The grantable role query response.
**/
export declare class QueryGrantableRolesResponse extends SpeakeasyBase {
    nextPageToken?: string;
    roles?: Role[];
}
