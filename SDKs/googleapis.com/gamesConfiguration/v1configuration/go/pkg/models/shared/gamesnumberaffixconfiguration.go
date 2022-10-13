package shared

type GamesNumberAffixConfiguration struct {
	Few   *LocalizedStringBundle `json:"few"`
	Many  *LocalizedStringBundle `json:"many"`
	One   *LocalizedStringBundle `json:"one"`
	Other *LocalizedStringBundle `json:"other"`
	Two   *LocalizedStringBundle `json:"two"`
	Zero  *LocalizedStringBundle `json:"zero"`
}
