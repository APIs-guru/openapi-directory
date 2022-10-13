package shared

type EnterpriseCrmCardsTabularData struct {
	Headers []string                `json:"headers"`
	Rows    []EnterpriseCrmCardsRow `json:"rows"`
}
