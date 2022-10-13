package shared

type DisplayPreferencesDto struct {
	Client             *string              `json:"Client"`
	CustomPrefs        map[string]string    `json:"CustomPrefs"`
	ID                 *string              `json:"Id"`
	IndexBy            *string              `json:"IndexBy"`
	PrimaryImageHeight *int32               `json:"PrimaryImageHeight"`
	PrimaryImageWidth  *int32               `json:"PrimaryImageWidth"`
	RememberIndexing   *bool                `json:"RememberIndexing"`
	RememberSorting    *bool                `json:"RememberSorting"`
	ScrollDirection    *ScrollDirectionEnum `json:"ScrollDirection"`
	ShowBackdrop       *bool                `json:"ShowBackdrop"`
	ShowSidebar        *bool                `json:"ShowSidebar"`
	SortBy             *string              `json:"SortBy"`
	SortOrder          *SortOrderEnum       `json:"SortOrder"`
	ViewType           *string              `json:"ViewType"`
}
