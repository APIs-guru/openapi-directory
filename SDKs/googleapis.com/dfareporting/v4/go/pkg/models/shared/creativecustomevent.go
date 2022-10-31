package shared




type CreativeCustomEventAdvertiserCustomEventTypeEnum string

const (
    CreativeCustomEventAdvertiserCustomEventTypeEnumAdvertiserEventTimer CreativeCustomEventAdvertiserCustomEventTypeEnum = "ADVERTISER_EVENT_TIMER"
CreativeCustomEventAdvertiserCustomEventTypeEnumAdvertiserEventExit CreativeCustomEventAdvertiserCustomEventTypeEnum = "ADVERTISER_EVENT_EXIT"
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
    CreativeCustomEventTargetTypeEnumTargetBlank CreativeCustomEventTargetTypeEnum = "TARGET_BLANK"
CreativeCustomEventTargetTypeEnumTargetTop CreativeCustomEventTargetTypeEnum = "TARGET_TOP"
CreativeCustomEventTargetTypeEnumTargetSelf CreativeCustomEventTargetTypeEnum = "TARGET_SELF"
CreativeCustomEventTargetTypeEnumTargetParent CreativeCustomEventTargetTypeEnum = "TARGET_PARENT"
CreativeCustomEventTargetTypeEnumTargetPopup CreativeCustomEventTargetTypeEnum = "TARGET_POPUP"
)


type CreativeCustomEvent struct {
    AdvertiserCustomEventID *string `json:"advertiserCustomEventId,omitempty"`
    AdvertiserCustomEventName *string `json:"advertiserCustomEventName,omitempty"`
    AdvertiserCustomEventType *CreativeCustomEventAdvertiserCustomEventTypeEnum `json:"advertiserCustomEventType,omitempty"`
    ArtworkLabel *string `json:"artworkLabel,omitempty"`
    ArtworkType *CreativeCustomEventArtworkTypeEnum `json:"artworkType,omitempty"`
    ExitClickThroughURL *CreativeClickThroughURL `json:"exitClickThroughUrl,omitempty"`
    ID *string `json:"id,omitempty"`
    PopupWindowProperties *PopupWindowProperties `json:"popupWindowProperties,omitempty"`
    TargetType *CreativeCustomEventTargetTypeEnum `json:"targetType,omitempty"`
    VideoReportingID *string `json:"videoReportingId,omitempty"`
    
}

