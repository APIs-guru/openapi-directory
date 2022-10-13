package shared

type FilterCriteria struct {
	Condition                   *BooleanCondition `json:"condition"`
	HiddenValues                []string          `json:"hiddenValues"`
	VisibleBackgroundColor      *Color            `json:"visibleBackgroundColor"`
	VisibleBackgroundColorStyle *ColorStyle       `json:"visibleBackgroundColorStyle"`
	VisibleForegroundColor      *Color            `json:"visibleForegroundColor"`
	VisibleForegroundColorStyle *ColorStyle       `json:"visibleForegroundColorStyle"`
}
