package shared

type GoogleCloudPolicysimulatorV1beta1ReplayResult struct {
	AccessTuple  *GoogleCloudPolicysimulatorV1beta1AccessTuple `json:"accessTuple"`
	Diff         *GoogleCloudPolicysimulatorV1beta1ReplayDiff  `json:"diff"`
	Error        *GoogleRPCStatus                              `json:"error"`
	LastSeenDate *GoogleTypeDate                               `json:"lastSeenDate"`
	Name         *string                                       `json:"name"`
	Parent       *string                                       `json:"parent"`
}
