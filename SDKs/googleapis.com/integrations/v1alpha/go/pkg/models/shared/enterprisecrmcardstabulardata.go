package shared

type EnterpriseCrmCardsTabularData struct {
	Headers []string                `json:"headers,omitempty"`
	Rows    []EnterpriseCrmCardsRow `json:"rows,omitempty"`
}
