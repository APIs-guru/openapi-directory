package shared

type RestrictionChangeFeatureEnum string

const (
	RestrictionChangeFeatureEnumFeatureUnspecified   RestrictionChangeFeatureEnum = "FEATURE_UNSPECIFIED"
	RestrictionChangeFeatureEnumSharingOutsideDomain RestrictionChangeFeatureEnum = "SHARING_OUTSIDE_DOMAIN"
	RestrictionChangeFeatureEnumDirectSharing        RestrictionChangeFeatureEnum = "DIRECT_SHARING"
	RestrictionChangeFeatureEnumItemDuplication      RestrictionChangeFeatureEnum = "ITEM_DUPLICATION"
	RestrictionChangeFeatureEnumDriveFileStream      RestrictionChangeFeatureEnum = "DRIVE_FILE_STREAM"
)

type RestrictionChangeNewRestrictionEnum string

const (
	RestrictionChangeNewRestrictionEnumRestrictionUnspecified RestrictionChangeNewRestrictionEnum = "RESTRICTION_UNSPECIFIED"
	RestrictionChangeNewRestrictionEnumUnrestricted           RestrictionChangeNewRestrictionEnum = "UNRESTRICTED"
	RestrictionChangeNewRestrictionEnumFullyRestricted        RestrictionChangeNewRestrictionEnum = "FULLY_RESTRICTED"
)

// RestrictionChange
// Information about restriction policy changes to a feature.
type RestrictionChange struct {
	Feature        *RestrictionChangeFeatureEnum        `json:"feature,omitempty"`
	NewRestriction *RestrictionChangeNewRestrictionEnum `json:"newRestriction,omitempty"`
}
