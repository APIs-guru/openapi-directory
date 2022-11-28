import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { LocalizedProperty } from "./localizedproperty";



// ImageSettings
/** 
 * Branding properties for images associated with the channel.
**/
export class ImageSettings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=backgroundImageUrl" })
  backgroundImageUrl?: LocalizedProperty;

  @SpeakeasyMetadata({ data: "json, name=bannerExternalUrl" })
  bannerExternalUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=bannerImageUrl" })
  bannerImageUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=bannerMobileExtraHdImageUrl" })
  bannerMobileExtraHdImageUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=bannerMobileHdImageUrl" })
  bannerMobileHdImageUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=bannerMobileImageUrl" })
  bannerMobileImageUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=bannerMobileLowImageUrl" })
  bannerMobileLowImageUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=bannerMobileMediumHdImageUrl" })
  bannerMobileMediumHdImageUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=bannerTabletExtraHdImageUrl" })
  bannerTabletExtraHdImageUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=bannerTabletHdImageUrl" })
  bannerTabletHdImageUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=bannerTabletImageUrl" })
  bannerTabletImageUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=bannerTabletLowImageUrl" })
  bannerTabletLowImageUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=bannerTvHighImageUrl" })
  bannerTvHighImageUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=bannerTvImageUrl" })
  bannerTvImageUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=bannerTvLowImageUrl" })
  bannerTvLowImageUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=bannerTvMediumImageUrl" })
  bannerTvMediumImageUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=largeBrandedBannerImageImapScript" })
  largeBrandedBannerImageImapScript?: LocalizedProperty;

  @SpeakeasyMetadata({ data: "json, name=largeBrandedBannerImageUrl" })
  largeBrandedBannerImageUrl?: LocalizedProperty;

  @SpeakeasyMetadata({ data: "json, name=smallBrandedBannerImageImapScript" })
  smallBrandedBannerImageImapScript?: LocalizedProperty;

  @SpeakeasyMetadata({ data: "json, name=smallBrandedBannerImageUrl" })
  smallBrandedBannerImageUrl?: LocalizedProperty;

  @SpeakeasyMetadata({ data: "json, name=trackingImageUrl" })
  trackingImageUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=watchIconImageUrl" })
  watchIconImageUrl?: string;
}
