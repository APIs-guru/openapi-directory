package shared

type BelegBelegTypenEnum string

const (
	BelegBelegTypenEnumBelegkreisinitialisierung BelegBelegTypenEnum = "Belegkreisinitialisierung"
	BelegBelegTypenEnumKassenbericht             BelegBelegTypenEnum = "Kassenbericht"
	BelegBelegTypenEnumMonatsabschluss           BelegBelegTypenEnum = "Monatsabschluss"
	BelegBelegTypenEnumStartbeleg                BelegBelegTypenEnum = "Startbeleg"
	BelegBelegTypenEnumStorno                    BelegBelegTypenEnum = "Storno"
	BelegBelegTypenEnumSystembeleg               BelegBelegTypenEnum = "Systembeleg"
	BelegBelegTypenEnumTraining                  BelegBelegTypenEnum = "Training"
)

type Beleg struct {
	BelegCodes                     []string              `json:"Beleg-Codes"`
	BelegTypen                     []BelegBelegTypenEnum `json:"Beleg-Typen"`
	Belegdaten                     *SignierteBelegdaten  `json:"Belegdaten"`
	Jws                            *string               `json:"JWS"`
	Qr                             *string               `json:"QR"`
	QrLink                         *string               `json:"QR-Link"`
	RegistrierkasseUUID            *string               `json:"Registrierkasse-UUID"`
	SignaturerstellungseinheitUUID *string               `json:"Signaturerstellungseinheit-UUID"`
	Href                           *string               `json:"_href"`
	UUID                           *string               `json:"_uuid"`
}
