package shared

type ShippingsettingsCustomBatchResponse struct {
	Entries []ShippingsettingsCustomBatchResponseEntry `json:"entries"`
	Kind    *string                                    `json:"kind"`
}
