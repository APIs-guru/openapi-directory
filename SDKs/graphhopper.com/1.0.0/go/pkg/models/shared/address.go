package shared




type AddressCurbsideEnum string

const (
    AddressCurbsideEnumRight AddressCurbsideEnum = "right"
AddressCurbsideEnumLeft AddressCurbsideEnum = "left"
AddressCurbsideEnumAny AddressCurbsideEnum = "any"
)


type Address struct {
    Curbside *AddressCurbsideEnum `json:"curbside,omitempty"`
    Lat float64 `json:"lat"`
    LocationID string `json:"location_id"`
    Lon float64 `json:"lon"`
    Name *string `json:"name,omitempty"`
    StreetHint *string `json:"street_hint,omitempty"`
    
}

