package shared

import (
	"time"
)

// EmployeeEditRequestEmploymentEmploymentDates
// Employee employment dates
type EmployeeEditRequestEmploymentEmploymentDates struct {
	FullTimeStart *string    `json:"full_time_start,omitempty"`
	HireDate      *time.Time `json:"hire_date,omitempty"`
	Rehire        *string    `json:"rehire,omitempty"`
	Retirement    *string    `json:"retirement,omitempty"`
	Terminated    *string    `json:"terminated,omitempty"`
}

type EmployeeEditRequestEmploymentEmploymentStatusEnum string

const (
	EmployeeEditRequestEmploymentEmploymentStatusEnumContract   EmployeeEditRequestEmploymentEmploymentStatusEnum = "contract"
	EmployeeEditRequestEmploymentEmploymentStatusEnumDisabled   EmployeeEditRequestEmploymentEmploymentStatusEnum = "disabled"
	EmployeeEditRequestEmploymentEmploymentStatusEnumFullTime   EmployeeEditRequestEmploymentEmploymentStatusEnum = "full-time"
	EmployeeEditRequestEmploymentEmploymentStatusEnumPartTime   EmployeeEditRequestEmploymentEmploymentStatusEnum = "part-time"
	EmployeeEditRequestEmploymentEmploymentStatusEnumRetired    EmployeeEditRequestEmploymentEmploymentStatusEnum = "retired"
	EmployeeEditRequestEmploymentEmploymentStatusEnumTerminated EmployeeEditRequestEmploymentEmploymentStatusEnum = "terminated"
)

type EmployeeEditRequestEmploymentSalaryTypeEnum string

const (
	EmployeeEditRequestEmploymentSalaryTypeEnumHourly EmployeeEditRequestEmploymentSalaryTypeEnum = "hourly"
	EmployeeEditRequestEmploymentSalaryTypeEnumSalary EmployeeEditRequestEmploymentSalaryTypeEnum = "salary"
)

type EmployeeEditRequestEmploymentSalaryUnitEnum string

const (
	EmployeeEditRequestEmploymentSalaryUnitEnumAnnual      EmployeeEditRequestEmploymentSalaryUnitEnum = "annual"
	EmployeeEditRequestEmploymentSalaryUnitEnumHour        EmployeeEditRequestEmploymentSalaryUnitEnum = "hour"
	EmployeeEditRequestEmploymentSalaryUnitEnumMonth       EmployeeEditRequestEmploymentSalaryUnitEnum = "month"
	EmployeeEditRequestEmploymentSalaryUnitEnumSemiMonthly EmployeeEditRequestEmploymentSalaryUnitEnum = "semi-monthly"
	EmployeeEditRequestEmploymentSalaryUnitEnumWeek        EmployeeEditRequestEmploymentSalaryUnitEnum = "week"
)

// EmployeeEditRequestEmploymentSalary
// Employee salary information
type EmployeeEditRequestEmploymentSalary struct {
	Amount *float64                                     `json:"amount,omitempty"`
	Type   *EmployeeEditRequestEmploymentSalaryTypeEnum `json:"type,omitempty"`
	Unit   *EmployeeEditRequestEmploymentSalaryUnitEnum `json:"unit,omitempty"`
}

// EmployeeEditRequestEmployment
// Employment information for the employee
type EmployeeEditRequestEmployment struct {
	EmploymentDates  *EmployeeEditRequestEmploymentEmploymentDates      `json:"employment_dates,omitempty"`
	EmploymentStatus *EmployeeEditRequestEmploymentEmploymentStatusEnum `json:"employment_status,omitempty"`
	HoursWorked      *int32                                             `json:"hours_worked,omitempty"`
	Occupation       *string                                            `json:"occupation,omitempty"`
	Salary           *EmployeeEditRequestEmploymentSalary               `json:"salary,omitempty"`
}

type EmployeeEditRequestPersonContactEmailAddressTypeEnum string

const (
	EmployeeEditRequestPersonContactEmailAddressTypeEnumHome EmployeeEditRequestPersonContactEmailAddressTypeEnum = "home"
	EmployeeEditRequestPersonContactEmailAddressTypeEnumWork EmployeeEditRequestPersonContactEmailAddressTypeEnum = "work"
)

type EmployeeEditRequestPersonContactPreferredMethodEnum string

const (
	EmployeeEditRequestPersonContactPreferredMethodEnumEmail     EmployeeEditRequestPersonContactPreferredMethodEnum = "email"
	EmployeeEditRequestPersonContactPreferredMethodEnumHomePhone EmployeeEditRequestPersonContactPreferredMethodEnum = "home-phone"
	EmployeeEditRequestPersonContactPreferredMethodEnumMail      EmployeeEditRequestPersonContactPreferredMethodEnum = "mail"
	EmployeeEditRequestPersonContactPreferredMethodEnumOther     EmployeeEditRequestPersonContactPreferredMethodEnum = "other"
	EmployeeEditRequestPersonContactPreferredMethodEnumWorkPhone EmployeeEditRequestPersonContactPreferredMethodEnum = "work-phone"
)

