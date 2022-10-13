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
	ID            *string                                    `json:"id"`
	Image         *GoogleAppsCardV1ImageComponent            `json:"image"`
	Layout        *GoogleAppsCardV1GridItemLayoutEnum        `json:"layout"`
	Subtitle      *string                                    `json:"subtitle"`
	TextAlignment *GoogleAppsCardV1GridItemTextAlignmentEnum `json:"textAlignment"`
	Title         *string                                    `json:"title"`
}
