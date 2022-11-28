package shared

// PageProperties
// The properties of the Page. The page will inherit properties from the parent page. Depending on the page type the hierarchy is defined in either SlideProperties or LayoutProperties.
type PageProperties struct {
	ColorScheme        *ColorScheme        `json:"colorScheme,omitempty"`
	PageBackgroundFill *PageBackgroundFill `json:"pageBackgroundFill,omitempty"`
}
