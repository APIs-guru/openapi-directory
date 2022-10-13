package shared

type DeletedItem struct {
	Error  *string `json:"error"`
	ID     *string `json:"id"`
	Status *string `json:"status"`
	Title  *string `json:"title"`
}
