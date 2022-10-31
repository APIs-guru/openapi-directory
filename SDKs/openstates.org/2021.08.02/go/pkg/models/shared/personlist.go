package shared



type PersonList struct {
    Pagination PaginationMeta `json:"pagination"`
    Results []Person `json:"results"`
    
}

