package shared

type RouteResponse struct {
	Info  *ResponseInfo       `json:"info"`
	Paths []RouteResponsePath `json:"paths"`
}
