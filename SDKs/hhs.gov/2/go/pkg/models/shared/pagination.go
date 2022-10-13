package shared

type Pagination struct {
	Count       *int64  `json:"count"`
	CurrentURL  *string `json:"currentUrl"`
	Max         *int64  `json:"max"`
	NextURL     *string `json:"nextUrl"`
	Offset      *int64  `json:"offset"`
	PageNum     *int64  `json:"pageNum"`
	PreviousURL *string `json:"previousUrl"`
	Sort        *string `json:"sort"`
	Total       *int64  `json:"total"`
	TotalPages  *int64  `json:"totalPages"`
}
