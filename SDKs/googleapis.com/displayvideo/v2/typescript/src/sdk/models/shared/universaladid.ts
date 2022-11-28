import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum UniversalAdIdRegistryEnum {
    UniversalAdRegistryUnspecified = "UNIVERSAL_AD_REGISTRY_UNSPECIFIED",
    UniversalAdRegistryOther = "UNIVERSAL_AD_REGISTRY_OTHER",
    UniversalAdRegistryAdId = "UNIVERSAL_AD_REGISTRY_AD_ID",
    UniversalAdRegistryClearcast = "UNIVERSAL_AD_REGISTRY_CLEARCAST",
    UniversalAdRegistryDv360 = "UNIVERSAL_AD_REGISTRY_DV360",
    UniversalAdRegistryCm = "UNIVERSAL_AD_REGISTRY_CM"
}


// UniversalAdId
/** 
 * A creative identifier provided by a registry that is unique across all platforms. This is part of the VAST 4.0 standard.
**/
export class UniversalAdId extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=registry" })
  registry?: UniversalAdIdRegistryEnum;
}
