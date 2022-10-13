package shared

type TriggerTypeEnum string

const (
	TriggerTypeEnumEventTypeUnspecified           TriggerTypeEnum = "eventTypeUnspecified"
	TriggerTypeEnumPageview                       TriggerTypeEnum = "pageview"
	TriggerTypeEnumDomReady                       TriggerTypeEnum = "domReady"
	TriggerTypeEnumWindowLoaded                   TriggerTypeEnum = "windowLoaded"
	TriggerTypeEnumCustomEvent                    TriggerTypeEnum = "customEvent"
	TriggerTypeEnumTriggerGroup                   TriggerTypeEnum = "triggerGroup"
	TriggerTypeEnumInit                           TriggerTypeEnum = "init"
	TriggerTypeEnumConsentInit                    TriggerTypeEnum = "consentInit"
	TriggerTypeEnumServerPageview                 TriggerTypeEnum = "serverPageview"
	TriggerTypeEnumAlways                         TriggerTypeEnum = "always"
	TriggerTypeEnumFirebaseAppException           TriggerTypeEnum = "firebaseAppException"
	TriggerTypeEnumFirebaseAppUpdate              TriggerTypeEnum = "firebaseAppUpdate"
	TriggerTypeEnumFirebaseCampaign               TriggerTypeEnum = "firebaseCampaign"
	TriggerTypeEnumFirebaseFirstOpen              TriggerTypeEnum = "firebaseFirstOpen"
	TriggerTypeEnumFirebaseInAppPurchase          TriggerTypeEnum = "firebaseInAppPurchase"
	TriggerTypeEnumFirebaseNotificationDismiss    TriggerTypeEnum = "firebaseNotificationDismiss"
	TriggerTypeEnumFirebaseNotificationForeground TriggerTypeEnum = "firebaseNotificationForeground"
	TriggerTypeEnumFirebaseNotificationOpen       TriggerTypeEnum = "firebaseNotificationOpen"
	TriggerTypeEnumFirebaseNotificationReceive    TriggerTypeEnum = "firebaseNotificationReceive"
	TriggerTypeEnumFirebaseOsUpdate               TriggerTypeEnum = "firebaseOsUpdate"
	TriggerTypeEnumFirebaseSessionStart           TriggerTypeEnum = "firebaseSessionStart"
	TriggerTypeEnumFirebaseUserEngagement         TriggerTypeEnum = "firebaseUserEngagement"
	TriggerTypeEnumFormSubmission                 TriggerTypeEnum = "formSubmission"
	TriggerTypeEnumClick                          TriggerTypeEnum = "click"
	TriggerTypeEnumLinkClick                      TriggerTypeEnum = "linkClick"
	TriggerTypeEnumJsError                        TriggerTypeEnum = "jsError"
	TriggerTypeEnumHistoryChange                  TriggerTypeEnum = "historyChange"
	TriggerTypeEnumTimer                          TriggerTypeEnum = "timer"
	TriggerTypeEnumAmpClick                       TriggerTypeEnum = "ampClick"
	TriggerTypeEnumAmpTimer                       TriggerTypeEnum = "ampTimer"
	TriggerTypeEnumAmpScroll                      TriggerTypeEnum = "ampScroll"
	TriggerTypeEnumAmpVisibility                  TriggerTypeEnum = "ampVisibility"
	TriggerTypeEnumYouTubeVideo                   TriggerTypeEnum = "youTubeVideo"
	TriggerTypeEnumScrollDepth                    TriggerTypeEnum = "scrollDepth"
	TriggerTypeEnumElementVisibility              TriggerTypeEnum = "elementVisibility"
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
	Notes                          *string          `json:"notes"`
	Parameter                      []Parameter      `json:"parameter"`
	ParentFolderID                 *string          `json:"parentFolderId"`
	Path                           *string          `json:"path"`
	Selector                       *Parameter       `json:"selector"`
	TagManagerURL                  *string          `json:"tagManagerUrl"`
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
	WorkspaceID                    *string          `json:"workspaceId"`
}
