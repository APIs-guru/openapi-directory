package shared

type ListReferenceImagesResponse struct {
	NextPageToken   *string          `json:"nextPageToken,omitempty"`
	PageSize        *int32           `json:"pageSize,omitempty"`
	ReferenceImages []ReferenceImage `json:"referenceImages,omitempty"`
}
