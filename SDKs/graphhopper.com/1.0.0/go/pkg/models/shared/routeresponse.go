package shared



type RouteResponse struct {
    Info *ResponseInfo `json:"info,omitempty"`
    Paths []RouteResponsePath `json:"paths,omitempty"`
    
}

