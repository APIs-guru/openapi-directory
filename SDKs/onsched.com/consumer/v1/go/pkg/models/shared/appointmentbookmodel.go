package shared

type AppointmentBookModel struct {
	CustomerMessage *string `json:"customerMessage"`
	Email           *string `json:"email"`
	GroupSize       *int32  `json:"groupSize"`
	Name            *string `json:"name"`
	Notes           *string `json:"notes"`
	Phone           *string `json:"phone"`
	PhoneExt        *string `json:"phoneExt"`
	PhoneType       *string `json:"phoneType"`
}
