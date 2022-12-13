package shared

import (
	"time"
)

// EmployeeCreateRequestEmploymentEmploymentDates
// Employee employment dates
type EmployeeCreateRequestEmploymentEmploymentDates struct {
	FullTimeStart *string    `json:"full_time_start,omitempty"`
	HireDate      *time.Time `json:"hire_date,omitempty"`
	Rehire        *string    `json:"rehire,omitempty"`
	Retirement    *string    `json:"retirement,omitempty"`
	Terminated    *string    `json:"terminated,omitempty"`
}

type EmployeeCreateRequestEmploymentEmploymentStatusEnum string

const (
	EmployeeCreateRequestEmploymentEmploymentStatusEnumContract   EmployeeCreateRequestEmploymentEmploymentStatusEnum = "contract"
	EmployeeCreateRequestEmploymentEmploymentStatusEnumDisabled   EmployeeCreateRequestEmploymentEmploymentStatusEnum = "disabled"
	EmployeeCreateRequestEmploymentEmploymentStatusEnumFullTime   EmployeeCreateRequestEmploymentEmploymentStatusEnum = "full-time"
	EmployeeCreateRequestEmploymentEmploymentStatusEnumPartTime   EmployeeCreateRequestEmploymentEmploymentStatusEnum = "part-time"
	EmployeeCreateRequestEmploymentEmploymentStatusEnumRetired    EmployeeCreateRequestEmploymentEmploymentStatusEnum = "retired"
	EmployeeCreateRequestEmploymentEmploymentStatusEnumTerminated EmployeeCreateRequestEmploymentEmploymentStatusEnum = "terminated"
)

type EmployeeCreateRequestEmploymentSalaryTypeEnum string

const (
	EmployeeCreateRequestEmploymentSalaryTypeEnumHourly EmployeeCreateRequestEmploymentSalaryTypeEnum = "hourly"
	EmployeeCreateRequestEmploymentSalaryTypeEnumSalary EmployeeCreateRequestEmploymentSalaryTypeEnum = "salary"
)

type EmployeeCreateRequestEmploymentSalaryUnitEnum string

const (
	EmployeeCreateRequestEmploymentSalaryUnitEnumAnnual      EmployeeCreateRequestEmploymentSalaryUnitEnum = "annual"
	EmployeeCreateRequestEmploymentSalaryUnitEnumHour        EmployeeCreateRequestEmploymentSalaryUnitEnum = "hour"
	EmployeeCreateRequestEmploymentSalaryUnitEnumMonth       EmployeeCreateRequestEmploymentSalaryUnitEnum = "month"
	EmployeeCreateRequestEmploymentSalaryUnitEnumSemiMonthly EmployeeCreateRequestEmploymentSalaryUnitEnum = "semi-monthly"
	EmployeeCreateRequestEmploymentSalaryUnitEnumWeek        EmployeeCreateRequestEmploymentSalaryUnitEnum = "week"
)

// EmployeeCreateRequestEmploymentSalary
// Employee salary information
type EmployeeCreateRequestEmploymentSalary struct {
	Amount *float64                                       `json:"amount,omitempty"`
	Type   *EmployeeCreateRequestEmploymentSalaryTypeEnum `json:"type,omitempty"`
	Unit   *EmployeeCreateRequestEmploymentSalaryUnitEnum `json:"unit,omitempty"`
}

// EmployeeCreateRequestEmployment
// Employment information for the employee
type EmployeeCreateRequestEmployment struct {
	EmploymentDates  *EmployeeCreateRequestEmploymentEmploymentDates      `json:"employment_dates,omitempty"`
	EmploymentStatus *EmployeeCreateRequestEmploymentEmploymentStatusEnum `json:"employment_status,omitempty"`
	HoursWorked      *int32                                               `json:"hours_worked,omitempty"`
	Occupation       *string                                              `json:"occupation,omitempty"`
	Salary           *EmployeeCreateRequestEmploymentSalary               `json:"salary,omitempty"`
}

type EmployeeCreateRequestPersonContactEmailAddressTypeEnum string

const (
	EmployeeCreateRequestPersonContactEmailAddressTypeEnumHome EmployeeCreateRequestPersonContactEmailAddressTypeEnum = "home"
	EmployeeCreateRequestPersonContactEmailAddressTypeEnumWork EmployeeCreateRequestPersonContactEmailAddressTypeEnum = "work"
)

type EmployeeCreateRequestPersonContactPreferredMethodEnum string

const (
	EmployeeCreateRequestPersonContactPreferredMethodEnumEmail     EmployeeCreateRequestPersonContactPreferredMethodEnum = "email"
	EmployeeCreateRequestPersonContactPreferredMethodEnumHomePhone EmployeeCreateRequestPersonContactPreferredMethodEnum = "home-phone"
	EmployeeCreateRequestPersonContactPreferredMethodEnumMail      EmployeeCreateRequestPersonContactPreferredMethodEnum = "mail"
	EmployeeCreateRequestPersonContactPreferredMethodEnumOther     EmployeeCreateRequestPersonContactPreferredMethodEnum = "other"
	EmployeeCreateRequestPersonContactPreferredMethodEnumWorkPhone EmployeeCreateRequestPersonContactPreferredMethodEnum = "work-phone"
)

