package shared

type AppointmentReserveModel struct {
	CustomerMessage *string `json:"customerMessage"`
	Email           *string `json:"email"`
	Name            *string `json:"name"`
	Notes           *string `json:"notes"`
	Phone           *string `json:"phone"`
	PhoneExt        *string `json:"phoneExt"`
	PhoneType       *string `json:"phoneType"`
}
