package shared

type CreateVideoRequestSourceEnum string

const (
	CreateVideoRequestSourceEnumSourceUnspecified CreateVideoRequestSourceEnum = "SOURCE_UNSPECIFIED"
	CreateVideoRequestSourceEnumYoutube           CreateVideoRequestSourceEnum = "YOUTUBE"
	CreateVideoRequestSourceEnumDrive             CreateVideoRequestSourceEnum = "DRIVE"
)

type CreateVideoRequest struct {
	ElementProperties *PageElementProperties        `json:"elementProperties"`
	ID                *string                       `json:"id"`
	ObjectID          *string                       `json:"objectId"`
	Source            *CreateVideoRequestSourceEnum `json:"source"`
}
