import { SpeakeasyBase } from "../../../internal/utils";
import { UserMetadata } from "./usermetadata";
import { UserProfileRequest } from "./userprofilerequest";
export declare class User extends SpeakeasyBase {
    email?: string;
    firstName?: string;
    lastName?: string;
    metadata?: UserMetadata;
    personId?: string;
    profile?: UserProfileRequest;
    sendInvite?: boolean;
}
