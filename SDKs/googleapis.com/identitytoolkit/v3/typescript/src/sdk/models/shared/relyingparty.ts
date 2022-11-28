import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Relyingparty
/** 
 * Request of getting a code for user confirmation (reset password, change email etc.)
**/
export class Relyingparty extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=androidInstallApp" })
  androidInstallApp?: boolean;

  @SpeakeasyMetadata({ data: "json, name=androidMinimumVersion" })
  androidMinimumVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=androidPackageName" })
  androidPackageName?: string;

  @SpeakeasyMetadata({ data: "json, name=canHandleCodeInApp" })
  canHandleCodeInApp?: boolean;

  @SpeakeasyMetadata({ data: "json, name=captchaResp" })
  captchaResp?: string;

  @SpeakeasyMetadata({ data: "json, name=challenge" })
  challenge?: string;

  @SpeakeasyMetadata({ data: "json, name=continueUrl" })
  continueUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=iOSAppStoreId" })
  iOsAppStoreId?: string;

  @SpeakeasyMetadata({ data: "json, name=iOSBundleId" })
  iOsBundleId?: string;

  @SpeakeasyMetadata({ data: "json, name=idToken" })
  idToken?: string;

  @SpeakeasyMetadata({ data: "json, name=kind" })
  kind?: string;

  @SpeakeasyMetadata({ data: "json, name=newEmail" })
  newEmail?: string;

  @SpeakeasyMetadata({ data: "json, name=requestType" })
  requestType?: string;

  @SpeakeasyMetadata({ data: "json, name=userIp" })
  userIp?: string;
}
