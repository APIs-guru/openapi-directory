package shared

type AdlooxExcludedAdlooxCategoriesEnum string

const (
	AdlooxExcludedAdlooxCategoriesEnumAdlooxUnspecified     AdlooxExcludedAdlooxCategoriesEnum = "ADLOOX_UNSPECIFIED"
	AdlooxExcludedAdlooxCategoriesEnumAdultContentHard      AdlooxExcludedAdlooxCategoriesEnum = "ADULT_CONTENT_HARD"
	AdlooxExcludedAdlooxCategoriesEnumAdultContentSoft      AdlooxExcludedAdlooxCategoriesEnum = "ADULT_CONTENT_SOFT"
	AdlooxExcludedAdlooxCategoriesEnumIllegalContent        AdlooxExcludedAdlooxCategoriesEnum = "ILLEGAL_CONTENT"
	AdlooxExcludedAdlooxCategoriesEnumBorderlineContent     AdlooxExcludedAdlooxCategoriesEnum = "BORDERLINE_CONTENT"
	AdlooxExcludedAdlooxCategoriesEnumDiscriminatoryContent AdlooxExcludedAdlooxCategoriesEnum = "DISCRIMINATORY_CONTENT"
	AdlooxExcludedAdlooxCategoriesEnumViolentContentWeapons AdlooxExcludedAdlooxCategoriesEnum = "VIOLENT_CONTENT_WEAPONS"
	AdlooxExcludedAdlooxCategoriesEnumLowViewabilityDomains AdlooxExcludedAdlooxCategoriesEnum = "LOW_VIEWABILITY_DOMAINS"
	AdlooxExcludedAdlooxCategoriesEnumFraud                 AdlooxExcludedAdlooxCategoriesEnum = "FRAUD"
)

type Adloox struct {
	ExcludedAdlooxCategories []AdlooxExcludedAdlooxCategoriesEnum `json:"excludedAdlooxCategories"`
}
