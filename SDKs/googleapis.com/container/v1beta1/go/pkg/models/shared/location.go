package shared




type LocationTypeEnum string

const (
    LocationTypeEnumLocationTypeUnspecified LocationTypeEnum = "LOCATION_TYPE_UNSPECIFIED"
LocationTypeEnumZone LocationTypeEnum = "ZONE"
LocationTypeEnumRegion LocationTypeEnum = "REGION"
)


type Location struct {
    Name *string `json:"name,omitempty"`
    Recommended *bool `json:"recommended,omitempty"`
    Type *LocationTypeEnum `json:"type,omitempty"`
    
}

