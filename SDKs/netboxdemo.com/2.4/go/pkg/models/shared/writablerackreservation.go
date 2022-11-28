package shared

type WritableRackReservationInput struct {
	Description string  `json:"description"`
	Rack        int64   `json:"rack"`
	Tenant      *int64  `json:"tenant,omitempty"`
	Units       []int64 `json:"units"`
	User        int64   `json:"user"`
}
