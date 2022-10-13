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
	AccountID                      *string          `json:"accountId"`
	AutoEventFilter                []Condition      `json:"autoEventFilter"`
	CheckValidation                *Parameter       `json:"checkValidation"`
	ContainerID                    *string          `json:"containerId"`
	ContinuousTimeMinMilliseconds  *Parameter       `json:"continuousTimeMinMilliseconds"`
	CustomEventFilter              []Condition      `json:"customEventFilter"`
	EventName                      *Parameter       `json:"eventName"`
	Filter                         []Condition      `json:"filter"`
	Fingerprint                    *string          `json:"fingerprint"`
	HorizontalScrollPercentageList *Parameter       `json:"horizontalScrollPercentageList"`
	Interval                       *Parameter       `json:"interval"`
	IntervalSeconds                *Parameter       `json:"intervalSeconds"`
	Limit                          *Parameter       `json:"limit"`
	MaxTimerLengthSeconds          *Parameter       `json:"maxTimerLengthSeconds"`
	Name                           *string          `json:"name"`
	Parameter                      []Parameter      `json:"parameter"`
	ParentFolderID                 *string          `json:"parentFolderId"`
	Selector                       *Parameter       `json:"selector"`
	TotalTimeMinMilliseconds       *Parameter       `json:"totalTimeMinMilliseconds"`
	TriggerID                      *string          `json:"triggerId"`
	Type                           *TriggerTypeEnum `json:"type"`
	UniqueTriggerID                *Parameter       `json:"uniqueTriggerId"`
	VerticalScrollPercentageList   *Parameter       `json:"verticalScrollPercentageList"`
	VisibilitySelector             *Parameter       `json:"visibilitySelector"`
	VisiblePercentageMax           *Parameter       `json:"visiblePercentageMax"`
	VisiblePercentageMin           *Parameter       `json:"visiblePercentageMin"`
	WaitForTags                    *Parameter       `json:"waitForTags"`
	WaitForTagsTimeout             *Parameter       `json:"waitForTagsTimeout"`
}
