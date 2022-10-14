package shared

type AppointmentCustomerViewModel struct {
	AppointmentID *string `json:"appointmentId,omitempty"`
	CustomerID    *string `json:"customerId,omitempty"`
}