// EmployeeEditRequestPersonContact
// Contact information for the person
type EmployeeEditRequestPersonContact struct {
	EmailAddress      *string                                               `json:"email_address,omitempty"`
	EmailAddressType  *EmployeeEditRequestPersonContactEmailAddressTypeEnum `json:"email_address_type,omitempty"`
	HomePhone         *string                                               `json:"home_phone,omitempty"`
	PreferredLanguage *string                                               `json:"preferred_language,omitempty"`
	PreferredMethod   *EmployeeEditRequestPersonContactPreferredMethodEnum  `json:"preferred_method,omitempty"`
	SpeaksEnglish     *bool                                                 `json:"speaks_english,omitempty"`
	WorkPhone         *string                                               `json:"work_phone,omitempty"`
}

type EmployeeEditRequestPersonDetailsAmericanIndianStateEnum string

const (
	EmployeeEditRequestPersonDetailsAmericanIndianStateEnumAk EmployeeEditRequestPersonDetailsAmericanIndianStateEnum = "AK"
	EmployeeEditRequestPersonDetailsAmericanIndianStateEnumAl EmployeeEditRequestPersonDetailsAmericanIndianStateEnum = "AL"
	EmployeeEditRequestPersonDetailsAmericanIndianStateEnumAr EmployeeEditRequestPersonDetailsAmericanIndianStateEnum = "AR"
	EmployeeEditRequestPersonDetailsAmericanIndianStateEnumAs EmployeeEditRequestPersonDetailsAmericanIndianStateEnum = "AS"
	EmployeeEditRequestPersonDetailsAmericanIndianStateEnumAz EmployeeEditRequestPersonDetailsAmericanIndianStateEnum = "AZ"
	EmployeeEditRequestPersonDetailsAmericanIndianStateEnumCa EmployeeEditRequestPersonDetailsAmericanIndianStateEnum = "CA"
	EmployeeEditRequestPersonDetailsAmericanIndianStateEnumCo EmployeeEditRequestPersonDetailsAmericanIndianStateEnum = "CO"
	EmployeeEditRequestPersonDetailsAmericanIndianStateEnumCt EmployeeEditRequestPersonDetailsAmericanIndianStateEnum = "CT"
	EmployeeEditRequestPersonDetailsAmericanIndianStateEnumDc EmployeeEditRequestPersonDetailsAmericanIndianStateEnum = "DC"
	EmployeeEditRequestPersonDetailsAmericanIndianStateEnumDe EmployeeEditRequestPersonDetailsAmericanIndianStateEnum = "DE"
	EmployeeEditRequestPersonDetailsAmericanIndianStateEnumFl EmployeeEditRequestPersonDetailsAmericanIndianStateEnum = "FL"
	EmployeeEditRequestPersonDetailsAmericanIndianStateEnumFm EmployeeEditRequestPersonDetailsAmericanIndianStateEnum = "FM"
	EmployeeEditRequestPersonDetailsAmericanIndianStateEnumGa EmployeeEditRequestPersonDetailsAmericanIndianStateEnum = "GA"
	EmployeeEditRequestPersonDetailsAmericanIndianStateEnumGu EmployeeEditRequestPersonDetailsAmericanIndianStateEnum = "GU"
	EmployeeEditRequestPersonDetailsAmericanIndianStateEnumHi EmployeeEditRequestPersonDetailsAmericanIndianStateEnum = "HI"
	EmployeeEditRequestPersonDetailsAmericanIndianStateEnumIa EmployeeEditRequestPersonDetailsAmericanIndianStateEnum = "IA"
	EmployeeEditRequestPersonDetailsAmericanIndianStateEnumID EmployeeEditRequestPersonDetailsAmericanIndianStateEnum = "ID"
	EmployeeEditRequestPersonDetailsAmericanIndianStateEnumIl EmployeeEditRequestPersonDetailsAmericanIndianStateEnum = "IL"
	EmployeeEditRequestPersonDetailsAmericanIndianStateEnumIn EmployeeEditRequestPersonDetailsAmericanIndianStateEnum = "IN"
	EmployeeEditRequestPersonDetailsAmericanIndianStateEnumKs EmployeeEditRequestPersonDetailsAmericanIndianStateEnum = "KS"
	EmployeeEditRequestPersonDetailsAmericanIndianStateEnumKy EmployeeEditRequestPersonDetailsAmericanIndianStateEnum = "KY"
	EmployeeEditRequestPersonDetailsAmericanIndianStateEnumLa EmployeeEditRequestPersonDetailsAmericanIndianStateEnum = "LA"
	EmployeeEditRequestPersonDetailsAmericanIndianStateEnumMa EmployeeEditRequestPersonDetailsAmericanIndianStateEnum = "MA"
	EmployeeEditRequestPersonDetailsAmericanIndianStateEnumMd EmployeeEditRequestPersonDetailsAmericanIndianStateEnum = "MD"
	EmployeeEditRequestPersonDetailsAmericanIndianStateEnumMe EmployeeEditRequestPersonDetailsAmericanIndianStateEnum = "ME"
	EmployeeEditRequestPersonDetailsAmericanIndianStateEnumMh EmployeeEditRequestPersonDetailsAmericanIndianStateEnum = "MH"
	EmployeeEditRequestPersonDetailsAmericanIndianStateEnumMi EmployeeEditRequestPersonDetailsAmericanIndianStateEnum = "MI"
	EmployeeEditRequestPersonDetailsAmericanIndianStateEnumMn EmployeeEditRequestPersonDetailsAmericanIndianStateEnum = "MN"
	EmployeeEditRequestPersonDetailsAmericanIndianStateEnumMo EmployeeEditRequestPersonDetailsAmericanIndianStateEnum = "MO"
	EmployeeEditRequestPersonDetailsAmericanIndianStateEnumMp EmployeeEditRequestPersonDetailsAmericanIndianStateEnum = "MP"
	EmployeeEditRequestPersonDetailsAmericanIndianStateEnumMs EmployeeEditRequestPersonDetailsAmericanIndianStateEnum = "MS"
	EmployeeEditRequestPersonDetailsAmericanIndianStateEnumMt EmployeeEditRequestPersonDetailsAmericanIndianStateEnum = "MT"
	EmployeeEditRequestPersonDetailsAmericanIndianStateEnumNc EmployeeEditRequestPersonDetailsAmericanIndianStateEnum = "NC"
	EmployeeEditRequestPersonDetailsAmericanIndianStateEnumNd EmployeeEditRequestPersonDetailsAmericanIndianStateEnum = "ND"
	EmployeeEditRequestPersonDetailsAmericanIndianStateEnumNe EmployeeEditRequestPersonDetailsAmericanIndianStateEnum = "NE"
	EmployeeEditRequestPersonDetailsAmericanIndianStateEnumNh EmployeeEditRequestPersonDetailsAmericanIndianStateEnum = "NH"
	EmployeeEditRequestPersonDetailsAmericanIndianStateEnumNj EmployeeEditRequestPersonDetailsAmericanIndianStateEnum = "NJ"
	EmployeeEditRequestPersonDetailsAmericanIndianStateEnumNm EmployeeEditRequestPersonDetailsAmericanIndianStateEnum = "NM"
	EmployeeEditRequestPersonDetailsAmericanIndianStateEnumNv EmployeeEditRequestPersonDetailsAmericanIndianStateEnum = "NV"
	EmployeeEditRequestPersonDetailsAmericanIndianStateEnumNy EmployeeEditRequestPersonDetailsAmericanIndianStateEnum = "NY"
	EmployeeEditRequestPersonDetailsAmericanIndianStateEnumOh EmployeeEditRequestPersonDetailsAmericanIndianStateEnum = "OH"
	EmployeeEditRequestPersonDetailsAmericanIndianStateEnumOk EmployeeEditRequestPersonDetailsAmericanIndianStateEnum = "OK"
	EmployeeEditRequestPersonDetailsAmericanIndianStateEnumOr EmployeeEditRequestPersonDetailsAmericanIndianStateEnum = "OR"
	EmployeeEditRequestPersonDetailsAmericanIndianStateEnumPa EmployeeEditRequestPersonDetailsAmericanIndianStateEnum = "PA"
	EmployeeEditRequestPersonDetailsAmericanIndianStateEnumPr EmployeeEditRequestPersonDetailsAmericanIndianStateEnum = "PR"
	EmployeeEditRequestPersonDetailsAmericanIndianStateEnumPw EmployeeEditRequestPersonDetailsAmericanIndianStateEnum = "PW"
	EmployeeEditRequestPersonDetailsAmericanIndianStateEnumRi EmployeeEditRequestPersonDetailsAmericanIndianStateEnum = "RI"
	EmployeeEditRequestPersonDetailsAmericanIndianStateEnumSc EmployeeEditRequestPersonDetailsAmericanIndianStateEnum = "SC"
	EmployeeEditRequestPersonDetailsAmericanIndianStateEnumSd EmployeeEditRequestPersonDetailsAmericanIndianStateEnum = "SD"
	EmployeeEditRequestPersonDetailsAmericanIndianStateEnumTn EmployeeEditRequestPersonDetailsAmericanIndianStateEnum = "TN"
	EmployeeEditRequestPersonDetailsAmericanIndianStateEnumTx EmployeeEditRequestPersonDetailsAmericanIndianStateEnum = "TX"
	EmployeeEditRequestPersonDetailsAmericanIndianStateEnumUm EmployeeEditRequestPersonDetailsAmericanIndianStateEnum = "UM"
	EmployeeEditRequestPersonDetailsAmericanIndianStateEnumUt EmployeeEditRequestPersonDetailsAmericanIndianStateEnum = "UT"
	EmployeeEditRequestPersonDetailsAmericanIndianStateEnumVa EmployeeEditRequestPersonDetailsAmericanIndianStateEnum = "VA"
	EmployeeEditRequestPersonDetailsAmericanIndianStateEnumVi EmployeeEditRequestPersonDetailsAmericanIndianStateEnum = "VI"
	EmployeeEditRequestPersonDetailsAmericanIndianStateEnumVt EmployeeEditRequestPersonDetailsAmericanIndianStateEnum = "VT"
	EmployeeEditRequestPersonDetailsAmericanIndianStateEnumWa EmployeeEditRequestPersonDetailsAmericanIndianStateEnum = "WA"
	EmployeeEditRequestPersonDetailsAmericanIndianStateEnumWi EmployeeEditRequestPersonDetailsAmericanIndianStateEnum = "WI"
	EmployeeEditRequestPersonDetailsAmericanIndianStateEnumWv EmployeeEditRequestPersonDetailsAmericanIndianStateEnum = "WV"
	EmployeeEditRequestPersonDetailsAmericanIndianStateEnumWy EmployeeEditRequestPersonDetailsAmericanIndianStateEnum = "WY"
)

