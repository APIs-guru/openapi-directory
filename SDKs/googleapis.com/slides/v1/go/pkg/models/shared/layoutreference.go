package shared

type LayoutReferencePredefinedLayoutEnum string

const (
	LayoutReferencePredefinedLayoutEnumPredefinedLayoutUnspecified LayoutReferencePredefinedLayoutEnum = "PREDEFINED_LAYOUT_UNSPECIFIED"
	LayoutReferencePredefinedLayoutEnumBlank                       LayoutReferencePredefinedLayoutEnum = "BLANK"
	LayoutReferencePredefinedLayoutEnumCaptionOnly                 LayoutReferencePredefinedLayoutEnum = "CAPTION_ONLY"
	LayoutReferencePredefinedLayoutEnumTitle                       LayoutReferencePredefinedLayoutEnum = "TITLE"
	LayoutReferencePredefinedLayoutEnumTitleAndBody                LayoutReferencePredefinedLayoutEnum = "TITLE_AND_BODY"
	LayoutReferencePredefinedLayoutEnumTitleAndTwoColumns          LayoutReferencePredefinedLayoutEnum = "TITLE_AND_TWO_COLUMNS"
	LayoutReferencePredefinedLayoutEnumTitleOnly                   LayoutReferencePredefinedLayoutEnum = "TITLE_ONLY"
	LayoutReferencePredefinedLayoutEnumSectionHeader               LayoutReferencePredefinedLayoutEnum = "SECTION_HEADER"
	LayoutReferencePredefinedLayoutEnumSectionTitleAndDescription  LayoutReferencePredefinedLayoutEnum = "SECTION_TITLE_AND_DESCRIPTION"
	LayoutReferencePredefinedLayoutEnumOneColumnText               LayoutReferencePredefinedLayoutEnum = "ONE_COLUMN_TEXT"
	LayoutReferencePredefinedLayoutEnumMainPoint                   LayoutReferencePredefinedLayoutEnum = "MAIN_POINT"
	LayoutReferencePredefinedLayoutEnumBigNumber                   LayoutReferencePredefinedLayoutEnum = "BIG_NUMBER"
)

// LayoutReference
// Slide layout reference. This may reference either: - A predefined layout - One of the layouts in the presentation.
type LayoutReference struct {
	LayoutID         *string                              `json:"layoutId,omitempty"`
	PredefinedLayout *LayoutReferencePredefinedLayoutEnum `json:"predefinedLayout,omitempty"`
}
