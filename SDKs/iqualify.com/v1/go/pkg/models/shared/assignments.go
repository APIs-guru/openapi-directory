package shared

import (
	"time"
)

type Assignments struct {
	Files       []Document    `json:"files,omitempty"`
	Marks       []interface{} `json:"marks,omitempty"`
	Status      *string       `json:"status,omitempty"`
	SubmittedAt *time.Time    `json:"submittedAt,omitempty"`
	UpdatedAt   *time.Time    `json:"updatedAt,omitempty"`
}