// EmployeeEditRequestPersonDetailsAmericanIndian
// American Indian status details (if applicable)
type EmployeeEditRequestPersonDetailsAmericanIndian struct {
	State *EmployeeEditRequestPersonDetailsAmericanIndianStateEnum `json:"state,omitempty"`
	Tribe *string                                                  `json:"tribe,omitempty"`
}

// EmployeeEditRequestPersonDetailsDisability
// Disability details (if applicable)
type EmployeeEditRequestPersonDetailsDisability struct {
	Communication *bool   `json:"communication,omitempty"`
	Disabled      *bool   `json:"disabled,omitempty"`
	Reason        *string `json:"reason,omitempty"`
}

type EmployeeEditRequestPersonDetailsTobaccoTypesEnum string

const (
	EmployeeEditRequestPersonDetailsTobaccoTypesEnumChewingTobacco EmployeeEditRequestPersonDetailsTobaccoTypesEnum = "chewing-tobacco"
	EmployeeEditRequestPersonDetailsTobaccoTypesEnumCigarettes     EmployeeEditRequestPersonDetailsTobaccoTypesEnum = "cigarettes"
	EmployeeEditRequestPersonDetailsTobaccoTypesEnumPipe           EmployeeEditRequestPersonDetailsTobaccoTypesEnum = "pipe"
)

