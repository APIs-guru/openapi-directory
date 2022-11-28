package shared

// ListGrpcRoutesResponse
// Response returned by the ListGrpcRoutes method.
type ListGrpcRoutesResponse struct {
	GrpcRoutes    []GrpcRoute `json:"grpcRoutes,omitempty"`
	NextPageToken *string     `json:"nextPageToken,omitempty"`
}
