package shared

import (
	"time"
)

type ShareProfileRequestPatientUserDemographics struct {
	Address        *PatientAddress   `json:"address,omitempty"`
	DayOfBirth     *int64            `json:"dayOfBirth,omitempty"`
	Gender         PatientGenderEnum `json:"gender"`
	HealthID       string            `json:"healthId"`
	HealthIDNumber string            `json:"healthIdNumber"`
	Identifiers    []Identifier      `json:"identifiers,omitempty"`
	MonthOfBirth   *int64            `json:"monthOfBirth,omitempty"`
	Name           string            `json:"name"`
	YearOfBirth    int64             `json:"yearOfBirth"`
}

type ShareProfileRequestPatient struct {
	HipCode          *string                                    `json:"hipCode,omitempty"`
	UserDemographics ShareProfileRequestPatientUserDemographics `json:"userDemographics"`
}

type ShareProfileRequest struct {
	Patient   ShareProfileRequestPatient `json:"patient"`
	RequestID string                     `json:"requestId"`
	Timestamp time.Time                  `json:"timestamp"`
}
