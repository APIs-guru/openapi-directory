import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum GoogleFirebaseAppcheckV1betaServiceEnforcementModeEnum {
    Off = "OFF"
,    Unenforced = "UNENFORCED"
,    Enforced = "ENFORCED"
}


// GoogleFirebaseAppcheckV1betaService
/** 
 * The enforcement configuration for a Firebase service supported by App Check.
**/
export class GoogleFirebaseAppcheckV1betaService extends SpeakeasyBase {
  @Metadata({ data: "json, name=enforcementMode" })
  enforcementMode?: GoogleFirebaseAppcheckV1betaServiceEnforcementModeEnum;

  @Metadata({ data: "json, name=name" })
  name?: string;
}
