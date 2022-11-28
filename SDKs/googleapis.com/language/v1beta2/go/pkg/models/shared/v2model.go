package shared

type V2ModelContentCategoriesVersionEnum string

const (
	V2ModelContentCategoriesVersionEnumContentCategoriesVersionUnspecified V2ModelContentCategoriesVersionEnum = "CONTENT_CATEGORIES_VERSION_UNSPECIFIED"
	V2ModelContentCategoriesVersionEnumV1                                  V2ModelContentCategoriesVersionEnum = "V1"
	V2ModelContentCategoriesVersionEnumV2                                  V2ModelContentCategoriesVersionEnum = "V2"
)

// V2Model
// Options for the V2 model.
type V2Model struct {
	ContentCategoriesVersion *V2ModelContentCategoriesVersionEnum `json:"contentCategoriesVersion,omitempty"`
}
