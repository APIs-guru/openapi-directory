import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum VerifyChallengeResponseResultKeyTrustLevelEnum {
    KeyTrustLevelUnspecified = "KEY_TRUST_LEVEL_UNSPECIFIED",
    ChromeOsVerifiedMode = "CHROME_OS_VERIFIED_MODE",
    ChromeOsDeveloperMode = "CHROME_OS_DEVELOPER_MODE",
    ChromeBrowserHwKey = "CHROME_BROWSER_HW_KEY",
    ChromeBrowserOsKey = "CHROME_BROWSER_OS_KEY"
}


// VerifyChallengeResponseResult
/** 
 * Result message for VerifiedAccess.VerifyChallengeResponse.
**/
export class VerifyChallengeResponseResult extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=customerId" })
  customerId?: string;

  @SpeakeasyMetadata({ data: "json, name=devicePermanentId" })
  devicePermanentId?: string;

  @SpeakeasyMetadata({ data: "json, name=deviceSignal" })
  deviceSignal?: string;

  @SpeakeasyMetadata({ data: "json, name=keyTrustLevel" })
  keyTrustLevel?: VerifyChallengeResponseResultKeyTrustLevelEnum;

  @SpeakeasyMetadata({ data: "json, name=signedPublicKeyAndChallenge" })
  signedPublicKeyAndChallenge?: string;

  @SpeakeasyMetadata({ data: "json, name=virtualDeviceId" })
  virtualDeviceId?: string;
}
