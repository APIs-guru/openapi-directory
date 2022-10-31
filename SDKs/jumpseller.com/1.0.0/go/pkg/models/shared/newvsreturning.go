package shared

type NewVsReturning struct {
	Date      *string `json:"date,omitempty"`
	New       *int64  `json:"new,omitempty"`
	Returning *int64  `json:"returning,omitempty"`
}
