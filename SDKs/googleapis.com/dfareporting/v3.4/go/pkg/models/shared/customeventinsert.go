package shared




type CustomEventInsertInsertEventTypeEnum string

const (
    CustomEventInsertInsertEventTypeEnumUnknown CustomEventInsertInsertEventTypeEnum = "UNKNOWN"
CustomEventInsertInsertEventTypeEnumImpression CustomEventInsertInsertEventTypeEnum = "IMPRESSION"
CustomEventInsertInsertEventTypeEnumClick CustomEventInsertInsertEventTypeEnum = "CLICK"
)


type CustomEventInsert struct {
    CmDimensions *CampaignManagerIds `json:"cmDimensions,omitempty"`
    Dv3Dimensions *Dv3Ids `json:"dv3Dimensions,omitempty"`
    InsertEventType *CustomEventInsertInsertEventTypeEnum `json:"insertEventType,omitempty"`
    Kind *string `json:"kind,omitempty"`
    MatchID *string `json:"matchId,omitempty"`
    MobileDeviceID *string `json:"mobileDeviceId,omitempty"`
    
}

