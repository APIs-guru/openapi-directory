package shared

type DtmfResponse struct {
	Message *string `json:"message"`
	UUID    *string `json:"uuid"`
}
