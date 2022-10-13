package shared

type Registrierkasse struct {
	Benutzerschluessel             *string `json:"Benutzerschluessel"`
	KassenID                       *string `json:"Kassen-ID"`
	SignaturerstellungseinheitUUID *string `json:"Signaturerstellungseinheit-UUID"`
	Href                           *string `json:"_href"`
	UUID                           *string `json:"_uuid"`
}
