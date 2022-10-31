package shared

type VolumeAccessInfoEpub struct {
	AcsTokenLink *string `json:"acsTokenLink,omitempty"`
	DownloadLink *string `json:"downloadLink,omitempty"`
	IsAvailable  *bool   `json:"isAvailable,omitempty"`
}

type VolumeAccessInfoPdf struct {
	AcsTokenLink *string `json:"acsTokenLink,omitempty"`
	DownloadLink *string `json:"downloadLink,omitempty"`
	IsAvailable  *bool   `json:"isAvailable,omitempty"`
}

type VolumeAccessInfo struct {
	AccessViewStatus                 *string                    `json:"accessViewStatus,omitempty"`
	Country                          *string                    `json:"country,omitempty"`
	DownloadAccess                   *DownloadAccessRestriction `json:"downloadAccess,omitempty"`
	DriveImportedContentLink         *string                    `json:"driveImportedContentLink,omitempty"`
	Embeddable                       *bool                      `json:"embeddable,omitempty"`
	Epub                             *VolumeAccessInfoEpub      `json:"epub,omitempty"`
	ExplicitOfflineLicenseManagement *bool                      `json:"explicitOfflineLicenseManagement,omitempty"`
	Pdf                              *VolumeAccessInfoPdf       `json:"pdf,omitempty"`
	PublicDomain                     *bool                      `json:"publicDomain,omitempty"`
	QuoteSharingAllowed              *bool                      `json:"quoteSharingAllowed,omitempty"`
	TextToSpeechPermission           *string                    `json:"textToSpeechPermission,omitempty"`
	ViewOrderURL                     *string                    `json:"viewOrderUrl,omitempty"`
	Viewability                      *string                    `json:"viewability,omitempty"`
	WebReaderLink                    *string                    `json:"webReaderLink,omitempty"`
}

type VolumeLayerInfoLayers struct {
	LayerID                  *string `json:"layerId,omitempty"`
	VolumeAnnotationsVersion *string `json:"volumeAnnotationsVersion,omitempty"`
}

type VolumeLayerInfo struct {
	Layers []VolumeLayerInfoLayers `json:"layers,omitempty"`
}

type VolumeRecommendedInfo struct {
	Explanation *string `json:"explanation,omitempty"`
}

type VolumeSaleInfoListPrice struct {
	Amount       *float64 `json:"amount,omitempty"`
	CurrencyCode *string  `json:"currencyCode,omitempty"`
}

type VolumeSaleInfoOffersListPrice struct {
	AmountInMicros *float64 `json:"amountInMicros,omitempty"`
	CurrencyCode   *string  `json:"currencyCode,omitempty"`
}

type VolumeSaleInfoOffersRentalDuration struct {
	Count *float64 `json:"count,omitempty"`
	Unit  *string  `json:"unit,omitempty"`
}

type VolumeSaleInfoOffersRetailPrice struct {
	AmountInMicros *float64 `json:"amountInMicros,omitempty"`
	CurrencyCode   *string  `json:"currencyCode,omitempty"`
}

type VolumeSaleInfoOffers struct {
	FinskyOfferType *int32                              `json:"finskyOfferType,omitempty"`
	Giftable        *bool                               `json:"giftable,omitempty"`
	ListPrice       *VolumeSaleInfoOffersListPrice      `json:"listPrice,omitempty"`
	RentalDuration  *VolumeSaleInfoOffersRentalDuration `json:"rentalDuration,omitempty"`
	RetailPrice     *VolumeSaleInfoOffersRetailPrice    `json:"retailPrice,omitempty"`
}

type VolumeSaleInfoRetailPrice struct {
	Amount       *float64 `json:"amount,omitempty"`
	CurrencyCode *string  `json:"currencyCode,omitempty"`
}

