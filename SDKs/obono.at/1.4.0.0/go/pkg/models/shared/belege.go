package shared



type BelegeBelegeGruppe struct {
    BelegeKompakt []string `json:"Belege-kompakt"`
    Signaturzertifikat string `json:"Signaturzertifikat"`
    Zertifizierungsstellen []string `json:"Zertifizierungsstellen"`
    
}

type Belege struct {
    Belege []Beleg `json:"Belege,omitempty"`
    BelegeGruppe []BelegeBelegeGruppe `json:"Belege-Gruppe,omitempty"`
    
}

