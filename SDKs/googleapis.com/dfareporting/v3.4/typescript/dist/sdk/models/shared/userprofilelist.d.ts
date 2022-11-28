import { SpeakeasyBase } from "../../../internal/utils";
import { UserProfile } from "./userprofile";
/**
 * Represents the list of user profiles.
**/
export declare class UserProfileList extends SpeakeasyBase {
    etag?: string;
    items?: UserProfile[];
    kind?: string;
}
