package shared




type CreateVideoRequestSourceEnum string

const (
    CreateVideoRequestSourceEnumSourceUnspecified CreateVideoRequestSourceEnum = "SOURCE_UNSPECIFIED"
CreateVideoRequestSourceEnumYoutube CreateVideoRequestSourceEnum = "YOUTUBE"
CreateVideoRequestSourceEnumDrive CreateVideoRequestSourceEnum = "DRIVE"
)


type CreateVideoRequest struct {
    ElementProperties *PageElementProperties `json:"elementProperties,omitempty"`
    ID *string `json:"id,omitempty"`
    ObjectID *string `json:"objectId,omitempty"`
    Source *CreateVideoRequestSourceEnum `json:"source,omitempty"`
    
}

