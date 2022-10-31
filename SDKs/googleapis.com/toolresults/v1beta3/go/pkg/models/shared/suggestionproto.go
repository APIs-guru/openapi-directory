package shared




type SuggestionProtoPriorityEnum string

const (
    SuggestionProtoPriorityEnumUnknownPriority SuggestionProtoPriorityEnum = "unknownPriority"
SuggestionProtoPriorityEnumError SuggestionProtoPriorityEnum = "error"
SuggestionProtoPriorityEnumWarning SuggestionProtoPriorityEnum = "warning"
SuggestionProtoPriorityEnumInfo SuggestionProtoPriorityEnum = "info"
)


type SuggestionProto struct {
    HelpURL *string `json:"helpUrl,omitempty"`
    LongMessage *SafeHTMLProto `json:"longMessage,omitempty"`
    Priority *SuggestionProtoPriorityEnum `json:"priority,omitempty"`
    PseudoResourceID *string `json:"pseudoResourceId,omitempty"`
    Region *RegionProto `json:"region,omitempty"`
    ResourceName *string `json:"resourceName,omitempty"`
    ScreenID *string `json:"screenId,omitempty"`
    SecondaryPriority *float64 `json:"secondaryPriority,omitempty"`
    ShortMessage *SafeHTMLProto `json:"shortMessage,omitempty"`
    Title *string `json:"title,omitempty"`
    
}