// EmployeeCreateRequestPersonContact
// Contact information for the person
type EmployeeCreateRequestPersonContact struct {
	EmailAddress      *string                                                 `json:"email_address,omitempty"`
	EmailAddressType  *EmployeeCreateRequestPersonContactEmailAddressTypeEnum `json:"email_address_type,omitempty"`
	HomePhone         *string                                                 `json:"home_phone,omitempty"`
	PreferredLanguage *string                                                 `json:"preferred_language,omitempty"`
	PreferredMethod   *EmployeeCreateRequestPersonContactPreferredMethodEnum  `json:"preferred_method,omitempty"`
	SpeaksEnglish     *bool                                                   `json:"speaks_english,omitempty"`
	WorkPhone         *string                                                 `json:"work_phone,omitempty"`
}

type EmployeeCreateRequestPersonDetailsAmericanIndianStateEnum string

const (
	EmployeeCreateRequestPersonDetailsAmericanIndianStateEnumAk EmployeeCreateRequestPersonDetailsAmericanIndianStateEnum = "AK"
	EmployeeCreateRequestPersonDetailsAmericanIndianStateEnumAl EmployeeCreateRequestPersonDetailsAmericanIndianStateEnum = "AL"
	EmployeeCreateRequestPersonDetailsAmericanIndianStateEnumAr EmployeeCreateRequestPersonDetailsAmericanIndianStateEnum = "AR"
	EmployeeCreateRequestPersonDetailsAmericanIndianStateEnumAs EmployeeCreateRequestPersonDetailsAmericanIndianStateEnum = "AS"
	EmployeeCreateRequestPersonDetailsAmericanIndianStateEnumAz EmployeeCreateRequestPersonDetailsAmericanIndianStateEnum = "AZ"
	EmployeeCreateRequestPersonDetailsAmericanIndianStateEnumCa EmployeeCreateRequestPersonDetailsAmericanIndianStateEnum = "CA"
	EmployeeCreateRequestPersonDetailsAmericanIndianStateEnumCo EmployeeCreateRequestPersonDetailsAmericanIndianStateEnum = "CO"
	EmployeeCreateRequestPersonDetailsAmericanIndianStateEnumCt EmployeeCreateRequestPersonDetailsAmericanIndianStateEnum = "CT"
	EmployeeCreateRequestPersonDetailsAmericanIndianStateEnumDc EmployeeCreateRequestPersonDetailsAmericanIndianStateEnum = "DC"
	EmployeeCreateRequestPersonDetailsAmericanIndianStateEnumDe EmployeeCreateRequestPersonDetailsAmericanIndianStateEnum = "DE"
	EmployeeCreateRequestPersonDetailsAmericanIndianStateEnumFl EmployeeCreateRequestPersonDetailsAmericanIndianStateEnum = "FL"
	EmployeeCreateRequestPersonDetailsAmericanIndianStateEnumFm EmployeeCreateRequestPersonDetailsAmericanIndianStateEnum = "FM"
	EmployeeCreateRequestPersonDetailsAmericanIndianStateEnumGa EmployeeCreateRequestPersonDetailsAmericanIndianStateEnum = "GA"
	EmployeeCreateRequestPersonDetailsAmericanIndianStateEnumGu EmployeeCreateRequestPersonDetailsAmericanIndianStateEnum = "GU"
	EmployeeCreateRequestPersonDetailsAmericanIndianStateEnumHi EmployeeCreateRequestPersonDetailsAmericanIndianStateEnum = "HI"
	EmployeeCreateRequestPersonDetailsAmericanIndianStateEnumIa EmployeeCreateRequestPersonDetailsAmericanIndianStateEnum = "IA"
	EmployeeCreateRequestPersonDetailsAmericanIndianStateEnumID EmployeeCreateRequestPersonDetailsAmericanIndianStateEnum = "ID"
	EmployeeCreateRequestPersonDetailsAmericanIndianStateEnumIl EmployeeCreateRequestPersonDetailsAmericanIndianStateEnum = "IL"
	EmployeeCreateRequestPersonDetailsAmericanIndianStateEnumIn EmployeeCreateRequestPersonDetailsAmericanIndianStateEnum = "IN"
	EmployeeCreateRequestPersonDetailsAmericanIndianStateEnumKs EmployeeCreateRequestPersonDetailsAmericanIndianStateEnum = "KS"
	EmployeeCreateRequestPersonDetailsAmericanIndianStateEnumKy EmployeeCreateRequestPersonDetailsAmericanIndianStateEnum = "KY"
	EmployeeCreateRequestPersonDetailsAmericanIndianStateEnumLa EmployeeCreateRequestPersonDetailsAmericanIndianStateEnum = "LA"
	EmployeeCreateRequestPersonDetailsAmericanIndianStateEnumMa EmployeeCreateRequestPersonDetailsAmericanIndianStateEnum = "MA"
	EmployeeCreateRequestPersonDetailsAmericanIndianStateEnumMd EmployeeCreateRequestPersonDetailsAmericanIndianStateEnum = "MD"
	EmployeeCreateRequestPersonDetailsAmericanIndianStateEnumMe EmployeeCreateRequestPersonDetailsAmericanIndianStateEnum = "ME"
	EmployeeCreateRequestPersonDetailsAmericanIndianStateEnumMh EmployeeCreateRequestPersonDetailsAmericanIndianStateEnum = "MH"
	EmployeeCreateRequestPersonDetailsAmericanIndianStateEnumMi EmployeeCreateRequestPersonDetailsAmericanIndianStateEnum = "MI"
	EmployeeCreateRequestPersonDetailsAmericanIndianStateEnumMn EmployeeCreateRequestPersonDetailsAmericanIndianStateEnum = "MN"
	EmployeeCreateRequestPersonDetailsAmericanIndianStateEnumMo EmployeeCreateRequestPersonDetailsAmericanIndianStateEnum = "MO"
	EmployeeCreateRequestPersonDetailsAmericanIndianStateEnumMp EmployeeCreateRequestPersonDetailsAmericanIndianStateEnum = "MP"
	EmployeeCreateRequestPersonDetailsAmericanIndianStateEnumMs EmployeeCreateRequestPersonDetailsAmericanIndianStateEnum = "MS"
	EmployeeCreateRequestPersonDetailsAmericanIndianStateEnumMt EmployeeCreateRequestPersonDetailsAmericanIndianStateEnum = "MT"
	EmployeeCreateRequestPersonDetailsAmericanIndianStateEnumNc EmployeeCreateRequestPersonDetailsAmericanIndianStateEnum = "NC"
	EmployeeCreateRequestPersonDetailsAmericanIndianStateEnumNd EmployeeCreateRequestPersonDetailsAmericanIndianStateEnum = "ND"
	EmployeeCreateRequestPersonDetailsAmericanIndianStateEnumNe EmployeeCreateRequestPersonDetailsAmericanIndianStateEnum = "NE"
	EmployeeCreateRequestPersonDetailsAmericanIndianStateEnumNh EmployeeCreateRequestPersonDetailsAmericanIndianStateEnum = "NH"
	EmployeeCreateRequestPersonDetailsAmericanIndianStateEnumNj EmployeeCreateRequestPersonDetailsAmericanIndianStateEnum = "NJ"
	EmployeeCreateRequestPersonDetailsAmericanIndianStateEnumNm EmployeeCreateRequestPersonDetailsAmericanIndianStateEnum = "NM"
	EmployeeCreateRequestPersonDetailsAmericanIndianStateEnumNv EmployeeCreateRequestPersonDetailsAmericanIndianStateEnum = "NV"
	EmployeeCreateRequestPersonDetailsAmericanIndianStateEnumNy EmployeeCreateRequestPersonDetailsAmericanIndianStateEnum = "NY"
	EmployeeCreateRequestPersonDetailsAmericanIndianStateEnumOh EmployeeCreateRequestPersonDetailsAmericanIndianStateEnum = "OH"
	EmployeeCreateRequestPersonDetailsAmericanIndianStateEnumOk EmployeeCreateRequestPersonDetailsAmericanIndianStateEnum = "OK"
	EmployeeCreateRequestPersonDetailsAmericanIndianStateEnumOr EmployeeCreateRequestPersonDetailsAmericanIndianStateEnum = "OR"
	EmployeeCreateRequestPersonDetailsAmericanIndianStateEnumPa EmployeeCreateRequestPersonDetailsAmericanIndianStateEnum = "PA"
	EmployeeCreateRequestPersonDetailsAmericanIndianStateEnumPr EmployeeCreateRequestPersonDetailsAmericanIndianStateEnum = "PR"
	EmployeeCreateRequestPersonDetailsAmericanIndianStateEnumPw EmployeeCreateRequestPersonDetailsAmericanIndianStateEnum = "PW"
	EmployeeCreateRequestPersonDetailsAmericanIndianStateEnumRi EmployeeCreateRequestPersonDetailsAmericanIndianStateEnum = "RI"
	EmployeeCreateRequestPersonDetailsAmericanIndianStateEnumSc EmployeeCreateRequestPersonDetailsAmericanIndianStateEnum = "SC"
	EmployeeCreateRequestPersonDetailsAmericanIndianStateEnumSd EmployeeCreateRequestPersonDetailsAmericanIndianStateEnum = "SD"
	EmployeeCreateRequestPersonDetailsAmericanIndianStateEnumTn EmployeeCreateRequestPersonDetailsAmericanIndianStateEnum = "TN"
	EmployeeCreateRequestPersonDetailsAmericanIndianStateEnumTx EmployeeCreateRequestPersonDetailsAmericanIndianStateEnum = "TX"
	EmployeeCreateRequestPersonDetailsAmericanIndianStateEnumUm EmployeeCreateRequestPersonDetailsAmericanIndianStateEnum = "UM"
	EmployeeCreateRequestPersonDetailsAmericanIndianStateEnumUt EmployeeCreateRequestPersonDetailsAmericanIndianStateEnum = "UT"
	EmployeeCreateRequestPersonDetailsAmericanIndianStateEnumVa EmployeeCreateRequestPersonDetailsAmericanIndianStateEnum = "VA"
	EmployeeCreateRequestPersonDetailsAmericanIndianStateEnumVi EmployeeCreateRequestPersonDetailsAmericanIndianStateEnum = "VI"
	EmployeeCreateRequestPersonDetailsAmericanIndianStateEnumVt EmployeeCreateRequestPersonDetailsAmericanIndianStateEnum = "VT"
	EmployeeCreateRequestPersonDetailsAmericanIndianStateEnumWa EmployeeCreateRequestPersonDetailsAmericanIndianStateEnum = "WA"
	EmployeeCreateRequestPersonDetailsAmericanIndianStateEnumWi EmployeeCreateRequestPersonDetailsAmericanIndianStateEnum = "WI"
	EmployeeCreateRequestPersonDetailsAmericanIndianStateEnumWv EmployeeCreateRequestPersonDetailsAmericanIndianStateEnum = "WV"
	EmployeeCreateRequestPersonDetailsAmericanIndianStateEnumWy EmployeeCreateRequestPersonDetailsAmericanIndianStateEnum = "WY"
)

