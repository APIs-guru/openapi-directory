import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ExternalProtectionLevelOptions
/** 
 * ExternalProtectionLevelOptions stores a group of additional fields for configuring a CryptoKeyVersion that are specific to the EXTERNAL protection level and EXTERNAL_VPC protection levels.
**/
export class ExternalProtectionLevelOptions extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ekmConnectionKeyPath" })
  ekmConnectionKeyPath?: string;

  @SpeakeasyMetadata({ data: "json, name=externalKeyUri" })
  externalKeyUri?: string;
}
