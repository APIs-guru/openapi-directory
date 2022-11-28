package shared

// BatchFirstLastNameUsRaceEthnicityOut
// Represents the output of inferring the LIKELY US 'race/ethnicity' from a personal name, given US country of residence and (optionally) a ZIP5 code.
type BatchFirstLastNameUsRaceEthnicityOut struct {
	PersonalNames []FirstLastNameUsRaceEthnicityOut `json:"personalNames,omitempty"`
}