// EmployeeCreateRequestPersonDetailsAmericanIndian
// American Indian status details (if applicable)
type EmployeeCreateRequestPersonDetailsAmericanIndian struct {
	State *EmployeeCreateRequestPersonDetailsAmericanIndianStateEnum `json:"state,omitempty"`
	Tribe *string                                                    `json:"tribe,omitempty"`
}

// EmployeeCreateRequestPersonDetailsDisability
// Disability details (if applicable)
type EmployeeCreateRequestPersonDetailsDisability struct {
	Communication *bool   `json:"communication,omitempty"`
	Disabled      *bool   `json:"disabled,omitempty"`
	Reason        *string `json:"reason,omitempty"`
}

type EmployeeCreateRequestPersonDetailsTobaccoTypesEnum string

const (
	EmployeeCreateRequestPersonDetailsTobaccoTypesEnumChewingTobacco EmployeeCreateRequestPersonDetailsTobaccoTypesEnum = "chewing-tobacco"
	EmployeeCreateRequestPersonDetailsTobaccoTypesEnumCigarettes     EmployeeCreateRequestPersonDetailsTobaccoTypesEnum = "cigarettes"
	EmployeeCreateRequestPersonDetailsTobaccoTypesEnumPipe           EmployeeCreateRequestPersonDetailsTobaccoTypesEnum = "pipe"
)

