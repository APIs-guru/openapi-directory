package shared

type Paging struct {
	Next *NextPage     `json:"next"`
	Prev *PreviousPage `json:"prev"`
}
