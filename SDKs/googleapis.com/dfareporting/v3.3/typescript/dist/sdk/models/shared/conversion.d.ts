import { SpeakeasyBase } from "../../../internal/utils";
import { CustomFloodlightVariable } from "./customfloodlightvariable";
/**
 * A Conversion represents when a user successfully performs a desired action after seeing an ad.
**/
export declare class Conversion extends SpeakeasyBase {
    childDirectedTreatment?: boolean;
    customVariables?: CustomFloodlightVariable[];
    encryptedUserId?: string;
    encryptedUserIdCandidates?: string[];
    floodlightActivityId?: string;
    floodlightConfigurationId?: string;
    gclid?: string;
    kind?: string;
    limitAdTracking?: boolean;
    matchId?: string;
    mobileDeviceId?: string;
    nonPersonalizedAd?: boolean;
    ordinal?: string;
    quantity?: string;
    timestampMicros?: string;
    treatmentForUnderage?: boolean;
    value?: number;
}
