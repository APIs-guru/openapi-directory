package shared

type VolumeAccessInfoEpub struct {
	AcsTokenLink *string `json:"acsTokenLink"`
	DownloadLink *string `json:"downloadLink"`
	IsAvailable  *bool   `json:"isAvailable"`
}

type VolumeAccessInfoPdf struct {
	AcsTokenLink *string `json:"acsTokenLink"`
	DownloadLink *string `json:"downloadLink"`
	IsAvailable  *bool   `json:"isAvailable"`
}

type VolumeAccessInfo struct {
	AccessViewStatus                 *string                    `json:"accessViewStatus"`
	Country                          *string                    `json:"country"`
	DownloadAccess                   *DownloadAccessRestriction `json:"downloadAccess"`
	DriveImportedContentLink         *string                    `json:"driveImportedContentLink"`
	Embeddable                       *bool                      `json:"embeddable"`
	Epub                             *VolumeAccessInfoEpub      `json:"epub"`
	ExplicitOfflineLicenseManagement *bool                      `json:"explicitOfflineLicenseManagement"`
	Pdf                              *VolumeAccessInfoPdf       `json:"pdf"`
	PublicDomain                     *bool                      `json:"publicDomain"`
	QuoteSharingAllowed              *bool                      `json:"quoteSharingAllowed"`
	TextToSpeechPermission           *string                    `json:"textToSpeechPermission"`
	ViewOrderURL                     *string                    `json:"viewOrderUrl"`
	Viewability                      *string                    `json:"viewability"`
	WebReaderLink                    *string                    `json:"webReaderLink"`
}

type VolumeLayerInfoLayers struct {
	LayerID                  *string `json:"layerId"`
	VolumeAnnotationsVersion *string `json:"volumeAnnotationsVersion"`
}

type VolumeLayerInfo struct {
	Layers []VolumeLayerInfoLayers `json:"layers"`
}

type VolumeRecommendedInfo struct {
	Explanation *string `json:"explanation"`
}

type VolumeSaleInfoListPrice struct {
	Amount       *float64 `json:"amount"`
	CurrencyCode *string  `json:"currencyCode"`
}

type VolumeSaleInfoOffersListPrice struct {
	AmountInMicros *float64 `json:"amountInMicros"`
	CurrencyCode   *string  `json:"currencyCode"`
}

type VolumeSaleInfoOffersRentalDuration struct {
	Count *float64 `json:"count"`
	Unit  *string  `json:"unit"`
}

type VolumeSaleInfoOffersRetailPrice struct {
	AmountInMicros *float64 `json:"amountInMicros"`
	CurrencyCode   *string  `json:"currencyCode"`
}

type VolumeSaleInfoOffers struct {
	FinskyOfferType *int32                              `json:"finskyOfferType"`
	Giftable        *bool                               `json:"giftable"`
	ListPrice       *VolumeSaleInfoOffersListPrice      `json:"listPrice"`
	RentalDuration  *VolumeSaleInfoOffersRentalDuration `json:"rentalDuration"`
	RetailPrice     *VolumeSaleInfoOffersRetailPrice    `json:"retailPrice"`
}

type VolumeSaleInfoRetailPrice struct {
	Amount       *float64 `json:"amount"`
	CurrencyCode *string  `json:"currencyCode"`
}

type VolumeSaleInfo struct {
	BuyLink     *string                    `json:"buyLink"`
	Country     *string                    `json:"country"`
	IsEbook     *bool                      `json:"isEbook"`
	ListPrice   *VolumeSaleInfoListPrice   `json:"listPrice"`
	Offers      []VolumeSaleInfoOffers     `json:"offers"`
	OnSaleDate  *string                    `json:"onSaleDate"`
	RetailPrice *VolumeSaleInfoRetailPrice `json:"retailPrice"`
	Saleability *string                    `json:"saleability"`
}

type VolumeSearchInfo struct {
	TextSnippet *string `json:"textSnippet"`
}

type VolumeUserInfoCopy struct {
	AllowedCharacterCount   *int32  `json:"allowedCharacterCount"`
	LimitType               *string `json:"limitType"`
	RemainingCharacterCount *int32  `json:"remainingCharacterCount"`
	Updated                 *string `json:"updated"`
}

type VolumeUserInfoFamilySharing struct {
	FamilyRole             *string `json:"familyRole"`
	IsSharingAllowed       *bool   `json:"isSharingAllowed"`
	IsSharingDisabledByFop *bool   `json:"isSharingDisabledByFop"`
}

type VolumeUserInfoRentalPeriod struct {
	EndUtcSec   *string `json:"endUtcSec"`
	StartUtcSec *string `json:"startUtcSec"`
}

type VolumeUserInfoUserUploadedVolumeInfo struct {
	ProcessingState *string `json:"processingState"`
}

