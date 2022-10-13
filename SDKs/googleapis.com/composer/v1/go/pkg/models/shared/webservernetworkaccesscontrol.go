package shared

type WebServerNetworkAccessControl struct {
	AllowedIPRanges []AllowedIPRange `json:"allowedIpRanges"`
}
