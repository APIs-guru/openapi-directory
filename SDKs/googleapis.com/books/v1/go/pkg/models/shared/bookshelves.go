package shared

type Bookshelves struct {
	Items []Bookshelf `json:"items,omitempty"`
	Kind  *string     `json:"kind,omitempty"`
}