// EmployeeCreateRequestPersonDetailsTobacco
// Tobacco usage details (if applicable)
type EmployeeCreateRequestPersonDetailsTobacco struct {
	Duration  *string                                              `json:"duration,omitempty"`
	Frequency *string                                              `json:"frequency,omitempty"`
	Types     []EmployeeCreateRequestPersonDetailsTobaccoTypesEnum `json:"types,omitempty"`
	User      *bool                                                `json:"user,omitempty"`
}

// EmployeeCreateRequestPersonDetails
// Additional personal details of the person
type EmployeeCreateRequestPersonDetails struct {
	AmericanIndian *EmployeeCreateRequestPersonDetailsAmericanIndian `json:"american_indian,omitempty"`
	Disability     *EmployeeCreateRequestPersonDetailsDisability     `json:"disability,omitempty"`
	IsMilitary     *bool                                             `json:"is_military,omitempty"`
	IsStudent      *bool                                             `json:"is_student,omitempty"`
	Tobacco        *EmployeeCreateRequestPersonDetailsTobacco        `json:"tobacco,omitempty"`
}

type EmployeeCreateRequestPersonHomeAddressStateEnum string

const (
	EmployeeCreateRequestPersonHomeAddressStateEnumAk EmployeeCreateRequestPersonHomeAddressStateEnum = "AK"
	EmployeeCreateRequestPersonHomeAddressStateEnumAl EmployeeCreateRequestPersonHomeAddressStateEnum = "AL"
	EmployeeCreateRequestPersonHomeAddressStateEnumAr EmployeeCreateRequestPersonHomeAddressStateEnum = "AR"
	EmployeeCreateRequestPersonHomeAddressStateEnumAs EmployeeCreateRequestPersonHomeAddressStateEnum = "AS"
	EmployeeCreateRequestPersonHomeAddressStateEnumAz EmployeeCreateRequestPersonHomeAddressStateEnum = "AZ"
	EmployeeCreateRequestPersonHomeAddressStateEnumCa EmployeeCreateRequestPersonHomeAddressStateEnum = "CA"
	EmployeeCreateRequestPersonHomeAddressStateEnumCo EmployeeCreateRequestPersonHomeAddressStateEnum = "CO"
	EmployeeCreateRequestPersonHomeAddressStateEnumCt EmployeeCreateRequestPersonHomeAddressStateEnum = "CT"
	EmployeeCreateRequestPersonHomeAddressStateEnumDc EmployeeCreateRequestPersonHomeAddressStateEnum = "DC"
	EmployeeCreateRequestPersonHomeAddressStateEnumDe EmployeeCreateRequestPersonHomeAddressStateEnum = "DE"
	EmployeeCreateRequestPersonHomeAddressStateEnumFl EmployeeCreateRequestPersonHomeAddressStateEnum = "FL"
	EmployeeCreateRequestPersonHomeAddressStateEnumFm EmployeeCreateRequestPersonHomeAddressStateEnum = "FM"
	EmployeeCreateRequestPersonHomeAddressStateEnumGa EmployeeCreateRequestPersonHomeAddressStateEnum = "GA"
	EmployeeCreateRequestPersonHomeAddressStateEnumGu EmployeeCreateRequestPersonHomeAddressStateEnum = "GU"
	EmployeeCreateRequestPersonHomeAddressStateEnumHi EmployeeCreateRequestPersonHomeAddressStateEnum = "HI"
	EmployeeCreateRequestPersonHomeAddressStateEnumIa EmployeeCreateRequestPersonHomeAddressStateEnum = "IA"
	EmployeeCreateRequestPersonHomeAddressStateEnumID EmployeeCreateRequestPersonHomeAddressStateEnum = "ID"
	EmployeeCreateRequestPersonHomeAddressStateEnumIl EmployeeCreateRequestPersonHomeAddressStateEnum = "IL"
	EmployeeCreateRequestPersonHomeAddressStateEnumIn EmployeeCreateRequestPersonHomeAddressStateEnum = "IN"
	EmployeeCreateRequestPersonHomeAddressStateEnumKs EmployeeCreateRequestPersonHomeAddressStateEnum = "KS"
	EmployeeCreateRequestPersonHomeAddressStateEnumKy EmployeeCreateRequestPersonHomeAddressStateEnum = "KY"
	EmployeeCreateRequestPersonHomeAddressStateEnumLa EmployeeCreateRequestPersonHomeAddressStateEnum = "LA"
	EmployeeCreateRequestPersonHomeAddressStateEnumMa EmployeeCreateRequestPersonHomeAddressStateEnum = "MA"
	EmployeeCreateRequestPersonHomeAddressStateEnumMd EmployeeCreateRequestPersonHomeAddressStateEnum = "MD"
	EmployeeCreateRequestPersonHomeAddressStateEnumMe EmployeeCreateRequestPersonHomeAddressStateEnum = "ME"
	EmployeeCreateRequestPersonHomeAddressStateEnumMh EmployeeCreateRequestPersonHomeAddressStateEnum = "MH"
	EmployeeCreateRequestPersonHomeAddressStateEnumMi EmployeeCreateRequestPersonHomeAddressStateEnum = "MI"
	EmployeeCreateRequestPersonHomeAddressStateEnumMn EmployeeCreateRequestPersonHomeAddressStateEnum = "MN"
	EmployeeCreateRequestPersonHomeAddressStateEnumMo EmployeeCreateRequestPersonHomeAddressStateEnum = "MO"
	EmployeeCreateRequestPersonHomeAddressStateEnumMp EmployeeCreateRequestPersonHomeAddressStateEnum = "MP"
	EmployeeCreateRequestPersonHomeAddressStateEnumMs EmployeeCreateRequestPersonHomeAddressStateEnum = "MS"
	EmployeeCreateRequestPersonHomeAddressStateEnumMt EmployeeCreateRequestPersonHomeAddressStateEnum = "MT"
	EmployeeCreateRequestPersonHomeAddressStateEnumNc EmployeeCreateRequestPersonHomeAddressStateEnum = "NC"
	EmployeeCreateRequestPersonHomeAddressStateEnumNd EmployeeCreateRequestPersonHomeAddressStateEnum = "ND"
	EmployeeCreateRequestPersonHomeAddressStateEnumNe EmployeeCreateRequestPersonHomeAddressStateEnum = "NE"
	EmployeeCreateRequestPersonHomeAddressStateEnumNh EmployeeCreateRequestPersonHomeAddressStateEnum = "NH"
	EmployeeCreateRequestPersonHomeAddressStateEnumNj EmployeeCreateRequestPersonHomeAddressStateEnum = "NJ"
	EmployeeCreateRequestPersonHomeAddressStateEnumNm EmployeeCreateRequestPersonHomeAddressStateEnum = "NM"
	EmployeeCreateRequestPersonHomeAddressStateEnumNv EmployeeCreateRequestPersonHomeAddressStateEnum = "NV"
	EmployeeCreateRequestPersonHomeAddressStateEnumNy EmployeeCreateRequestPersonHomeAddressStateEnum = "NY"
	EmployeeCreateRequestPersonHomeAddressStateEnumOh EmployeeCreateRequestPersonHomeAddressStateEnum = "OH"
	EmployeeCreateRequestPersonHomeAddressStateEnumOk EmployeeCreateRequestPersonHomeAddressStateEnum = "OK"
	EmployeeCreateRequestPersonHomeAddressStateEnumOr EmployeeCreateRequestPersonHomeAddressStateEnum = "OR"
	EmployeeCreateRequestPersonHomeAddressStateEnumPa EmployeeCreateRequestPersonHomeAddressStateEnum = "PA"
	EmployeeCreateRequestPersonHomeAddressStateEnumPr EmployeeCreateRequestPersonHomeAddressStateEnum = "PR"
	EmployeeCreateRequestPersonHomeAddressStateEnumPw EmployeeCreateRequestPersonHomeAddressStateEnum = "PW"
	EmployeeCreateRequestPersonHomeAddressStateEnumRi EmployeeCreateRequestPersonHomeAddressStateEnum = "RI"
	EmployeeCreateRequestPersonHomeAddressStateEnumSc EmployeeCreateRequestPersonHomeAddressStateEnum = "SC"
	EmployeeCreateRequestPersonHomeAddressStateEnumSd EmployeeCreateRequestPersonHomeAddressStateEnum = "SD"
	EmployeeCreateRequestPersonHomeAddressStateEnumTn EmployeeCreateRequestPersonHomeAddressStateEnum = "TN"
	EmployeeCreateRequestPersonHomeAddressStateEnumTx EmployeeCreateRequestPersonHomeAddressStateEnum = "TX"
	EmployeeCreateRequestPersonHomeAddressStateEnumUm EmployeeCreateRequestPersonHomeAddressStateEnum = "UM"
	EmployeeCreateRequestPersonHomeAddressStateEnumUt EmployeeCreateRequestPersonHomeAddressStateEnum = "UT"
	EmployeeCreateRequestPersonHomeAddressStateEnumVa EmployeeCreateRequestPersonHomeAddressStateEnum = "VA"
	EmployeeCreateRequestPersonHomeAddressStateEnumVi EmployeeCreateRequestPersonHomeAddressStateEnum = "VI"
	EmployeeCreateRequestPersonHomeAddressStateEnumVt EmployeeCreateRequestPersonHomeAddressStateEnum = "VT"
	EmployeeCreateRequestPersonHomeAddressStateEnumWa EmployeeCreateRequestPersonHomeAddressStateEnum = "WA"
	EmployeeCreateRequestPersonHomeAddressStateEnumWi EmployeeCreateRequestPersonHomeAddressStateEnum = "WI"
	EmployeeCreateRequestPersonHomeAddressStateEnumWv EmployeeCreateRequestPersonHomeAddressStateEnum = "WV"
	EmployeeCreateRequestPersonHomeAddressStateEnumWy EmployeeCreateRequestPersonHomeAddressStateEnum = "WY"
)

