package shared

type ApplicationCreateRequestApplicationTypeEnum string

const (
	ApplicationCreateRequestApplicationTypeEnumNew     ApplicationCreateRequestApplicationTypeEnum = "new"
	ApplicationCreateRequestApplicationTypeEnumRenewal ApplicationCreateRequestApplicationTypeEnum = "renewal"
	ApplicationCreateRequestApplicationTypeEnumUpsell  ApplicationCreateRequestApplicationTypeEnum = "upsell"
)

type ApplicationCreateRequest struct {
	ApplicationType ApplicationCreateRequestApplicationTypeEnum `json:"application_type"`
	CarrierGroupID  *string                                     `json:"carrier_group_id,omitempty"`
	CarrierID       string                                      `json:"carrier_id"`
	Notes           *string                                     `json:"notes,omitempty"`
}
