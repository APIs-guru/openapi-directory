package shared

type ListReferenceImagesResponse struct {
	NextPageToken   *string          `json:"nextPageToken"`
	PageSize        *int32           `json:"pageSize"`
	ReferenceImages []ReferenceImage `json:"referenceImages"`
}
