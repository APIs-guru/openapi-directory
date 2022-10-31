package shared

type GamesNumberAffixConfiguration struct {
	Few   *LocalizedStringBundle `json:"few,omitempty"`
	Many  *LocalizedStringBundle `json:"many,omitempty"`
	One   *LocalizedStringBundle `json:"one,omitempty"`
	Other *LocalizedStringBundle `json:"other,omitempty"`
	Two   *LocalizedStringBundle `json:"two,omitempty"`
	Zero  *LocalizedStringBundle `json:"zero,omitempty"`
}
