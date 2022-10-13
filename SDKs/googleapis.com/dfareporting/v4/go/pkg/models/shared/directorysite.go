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

type DirectorySite struct {
	ID                     *string                                   `json:"id"`
	IDDimensionValue       *DimensionValue                           `json:"idDimensionValue"`
	InpageTagFormats       []DirectorySiteInpageTagFormatsEnum       `json:"inpageTagFormats"`
	InterstitialTagFormats []DirectorySiteInterstitialTagFormatsEnum `json:"interstitialTagFormats"`
	Kind                   *string                                   `json:"kind"`
	Name                   *string                                   `json:"name"`
	Settings               *DirectorySiteSettings                    `json:"settings"`
	URL                    *string                                   `json:"url"`
}
