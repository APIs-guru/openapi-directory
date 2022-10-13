package shared

type ImageSettings struct {
	BackgroundImageURL                *LocalizedProperty `json:"backgroundImageUrl"`
	BannerExternalURL                 *string            `json:"bannerExternalUrl"`
	BannerImageURL                    *string            `json:"bannerImageUrl"`
	BannerMobileExtraHdImageURL       *string            `json:"bannerMobileExtraHdImageUrl"`
	BannerMobileHdImageURL            *string            `json:"bannerMobileHdImageUrl"`
	BannerMobileImageURL              *string            `json:"bannerMobileImageUrl"`
	BannerMobileLowImageURL           *string            `json:"bannerMobileLowImageUrl"`
	BannerMobileMediumHdImageURL      *string            `json:"bannerMobileMediumHdImageUrl"`
	BannerTabletExtraHdImageURL       *string            `json:"bannerTabletExtraHdImageUrl"`
	BannerTabletHdImageURL            *string            `json:"bannerTabletHdImageUrl"`
	BannerTabletImageURL              *string            `json:"bannerTabletImageUrl"`
	BannerTabletLowImageURL           *string            `json:"bannerTabletLowImageUrl"`
	BannerTvHighImageURL              *string            `json:"bannerTvHighImageUrl"`
	BannerTvImageURL                  *string            `json:"bannerTvImageUrl"`
	BannerTvLowImageURL               *string            `json:"bannerTvLowImageUrl"`
	BannerTvMediumImageURL            *string            `json:"bannerTvMediumImageUrl"`
	LargeBrandedBannerImageImapScript *LocalizedProperty `json:"largeBrandedBannerImageImapScript"`
	LargeBrandedBannerImageURL        *LocalizedProperty `json:"largeBrandedBannerImageUrl"`
	SmallBrandedBannerImageImapScript *LocalizedProperty `json:"smallBrandedBannerImageImapScript"`
	SmallBrandedBannerImageURL        *LocalizedProperty `json:"smallBrandedBannerImageUrl"`
	TrackingImageURL                  *string            `json:"trackingImageUrl"`
	WatchIconImageURL                 *string            `json:"watchIconImageUrl"`
}
