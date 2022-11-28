import { SpeakeasyBase } from "../../../internal/utils";
import { Invite } from "./invite";
import { UserMetadata } from "./usermetadata";
import { UserProfileRequest } from "./userprofilerequest";
export declare class OfferingUserAddResponse extends SpeakeasyBase {
    email?: string;
    firstName?: string;
    invite?: Invite;
    isFacilitator?: boolean;
    isMarker?: boolean;
    isReadonly?: boolean;
    lastName?: string;
    metadata?: UserMetadata;
    personId?: string;
    profile?: UserProfileRequest;
    sendInvite?: boolean;
    sendNotificationEmail?: boolean;
}
