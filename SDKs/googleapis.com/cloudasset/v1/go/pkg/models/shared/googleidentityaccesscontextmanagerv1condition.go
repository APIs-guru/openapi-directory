package shared

type GoogleIdentityAccesscontextmanagerV1Condition struct {
	DevicePolicy         *GoogleIdentityAccesscontextmanagerV1DevicePolicy `json:"devicePolicy"`
	IPSubnetworks        []string                                          `json:"ipSubnetworks"`
	Members              []string                                          `json:"members"`
	Negate               *bool                                             `json:"negate"`
	Regions              []string                                          `json:"regions"`
	RequiredAccessLevels []string                                          `json:"requiredAccessLevels"`
}
