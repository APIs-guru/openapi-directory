package shared

type AccountStatusAccountLevelIssue struct {
	Country       *string `json:"country"`
	Destination   *string `json:"destination"`
	Detail        *string `json:"detail"`
	Documentation *string `json:"documentation"`
	ID            *string `json:"id"`
	Severity      *string `json:"severity"`
	Title         *string `json:"title"`
}
