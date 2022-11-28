import { SpeakeasyBase } from "../../../internal/utils";
import { UserProfile } from "./userprofile";
export declare class OfferingUserResponse extends SpeakeasyBase {
    avatarUrl?: string;
    email?: string;
    evaluatedBy?: string[];
    evaluates?: string[];
    firstName?: string;
    id?: string;
    isFacilitator?: boolean;
    isMarker?: boolean;
    isReadonly?: boolean;
    lastName?: string;
    markedBy?: string[];
    marks?: string[];
    personId?: string;
    profile?: UserProfile;
}
