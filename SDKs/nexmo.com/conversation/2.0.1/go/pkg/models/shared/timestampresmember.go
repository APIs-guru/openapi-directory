package shared

type TimestampResMember struct {
	Invited *string `json:"invited"`
	Joined  *string `json:"joined"`
	Left    *string `json:"left"`
}