// EmployeeCreateRequestPersonHomeAddress
// Home address of the person
type EmployeeCreateRequestPersonHomeAddress struct {
	City      string                                          `json:"city"`
	County    *string                                         `json:"county,omitempty"`
	State     EmployeeCreateRequestPersonHomeAddressStateEnum `json:"state"`
	StreetOne string                                          `json:"street_one"`
	StreetTwo *string                                         `json:"street_two,omitempty"`
	ZipCode   string                                          `json:"zip_code"`
}

type EmployeeCreateRequestPersonMailingAddressStateEnum string

const (
	EmployeeCreateRequestPersonMailingAddressStateEnumAk EmployeeCreateRequestPersonMailingAddressStateEnum = "AK"
	EmployeeCreateRequestPersonMailingAddressStateEnumAl EmployeeCreateRequestPersonMailingAddressStateEnum = "AL"
	EmployeeCreateRequestPersonMailingAddressStateEnumAr EmployeeCreateRequestPersonMailingAddressStateEnum = "AR"
	EmployeeCreateRequestPersonMailingAddressStateEnumAs EmployeeCreateRequestPersonMailingAddressStateEnum = "AS"
	EmployeeCreateRequestPersonMailingAddressStateEnumAz EmployeeCreateRequestPersonMailingAddressStateEnum = "AZ"
	EmployeeCreateRequestPersonMailingAddressStateEnumCa EmployeeCreateRequestPersonMailingAddressStateEnum = "CA"
	EmployeeCreateRequestPersonMailingAddressStateEnumCo EmployeeCreateRequestPersonMailingAddressStateEnum = "CO"
	EmployeeCreateRequestPersonMailingAddressStateEnumCt EmployeeCreateRequestPersonMailingAddressStateEnum = "CT"
	EmployeeCreateRequestPersonMailingAddressStateEnumDc EmployeeCreateRequestPersonMailingAddressStateEnum = "DC"
	EmployeeCreateRequestPersonMailingAddressStateEnumDe EmployeeCreateRequestPersonMailingAddressStateEnum = "DE"
	EmployeeCreateRequestPersonMailingAddressStateEnumFl EmployeeCreateRequestPersonMailingAddressStateEnum = "FL"
	EmployeeCreateRequestPersonMailingAddressStateEnumFm EmployeeCreateRequestPersonMailingAddressStateEnum = "FM"
	EmployeeCreateRequestPersonMailingAddressStateEnumGa EmployeeCreateRequestPersonMailingAddressStateEnum = "GA"
	EmployeeCreateRequestPersonMailingAddressStateEnumGu EmployeeCreateRequestPersonMailingAddressStateEnum = "GU"
	EmployeeCreateRequestPersonMailingAddressStateEnumHi EmployeeCreateRequestPersonMailingAddressStateEnum = "HI"
	EmployeeCreateRequestPersonMailingAddressStateEnumIa EmployeeCreateRequestPersonMailingAddressStateEnum = "IA"
	EmployeeCreateRequestPersonMailingAddressStateEnumID EmployeeCreateRequestPersonMailingAddressStateEnum = "ID"
	EmployeeCreateRequestPersonMailingAddressStateEnumIl EmployeeCreateRequestPersonMailingAddressStateEnum = "IL"
	EmployeeCreateRequestPersonMailingAddressStateEnumIn EmployeeCreateRequestPersonMailingAddressStateEnum = "IN"
	EmployeeCreateRequestPersonMailingAddressStateEnumKs EmployeeCreateRequestPersonMailingAddressStateEnum = "KS"
	EmployeeCreateRequestPersonMailingAddressStateEnumKy EmployeeCreateRequestPersonMailingAddressStateEnum = "KY"
	EmployeeCreateRequestPersonMailingAddressStateEnumLa EmployeeCreateRequestPersonMailingAddressStateEnum = "LA"
	EmployeeCreateRequestPersonMailingAddressStateEnumMa EmployeeCreateRequestPersonMailingAddressStateEnum = "MA"
	EmployeeCreateRequestPersonMailingAddressStateEnumMd EmployeeCreateRequestPersonMailingAddressStateEnum = "MD"
	EmployeeCreateRequestPersonMailingAddressStateEnumMe EmployeeCreateRequestPersonMailingAddressStateEnum = "ME"
	EmployeeCreateRequestPersonMailingAddressStateEnumMh EmployeeCreateRequestPersonMailingAddressStateEnum = "MH"
	EmployeeCreateRequestPersonMailingAddressStateEnumMi EmployeeCreateRequestPersonMailingAddressStateEnum = "MI"
	EmployeeCreateRequestPersonMailingAddressStateEnumMn EmployeeCreateRequestPersonMailingAddressStateEnum = "MN"
	EmployeeCreateRequestPersonMailingAddressStateEnumMo EmployeeCreateRequestPersonMailingAddressStateEnum = "MO"
	EmployeeCreateRequestPersonMailingAddressStateEnumMp EmployeeCreateRequestPersonMailingAddressStateEnum = "MP"
	EmployeeCreateRequestPersonMailingAddressStateEnumMs EmployeeCreateRequestPersonMailingAddressStateEnum = "MS"
	EmployeeCreateRequestPersonMailingAddressStateEnumMt EmployeeCreateRequestPersonMailingAddressStateEnum = "MT"
	EmployeeCreateRequestPersonMailingAddressStateEnumNc EmployeeCreateRequestPersonMailingAddressStateEnum = "NC"
	EmployeeCreateRequestPersonMailingAddressStateEnumNd EmployeeCreateRequestPersonMailingAddressStateEnum = "ND"
	EmployeeCreateRequestPersonMailingAddressStateEnumNe EmployeeCreateRequestPersonMailingAddressStateEnum = "NE"
	EmployeeCreateRequestPersonMailingAddressStateEnumNh EmployeeCreateRequestPersonMailingAddressStateEnum = "NH"
	EmployeeCreateRequestPersonMailingAddressStateEnumNj EmployeeCreateRequestPersonMailingAddressStateEnum = "NJ"
	EmployeeCreateRequestPersonMailingAddressStateEnumNm EmployeeCreateRequestPersonMailingAddressStateEnum = "NM"
	EmployeeCreateRequestPersonMailingAddressStateEnumNv EmployeeCreateRequestPersonMailingAddressStateEnum = "NV"
	EmployeeCreateRequestPersonMailingAddressStateEnumNy EmployeeCreateRequestPersonMailingAddressStateEnum = "NY"
	EmployeeCreateRequestPersonMailingAddressStateEnumOh EmployeeCreateRequestPersonMailingAddressStateEnum = "OH"
	EmployeeCreateRequestPersonMailingAddressStateEnumOk EmployeeCreateRequestPersonMailingAddressStateEnum = "OK"
	EmployeeCreateRequestPersonMailingAddressStateEnumOr EmployeeCreateRequestPersonMailingAddressStateEnum = "OR"
	EmployeeCreateRequestPersonMailingAddressStateEnumPa EmployeeCreateRequestPersonMailingAddressStateEnum = "PA"
	EmployeeCreateRequestPersonMailingAddressStateEnumPr EmployeeCreateRequestPersonMailingAddressStateEnum = "PR"
	EmployeeCreateRequestPersonMailingAddressStateEnumPw EmployeeCreateRequestPersonMailingAddressStateEnum = "PW"
	EmployeeCreateRequestPersonMailingAddressStateEnumRi EmployeeCreateRequestPersonMailingAddressStateEnum = "RI"
	EmployeeCreateRequestPersonMailingAddressStateEnumSc EmployeeCreateRequestPersonMailingAddressStateEnum = "SC"
	EmployeeCreateRequestPersonMailingAddressStateEnumSd EmployeeCreateRequestPersonMailingAddressStateEnum = "SD"
	EmployeeCreateRequestPersonMailingAddressStateEnumTn EmployeeCreateRequestPersonMailingAddressStateEnum = "TN"
	EmployeeCreateRequestPersonMailingAddressStateEnumTx EmployeeCreateRequestPersonMailingAddressStateEnum = "TX"
	EmployeeCreateRequestPersonMailingAddressStateEnumUm EmployeeCreateRequestPersonMailingAddressStateEnum = "UM"
	EmployeeCreateRequestPersonMailingAddressStateEnumUt EmployeeCreateRequestPersonMailingAddressStateEnum = "UT"
	EmployeeCreateRequestPersonMailingAddressStateEnumVa EmployeeCreateRequestPersonMailingAddressStateEnum = "VA"
	EmployeeCreateRequestPersonMailingAddressStateEnumVi EmployeeCreateRequestPersonMailingAddressStateEnum = "VI"
	EmployeeCreateRequestPersonMailingAddressStateEnumVt EmployeeCreateRequestPersonMailingAddressStateEnum = "VT"
	EmployeeCreateRequestPersonMailingAddressStateEnumWa EmployeeCreateRequestPersonMailingAddressStateEnum = "WA"
	EmployeeCreateRequestPersonMailingAddressStateEnumWi EmployeeCreateRequestPersonMailingAddressStateEnum = "WI"
	EmployeeCreateRequestPersonMailingAddressStateEnumWv EmployeeCreateRequestPersonMailingAddressStateEnum = "WV"
	EmployeeCreateRequestPersonMailingAddressStateEnumWy EmployeeCreateRequestPersonMailingAddressStateEnum = "WY"
)

