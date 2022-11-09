import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GoogleFirebaseAppcheckV1ServiceEnforcementModeEnum {
    Off = "OFF",
    Unenforced = "UNENFORCED",
    Enforced = "ENFORCED"
}
/**
 * The enforcement configuration for a Firebase service supported by App Check.
**/
export declare class GoogleFirebaseAppcheckV1Service extends SpeakeasyBase {
    enforcementMode?: GoogleFirebaseAppcheckV1ServiceEnforcementModeEnum;
    name?: string;
}
