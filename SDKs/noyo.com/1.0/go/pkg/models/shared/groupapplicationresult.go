package shared

type GroupApplicationResultApplicationTypeEnum string

const (
	GroupApplicationResultApplicationTypeEnumNew     GroupApplicationResultApplicationTypeEnum = "new"
	GroupApplicationResultApplicationTypeEnumRenewal GroupApplicationResultApplicationTypeEnum = "renewal"
	GroupApplicationResultApplicationTypeEnumUpsell  GroupApplicationResultApplicationTypeEnum = "upsell"
)

type GroupApplicationResultStatusEnum string

const (
	GroupApplicationResultStatusEnumActionRequired     GroupApplicationResultStatusEnum = "action_required"
	GroupApplicationResultStatusEnumCanceled           GroupApplicationResultStatusEnum = "canceled"
	GroupApplicationResultStatusEnumInProgress         GroupApplicationResultStatusEnum = "in_progress"
	GroupApplicationResultStatusEnumInstalledAtCarrier GroupApplicationResultStatusEnum = "installed_at_carrier"
	GroupApplicationResultStatusEnumNoyoReview         GroupApplicationResultStatusEnum = "noyo_review"
	GroupApplicationResultStatusEnumReadyForRequests   GroupApplicationResultStatusEnum = "ready_for_requests"
	GroupApplicationResultStatusEnumUnableToInstall    GroupApplicationResultStatusEnum = "unable_to_install"
	GroupApplicationResultStatusEnumWaitingOnCarrier   GroupApplicationResultStatusEnum = "waiting_on_carrier"
)

type GroupApplicationResult struct {
	ApplicationType GroupApplicationResultApplicationTypeEnum `json:"application_type"`
	CarrierGroupID  string                                    `json:"carrier_group_id"`
	CarrierID       string                                    `json:"carrier_id"`
	Created         int64                                     `json:"created"`
	GroupID         string                                    `json:"group_id"`
	ID              string                                    `json:"id"`
	Modified        int64                                     `json:"modified"`
	Notes           string                                    `json:"notes"`
	Status          GroupApplicationResultStatusEnum          `json:"status"`
	StatusNotes     string                                    `json:"status_notes"`
	Version         string                                    `json:"version"`
}