// EmployeeCreateRequestPersonMailingAddress
// Mailing address of the person
type EmployeeCreateRequestPersonMailingAddress struct {
	City      string                                             `json:"city"`
	County    *string                                            `json:"county,omitempty"`
	State     EmployeeCreateRequestPersonMailingAddressStateEnum `json:"state"`
	StreetOne string                                             `json:"street_one"`
	StreetTwo *string                                            `json:"street_two,omitempty"`
	ZipCode   string                                             `json:"zip_code"`
}

type EmployeeCreateRequestPersonMaritalStatusEnum string

const (
	EmployeeCreateRequestPersonMaritalStatusEnumDivorced         EmployeeCreateRequestPersonMaritalStatusEnum = "divorced"
	EmployeeCreateRequestPersonMaritalStatusEnumDomesticPartner  EmployeeCreateRequestPersonMaritalStatusEnum = "domestic-partner"
	EmployeeCreateRequestPersonMaritalStatusEnumLegallySeparated EmployeeCreateRequestPersonMaritalStatusEnum = "legally-separated"
	EmployeeCreateRequestPersonMaritalStatusEnumMarried          EmployeeCreateRequestPersonMaritalStatusEnum = "married"
	EmployeeCreateRequestPersonMaritalStatusEnumSingle           EmployeeCreateRequestPersonMaritalStatusEnum = "single"
	EmployeeCreateRequestPersonMaritalStatusEnumWidowed          EmployeeCreateRequestPersonMaritalStatusEnum = "widowed"
)