// EmployeeEditRequestPersonDetailsTobacco
// Tobacco usage details (if applicable)
type EmployeeEditRequestPersonDetailsTobacco struct {
	Duration  *string                                            `json:"duration,omitempty"`
	Frequency *string                                            `json:"frequency,omitempty"`
	Types     []EmployeeEditRequestPersonDetailsTobaccoTypesEnum `json:"types,omitempty"`
	User      *bool                                              `json:"user,omitempty"`
}

// EmployeeEditRequestPersonDetails
// Additional personal details of the person
type EmployeeEditRequestPersonDetails struct {
	AmericanIndian *EmployeeEditRequestPersonDetailsAmericanIndian `json:"american_indian,omitempty"`
	Disability     *EmployeeEditRequestPersonDetailsDisability     `json:"disability,omitempty"`
	IsMilitary     *bool                                           `json:"is_military,omitempty"`
	IsStudent      *bool                                           `json:"is_student,omitempty"`
	Tobacco        *EmployeeEditRequestPersonDetailsTobacco        `json:"tobacco,omitempty"`
}

type EmployeeEditRequestPersonHomeAddressStateEnum string

const (
	EmployeeEditRequestPersonHomeAddressStateEnumAk EmployeeEditRequestPersonHomeAddressStateEnum = "AK"
	EmployeeEditRequestPersonHomeAddressStateEnumAl EmployeeEditRequestPersonHomeAddressStateEnum = "AL"
	EmployeeEditRequestPersonHomeAddressStateEnumAr EmployeeEditRequestPersonHomeAddressStateEnum = "AR"
	EmployeeEditRequestPersonHomeAddressStateEnumAs EmployeeEditRequestPersonHomeAddressStateEnum = "AS"
	EmployeeEditRequestPersonHomeAddressStateEnumAz EmployeeEditRequestPersonHomeAddressStateEnum = "AZ"
	EmployeeEditRequestPersonHomeAddressStateEnumCa EmployeeEditRequestPersonHomeAddressStateEnum = "CA"
	EmployeeEditRequestPersonHomeAddressStateEnumCo EmployeeEditRequestPersonHomeAddressStateEnum = "CO"
	EmployeeEditRequestPersonHomeAddressStateEnumCt EmployeeEditRequestPersonHomeAddressStateEnum = "CT"
	EmployeeEditRequestPersonHomeAddressStateEnumDc EmployeeEditRequestPersonHomeAddressStateEnum = "DC"
	EmployeeEditRequestPersonHomeAddressStateEnumDe EmployeeEditRequestPersonHomeAddressStateEnum = "DE"
	EmployeeEditRequestPersonHomeAddressStateEnumFl EmployeeEditRequestPersonHomeAddressStateEnum = "FL"
	EmployeeEditRequestPersonHomeAddressStateEnumFm EmployeeEditRequestPersonHomeAddressStateEnum = "FM"
	EmployeeEditRequestPersonHomeAddressStateEnumGa EmployeeEditRequestPersonHomeAddressStateEnum = "GA"
	EmployeeEditRequestPersonHomeAddressStateEnumGu EmployeeEditRequestPersonHomeAddressStateEnum = "GU"
	EmployeeEditRequestPersonHomeAddressStateEnumHi EmployeeEditRequestPersonHomeAddressStateEnum = "HI"
	EmployeeEditRequestPersonHomeAddressStateEnumIa EmployeeEditRequestPersonHomeAddressStateEnum = "IA"
	EmployeeEditRequestPersonHomeAddressStateEnumID EmployeeEditRequestPersonHomeAddressStateEnum = "ID"
	EmployeeEditRequestPersonHomeAddressStateEnumIl EmployeeEditRequestPersonHomeAddressStateEnum = "IL"
	EmployeeEditRequestPersonHomeAddressStateEnumIn EmployeeEditRequestPersonHomeAddressStateEnum = "IN"
	EmployeeEditRequestPersonHomeAddressStateEnumKs EmployeeEditRequestPersonHomeAddressStateEnum = "KS"
	EmployeeEditRequestPersonHomeAddressStateEnumKy EmployeeEditRequestPersonHomeAddressStateEnum = "KY"
	EmployeeEditRequestPersonHomeAddressStateEnumLa EmployeeEditRequestPersonHomeAddressStateEnum = "LA"
	EmployeeEditRequestPersonHomeAddressStateEnumMa EmployeeEditRequestPersonHomeAddressStateEnum = "MA"
	EmployeeEditRequestPersonHomeAddressStateEnumMd EmployeeEditRequestPersonHomeAddressStateEnum = "MD"
	EmployeeEditRequestPersonHomeAddressStateEnumMe EmployeeEditRequestPersonHomeAddressStateEnum = "ME"
	EmployeeEditRequestPersonHomeAddressStateEnumMh EmployeeEditRequestPersonHomeAddressStateEnum = "MH"
	EmployeeEditRequestPersonHomeAddressStateEnumMi EmployeeEditRequestPersonHomeAddressStateEnum = "MI"
	EmployeeEditRequestPersonHomeAddressStateEnumMn EmployeeEditRequestPersonHomeAddressStateEnum = "MN"
	EmployeeEditRequestPersonHomeAddressStateEnumMo EmployeeEditRequestPersonHomeAddressStateEnum = "MO"
	EmployeeEditRequestPersonHomeAddressStateEnumMp EmployeeEditRequestPersonHomeAddressStateEnum = "MP"
	EmployeeEditRequestPersonHomeAddressStateEnumMs EmployeeEditRequestPersonHomeAddressStateEnum = "MS"
	EmployeeEditRequestPersonHomeAddressStateEnumMt EmployeeEditRequestPersonHomeAddressStateEnum = "MT"
	EmployeeEditRequestPersonHomeAddressStateEnumNc EmployeeEditRequestPersonHomeAddressStateEnum = "NC"
	EmployeeEditRequestPersonHomeAddressStateEnumNd EmployeeEditRequestPersonHomeAddressStateEnum = "ND"
	EmployeeEditRequestPersonHomeAddressStateEnumNe EmployeeEditRequestPersonHomeAddressStateEnum = "NE"
	EmployeeEditRequestPersonHomeAddressStateEnumNh EmployeeEditRequestPersonHomeAddressStateEnum = "NH"
	EmployeeEditRequestPersonHomeAddressStateEnumNj EmployeeEditRequestPersonHomeAddressStateEnum = "NJ"
	EmployeeEditRequestPersonHomeAddressStateEnumNm EmployeeEditRequestPersonHomeAddressStateEnum = "NM"
	EmployeeEditRequestPersonHomeAddressStateEnumNv EmployeeEditRequestPersonHomeAddressStateEnum = "NV"
	EmployeeEditRequestPersonHomeAddressStateEnumNy EmployeeEditRequestPersonHomeAddressStateEnum = "NY"
	EmployeeEditRequestPersonHomeAddressStateEnumOh EmployeeEditRequestPersonHomeAddressStateEnum = "OH"
	EmployeeEditRequestPersonHomeAddressStateEnumOk EmployeeEditRequestPersonHomeAddressStateEnum = "OK"
	EmployeeEditRequestPersonHomeAddressStateEnumOr EmployeeEditRequestPersonHomeAddressStateEnum = "OR"
	EmployeeEditRequestPersonHomeAddressStateEnumPa EmployeeEditRequestPersonHomeAddressStateEnum = "PA"
	EmployeeEditRequestPersonHomeAddressStateEnumPr EmployeeEditRequestPersonHomeAddressStateEnum = "PR"
	EmployeeEditRequestPersonHomeAddressStateEnumPw EmployeeEditRequestPersonHomeAddressStateEnum = "PW"
	EmployeeEditRequestPersonHomeAddressStateEnumRi EmployeeEditRequestPersonHomeAddressStateEnum = "RI"
	EmployeeEditRequestPersonHomeAddressStateEnumSc EmployeeEditRequestPersonHomeAddressStateEnum = "SC"
	EmployeeEditRequestPersonHomeAddressStateEnumSd EmployeeEditRequestPersonHomeAddressStateEnum = "SD"
	EmployeeEditRequestPersonHomeAddressStateEnumTn EmployeeEditRequestPersonHomeAddressStateEnum = "TN"
	EmployeeEditRequestPersonHomeAddressStateEnumTx EmployeeEditRequestPersonHomeAddressStateEnum = "TX"
	EmployeeEditRequestPersonHomeAddressStateEnumUm EmployeeEditRequestPersonHomeAddressStateEnum = "UM"
	EmployeeEditRequestPersonHomeAddressStateEnumUt EmployeeEditRequestPersonHomeAddressStateEnum = "UT"
	EmployeeEditRequestPersonHomeAddressStateEnumVa EmployeeEditRequestPersonHomeAddressStateEnum = "VA"
	EmployeeEditRequestPersonHomeAddressStateEnumVi EmployeeEditRequestPersonHomeAddressStateEnum = "VI"
	EmployeeEditRequestPersonHomeAddressStateEnumVt EmployeeEditRequestPersonHomeAddressStateEnum = "VT"
	EmployeeEditRequestPersonHomeAddressStateEnumWa EmployeeEditRequestPersonHomeAddressStateEnum = "WA"
	EmployeeEditRequestPersonHomeAddressStateEnumWi EmployeeEditRequestPersonHomeAddressStateEnum = "WI"
	EmployeeEditRequestPersonHomeAddressStateEnumWv EmployeeEditRequestPersonHomeAddressStateEnum = "WV"
	EmployeeEditRequestPersonHomeAddressStateEnumWy EmployeeEditRequestPersonHomeAddressStateEnum = "WY"
)

