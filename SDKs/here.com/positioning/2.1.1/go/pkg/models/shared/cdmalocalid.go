package shared

// CdmaLocalID
// Local identification parameters of CDMA serving cell
type CdmaLocalID struct {
	Channel  int64 `json:"channel"`
	PnOffset int64 `json:"pnOffset"`
}
