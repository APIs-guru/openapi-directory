import { SpeakeasyBase } from "../../../internal/utils/utils";
export declare enum GoogleFirebaseAppcheckV1betaServiceEnforcementModeEnum {
    Off = "OFF",
    Unenforced = "UNENFORCED",
    Enforced = "ENFORCED"
}
/**
 * The enforcement configuration for a Firebase service supported by App Check.
**/
export declare class GoogleFirebaseAppcheckV1betaService extends SpeakeasyBase {
    enforcementMode?: GoogleFirebaseAppcheckV1betaServiceEnforcementModeEnum;
    name?: string;
}
