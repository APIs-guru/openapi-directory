package shared

// Cdma
// CDMA measurement
type Cdma struct {
	BaseLat    *float64     `json:"baseLat,omitempty"`
	BaseLng    *float64     `json:"baseLng,omitempty"`
	Bsid       int64        `json:"bsid"`
	LocalID    *CdmaLocalID `json:"localId,omitempty"`
	Nid        int64        `json:"nid"`
	Nmr        []CdmaNmr    `json:"nmr,omitempty"`
	PilotPower *int64       `json:"pilotPower,omitempty"`
	Rz         *int64       `json:"rz,omitempty"`
	Sid        int64        `json:"sid"`
}
