package shared

type LogoutResponseResponse struct {
	User string `json:"user"`
}

type LogoutResponseStatusEnum string

const (
	LogoutResponseStatusEnumSuccess LogoutResponseStatusEnum = "success"
)

type LogoutResponse struct {
	API      string                   `json:"api"`
	Method   string                   `json:"method"`
	Response LogoutResponseResponse   `json:"response"`
	Status   LogoutResponseStatusEnum `json:"status"`
}
