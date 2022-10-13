package shared

type SignedData struct {
	Data      *string `json:"data"`
	Signature *string `json:"signature"`
}
