package shared

type ShortlinkResponseEtatEtat struct {
	Code      *float64 `json:"code"`
	Message   *string  `json:"message"`
	Shortlink *string  `json:"shortlink"`
}

type ShortlinkResponseEtat struct {
	Etat []ShortlinkResponseEtatEtat `json:"etat"`
}

type ShortlinkResponse struct {
	Etat *ShortlinkResponseEtat `json:"etat"`
}
