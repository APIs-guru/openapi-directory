package shared

type PersonResponse struct {
	HTTPStatusCode        *int32  `json:"httpStatusCode"`
	Person                *Person `json:"person"`
	RequestedResourceName *string `json:"requestedResourceName"`
	Status                *Status `json:"status"`
}
