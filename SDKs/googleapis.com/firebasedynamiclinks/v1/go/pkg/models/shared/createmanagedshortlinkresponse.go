package shared

type CreateManagedShortLinkResponse struct {
	ManagedShortLink *ManagedShortLink    `json:"managedShortLink"`
	PreviewLink      *string              `json:"previewLink"`
	Warning          []DynamicLinkWarning `json:"warning"`
}