type VolumeSaleInfo struct {
	BuyLink     *string                    `json:"buyLink,omitempty"`
	Country     *string                    `json:"country,omitempty"`
	IsEbook     *bool                      `json:"isEbook,omitempty"`
	ListPrice   *VolumeSaleInfoListPrice   `json:"listPrice,omitempty"`
	Offers      []VolumeSaleInfoOffers     `json:"offers,omitempty"`
	OnSaleDate  *string                    `json:"onSaleDate,omitempty"`
	RetailPrice *VolumeSaleInfoRetailPrice `json:"retailPrice,omitempty"`
	Saleability *string                    `json:"saleability,omitempty"`
}

type VolumeSearchInfo struct {
	TextSnippet *string `json:"textSnippet,omitempty"`
}

type VolumeUserInfoCopy struct {
	AllowedCharacterCount   *int32  `json:"allowedCharacterCount,omitempty"`
	LimitType               *string `json:"limitType,omitempty"`
	RemainingCharacterCount *int32  `json:"remainingCharacterCount,omitempty"`
	Updated                 *string `json:"updated,omitempty"`
}

type VolumeUserInfoFamilySharing struct {
	FamilyRole             *string `json:"familyRole,omitempty"`
	IsSharingAllowed       *bool   `json:"isSharingAllowed,omitempty"`
	IsSharingDisabledByFop *bool   `json:"isSharingDisabledByFop,omitempty"`
}

type VolumeUserInfoRentalPeriod struct {
	EndUtcSec   *string `json:"endUtcSec,omitempty"`
	StartUtcSec *string `json:"startUtcSec,omitempty"`
}

type VolumeUserInfoUserUploadedVolumeInfo struct {
	ProcessingState *string `json:"processingState,omitempty"`
}

type VolumeUserInfo struct {
	AcquiredTime                 *string                               `json:"acquiredTime,omitempty"`
	AcquisitionType              *int32                                `json:"acquisitionType,omitempty"`
	Copy                         *VolumeUserInfoCopy                   `json:"copy,omitempty"`
	EntitlementType              *int32                                `json:"entitlementType,omitempty"`
	FamilySharing                *VolumeUserInfoFamilySharing          `json:"familySharing,omitempty"`
	IsFamilySharedFromUser       *bool                                 `json:"isFamilySharedFromUser,omitempty"`
	IsFamilySharedToUser         *bool                                 `json:"isFamilySharedToUser,omitempty"`
	IsFamilySharingAllowed       *bool                                 `json:"isFamilySharingAllowed,omitempty"`
	IsFamilySharingDisabledByFop *bool                                 `json:"isFamilySharingDisabledByFop,omitempty"`
	IsInMyBooks                  *bool                                 `json:"isInMyBooks,omitempty"`
	IsPreordered                 *bool                                 `json:"isPreordered,omitempty"`
	IsPurchased                  *bool                                 `json:"isPurchased,omitempty"`
	IsUploaded                   *bool                                 `json:"isUploaded,omitempty"`
	ReadingPosition              *ReadingPosition                      `json:"readingPosition,omitempty"`
	RentalPeriod                 *VolumeUserInfoRentalPeriod           `json:"rentalPeriod,omitempty"`
	RentalState                  *string                               `json:"rentalState,omitempty"`
	Review                       *Review                               `json:"review,omitempty"`
	Updated                      *string                               `json:"updated,omitempty"`
	UserUploadedVolumeInfo       *VolumeUserInfoUserUploadedVolumeInfo `json:"userUploadedVolumeInfo,omitempty"`
}

type VolumeVolumeInfoDimensions struct {
	Height    *string `json:"height,omitempty"`
	Thickness *string `json:"thickness,omitempty"`
	Width     *string `json:"width,omitempty"`
}

type VolumeVolumeInfoImageLinks struct {
	ExtraLarge     *string `json:"extraLarge,omitempty"`
	Large          *string `json:"large,omitempty"`
	Medium         *string `json:"medium,omitempty"`
	Small          *string `json:"small,omitempty"`
	SmallThumbnail *string `json:"smallThumbnail,omitempty"`
	Thumbnail      *string `json:"thumbnail,omitempty"`
}

