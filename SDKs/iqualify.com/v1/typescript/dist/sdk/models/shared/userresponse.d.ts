import { SpeakeasyBase } from "../../../internal/utils";
import { Invite } from "./invite";
import { UserMetadata } from "./usermetadata";
import { UserProfile } from "./userprofile";
export declare class UserResponse extends SpeakeasyBase {
    avatarUrl?: string;
    email?: string;
    firstAccessAt?: Date;
    firstName?: string;
    id?: string;
    invite?: Invite;
    lastAccessAt?: Date;
    lastName?: string;
    metadata?: UserMetadata;
    personId?: string;
    profile?: UserProfile;
}
