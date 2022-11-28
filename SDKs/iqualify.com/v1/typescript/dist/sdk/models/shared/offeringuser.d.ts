import { SpeakeasyBase } from "../../../internal/utils";
import { UserMetadata } from "./usermetadata";
import { UserProfileRequest } from "./userprofilerequest";
export declare class OfferingUser extends SpeakeasyBase {
    email: string;
    firstName?: string;
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