type VolumeVolumeInfoIndustryIdentifiers struct {
	Identifier *string `json:"identifier,omitempty"`
	Type       *string `json:"type,omitempty"`
}

type VolumeVolumeInfoPanelizationSummary struct {
	ContainsEpubBubbles  *bool   `json:"containsEpubBubbles,omitempty"`
	ContainsImageBubbles *bool   `json:"containsImageBubbles,omitempty"`
	EpubBubbleVersion    *string `json:"epubBubbleVersion,omitempty"`
	ImageBubbleVersion   *string `json:"imageBubbleVersion,omitempty"`
}

type VolumeVolumeInfoReadingModes struct {
	Image *bool `json:"image,omitempty"`
	Text  *bool `json:"text,omitempty"`
}

type VolumeVolumeInfo struct {
	AllowAnonLogging    *bool                                 `json:"allowAnonLogging,omitempty"`
	Authors             []string                              `json:"authors,omitempty"`
	AverageRating       *float64                              `json:"averageRating,omitempty"`
	CanonicalVolumeLink *string                               `json:"canonicalVolumeLink,omitempty"`
	Categories          []string                              `json:"categories,omitempty"`
	ComicsContent       *bool                                 `json:"comicsContent,omitempty"`
	ContentVersion      *string                               `json:"contentVersion,omitempty"`
	Description         *string                               `json:"description,omitempty"`
	Dimensions          *VolumeVolumeInfoDimensions           `json:"dimensions,omitempty"`
	ImageLinks          *VolumeVolumeInfoImageLinks           `json:"imageLinks,omitempty"`
	IndustryIdentifiers []VolumeVolumeInfoIndustryIdentifiers `json:"industryIdentifiers,omitempty"`
	InfoLink            *string                               `json:"infoLink,omitempty"`
	Language            *string                               `json:"language,omitempty"`
	MainCategory        *string                               `json:"mainCategory,omitempty"`
	MaturityRating      *string                               `json:"maturityRating,omitempty"`
	PageCount           *int32                                `json:"pageCount,omitempty"`
	PanelizationSummary *VolumeVolumeInfoPanelizationSummary  `json:"panelizationSummary,omitempty"`
	PreviewLink         *string                               `json:"previewLink,omitempty"`
	PrintType           *string                               `json:"printType,omitempty"`
	PrintedPageCount    *int32                                `json:"printedPageCount,omitempty"`
	PublishedDate       *string                               `json:"publishedDate,omitempty"`
	Publisher           *string                               `json:"publisher,omitempty"`
	RatingsCount        *int32                                `json:"ratingsCount,omitempty"`
	ReadingModes        *VolumeVolumeInfoReadingModes         `json:"readingModes,omitempty"`
	SamplePageCount     *int32                                `json:"samplePageCount,omitempty"`
	SeriesInfo          *Volumeseriesinfo                     `json:"seriesInfo,omitempty"`
	Subtitle            *string                               `json:"subtitle,omitempty"`
	Title               *string                               `json:"title,omitempty"`
}

type Volume struct {
	AccessInfo      *VolumeAccessInfo      `json:"accessInfo,omitempty"`
	Etag            *string                `json:"etag,omitempty"`
	ID              *string                `json:"id,omitempty"`
	Kind            *string                `json:"kind,omitempty"`
	LayerInfo       *VolumeLayerInfo       `json:"layerInfo,omitempty"`
	RecommendedInfo *VolumeRecommendedInfo `json:"recommendedInfo,omitempty"`
	SaleInfo        *VolumeSaleInfo        `json:"saleInfo,omitempty"`
	SearchInfo      *VolumeSearchInfo      `json:"searchInfo,omitempty"`
	SelfLink        *string                `json:"selfLink,omitempty"`
	UserInfo        *VolumeUserInfo        `json:"userInfo,omitempty"`
	VolumeInfo      *VolumeVolumeInfo      `json:"volumeInfo,omitempty"`
}
