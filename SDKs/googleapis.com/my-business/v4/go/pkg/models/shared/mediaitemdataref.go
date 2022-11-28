package shared

// MediaItemDataRef
// Reference to the photo binary data of a `MediaItem` uploaded through the Google My Business API. Create a data ref using StartUploadMediaItemData, and use this ref when uploading bytes to [UpdateMedia] and subsequently calling CreateMediaItem.
type MediaItemDataRef struct {
	ResourceName *string `json:"resourceName,omitempty"`
}
