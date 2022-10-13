package shared

type EntryPoint struct {
	AccessCode         *string  `json:"accessCode"`
	EntryPointFeatures []string `json:"entryPointFeatures"`
	EntryPointType     *string  `json:"entryPointType"`
	Label              *string  `json:"label"`
	MeetingCode        *string  `json:"meetingCode"`
	Passcode           *string  `json:"passcode"`
	Password           *string  `json:"password"`
	Pin                *string  `json:"pin"`
	RegionCode         *string  `json:"regionCode"`
	URI                *string  `json:"uri"`
}
