import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ExternalProtectionLevelOptions
/** 
 * ExternalProtectionLevelOptions stores a group of additional fields for configuring a CryptoKeyVersion that are specific to the EXTERNAL protection level and EXTERNAL_VPC protection levels.
**/
export class ExternalProtectionLevelOptions extends SpeakeasyBase {
  @Metadata({ data: "json, name=ekmConnectionKeyPath" })
  ekmConnectionKeyPath?: string;

  @Metadata({ data: "json, name=externalKeyUri" })
  externalKeyUri?: string;
}