type VolumeUserInfo struct {
	AcquiredTime                 *string                               `json:"acquiredTime"`
	AcquisitionType              *int32                                `json:"acquisitionType"`
	Copy                         *VolumeUserInfoCopy                   `json:"copy"`
	EntitlementType              *int32                                `json:"entitlementType"`
	FamilySharing                *VolumeUserInfoFamilySharing          `json:"familySharing"`
	IsFamilySharedFromUser       *bool                                 `json:"isFamilySharedFromUser"`
	IsFamilySharedToUser         *bool                                 `json:"isFamilySharedToUser"`
	IsFamilySharingAllowed       *bool                                 `json:"isFamilySharingAllowed"`
	IsFamilySharingDisabledByFop *bool                                 `json:"isFamilySharingDisabledByFop"`
	IsInMyBooks                  *bool                                 `json:"isInMyBooks"`
	IsPreordered                 *bool                                 `json:"isPreordered"`
	IsPurchased                  *bool                                 `json:"isPurchased"`
	IsUploaded                   *bool                                 `json:"isUploaded"`
	ReadingPosition              *ReadingPosition                      `json:"readingPosition"`
	RentalPeriod                 *VolumeUserInfoRentalPeriod           `json:"rentalPeriod"`
	RentalState                  *string                               `json:"rentalState"`
	Review                       *Review                               `json:"review"`
	Updated                      *string                               `json:"updated"`
	UserUploadedVolumeInfo       *VolumeUserInfoUserUploadedVolumeInfo `json:"userUploadedVolumeInfo"`
}

type VolumeVolumeInfoDimensions struct {
	Height    *string `json:"height"`
	Thickness *string `json:"thickness"`
	Width     *string `json:"width"`
}

type VolumeVolumeInfoImageLinks struct {
	ExtraLarge     *string `json:"extraLarge"`
	Large          *string `json:"large"`
	Medium         *string `json:"medium"`
	Small          *string `json:"small"`
	SmallThumbnail *string `json:"smallThumbnail"`
	Thumbnail      *string `json:"thumbnail"`
}

type VolumeVolumeInfoIndustryIdentifiers struct {
	Identifier *string `json:"identifier"`
	Type       *string `json:"type"`
}

type VolumeVolumeInfoPanelizationSummary struct {
	ContainsEpubBubbles  *bool   `json:"containsEpubBubbles"`
	ContainsImageBubbles *bool   `json:"containsImageBubbles"`
	EpubBubbleVersion    *string `json:"epubBubbleVersion"`
	ImageBubbleVersion   *string `json:"imageBubbleVersion"`
}

type VolumeVolumeInfoReadingModes struct {
	Image *bool `json:"image"`
	Text  *bool `json:"text"`
}

type VolumeVolumeInfo struct {
	AllowAnonLogging    *bool                                 `json:"allowAnonLogging"`
	Authors             []string                              `json:"authors"`
	AverageRating       *float64                              `json:"averageRating"`
	CanonicalVolumeLink *string                               `json:"canonicalVolumeLink"`
	Categories          []string                              `json:"categories"`
	ComicsContent       *bool                                 `json:"comicsContent"`
	ContentVersion      *string                               `json:"contentVersion"`
	Description         *string                               `json:"description"`
	Dimensions          *VolumeVolumeInfoDimensions           `json:"dimensions"`
	ImageLinks          *VolumeVolumeInfoImageLinks           `json:"imageLinks"`
	IndustryIdentifiers []VolumeVolumeInfoIndustryIdentifiers `json:"industryIdentifiers"`
	InfoLink            *string                               `json:"infoLink"`
	Language            *string                               `json:"language"`
	MainCategory        *string                               `json:"mainCategory"`
	MaturityRating      *string                               `json:"maturityRating"`
	PageCount           *int32                                `json:"pageCount"`
	PanelizationSummary *VolumeVolumeInfoPanelizationSummary  `json:"panelizationSummary"`
	PreviewLink         *string                               `json:"previewLink"`
	PrintType           *string                               `json:"printType"`
	PrintedPageCount    *int32                                `json:"printedPageCount"`
	PublishedDate       *string                               `json:"publishedDate"`
	Publisher           *string                               `json:"publisher"`
	RatingsCount        *int32                                `json:"ratingsCount"`
	ReadingModes        *VolumeVolumeInfoReadingModes         `json:"readingModes"`
	SamplePageCount     *int32                                `json:"samplePageCount"`
	SeriesInfo          *Volumeseriesinfo                     `json:"seriesInfo"`
	Subtitle            *string                               `json:"subtitle"`
	Title               *string                               `json:"title"`
}

type Volume struct {
	AccessInfo      *VolumeAccessInfo      `json:"accessInfo"`
	Etag            *string                `json:"etag"`
	ID              *string                `json:"id"`
	Kind            *string                `json:"kind"`
	LayerInfo       *VolumeLayerInfo       `json:"layerInfo"`
	RecommendedInfo *VolumeRecommendedInfo `json:"recommendedInfo"`
	SaleInfo        *VolumeSaleInfo        `json:"saleInfo"`
	SearchInfo      *VolumeSearchInfo      `json:"searchInfo"`
	SelfLink        *string                `json:"selfLink"`
	UserInfo        *VolumeUserInfo        `json:"userInfo"`
	VolumeInfo      *VolumeVolumeInfo      `json:"volumeInfo"`
}
