import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * A *debug token* is a secret used during the development or integration testing of an app. It essentially allows the development or integration testing to bypass app attestation while still allowing App Check to enforce protection on supported production Firebase services.
**/
export declare class GoogleFirebaseAppcheckV1DebugToken extends SpeakeasyBase {
    displayName?: string;
    name?: string;
    token?: string;
}
