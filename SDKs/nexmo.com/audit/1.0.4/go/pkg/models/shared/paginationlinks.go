package shared

type PaginationLinksLast struct {
	Href *string `json:"href"`
}

type PaginationLinksNext struct {
	Href *string `json:"href"`
}

type PaginationLinksSelf struct {
	Href *string `json:"href"`
}

type PaginationLinks struct {
	Last *PaginationLinksLast `json:"last"`
	Next *PaginationLinksNext `json:"next"`
	Self *PaginationLinksSelf `json:"self"`
}
