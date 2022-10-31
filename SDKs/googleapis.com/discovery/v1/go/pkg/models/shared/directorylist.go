package shared

type DirectoryListItemsIcons struct {
	X16 *string `json:"x16,omitempty"`
	X32 *string `json:"x32,omitempty"`
}

type DirectoryListItems struct {
	Description       *string                  `json:"description,omitempty"`
	DiscoveryLink     *string                  `json:"discoveryLink,omitempty"`
	DiscoveryRestURL  *string                  `json:"discoveryRestUrl,omitempty"`
	DocumentationLink *string                  `json:"documentationLink,omitempty"`
	Icons             *DirectoryListItemsIcons `json:"icons,omitempty"`
	ID                *string                  `json:"id,omitempty"`
	Kind              *string                  `json:"kind,omitempty"`
	Labels            []string                 `json:"labels,omitempty"`
	Name              *string                  `json:"name,omitempty"`
	Preferred         *bool                    `json:"preferred,omitempty"`
	Title             *string                  `json:"title,omitempty"`
	Version           *string                  `json:"version,omitempty"`
}

type DirectoryList struct {
	DiscoveryVersion *string              `json:"discoveryVersion,omitempty"`
	Items            []DirectoryListItems `json:"items,omitempty"`
	Kind             *string              `json:"kind,omitempty"`
}
