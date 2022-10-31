package shared



type DisplayPreferencesDto struct {
    Client *string `json:"Client,omitempty"`
    CustomPrefs map[string]string `json:"CustomPrefs,omitempty"`
    ID *string `json:"Id,omitempty"`
    IndexBy *string `json:"IndexBy,omitempty"`
    PrimaryImageHeight *int32 `json:"PrimaryImageHeight,omitempty"`
    PrimaryImageWidth *int32 `json:"PrimaryImageWidth,omitempty"`
    RememberIndexing *bool `json:"RememberIndexing,omitempty"`
    RememberSorting *bool `json:"RememberSorting,omitempty"`
    ScrollDirection *ScrollDirectionEnum `json:"ScrollDirection,omitempty"`
    ShowBackdrop *bool `json:"ShowBackdrop,omitempty"`
    ShowSidebar *bool `json:"ShowSidebar,omitempty"`
    SortBy *string `json:"SortBy,omitempty"`
    SortOrder *SortOrderEnum `json:"SortOrder,omitempty"`
    ViewType *string `json:"ViewType,omitempty"`
    
}

