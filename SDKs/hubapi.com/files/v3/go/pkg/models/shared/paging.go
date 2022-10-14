package shared

type Paging struct {
	Next *NextPage     `json:"next,omitempty"`
	Prev *PreviousPage `json:"prev,omitempty"`
}