type EmployeeCreateRequestPersonSexEnum string

const (
	EmployeeCreateRequestPersonSexEnumF EmployeeCreateRequestPersonSexEnum = "F"
	EmployeeCreateRequestPersonSexEnumM EmployeeCreateRequestPersonSexEnum = "M"
	EmployeeCreateRequestPersonSexEnumU EmployeeCreateRequestPersonSexEnum = "U"
	EmployeeCreateRequestPersonSexEnumX EmployeeCreateRequestPersonSexEnum = "X"
)

// EmployeeCreateRequestPerson
// Personal information for the employee
type EmployeeCreateRequestPerson struct {
	Contact        *EmployeeCreateRequestPersonContact           `json:"contact,omitempty"`
	DateOfBirth    time.Time                                     `json:"date_of_birth"`
	Details        *EmployeeCreateRequestPersonDetails           `json:"details,omitempty"`
	FirstName      string                                        `json:"first_name"`
	HomeAddress    *EmployeeCreateRequestPersonHomeAddress       `json:"home_address,omitempty"`
	LastName       string                                        `json:"last_name"`
	MailingAddress *EmployeeCreateRequestPersonMailingAddress    `json:"mailing_address,omitempty"`
	MaritalStatus  *EmployeeCreateRequestPersonMaritalStatusEnum `json:"marital_status,omitempty"`
	MiddleName     *string                                       `json:"middle_name,omitempty"`
	Sex            EmployeeCreateRequestPersonSexEnum            `json:"sex"`
	Ssn            *string                                       `json:"ssn,omitempty"`
	Suffix         *string                                       `json:"suffix,omitempty"`
}

type EmployeeCreateRequest struct {
	Employment *EmployeeCreateRequestEmployment `json:"employment,omitempty"`
	Person     EmployeeCreateRequestPerson      `json:"person"`
}
