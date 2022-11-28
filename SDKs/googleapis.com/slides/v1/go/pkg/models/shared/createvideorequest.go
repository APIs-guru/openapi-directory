package shared

type CreateVideoRequestSourceEnum string

const (
	CreateVideoRequestSourceEnumSourceUnspecified CreateVideoRequestSourceEnum = "SOURCE_UNSPECIFIED"
	CreateVideoRequestSourceEnumYoutube           CreateVideoRequestSourceEnum = "YOUTUBE"
	CreateVideoRequestSourceEnumDrive             CreateVideoRequestSourceEnum = "DRIVE"
)

// CreateVideoRequest
// Creates a video. NOTE: Creating a video from Google Drive requires that the requesting app have at least one of the drive, drive.readonly, or drive.file OAuth scopes.
type CreateVideoRequest struct {
	ElementProperties *PageElementProperties        `json:"elementProperties,omitempty"`
	ID                *string                       `json:"id,omitempty"`
	ObjectID          *string                       `json:"objectId,omitempty"`
	Source            *CreateVideoRequestSourceEnum `json:"source,omitempty"`
}
