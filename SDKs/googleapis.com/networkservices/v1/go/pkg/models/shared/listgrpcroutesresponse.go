package shared

type ListGrpcRoutesResponse struct {
	GrpcRoutes    []GrpcRoute `json:"grpcRoutes"`
	NextPageToken *string     `json:"nextPageToken"`
}
