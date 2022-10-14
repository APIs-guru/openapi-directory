package shared

type ShortlinkResponseEtatEtat struct {
	Code      *float64 `json:"code,omitempty"`
	Message   *string  `json:"message,omitempty"`
	Shortlink *string  `json:"shortlink,omitempty"`
}

type ShortlinkResponseEtat struct {
	Etat []ShortlinkResponseEtatEtat `json:"etat,omitempty"`
}

type ShortlinkResponse struct {
	Etat *ShortlinkResponseEtat `json:"etat,omitempty"`
}
