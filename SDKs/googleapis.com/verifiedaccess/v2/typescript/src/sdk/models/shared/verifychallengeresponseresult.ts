import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum VerifyChallengeResponseResultKeyTrustLevelEnum {
    KeyTrustLevelUnspecified = "KEY_TRUST_LEVEL_UNSPECIFIED"
,    ChromeOsVerifiedMode = "CHROME_OS_VERIFIED_MODE"
,    ChromeOsDeveloperMode = "CHROME_OS_DEVELOPER_MODE"
,    ChromeBrowserHwKey = "CHROME_BROWSER_HW_KEY"
,    ChromeBrowserOsKey = "CHROME_BROWSER_OS_KEY"
}


// VerifyChallengeResponseResult
/** 
 * Result message for VerifiedAccess.VerifyChallengeResponse.
**/
export class VerifyChallengeResponseResult extends SpeakeasyBase {
  @Metadata({ data: "json, name=customerId" })
  customerId?: string;

  @Metadata({ data: "json, name=devicePermanentId" })
  devicePermanentId?: string;

  @Metadata({ data: "json, name=deviceSignal" })
  deviceSignal?: string;

  @Metadata({ data: "json, name=keyTrustLevel" })
  keyTrustLevel?: VerifyChallengeResponseResultKeyTrustLevelEnum;

  @Metadata({ data: "json, name=signedPublicKeyAndChallenge" })
  signedPublicKeyAndChallenge?: string;

  @Metadata({ data: "json, name=virtualDeviceId" })
  virtualDeviceId?: string;
}
