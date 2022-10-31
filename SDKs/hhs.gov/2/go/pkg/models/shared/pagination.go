package shared



type Pagination struct {
    Count *int64 `json:"count,omitempty"`
    CurrentURL *string `json:"currentUrl,omitempty"`
    Max *int64 `json:"max,omitempty"`
    NextURL *string `json:"nextUrl,omitempty"`
    Offset *int64 `json:"offset,omitempty"`
    PageNum *int64 `json:"pageNum,omitempty"`
    PreviousURL *string `json:"previousUrl,omitempty"`
    Sort *string `json:"sort,omitempty"`
    Total *int64 `json:"total,omitempty"`
    TotalPages *int64 `json:"totalPages,omitempty"`
    
}

