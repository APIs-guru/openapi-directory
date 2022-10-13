package shared

import (
	"time"
)

type Assignments struct {
	Files       []Document    `json:"files"`
	Marks       []interface{} `json:"marks"`
	Status      *string       `json:"status"`
	SubmittedAt *time.Time    `json:"submittedAt"`
	UpdatedAt   *time.Time    `json:"updatedAt"`
}
