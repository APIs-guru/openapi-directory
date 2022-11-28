import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GoogleFirebaseAppcheckV1ServiceEnforcementModeEnum {
    Off = "OFF",
    Unenforced = "UNENFORCED",
    Enforced = "ENFORCED"
}


// GoogleFirebaseAppcheckV1Service
/** 
 * The enforcement configuration for a Firebase service supported by App Check.
**/
export class GoogleFirebaseAppcheckV1Service extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=enforcementMode" })
  enforcementMode?: GoogleFirebaseAppcheckV1ServiceEnforcementModeEnum;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
