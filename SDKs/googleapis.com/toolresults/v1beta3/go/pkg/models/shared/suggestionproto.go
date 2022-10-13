package shared

type SuggestionProtoPriorityEnum string

const (
	SuggestionProtoPriorityEnumUnknownPriority SuggestionProtoPriorityEnum = "unknownPriority"
	SuggestionProtoPriorityEnumError           SuggestionProtoPriorityEnum = "error"
	SuggestionProtoPriorityEnumWarning         SuggestionProtoPriorityEnum = "warning"
	SuggestionProtoPriorityEnumInfo            SuggestionProtoPriorityEnum = "info"
)

type SuggestionProto struct {
	HelpURL           *string                      `json:"helpUrl"`
	LongMessage       *SafeHTMLProto               `json:"longMessage"`
	Priority          *SuggestionProtoPriorityEnum `json:"priority"`
	PseudoResourceID  *string                      `json:"pseudoResourceId"`
	Region            *RegionProto                 `json:"region"`
	ResourceName      *string                      `json:"resourceName"`
	ScreenID          *string                      `json:"screenId"`
	SecondaryPriority *float64                     `json:"secondaryPriority"`
	ShortMessage      *SafeHTMLProto               `json:"shortMessage"`
	Title             *string                      `json:"title"`
}
