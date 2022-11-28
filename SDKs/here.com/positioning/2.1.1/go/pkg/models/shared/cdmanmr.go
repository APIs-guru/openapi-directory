package shared

// CdmaNmr
// CDMA Network measurement
type CdmaNmr struct {
	Bsid       *int64 `json:"bsid,omitempty"`
	Channel    int64  `json:"channel"`
	PilotPower *int64 `json:"pilotPower,omitempty"`
	PnOffset   int64  `json:"pnOffset"`
}
