package shared



type ListGrpcRoutesResponse struct {
    GrpcRoutes []GrpcRoute `json:"grpcRoutes,omitempty"`
    NextPageToken *string `json:"nextPageToken,omitempty"`
    
}

