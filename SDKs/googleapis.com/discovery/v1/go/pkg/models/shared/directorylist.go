package shared

type DirectoryListItemsIcons struct {
	X16 *string `json:"x16"`
	X32 *string `json:"x32"`
}

type DirectoryListItems struct {
	Description       *string                  `json:"description"`
	DiscoveryLink     *string                  `json:"discoveryLink"`
	DiscoveryRestURL  *string                  `json:"discoveryRestUrl"`
	DocumentationLink *string                  `json:"documentationLink"`
	Icons             *DirectoryListItemsIcons `json:"icons"`
	ID                *string                  `json:"id"`
	Kind              *string                  `json:"kind"`
	Labels            []string                 `json:"labels"`
	Name              *string                  `json:"name"`
	Preferred         *bool                    `json:"preferred"`
	Title             *string                  `json:"title"`
	Version           *string                  `json:"version"`
}

type DirectoryList struct {
	DiscoveryVersion *string              `json:"discoveryVersion"`
	Items            []DirectoryListItems `json:"items"`
	Kind             *string              `json:"kind"`
}
