package shared

type FirstLastNameUsRaceEthnicityOutRaceEthnicityEnum string

const (
	FirstLastNameUsRaceEthnicityOutRaceEthnicityEnumWNl  FirstLastNameUsRaceEthnicityOutRaceEthnicityEnum = "W_NL"
	FirstLastNameUsRaceEthnicityOutRaceEthnicityEnumHl   FirstLastNameUsRaceEthnicityOutRaceEthnicityEnum = "HL"
	FirstLastNameUsRaceEthnicityOutRaceEthnicityEnumA    FirstLastNameUsRaceEthnicityOutRaceEthnicityEnum = "A"
	FirstLastNameUsRaceEthnicityOutRaceEthnicityEnumBNl  FirstLastNameUsRaceEthnicityOutRaceEthnicityEnum = "B_NL"
	FirstLastNameUsRaceEthnicityOutRaceEthnicityEnumAiAn FirstLastNameUsRaceEthnicityOutRaceEthnicityEnum = "AI_AN"
	FirstLastNameUsRaceEthnicityOutRaceEthnicityEnumPi   FirstLastNameUsRaceEthnicityOutRaceEthnicityEnum = "PI"
)

type FirstLastNameUsRaceEthnicityOutRaceEthnicityAltEnum string

const (
	FirstLastNameUsRaceEthnicityOutRaceEthnicityAltEnumWNl  FirstLastNameUsRaceEthnicityOutRaceEthnicityAltEnum = "W_NL"
	FirstLastNameUsRaceEthnicityOutRaceEthnicityAltEnumHl   FirstLastNameUsRaceEthnicityOutRaceEthnicityAltEnum = "HL"
	FirstLastNameUsRaceEthnicityOutRaceEthnicityAltEnumA    FirstLastNameUsRaceEthnicityOutRaceEthnicityAltEnum = "A"
	FirstLastNameUsRaceEthnicityOutRaceEthnicityAltEnumBNl  FirstLastNameUsRaceEthnicityOutRaceEthnicityAltEnum = "B_NL"
	FirstLastNameUsRaceEthnicityOutRaceEthnicityAltEnumAiAn FirstLastNameUsRaceEthnicityOutRaceEthnicityAltEnum = "AI_AN"
	FirstLastNameUsRaceEthnicityOutRaceEthnicityAltEnumPi   FirstLastNameUsRaceEthnicityOutRaceEthnicityAltEnum = "PI"
)

// FirstLastNameUsRaceEthnicityOut
// Represents the output of inferring the LIKELY US 'race/ethnicity' from a personal name, given US country of residence and (optionally) a ZIP5 code.
type FirstLastNameUsRaceEthnicityOut struct {
	FirstName                *string                                              `json:"firstName,omitempty"`
	ID                       *string                                              `json:"id,omitempty"`
	LastName                 *string                                              `json:"lastName,omitempty"`
	ProbabilityAltCalibrated *float64                                             `json:"probabilityAltCalibrated,omitempty"`
	ProbabilityCalibrated    *float64                                             `json:"probabilityCalibrated,omitempty"`
	RaceEthnicitiesTop       []string                                             `json:"raceEthnicitiesTop,omitempty"`
	RaceEthnicity            *FirstLastNameUsRaceEthnicityOutRaceEthnicityEnum    `json:"raceEthnicity,omitempty"`
	RaceEthnicityAlt         *FirstLastNameUsRaceEthnicityOutRaceEthnicityAltEnum `json:"raceEthnicityAlt,omitempty"`
	Score                    *float64                                             `json:"score,omitempty"`
	Script                   *string                                              `json:"script,omitempty"`
}
