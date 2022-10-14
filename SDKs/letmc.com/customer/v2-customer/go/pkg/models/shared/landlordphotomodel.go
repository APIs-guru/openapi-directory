package shared

type LandlordPhotoModelPhotoTypeEnum string

const (
	LandlordPhotoModelPhotoTypeEnumPhoto       LandlordPhotoModelPhotoTypeEnum = "Photo"
	LandlordPhotoModelPhotoTypeEnumMap         LandlordPhotoModelPhotoTypeEnum = "Map"
	LandlordPhotoModelPhotoTypeEnumFloorPlan   LandlordPhotoModelPhotoTypeEnum = "FloorPlan"
	LandlordPhotoModelPhotoTypeEnumSiteMap     LandlordPhotoModelPhotoTypeEnum = "SiteMap"
	LandlordPhotoModelPhotoTypeEnumAerialPhoto LandlordPhotoModelPhotoTypeEnum = "AerialPhoto"
)

type LandlordPhotoModel struct {
	ETag      *string                          `json:"ETag,omitempty"`
	FileName  *string                          `json:"FileName,omitempty"`
	Oid       *string                          `json:"OID,omitempty"`
	PhotoType *LandlordPhotoModelPhotoTypeEnum `json:"PhotoType,omitempty"`
}
