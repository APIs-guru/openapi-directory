import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { InventorySourceDisplayCreativeConfig } from "./inventorysourcedisplaycreativeconfig";
import { InventorySourceVideoCreativeConfig } from "./inventorysourcevideocreativeconfig";


export enum CreativeConfigCreativeTypeEnum {
    CreativeTypeUnspecified = "CREATIVE_TYPE_UNSPECIFIED",
    CreativeTypeStandard = "CREATIVE_TYPE_STANDARD",
    CreativeTypeExpandable = "CREATIVE_TYPE_EXPANDABLE",
    CreativeTypeVideo = "CREATIVE_TYPE_VIDEO",
    CreativeTypeNative = "CREATIVE_TYPE_NATIVE",
    CreativeTypeTemplatedAppInstall = "CREATIVE_TYPE_TEMPLATED_APP_INSTALL",
    CreativeTypeNativeSiteSquare = "CREATIVE_TYPE_NATIVE_SITE_SQUARE",
    CreativeTypeTemplatedAppInstallInterstitial = "CREATIVE_TYPE_TEMPLATED_APP_INSTALL_INTERSTITIAL",
    CreativeTypeLightbox = "CREATIVE_TYPE_LIGHTBOX",
    CreativeTypeNativeAppInstall = "CREATIVE_TYPE_NATIVE_APP_INSTALL",
    CreativeTypeNativeAppInstallSquare = "CREATIVE_TYPE_NATIVE_APP_INSTALL_SQUARE",
    CreativeTypeAudio = "CREATIVE_TYPE_AUDIO",
    CreativeTypePublisherHosted = "CREATIVE_TYPE_PUBLISHER_HOSTED",
    CreativeTypeNativeVideo = "CREATIVE_TYPE_NATIVE_VIDEO",
    CreativeTypeTemplatedAppInstallVideo = "CREATIVE_TYPE_TEMPLATED_APP_INSTALL_VIDEO"
}


// CreativeConfig
/** 
 * Creative requirements configuration for the inventory source.
**/
export class CreativeConfig extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=creativeType" })
  creativeType?: CreativeConfigCreativeTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=displayCreativeConfig" })
  displayCreativeConfig?: InventorySourceDisplayCreativeConfig;

  @SpeakeasyMetadata({ data: "json, name=videoCreativeConfig" })
  videoCreativeConfig?: InventorySourceVideoCreativeConfig;
}
