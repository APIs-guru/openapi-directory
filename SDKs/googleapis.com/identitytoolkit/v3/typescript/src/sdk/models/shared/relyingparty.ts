import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Relyingparty
/** 
 * Request of getting a code for user confirmation (reset password, change email etc.)
**/
export class Relyingparty extends SpeakeasyBase {
  @Metadata({ data: "json, name=androidInstallApp" })
  androidInstallApp?: boolean;

  @Metadata({ data: "json, name=androidMinimumVersion" })
  androidMinimumVersion?: string;

  @Metadata({ data: "json, name=androidPackageName" })
  androidPackageName?: string;

  @Metadata({ data: "json, name=canHandleCodeInApp" })
  canHandleCodeInApp?: boolean;

  @Metadata({ data: "json, name=captchaResp" })
  captchaResp?: string;

  @Metadata({ data: "json, name=challenge" })
  challenge?: string;

  @Metadata({ data: "json, name=continueUrl" })
  continueUrl?: string;

  @Metadata({ data: "json, name=email" })
  email?: string;

  @Metadata({ data: "json, name=iOSAppStoreId" })
  iOsAppStoreId?: string;

  @Metadata({ data: "json, name=iOSBundleId" })
  iOsBundleId?: string;

  @Metadata({ data: "json, name=idToken" })
  idToken?: string;

  @Metadata({ data: "json, name=kind" })
  kind?: string;

  @Metadata({ data: "json, name=newEmail" })
  newEmail?: string;

  @Metadata({ data: "json, name=requestType" })
  requestType?: string;

  @Metadata({ data: "json, name=userIp" })
  userIp?: string;
}
