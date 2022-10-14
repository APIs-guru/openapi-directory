package shared

type FilterCriteria struct {
	Condition                   *BooleanCondition `json:"condition,omitempty"`
	HiddenValues                []string          `json:"hiddenValues,omitempty"`
	VisibleBackgroundColor      *Color            `json:"visibleBackgroundColor,omitempty"`
	VisibleBackgroundColorStyle *ColorStyle       `json:"visibleBackgroundColorStyle,omitempty"`
	VisibleForegroundColor      *Color            `json:"visibleForegroundColor,omitempty"`
	VisibleForegroundColorStyle *ColorStyle       `json:"visibleForegroundColorStyle,omitempty"`
}
