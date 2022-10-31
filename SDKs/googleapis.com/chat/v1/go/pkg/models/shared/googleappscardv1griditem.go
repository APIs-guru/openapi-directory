package shared

type GoogleAppsCardV1GridItemLayoutEnum string

const (
	GoogleAppsCardV1GridItemLayoutEnumGridItemLayoutUnspecified GoogleAppsCardV1GridItemLayoutEnum = "GRID_ITEM_LAYOUT_UNSPECIFIED"
	GoogleAppsCardV1GridItemLayoutEnumTextBelow                 GoogleAppsCardV1GridItemLayoutEnum = "TEXT_BELOW"
	GoogleAppsCardV1GridItemLayoutEnumTextAbove                 GoogleAppsCardV1GridItemLayoutEnum = "TEXT_ABOVE"
)

type GoogleAppsCardV1GridItemTextAlignmentEnum string

const (
	GoogleAppsCardV1GridItemTextAlignmentEnumHorizontalAlignmentUnspecified GoogleAppsCardV1GridItemTextAlignmentEnum = "HORIZONTAL_ALIGNMENT_UNSPECIFIED"
	GoogleAppsCardV1GridItemTextAlignmentEnumStart                          GoogleAppsCardV1GridItemTextAlignmentEnum = "START"
	GoogleAppsCardV1GridItemTextAlignmentEnumCenter                         GoogleAppsCardV1GridItemTextAlignmentEnum = "CENTER"
	GoogleAppsCardV1GridItemTextAlignmentEnumEnd                            GoogleAppsCardV1GridItemTextAlignmentEnum = "END"
)

type GoogleAppsCardV1GridItem struct {
	ID            *string                                    `json:"id,omitempty"`
	Image         *GoogleAppsCardV1ImageComponent            `json:"image,omitempty"`
	Layout        *GoogleAppsCardV1GridItemLayoutEnum        `json:"layout,omitempty"`
	Subtitle      *string                                    `json:"subtitle,omitempty"`
	TextAlignment *GoogleAppsCardV1GridItemTextAlignmentEnum `json:"textAlignment,omitempty"`
	Title         *string                                    `json:"title,omitempty"`
}
