package shared

type OptionsPrimaryIdsEnum string

const (
	OptionsPrimaryIdsEnumPrimaryIdsOptionUnspecified OptionsPrimaryIdsEnum = "PRIMARY_IDS_OPTION_UNSPECIFIED"
	OptionsPrimaryIdsEnumKeep                        OptionsPrimaryIdsEnum = "KEEP"
	OptionsPrimaryIdsEnumRegen                       OptionsPrimaryIdsEnum = "REGEN"
)

// Options
// Specifies additional options to apply to the base profile.
type Options struct {
	CleanDescriptors map[string]interface{} `json:"cleanDescriptors,omitempty"`
	CleanImage       *ImageConfig           `json:"cleanImage,omitempty"`
	PrimaryIds       *OptionsPrimaryIdsEnum `json:"primaryIds,omitempty"`
}