// EmployeeEditRequestPersonHomeAddress
// Home address of the person
type EmployeeEditRequestPersonHomeAddress struct {
	City      string                                        `json:"city"`
	County    *string                                       `json:"county,omitempty"`
	State     EmployeeEditRequestPersonHomeAddressStateEnum `json:"state"`
	StreetOne string                                        `json:"street_one"`
	StreetTwo *string                                       `json:"street_two,omitempty"`
	ZipCode   string                                        `json:"zip_code"`
}

type EmployeeEditRequestPersonMailingAddressStateEnum string

const (
	EmployeeEditRequestPersonMailingAddressStateEnumAk EmployeeEditRequestPersonMailingAddressStateEnum = "AK"
	EmployeeEditRequestPersonMailingAddressStateEnumAl EmployeeEditRequestPersonMailingAddressStateEnum = "AL"
	EmployeeEditRequestPersonMailingAddressStateEnumAr EmployeeEditRequestPersonMailingAddressStateEnum = "AR"
	EmployeeEditRequestPersonMailingAddressStateEnumAs EmployeeEditRequestPersonMailingAddressStateEnum = "AS"
	EmployeeEditRequestPersonMailingAddressStateEnumAz EmployeeEditRequestPersonMailingAddressStateEnum = "AZ"
	EmployeeEditRequestPersonMailingAddressStateEnumCa EmployeeEditRequestPersonMailingAddressStateEnum = "CA"
	EmployeeEditRequestPersonMailingAddressStateEnumCo EmployeeEditRequestPersonMailingAddressStateEnum = "CO"
	EmployeeEditRequestPersonMailingAddressStateEnumCt EmployeeEditRequestPersonMailingAddressStateEnum = "CT"
	EmployeeEditRequestPersonMailingAddressStateEnumDc EmployeeEditRequestPersonMailingAddressStateEnum = "DC"
	EmployeeEditRequestPersonMailingAddressStateEnumDe EmployeeEditRequestPersonMailingAddressStateEnum = "DE"
	EmployeeEditRequestPersonMailingAddressStateEnumFl EmployeeEditRequestPersonMailingAddressStateEnum = "FL"
	EmployeeEditRequestPersonMailingAddressStateEnumFm EmployeeEditRequestPersonMailingAddressStateEnum = "FM"
	EmployeeEditRequestPersonMailingAddressStateEnumGa EmployeeEditRequestPersonMailingAddressStateEnum = "GA"
	EmployeeEditRequestPersonMailingAddressStateEnumGu EmployeeEditRequestPersonMailingAddressStateEnum = "GU"
	EmployeeEditRequestPersonMailingAddressStateEnumHi EmployeeEditRequestPersonMailingAddressStateEnum = "HI"
	EmployeeEditRequestPersonMailingAddressStateEnumIa EmployeeEditRequestPersonMailingAddressStateEnum = "IA"
	EmployeeEditRequestPersonMailingAddressStateEnumID EmployeeEditRequestPersonMailingAddressStateEnum = "ID"
	EmployeeEditRequestPersonMailingAddressStateEnumIl EmployeeEditRequestPersonMailingAddressStateEnum = "IL"
	EmployeeEditRequestPersonMailingAddressStateEnumIn EmployeeEditRequestPersonMailingAddressStateEnum = "IN"
	EmployeeEditRequestPersonMailingAddressStateEnumKs EmployeeEditRequestPersonMailingAddressStateEnum = "KS"
	EmployeeEditRequestPersonMailingAddressStateEnumKy EmployeeEditRequestPersonMailingAddressStateEnum = "KY"
	EmployeeEditRequestPersonMailingAddressStateEnumLa EmployeeEditRequestPersonMailingAddressStateEnum = "LA"
	EmployeeEditRequestPersonMailingAddressStateEnumMa EmployeeEditRequestPersonMailingAddressStateEnum = "MA"
	EmployeeEditRequestPersonMailingAddressStateEnumMd EmployeeEditRequestPersonMailingAddressStateEnum = "MD"
	EmployeeEditRequestPersonMailingAddressStateEnumMe EmployeeEditRequestPersonMailingAddressStateEnum = "ME"
	EmployeeEditRequestPersonMailingAddressStateEnumMh EmployeeEditRequestPersonMailingAddressStateEnum = "MH"
	EmployeeEditRequestPersonMailingAddressStateEnumMi EmployeeEditRequestPersonMailingAddressStateEnum = "MI"
	EmployeeEditRequestPersonMailingAddressStateEnumMn EmployeeEditRequestPersonMailingAddressStateEnum = "MN"
	EmployeeEditRequestPersonMailingAddressStateEnumMo EmployeeEditRequestPersonMailingAddressStateEnum = "MO"
	EmployeeEditRequestPersonMailingAddressStateEnumMp EmployeeEditRequestPersonMailingAddressStateEnum = "MP"
	EmployeeEditRequestPersonMailingAddressStateEnumMs EmployeeEditRequestPersonMailingAddressStateEnum = "MS"
	EmployeeEditRequestPersonMailingAddressStateEnumMt EmployeeEditRequestPersonMailingAddressStateEnum = "MT"
	EmployeeEditRequestPersonMailingAddressStateEnumNc EmployeeEditRequestPersonMailingAddressStateEnum = "NC"
	EmployeeEditRequestPersonMailingAddressStateEnumNd EmployeeEditRequestPersonMailingAddressStateEnum = "ND"
	EmployeeEditRequestPersonMailingAddressStateEnumNe EmployeeEditRequestPersonMailingAddressStateEnum = "NE"
	EmployeeEditRequestPersonMailingAddressStateEnumNh EmployeeEditRequestPersonMailingAddressStateEnum = "NH"
	EmployeeEditRequestPersonMailingAddressStateEnumNj EmployeeEditRequestPersonMailingAddressStateEnum = "NJ"
	EmployeeEditRequestPersonMailingAddressStateEnumNm EmployeeEditRequestPersonMailingAddressStateEnum = "NM"
	EmployeeEditRequestPersonMailingAddressStateEnumNv EmployeeEditRequestPersonMailingAddressStateEnum = "NV"
	EmployeeEditRequestPersonMailingAddressStateEnumNy EmployeeEditRequestPersonMailingAddressStateEnum = "NY"
	EmployeeEditRequestPersonMailingAddressStateEnumOh EmployeeEditRequestPersonMailingAddressStateEnum = "OH"
	EmployeeEditRequestPersonMailingAddressStateEnumOk EmployeeEditRequestPersonMailingAddressStateEnum = "OK"
	EmployeeEditRequestPersonMailingAddressStateEnumOr EmployeeEditRequestPersonMailingAddressStateEnum = "OR"
	EmployeeEditRequestPersonMailingAddressStateEnumPa EmployeeEditRequestPersonMailingAddressStateEnum = "PA"
	EmployeeEditRequestPersonMailingAddressStateEnumPr EmployeeEditRequestPersonMailingAddressStateEnum = "PR"
	EmployeeEditRequestPersonMailingAddressStateEnumPw EmployeeEditRequestPersonMailingAddressStateEnum = "PW"
	EmployeeEditRequestPersonMailingAddressStateEnumRi EmployeeEditRequestPersonMailingAddressStateEnum = "RI"
	EmployeeEditRequestPersonMailingAddressStateEnumSc EmployeeEditRequestPersonMailingAddressStateEnum = "SC"
	EmployeeEditRequestPersonMailingAddressStateEnumSd EmployeeEditRequestPersonMailingAddressStateEnum = "SD"
	EmployeeEditRequestPersonMailingAddressStateEnumTn EmployeeEditRequestPersonMailingAddressStateEnum = "TN"
	EmployeeEditRequestPersonMailingAddressStateEnumTx EmployeeEditRequestPersonMailingAddressStateEnum = "TX"
	EmployeeEditRequestPersonMailingAddressStateEnumUm EmployeeEditRequestPersonMailingAddressStateEnum = "UM"
	EmployeeEditRequestPersonMailingAddressStateEnumUt EmployeeEditRequestPersonMailingAddressStateEnum = "UT"
	EmployeeEditRequestPersonMailingAddressStateEnumVa EmployeeEditRequestPersonMailingAddressStateEnum = "VA"
	EmployeeEditRequestPersonMailingAddressStateEnumVi EmployeeEditRequestPersonMailingAddressStateEnum = "VI"
	EmployeeEditRequestPersonMailingAddressStateEnumVt EmployeeEditRequestPersonMailingAddressStateEnum = "VT"
	EmployeeEditRequestPersonMailingAddressStateEnumWa EmployeeEditRequestPersonMailingAddressStateEnum = "WA"
	EmployeeEditRequestPersonMailingAddressStateEnumWi EmployeeEditRequestPersonMailingAddressStateEnum = "WI"
	EmployeeEditRequestPersonMailingAddressStateEnumWv EmployeeEditRequestPersonMailingAddressStateEnum = "WV"
	EmployeeEditRequestPersonMailingAddressStateEnumWy EmployeeEditRequestPersonMailingAddressStateEnum = "WY"
)

