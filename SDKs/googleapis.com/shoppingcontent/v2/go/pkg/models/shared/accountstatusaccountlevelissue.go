package shared

type AccountStatusAccountLevelIssue struct {
	Country       *string `json:"country,omitempty"`
	Destination   *string `json:"destination,omitempty"`
	Detail        *string `json:"detail,omitempty"`
	Documentation *string `json:"documentation,omitempty"`
	ID            *string `json:"id,omitempty"`
	Severity      *string `json:"severity,omitempty"`
	Title         *string `json:"title,omitempty"`
}
