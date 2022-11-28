package shared

type DirectorySiteInpageTagFormatsEnum string

const (
	DirectorySiteInpageTagFormatsEnumStandard               DirectorySiteInpageTagFormatsEnum = "STANDARD"
	DirectorySiteInpageTagFormatsEnumIframeJavascriptInpage DirectorySiteInpageTagFormatsEnum = "IFRAME_JAVASCRIPT_INPAGE"
	DirectorySiteInpageTagFormatsEnumInternalRedirectInpage DirectorySiteInpageTagFormatsEnum = "INTERNAL_REDIRECT_INPAGE"
	DirectorySiteInpageTagFormatsEnumJavascriptInpage       DirectorySiteInpageTagFormatsEnum = "JAVASCRIPT_INPAGE"
)

type DirectorySiteInterstitialTagFormatsEnum string

const (
	DirectorySiteInterstitialTagFormatsEnumIframeJavascriptInterstitial DirectorySiteInterstitialTagFormatsEnum = "IFRAME_JAVASCRIPT_INTERSTITIAL"
	DirectorySiteInterstitialTagFormatsEnumInternalRedirectInterstitial DirectorySiteInterstitialTagFormatsEnum = "INTERNAL_REDIRECT_INTERSTITIAL"
	DirectorySiteInterstitialTagFormatsEnumJavascriptInterstitial       DirectorySiteInterstitialTagFormatsEnum = "JAVASCRIPT_INTERSTITIAL"
)

// DirectorySite
// DirectorySites contains properties of a website from the Site Directory. Sites need to be added to an account via the Sites resource before they can be assigned to a placement.
type DirectorySite struct {
	Active                 *bool                                     `json:"active,omitempty"`
	ID                     *string                                   `json:"id,omitempty"`
	IDDimensionValue       *DimensionValue                           `json:"idDimensionValue,omitempty"`
	InpageTagFormats       []DirectorySiteInpageTagFormatsEnum       `json:"inpageTagFormats,omitempty"`
	InterstitialTagFormats []DirectorySiteInterstitialTagFormatsEnum `json:"interstitialTagFormats,omitempty"`
	Kind                   *string                                   `json:"kind,omitempty"`
	Name                   *string                                   `json:"name,omitempty"`
	Settings               *DirectorySiteSettings                    `json:"settings,omitempty"`
	URL                    *string                                   `json:"url,omitempty"`
}
