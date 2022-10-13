package shared

type Bookshelves struct {
	Items []Bookshelf `json:"items"`
	Kind  *string     `json:"kind"`
}
