import { SpeakeasyBase } from "../../../internal/utils/utils";
/**
 * An app's DeviceCheck configuration object. This configuration is used by ExchangeDeviceCheckToken to validate device tokens issued to apps by DeviceCheck. It also controls certain properties of the returned `AppCheckToken`, such as its ttl. Note that the Team ID registered with your app is used as part of the validation process. Please register it via the Firebase Console or programmatically via the [Firebase Management Service](https://firebase.google.com/docs/projects/api/reference/rest/v11/projects.iosApps/patch).
**/
export declare class GoogleFirebaseAppcheckV1DeviceCheckConfig extends SpeakeasyBase {
    keyId?: string;
    name?: string;
    privateKey?: string;
    privateKeySet?: boolean;
    tokenTtl?: string;
}
