package shared

type RequestDetails struct {
	Nonce              *string `json:"nonce"`
	RequestPackageName *string `json:"requestPackageName"`
	TimestampMillis    *string `json:"timestampMillis"`
}