// EmployeeEditRequestPersonMailingAddress
// Mailing address for the person
type EmployeeEditRequestPersonMailingAddress struct {
	City      string                                           `json:"city"`
	County    *string                                          `json:"county,omitempty"`
	State     EmployeeEditRequestPersonMailingAddressStateEnum `json:"state"`
	StreetOne string                                           `json:"street_one"`
	StreetTwo *string                                          `json:"street_two,omitempty"`
	ZipCode   string                                           `json:"zip_code"`
}

type EmployeeEditRequestPersonMaritalStatusEnum string

const (
	EmployeeEditRequestPersonMaritalStatusEnumDivorced         EmployeeEditRequestPersonMaritalStatusEnum = "divorced"
	EmployeeEditRequestPersonMaritalStatusEnumDomesticPartner  EmployeeEditRequestPersonMaritalStatusEnum = "domestic-partner"
	EmployeeEditRequestPersonMaritalStatusEnumLegallySeparated EmployeeEditRequestPersonMaritalStatusEnum = "legally-separated"
	EmployeeEditRequestPersonMaritalStatusEnumMarried          EmployeeEditRequestPersonMaritalStatusEnum = "married"
	EmployeeEditRequestPersonMaritalStatusEnumSingle           EmployeeEditRequestPersonMaritalStatusEnum = "single"
	EmployeeEditRequestPersonMaritalStatusEnumWidowed          EmployeeEditRequestPersonMaritalStatusEnum = "widowed"
)

