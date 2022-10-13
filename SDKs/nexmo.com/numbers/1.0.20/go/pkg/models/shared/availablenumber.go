package shared

type Availablenumber struct {
	Cost     *string  `json:"cost"`
	Country  *string  `json:"country"`
	Features []string `json:"features"`
	Msisdn   *string  `json:"msisdn"`
	Type     *string  `json:"type"`
}
