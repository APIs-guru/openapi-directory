package shared

import (
	"time"
)

type ShareProfileRequestPatientUserDemographics struct {
	Address        *PatientAddress   `json:"address"`
	DayOfBirth     *int64            `json:"dayOfBirth"`
	Gender         PatientGenderEnum `json:"gender"`
	HealthID       string            `json:"healthId"`
	HealthIDNumber string            `json:"healthIdNumber"`
	Identifiers    []Identifier      `json:"identifiers"`
	MonthOfBirth   *int64            `json:"monthOfBirth"`
	Name           string            `json:"name"`
	YearOfBirth    int64             `json:"yearOfBirth"`
}

type ShareProfileRequestPatient struct {
	HipCode          *string                                    `json:"hipCode"`
	UserDemographics ShareProfileRequestPatientUserDemographics `json:"userDemographics"`
}

type ShareProfileRequest struct {
	Patient   ShareProfileRequestPatient `json:"patient"`
	RequestID string                     `json:"requestId"`
	Timestamp time.Time                  `json:"timestamp"`
}
