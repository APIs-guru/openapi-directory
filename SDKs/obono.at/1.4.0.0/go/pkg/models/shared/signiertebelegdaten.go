package shared




type SignierteBelegdatenUnternehmenIDTypEnum string

const (
    SignierteBelegdatenUnternehmenIDTypEnumSteuernummer SignierteBelegdatenUnternehmenIDTypEnum = "steuernummer"
SignierteBelegdatenUnternehmenIDTypEnumUID SignierteBelegdatenUnternehmenIDTypEnum = "uid"
SignierteBelegdatenUnternehmenIDTypEnumGln SignierteBelegdatenUnternehmenIDTypEnum = "gln"
)


type SignierteBelegdaten struct {
    BelegDatumUhrzeit *string `json:"Beleg-Datum-Uhrzeit,omitempty"`
    Belegnummer *string `json:"Belegnummer,omitempty"`
    BetragBrutto *int64 `json:"Betrag-Brutto,omitempty"`
    BetragNetto *int64 `json:"Betrag-Netto,omitempty"`
    BetragSatzBesondersBrutto *int64 `json:"Betrag-Satz-Besonders-Brutto,omitempty"`
    BetragSatzBesondersNetto *int64 `json:"Betrag-Satz-Besonders-Netto,omitempty"`
    BetragSatzErmaessigt1Brutto *int64 `json:"Betrag-Satz-Ermaessigt-1-Brutto,omitempty"`
    BetragSatzErmaessigt1Netto *int64 `json:"Betrag-Satz-Ermaessigt-1-Netto,omitempty"`
    BetragSatzErmaessigt2Brutto *int64 `json:"Betrag-Satz-Ermaessigt-2-Brutto,omitempty"`
    BetragSatzErmaessigt2Netto *int64 `json:"Betrag-Satz-Ermaessigt-2-Netto,omitempty"`
    BetragSatzNormalBrutto *int64 `json:"Betrag-Satz-Normal-Brutto,omitempty"`
    BetragSatzNormalNetto *int64 `json:"Betrag-Satz-Normal-Netto,omitempty"`
    BetragSatzNullBrutto *int64 `json:"Betrag-Satz-Null-Brutto,omitempty"`
    BetragSatzNullNetto *int64 `json:"Betrag-Satz-Null-Netto,omitempty"`
    ExternerBelegBelegkreis *string `json:"Externer-Beleg-Belegkreis,omitempty"`
    ExternerBelegBezeichnung *string `json:"Externer-Beleg-Bezeichnung,omitempty"`
    ExternerBelegReferenz *string `json:"Externer-Beleg-Referenz,omitempty"`
    KassenID *string `json:"Kassen-ID,omitempty"`
    Kunde *string `json:"Kunde,omitempty"`
    Notizen []string `json:"Notizen,omitempty"`
    Posten []Posten `json:"Posten,omitempty"`
    Rabatte []Rabatt `json:"Rabatte,omitempty"`
    Storno *bool `json:"Storno,omitempty"`
    StornoBelegUUID *string `json:"Storno-Beleg-UUID,omitempty"`
    StornoText *string `json:"Storno-Text,omitempty"`
    Training *bool `json:"Training,omitempty"`
    UnternehmenAdresse1 *string `json:"Unternehmen-Adresse1,omitempty"`
    UnternehmenAdresse2 *string `json:"Unternehmen-Adresse2,omitempty"`
    UnternehmenFusszeile *string `json:"Unternehmen-Fusszeile,omitempty"`
    UnternehmenID *string `json:"Unternehmen-ID,omitempty"`
    UnternehmenIDTyp *SignierteBelegdatenUnternehmenIDTypEnum `json:"Unternehmen-ID-Typ,omitempty"`
    UnternehmenKopfzeile *string `json:"Unternehmen-Kopfzeile,omitempty"`
    UnternehmenName *string `json:"Unternehmen-Name,omitempty"`
    UnternehmenOrt *string `json:"Unternehmen-Ort,omitempty"`
    UnternehmenPlz *string `json:"Unternehmen-PLZ,omitempty"`
    Zahlungen []Zahlung `json:"Zahlungen,omitempty"`
    ZertifikatSeriennummer *string `json:"Zertifikat-Seriennummer,omitempty"`
    
}

