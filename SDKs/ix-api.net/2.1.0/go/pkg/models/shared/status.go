package shared

import (
	"time"
)

type Status struct {
	Attrs     map[string]interface{} `json:"attrs"`
	Message   string                 `json:"message"`
	Severity  int32                  `json:"severity"`
	Tag       string                 `json:"tag"`
	Timestamp time.Time              `json:"timestamp"`
}
