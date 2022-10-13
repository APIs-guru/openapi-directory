package shared

type CustomEventInsertInsertEventTypeEnum string

const (
	CustomEventInsertInsertEventTypeEnumUnknown    CustomEventInsertInsertEventTypeEnum = "UNKNOWN"
	CustomEventInsertInsertEventTypeEnumImpression CustomEventInsertInsertEventTypeEnum = "IMPRESSION"
	CustomEventInsertInsertEventTypeEnumClick      CustomEventInsertInsertEventTypeEnum = "CLICK"
)

type CustomEventInsert struct {
	CmDimensions    *CampaignManagerIds                   `json:"cmDimensions"`
	Dv3Dimensions   *Dv3Ids                               `json:"dv3Dimensions"`
	InsertEventType *CustomEventInsertInsertEventTypeEnum `json:"insertEventType"`
	Kind            *string                               `json:"kind"`
	MatchID         *string                               `json:"matchId"`
	MobileDeviceID  *string                               `json:"mobileDeviceId"`
}
