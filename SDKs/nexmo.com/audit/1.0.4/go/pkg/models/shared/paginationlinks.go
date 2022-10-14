package shared

type PaginationLinksLast struct {
	Href *string `json:"href,omitempty"`
}

type PaginationLinksNext struct {
	Href *string `json:"href,omitempty"`
}

type PaginationLinksSelf struct {
	Href *string `json:"href,omitempty"`
}

type PaginationLinks struct {
	Last *PaginationLinksLast `json:"last,omitempty"`
	Next *PaginationLinksNext `json:"next,omitempty"`
	Self *PaginationLinksSelf `json:"self,omitempty"`
}