type EmployeeEditRequestPersonSexEnum string

const (
	EmployeeEditRequestPersonSexEnumF EmployeeEditRequestPersonSexEnum = "F"
	EmployeeEditRequestPersonSexEnumM EmployeeEditRequestPersonSexEnum = "M"
	EmployeeEditRequestPersonSexEnumU EmployeeEditRequestPersonSexEnum = "U"
	EmployeeEditRequestPersonSexEnumX EmployeeEditRequestPersonSexEnum = "X"
)

// EmployeeEditRequestPerson
// Personal information for the employee
type EmployeeEditRequestPerson struct {
	Contact        *EmployeeEditRequestPersonContact           `json:"contact,omitempty"`
	DateOfBirth    *time.Time                                  `json:"date_of_birth,omitempty"`
	Details        *EmployeeEditRequestPersonDetails           `json:"details,omitempty"`
	FirstName      *string                                     `json:"first_name,omitempty"`
	HomeAddress    *EmployeeEditRequestPersonHomeAddress       `json:"home_address,omitempty"`
	LastName       *string                                     `json:"last_name,omitempty"`
	MailingAddress *EmployeeEditRequestPersonMailingAddress    `json:"mailing_address,omitempty"`
	MaritalStatus  *EmployeeEditRequestPersonMaritalStatusEnum `json:"marital_status,omitempty"`
	MiddleName     *string                                     `json:"middle_name,omitempty"`
	Sex            *EmployeeEditRequestPersonSexEnum           `json:"sex,omitempty"`
	Ssn            *string                                     `json:"ssn,omitempty"`
	Suffix         *string                                     `json:"suffix,omitempty"`
}

type EmployeeEditRequest struct {
	Employment *EmployeeEditRequestEmployment `json:"employment,omitempty"`
	Person     *EmployeeEditRequestPerson     `json:"person,omitempty"`
}
