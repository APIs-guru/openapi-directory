package shared



type PaginationLinksFirst struct {
    Href *string `json:"href,omitempty"`
    
}

type PaginationLinksLast struct {
    Href *string `json:"href,omitempty"`
    
}

type PaginationLinksNext struct {
    Href *string `json:"href,omitempty"`
    
}

type PaginationLinksPrev struct {
    Href *string `json:"href,omitempty"`
    
}

type PaginationLinks struct {
    First *PaginationLinksFirst `json:"first,omitempty"`
    Last *PaginationLinksLast `json:"last,omitempty"`
    Next PaginationLinksNext `json:"next"`
    Prev *PaginationLinksPrev `json:"prev,omitempty"`
    
}

