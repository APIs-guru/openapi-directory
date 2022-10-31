package shared

type GoogleCloudPolicysimulatorV1ReplayResult struct {
	AccessTuple  *GoogleCloudPolicysimulatorV1AccessTuple `json:"accessTuple,omitempty"`
	Diff         *GoogleCloudPolicysimulatorV1ReplayDiff  `json:"diff,omitempty"`
	Error        *GoogleRPCStatus                         `json:"error,omitempty"`
	LastSeenDate *GoogleTypeDate                          `json:"lastSeenDate,omitempty"`
	Name         *string                                  `json:"name,omitempty"`
	Parent       *string                                  `json:"parent,omitempty"`
}
