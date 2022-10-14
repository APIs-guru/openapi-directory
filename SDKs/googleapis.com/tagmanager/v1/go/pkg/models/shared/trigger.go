package shared

type TriggerTypeEnum string

const (
	TriggerTypeEnumPageview          TriggerTypeEnum = "pageview"
	TriggerTypeEnumDomReady          TriggerTypeEnum = "domReady"
	TriggerTypeEnumWindowLoaded      TriggerTypeEnum = "windowLoaded"
	TriggerTypeEnumCustomEvent       TriggerTypeEnum = "customEvent"
	TriggerTypeEnumTriggerGroup      TriggerTypeEnum = "triggerGroup"
	TriggerTypeEnumAlways            TriggerTypeEnum = "always"
	TriggerTypeEnumFormSubmission    TriggerTypeEnum = "formSubmission"
	TriggerTypeEnumClick             TriggerTypeEnum = "click"
	TriggerTypeEnumLinkClick         TriggerTypeEnum = "linkClick"
	TriggerTypeEnumJsError           TriggerTypeEnum = "jsError"
	TriggerTypeEnumHistoryChange     TriggerTypeEnum = "historyChange"
	TriggerTypeEnumTimer             TriggerTypeEnum = "timer"
	TriggerTypeEnumAmpClick          TriggerTypeEnum = "ampClick"
	TriggerTypeEnumAmpTimer          TriggerTypeEnum = "ampTimer"
	TriggerTypeEnumAmpScroll         TriggerTypeEnum = "ampScroll"
	TriggerTypeEnumAmpVisibility     TriggerTypeEnum = "ampVisibility"
	TriggerTypeEnumYouTubeVideo      TriggerTypeEnum = "youTubeVideo"
	TriggerTypeEnumScrollDepth       TriggerTypeEnum = "scrollDepth"
	TriggerTypeEnumElementVisibility TriggerTypeEnum = "elementVisibility"
)

type Trigger struct {
	AccountID                      *string          `json:"accountId,omitempty"`
	AutoEventFilter                []Condition      `json:"autoEventFilter,omitempty"`
	CheckValidation                *Parameter       `json:"checkValidation,omitempty"`
	ContainerID                    *string          `json:"containerId,omitempty"`
	ContinuousTimeMinMilliseconds  *Parameter       `json:"continuousTimeMinMilliseconds,omitempty"`
	CustomEventFilter              []Condition      `json:"customEventFilter,omitempty"`
	EventName                      *Parameter       `json:"eventName,omitempty"`
	Filter                         []Condition      `json:"filter,omitempty"`
	Fingerprint                    *string          `json:"fingerprint,omitempty"`
	HorizontalScrollPercentageList *Parameter       `json:"horizontalScrollPercentageList,omitempty"`
	Interval                       *Parameter       `json:"interval,omitempty"`
	IntervalSeconds                *Parameter       `json:"intervalSeconds,omitempty"`
	Limit                          *Parameter       `json:"limit,omitempty"`
	MaxTimerLengthSeconds          *Parameter       `json:"maxTimerLengthSeconds,omitempty"`
	Name                           *string          `json:"name,omitempty"`
	Parameter                      []Parameter      `json:"parameter,omitempty"`
	ParentFolderID                 *string          `json:"parentFolderId,omitempty"`
	Selector                       *Parameter       `json:"selector,omitempty"`
	TotalTimeMinMilliseconds       *Parameter       `json:"totalTimeMinMilliseconds,omitempty"`
	TriggerID                      *string          `json:"triggerId,omitempty"`
	Type                           *TriggerTypeEnum `json:"type,omitempty"`
	UniqueTriggerID                *Parameter       `json:"uniqueTriggerId,omitempty"`
	VerticalScrollPercentageList   *Parameter       `json:"verticalScrollPercentageList,omitempty"`
	VisibilitySelector             *Parameter       `json:"visibilitySelector,omitempty"`
	VisiblePercentageMax           *Parameter       `json:"visiblePercentageMax,omitempty"`
	VisiblePercentageMin           *Parameter       `json:"visiblePercentageMin,omitempty"`
	WaitForTags                    *Parameter       `json:"waitForTags,omitempty"`
	WaitForTagsTimeout             *Parameter       `json:"waitForTagsTimeout,omitempty"`
}
