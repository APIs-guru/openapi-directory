package shared

type Registrierkasse struct {
	Benutzerschluessel             *string `json:"Benutzerschluessel,omitempty"`
	KassenID                       *string `json:"Kassen-ID,omitempty"`
	SignaturerstellungseinheitUUID *string `json:"Signaturerstellungseinheit-UUID,omitempty"`
	Href                           *string `json:"_href,omitempty"`
	UUID                           *string `json:"_uuid,omitempty"`
}
