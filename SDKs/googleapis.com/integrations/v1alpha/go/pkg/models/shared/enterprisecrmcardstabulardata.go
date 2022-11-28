package shared

// EnterpriseCrmCardsTabularData
// The generic data format returned from all connectors.
type EnterpriseCrmCardsTabularData struct {
	Headers []string                `json:"headers,omitempty"`
	Rows    []EnterpriseCrmCardsRow `json:"rows,omitempty"`
}
