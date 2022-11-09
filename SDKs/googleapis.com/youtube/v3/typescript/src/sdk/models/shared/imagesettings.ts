import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { LocalizedProperty } from "./localizedproperty";
import { LocalizedProperty } from "./localizedproperty";
import { LocalizedProperty } from "./localizedproperty";
import { LocalizedProperty } from "./localizedproperty";
import { LocalizedProperty } from "./localizedproperty";


// ImageSettings
/** 
 * Branding properties for images associated with the channel.
**/
export class ImageSettings extends SpeakeasyBase {
  @Metadata({ data: "json, name=backgroundImageUrl" })
  backgroundImageUrl?: LocalizedProperty;

  @Metadata({ data: "json, name=bannerExternalUrl" })
  bannerExternalUrl?: string;

  @Metadata({ data: "json, name=bannerImageUrl" })
  bannerImageUrl?: string;

  @Metadata({ data: "json, name=bannerMobileExtraHdImageUrl" })
  bannerMobileExtraHdImageUrl?: string;

  @Metadata({ data: "json, name=bannerMobileHdImageUrl" })
  bannerMobileHdImageUrl?: string;

  @Metadata({ data: "json, name=bannerMobileImageUrl" })
  bannerMobileImageUrl?: string;

  @Metadata({ data: "json, name=bannerMobileLowImageUrl" })
  bannerMobileLowImageUrl?: string;

  @Metadata({ data: "json, name=bannerMobileMediumHdImageUrl" })
  bannerMobileMediumHdImageUrl?: string;

  @Metadata({ data: "json, name=bannerTabletExtraHdImageUrl" })
  bannerTabletExtraHdImageUrl?: string;

  @Metadata({ data: "json, name=bannerTabletHdImageUrl" })
  bannerTabletHdImageUrl?: string;

  @Metadata({ data: "json, name=bannerTabletImageUrl" })
  bannerTabletImageUrl?: string;

  @Metadata({ data: "json, name=bannerTabletLowImageUrl" })
  bannerTabletLowImageUrl?: string;

  @Metadata({ data: "json, name=bannerTvHighImageUrl" })
  bannerTvHighImageUrl?: string;

  @Metadata({ data: "json, name=bannerTvImageUrl" })
  bannerTvImageUrl?: string;

  @Metadata({ data: "json, name=bannerTvLowImageUrl" })
  bannerTvLowImageUrl?: string;

  @Metadata({ data: "json, name=bannerTvMediumImageUrl" })
  bannerTvMediumImageUrl?: string;

  @Metadata({ data: "json, name=largeBrandedBannerImageImapScript" })
  largeBrandedBannerImageImapScript?: LocalizedProperty;

  @Metadata({ data: "json, name=largeBrandedBannerImageUrl" })
  largeBrandedBannerImageUrl?: LocalizedProperty;

  @Metadata({ data: "json, name=smallBrandedBannerImageImapScript" })
  smallBrandedBannerImageImapScript?: LocalizedProperty;

  @Metadata({ data: "json, name=smallBrandedBannerImageUrl" })
  smallBrandedBannerImageUrl?: LocalizedProperty;

  @Metadata({ data: "json, name=trackingImageUrl" })
  trackingImageUrl?: string;

  @Metadata({ data: "json, name=watchIconImageUrl" })
  watchIconImageUrl?: string;
}
