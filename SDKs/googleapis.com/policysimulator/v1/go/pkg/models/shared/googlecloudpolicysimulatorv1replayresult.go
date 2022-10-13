package shared

type GoogleCloudPolicysimulatorV1ReplayResult struct {
	AccessTuple  *GoogleCloudPolicysimulatorV1AccessTuple `json:"accessTuple"`
	Diff         *GoogleCloudPolicysimulatorV1ReplayDiff  `json:"diff"`
	Error        *GoogleRPCStatus                         `json:"error"`
	LastSeenDate *GoogleTypeDate                          `json:"lastSeenDate"`
	Name         *string                                  `json:"name"`
	Parent       *string                                  `json:"parent"`
}
