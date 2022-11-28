import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum GoogleFirebaseAppcheckV1betaServiceEnforcementModeEnum {
    Off = "OFF",
    Unenforced = "UNENFORCED",
    Enforced = "ENFORCED"
}


// GoogleFirebaseAppcheckV1betaService
/** 
 * The enforcement configuration for a Firebase service supported by App Check.
**/
export class GoogleFirebaseAppcheckV1betaService extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=enforcementMode" })
  enforcementMode?: GoogleFirebaseAppcheckV1betaServiceEnforcementModeEnum;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}
