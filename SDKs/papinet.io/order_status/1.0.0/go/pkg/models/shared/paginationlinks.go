package shared

type PaginationLinksFirst struct {
	Href *string `json:"href"`
}

type PaginationLinksLast struct {
	Href *string `json:"href"`
}

type PaginationLinksNext struct {
	Href *string `json:"href"`
}

type PaginationLinksPrev struct {
	Href *string `json:"href"`
}

type PaginationLinks struct {
	First *PaginationLinksFirst `json:"first"`
	Last  *PaginationLinksLast  `json:"last"`
	Next  PaginationLinksNext   `json:"next"`
	Prev  *PaginationLinksPrev  `json:"prev"`
}
