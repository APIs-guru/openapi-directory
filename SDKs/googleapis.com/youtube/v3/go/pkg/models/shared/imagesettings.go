package shared

// ImageSettings
// Branding properties for images associated with the channel.
type ImageSettings struct {
	BackgroundImageURL                *LocalizedProperty `json:"backgroundImageUrl,omitempty"`
	BannerExternalURL                 *string            `json:"bannerExternalUrl,omitempty"`
	BannerImageURL                    *string            `json:"bannerImageUrl,omitempty"`
	BannerMobileExtraHdImageURL       *string            `json:"bannerMobileExtraHdImageUrl,omitempty"`
	BannerMobileHdImageURL            *string            `json:"bannerMobileHdImageUrl,omitempty"`
	BannerMobileImageURL              *string            `json:"bannerMobileImageUrl,omitempty"`
	BannerMobileLowImageURL           *string            `json:"bannerMobileLowImageUrl,omitempty"`
	BannerMobileMediumHdImageURL      *string            `json:"bannerMobileMediumHdImageUrl,omitempty"`
	BannerTabletExtraHdImageURL       *string            `json:"bannerTabletExtraHdImageUrl,omitempty"`
	BannerTabletHdImageURL            *string            `json:"bannerTabletHdImageUrl,omitempty"`
	BannerTabletImageURL              *string            `json:"bannerTabletImageUrl,omitempty"`
	BannerTabletLowImageURL           *string            `json:"bannerTabletLowImageUrl,omitempty"`
	BannerTvHighImageURL              *string            `json:"bannerTvHighImageUrl,omitempty"`
	BannerTvImageURL                  *string            `json:"bannerTvImageUrl,omitempty"`
	BannerTvLowImageURL               *string            `json:"bannerTvLowImageUrl,omitempty"`
	BannerTvMediumImageURL            *string            `json:"bannerTvMediumImageUrl,omitempty"`
	LargeBrandedBannerImageImapScript *LocalizedProperty `json:"largeBrandedBannerImageImapScript,omitempty"`
	LargeBrandedBannerImageURL        *LocalizedProperty `json:"largeBrandedBannerImageUrl,omitempty"`
	SmallBrandedBannerImageImapScript *LocalizedProperty `json:"smallBrandedBannerImageImapScript,omitempty"`
	SmallBrandedBannerImageURL        *LocalizedProperty `json:"smallBrandedBannerImageUrl,omitempty"`
	TrackingImageURL                  *string            `json:"trackingImageUrl,omitempty"`
	WatchIconImageURL                 *string            `json:"watchIconImageUrl,omitempty"`
}
