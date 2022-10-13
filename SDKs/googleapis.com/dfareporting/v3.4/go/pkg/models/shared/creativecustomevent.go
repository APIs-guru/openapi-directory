package shared

type CreativeCustomEventAdvertiserCustomEventTypeEnum string

const (
	CreativeCustomEventAdvertiserCustomEventTypeEnumAdvertiserEventTimer   CreativeCustomEventAdvertiserCustomEventTypeEnum = "ADVERTISER_EVENT_TIMER"
	CreativeCustomEventAdvertiserCustomEventTypeEnumAdvertiserEventExit    CreativeCustomEventAdvertiserCustomEventTypeEnum = "ADVERTISER_EVENT_EXIT"
	CreativeCustomEventAdvertiserCustomEventTypeEnumAdvertiserEventCounter CreativeCustomEventAdvertiserCustomEventTypeEnum = "ADVERTISER_EVENT_COUNTER"
)

type CreativeCustomEventArtworkTypeEnum string

const (
	CreativeCustomEventArtworkTypeEnumArtworkTypeFlash CreativeCustomEventArtworkTypeEnum = "ARTWORK_TYPE_FLASH"
	CreativeCustomEventArtworkTypeEnumArtworkTypeHtml5 CreativeCustomEventArtworkTypeEnum = "ARTWORK_TYPE_HTML5"
	CreativeCustomEventArtworkTypeEnumArtworkTypeMixed CreativeCustomEventArtworkTypeEnum = "ARTWORK_TYPE_MIXED"
	CreativeCustomEventArtworkTypeEnumArtworkTypeImage CreativeCustomEventArtworkTypeEnum = "ARTWORK_TYPE_IMAGE"
)

type CreativeCustomEventTargetTypeEnum string

const (
	CreativeCustomEventTargetTypeEnumTargetBlank  CreativeCustomEventTargetTypeEnum = "TARGET_BLANK"
	CreativeCustomEventTargetTypeEnumTargetTop    CreativeCustomEventTargetTypeEnum = "TARGET_TOP"
	CreativeCustomEventTargetTypeEnumTargetSelf   CreativeCustomEventTargetTypeEnum = "TARGET_SELF"
	CreativeCustomEventTargetTypeEnumTargetParent CreativeCustomEventTargetTypeEnum = "TARGET_PARENT"
	CreativeCustomEventTargetTypeEnumTargetPopup  CreativeCustomEventTargetTypeEnum = "TARGET_POPUP"
)

type CreativeCustomEvent struct {
	AdvertiserCustomEventID   *string                                           `json:"advertiserCustomEventId"`
	AdvertiserCustomEventName *string                                           `json:"advertiserCustomEventName"`
	AdvertiserCustomEventType *CreativeCustomEventAdvertiserCustomEventTypeEnum `json:"advertiserCustomEventType"`
	ArtworkLabel              *string                                           `json:"artworkLabel"`
	ArtworkType               *CreativeCustomEventArtworkTypeEnum               `json:"artworkType"`
	ExitClickThroughURL       *CreativeClickThroughURL                          `json:"exitClickThroughUrl"`
	ID                        *string                                           `json:"id"`
	PopupWindowProperties     *PopupWindowProperties                            `json:"popupWindowProperties"`
	TargetType                *CreativeCustomEventTargetTypeEnum                `json:"targetType"`
	VideoReportingID          *string                                           `json:"videoReportingId"`
}
