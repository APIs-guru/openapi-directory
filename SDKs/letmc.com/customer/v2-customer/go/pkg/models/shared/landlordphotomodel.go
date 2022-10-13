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
	ETag      *string                          `json:"ETag"`
	FileName  *string                          `json:"FileName"`
	Oid       *string                          `json:"OID"`
	PhotoType *LandlordPhotoModelPhotoTypeEnum `json:"PhotoType"`
}
