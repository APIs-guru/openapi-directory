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

type FirstLastNameUsRaceEthnicityOut struct {
	FirstName                *string                                              `json:"firstName"`
	ID                       *string                                              `json:"id"`
	LastName                 *string                                              `json:"lastName"`
	ProbabilityAltCalibrated *float64                                             `json:"probabilityAltCalibrated"`
	ProbabilityCalibrated    *float64                                             `json:"probabilityCalibrated"`
	RaceEthnicitiesTop       []string                                             `json:"raceEthnicitiesTop"`
	RaceEthnicity            *FirstLastNameUsRaceEthnicityOutRaceEthnicityEnum    `json:"raceEthnicity"`
	RaceEthnicityAlt         *FirstLastNameUsRaceEthnicityOutRaceEthnicityAltEnum `json:"raceEthnicityAlt"`
	Score                    *float64                                             `json:"score"`
	Script                   *string                                              `json:"script"`
}
