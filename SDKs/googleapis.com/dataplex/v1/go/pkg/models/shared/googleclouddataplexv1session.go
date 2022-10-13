package shared

type GoogleCloudDataplexV1SessionStateEnum string

const (
	GoogleCloudDataplexV1SessionStateEnumStateUnspecified GoogleCloudDataplexV1SessionStateEnum = "STATE_UNSPECIFIED"
	GoogleCloudDataplexV1SessionStateEnumActive           GoogleCloudDataplexV1SessionStateEnum = "ACTIVE"
	GoogleCloudDataplexV1SessionStateEnumCreating         GoogleCloudDataplexV1SessionStateEnum = "CREATING"
	GoogleCloudDataplexV1SessionStateEnumDeleting         GoogleCloudDataplexV1SessionStateEnum = "DELETING"
	GoogleCloudDataplexV1SessionStateEnumActionRequired   GoogleCloudDataplexV1SessionStateEnum = "ACTION_REQUIRED"
)

type GoogleCloudDataplexV1Session struct {
	CreateTime *string                                `json:"createTime"`
	Name       *string                                `json:"name"`
	State      *GoogleCloudDataplexV1SessionStateEnum `json:"state"`
	UserID     *string                                `json:"userId"`
}
