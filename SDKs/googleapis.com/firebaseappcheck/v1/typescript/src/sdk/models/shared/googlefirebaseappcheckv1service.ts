import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GoogleFirebaseAppcheckV1ServiceEnforcementModeEnum {
    Off = "OFF"
,    Unenforced = "UNENFORCED"
,    Enforced = "ENFORCED"
}


// GoogleFirebaseAppcheckV1Service
/** 
 * The enforcement configuration for a Firebase service supported by App Check.
**/
export class GoogleFirebaseAppcheckV1Service extends SpeakeasyBase {
  @Metadata({ data: "json, name=enforcementMode" })
  enforcementMode?: GoogleFirebaseAppcheckV1ServiceEnforcementModeEnum;

  @Metadata({ data: "json, name=name" })
  name?: string;
}
