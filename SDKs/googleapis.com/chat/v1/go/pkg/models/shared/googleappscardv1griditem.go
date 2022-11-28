package shared

type GoogleAppsCardV1GridItemLayoutEnum string

const (
	GoogleAppsCardV1GridItemLayoutEnumGridItemLayoutUnspecified GoogleAppsCardV1GridItemLayoutEnum = "GRID_ITEM_LAYOUT_UNSPECIFIED"
	GoogleAppsCardV1GridItemLayoutEnumTextBelow                 GoogleAppsCardV1GridItemLayoutEnum = "TEXT_BELOW"
	GoogleAppsCardV1GridItemLayoutEnumTextAbove                 GoogleAppsCardV1GridItemLayoutEnum = "TEXT_ABOVE"
)

// GoogleAppsCardV1GridItem
// Represents a single item in the grid layout.
type GoogleAppsCardV1GridItem struct {
	ID       *string                             `json:"id,omitempty"`
	Image    *GoogleAppsCardV1ImageComponent     `json:"image,omitempty"`
	Layout   *GoogleAppsCardV1GridItemLayoutEnum `json:"layout,omitempty"`
	Subtitle *string                             `json:"subtitle,omitempty"`
	Title    *string                             `json:"title,omitempty"`
}
