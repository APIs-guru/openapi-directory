package shared




type AdvertisedIDTypeEnum string

const (
    AdvertisedIDTypeEnumTypeUnspecified AdvertisedIDTypeEnum = "TYPE_UNSPECIFIED"
AdvertisedIDTypeEnumEddystone AdvertisedIDTypeEnum = "EDDYSTONE"
AdvertisedIDTypeEnumIbeacon AdvertisedIDTypeEnum = "IBEACON"
AdvertisedIDTypeEnumAltbeacon AdvertisedIDTypeEnum = "ALTBEACON"
AdvertisedIDTypeEnumEddystoneEid AdvertisedIDTypeEnum = "EDDYSTONE_EID"
)


type AdvertisedID struct {
    ID *string `json:"id,omitempty"`
    Type *AdvertisedIDTypeEnum `json:"type,omitempty"`
    
}

