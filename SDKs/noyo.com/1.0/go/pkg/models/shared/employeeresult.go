package shared

import (
	"time"
)

// EmployeeResultEmploymentEmploymentDates
// Employee employment dates
type EmployeeResultEmploymentEmploymentDates struct {
	FullTimeStart *string    `json:"full_time_start,omitempty"`
	HireDate      *time.Time `json:"hire_date,omitempty"`
	Rehire        *string    `json:"rehire,omitempty"`
	Retirement    *string    `json:"retirement,omitempty"`
	Terminated    *string    `json:"terminated,omitempty"`
}

type EmployeeResultEmploymentEmploymentStatusEnum string

const (
	EmployeeResultEmploymentEmploymentStatusEnumContract   EmployeeResultEmploymentEmploymentStatusEnum = "contract"
	EmployeeResultEmploymentEmploymentStatusEnumDisabled   EmployeeResultEmploymentEmploymentStatusEnum = "disabled"
	EmployeeResultEmploymentEmploymentStatusEnumFullTime   EmployeeResultEmploymentEmploymentStatusEnum = "full-time"
	EmployeeResultEmploymentEmploymentStatusEnumPartTime   EmployeeResultEmploymentEmploymentStatusEnum = "part-time"
	EmployeeResultEmploymentEmploymentStatusEnumRetired    EmployeeResultEmploymentEmploymentStatusEnum = "retired"
	EmployeeResultEmploymentEmploymentStatusEnumTerminated EmployeeResultEmploymentEmploymentStatusEnum = "terminated"
)

type EmployeeResultEmploymentSalaryTypeEnum string

const (
	EmployeeResultEmploymentSalaryTypeEnumHourly EmployeeResultEmploymentSalaryTypeEnum = "hourly"
	EmployeeResultEmploymentSalaryTypeEnumSalary EmployeeResultEmploymentSalaryTypeEnum = "salary"
)

type EmployeeResultEmploymentSalaryUnitEnum string

const (
	EmployeeResultEmploymentSalaryUnitEnumAnnual      EmployeeResultEmploymentSalaryUnitEnum = "annual"
	EmployeeResultEmploymentSalaryUnitEnumHour        EmployeeResultEmploymentSalaryUnitEnum = "hour"
	EmployeeResultEmploymentSalaryUnitEnumMonth       EmployeeResultEmploymentSalaryUnitEnum = "month"
	EmployeeResultEmploymentSalaryUnitEnumSemiMonthly EmployeeResultEmploymentSalaryUnitEnum = "semi-monthly"
	EmployeeResultEmploymentSalaryUnitEnumWeek        EmployeeResultEmploymentSalaryUnitEnum = "week"
)

// EmployeeResultEmploymentSalary
// Employee salary information
type EmployeeResultEmploymentSalary struct {
	Amount *float64                                `json:"amount,omitempty"`
	Type   *EmployeeResultEmploymentSalaryTypeEnum `json:"type,omitempty"`
	Unit   *EmployeeResultEmploymentSalaryUnitEnum `json:"unit,omitempty"`
}

// EmployeeResultEmployment
// Employment information for the employee
type EmployeeResultEmployment struct {
	EmploymentDates  *EmployeeResultEmploymentEmploymentDates      `json:"employment_dates,omitempty"`
	EmploymentStatus *EmployeeResultEmploymentEmploymentStatusEnum `json:"employment_status,omitempty"`
	HoursWorked      *int32                                        `json:"hours_worked,omitempty"`
	Occupation       *string                                       `json:"occupation,omitempty"`
	Salary           *EmployeeResultEmploymentSalary               `json:"salary,omitempty"`
}

type EmployeeResultPersonContactEmailAddressTypeEnum string

const (
	EmployeeResultPersonContactEmailAddressTypeEnumHome EmployeeResultPersonContactEmailAddressTypeEnum = "home"
	EmployeeResultPersonContactEmailAddressTypeEnumWork EmployeeResultPersonContactEmailAddressTypeEnum = "work"
)

type EmployeeResultPersonContactPreferredMethodEnum string

const (
	EmployeeResultPersonContactPreferredMethodEnumEmail     EmployeeResultPersonContactPreferredMethodEnum = "email"
	EmployeeResultPersonContactPreferredMethodEnumHomePhone EmployeeResultPersonContactPreferredMethodEnum = "home-phone"
	EmployeeResultPersonContactPreferredMethodEnumMail      EmployeeResultPersonContactPreferredMethodEnum = "mail"
	EmployeeResultPersonContactPreferredMethodEnumOther     EmployeeResultPersonContactPreferredMethodEnum = "other"
	EmployeeResultPersonContactPreferredMethodEnumWorkPhone EmployeeResultPersonContactPreferredMethodEnum = "work-phone"
)

// EmployeeResultPersonContact
// Contact information for the person
type EmployeeResultPersonContact struct {
	EmailAddress      *string                                          `json:"email_address,omitempty"`
	EmailAddressType  *EmployeeResultPersonContactEmailAddressTypeEnum `json:"email_address_type,omitempty"`
	HomePhone         *string                                          `json:"home_phone,omitempty"`
	PreferredLanguage *string                                          `json:"preferred_language,omitempty"`
	PreferredMethod   *EmployeeResultPersonContactPreferredMethodEnum  `json:"preferred_method,omitempty"`
	SpeaksEnglish     *bool                                            `json:"speaks_english,omitempty"`
	WorkPhone         *string                                          `json:"work_phone,omitempty"`
}

type EmployeeResultPersonDetailsAmericanIndianStateEnum string

const (
	EmployeeResultPersonDetailsAmericanIndianStateEnumAk EmployeeResultPersonDetailsAmericanIndianStateEnum = "AK"
	EmployeeResultPersonDetailsAmericanIndianStateEnumAl EmployeeResultPersonDetailsAmericanIndianStateEnum = "AL"
	EmployeeResultPersonDetailsAmericanIndianStateEnumAr EmployeeResultPersonDetailsAmericanIndianStateEnum = "AR"
	EmployeeResultPersonDetailsAmericanIndianStateEnumAs EmployeeResultPersonDetailsAmericanIndianStateEnum = "AS"
	EmployeeResultPersonDetailsAmericanIndianStateEnumAz EmployeeResultPersonDetailsAmericanIndianStateEnum = "AZ"
	EmployeeResultPersonDetailsAmericanIndianStateEnumCa EmployeeResultPersonDetailsAmericanIndianStateEnum = "CA"
	EmployeeResultPersonDetailsAmericanIndianStateEnumCo EmployeeResultPersonDetailsAmericanIndianStateEnum = "CO"
	EmployeeResultPersonDetailsAmericanIndianStateEnumCt EmployeeResultPersonDetailsAmericanIndianStateEnum = "CT"
	EmployeeResultPersonDetailsAmericanIndianStateEnumDc EmployeeResultPersonDetailsAmericanIndianStateEnum = "DC"
	EmployeeResultPersonDetailsAmericanIndianStateEnumDe EmployeeResultPersonDetailsAmericanIndianStateEnum = "DE"
	EmployeeResultPersonDetailsAmericanIndianStateEnumFl EmployeeResultPersonDetailsAmericanIndianStateEnum = "FL"
	EmployeeResultPersonDetailsAmericanIndianStateEnumFm EmployeeResultPersonDetailsAmericanIndianStateEnum = "FM"
	EmployeeResultPersonDetailsAmericanIndianStateEnumGa EmployeeResultPersonDetailsAmericanIndianStateEnum = "GA"
	EmployeeResultPersonDetailsAmericanIndianStateEnumGu EmployeeResultPersonDetailsAmericanIndianStateEnum = "GU"
	EmployeeResultPersonDetailsAmericanIndianStateEnumHi EmployeeResultPersonDetailsAmericanIndianStateEnum = "HI"
	EmployeeResultPersonDetailsAmericanIndianStateEnumIa EmployeeResultPersonDetailsAmericanIndianStateEnum = "IA"
	EmployeeResultPersonDetailsAmericanIndianStateEnumID EmployeeResultPersonDetailsAmericanIndianStateEnum = "ID"
	EmployeeResultPersonDetailsAmericanIndianStateEnumIl EmployeeResultPersonDetailsAmericanIndianStateEnum = "IL"
	EmployeeResultPersonDetailsAmericanIndianStateEnumIn EmployeeResultPersonDetailsAmericanIndianStateEnum = "IN"
	EmployeeResultPersonDetailsAmericanIndianStateEnumKs EmployeeResultPersonDetailsAmericanIndianStateEnum = "KS"
	EmployeeResultPersonDetailsAmericanIndianStateEnumKy EmployeeResultPersonDetailsAmericanIndianStateEnum = "KY"
	EmployeeResultPersonDetailsAmericanIndianStateEnumLa EmployeeResultPersonDetailsAmericanIndianStateEnum = "LA"
	EmployeeResultPersonDetailsAmericanIndianStateEnumMa EmployeeResultPersonDetailsAmericanIndianStateEnum = "MA"
	EmployeeResultPersonDetailsAmericanIndianStateEnumMd EmployeeResultPersonDetailsAmericanIndianStateEnum = "MD"
	EmployeeResultPersonDetailsAmericanIndianStateEnumMe EmployeeResultPersonDetailsAmericanIndianStateEnum = "ME"
	EmployeeResultPersonDetailsAmericanIndianStateEnumMh EmployeeResultPersonDetailsAmericanIndianStateEnum = "MH"
	EmployeeResultPersonDetailsAmericanIndianStateEnumMi EmployeeResultPersonDetailsAmericanIndianStateEnum = "MI"
	EmployeeResultPersonDetailsAmericanIndianStateEnumMn EmployeeResultPersonDetailsAmericanIndianStateEnum = "MN"
	EmployeeResultPersonDetailsAmericanIndianStateEnumMo EmployeeResultPersonDetailsAmericanIndianStateEnum = "MO"
	EmployeeResultPersonDetailsAmericanIndianStateEnumMp EmployeeResultPersonDetailsAmericanIndianStateEnum = "MP"
	EmployeeResultPersonDetailsAmericanIndianStateEnumMs EmployeeResultPersonDetailsAmericanIndianStateEnum = "MS"
	EmployeeResultPersonDetailsAmericanIndianStateEnumMt EmployeeResultPersonDetailsAmericanIndianStateEnum = "MT"
	EmployeeResultPersonDetailsAmericanIndianStateEnumNc EmployeeResultPersonDetailsAmericanIndianStateEnum = "NC"
	EmployeeResultPersonDetailsAmericanIndianStateEnumNd EmployeeResultPersonDetailsAmericanIndianStateEnum = "ND"
	EmployeeResultPersonDetailsAmericanIndianStateEnumNe EmployeeResultPersonDetailsAmericanIndianStateEnum = "NE"
	EmployeeResultPersonDetailsAmericanIndianStateEnumNh EmployeeResultPersonDetailsAmericanIndianStateEnum = "NH"
	EmployeeResultPersonDetailsAmericanIndianStateEnumNj EmployeeResultPersonDetailsAmericanIndianStateEnum = "NJ"
	EmployeeResultPersonDetailsAmericanIndianStateEnumNm EmployeeResultPersonDetailsAmericanIndianStateEnum = "NM"
	EmployeeResultPersonDetailsAmericanIndianStateEnumNv EmployeeResultPersonDetailsAmericanIndianStateEnum = "NV"
	EmployeeResultPersonDetailsAmericanIndianStateEnumNy EmployeeResultPersonDetailsAmericanIndianStateEnum = "NY"
	EmployeeResultPersonDetailsAmericanIndianStateEnumOh EmployeeResultPersonDetailsAmericanIndianStateEnum = "OH"
	EmployeeResultPersonDetailsAmericanIndianStateEnumOk EmployeeResultPersonDetailsAmericanIndianStateEnum = "OK"
	EmployeeResultPersonDetailsAmericanIndianStateEnumOr EmployeeResultPersonDetailsAmericanIndianStateEnum = "OR"
	EmployeeResultPersonDetailsAmericanIndianStateEnumPa EmployeeResultPersonDetailsAmericanIndianStateEnum = "PA"
	EmployeeResultPersonDetailsAmericanIndianStateEnumPr EmployeeResultPersonDetailsAmericanIndianStateEnum = "PR"
	EmployeeResultPersonDetailsAmericanIndianStateEnumPw EmployeeResultPersonDetailsAmericanIndianStateEnum = "PW"
	EmployeeResultPersonDetailsAmericanIndianStateEnumRi EmployeeResultPersonDetailsAmericanIndianStateEnum = "RI"
	EmployeeResultPersonDetailsAmericanIndianStateEnumSc EmployeeResultPersonDetailsAmericanIndianStateEnum = "SC"
	EmployeeResultPersonDetailsAmericanIndianStateEnumSd EmployeeResultPersonDetailsAmericanIndianStateEnum = "SD"
	EmployeeResultPersonDetailsAmericanIndianStateEnumTn EmployeeResultPersonDetailsAmericanIndianStateEnum = "TN"
	EmployeeResultPersonDetailsAmericanIndianStateEnumTx EmployeeResultPersonDetailsAmericanIndianStateEnum = "TX"
	EmployeeResultPersonDetailsAmericanIndianStateEnumUm EmployeeResultPersonDetailsAmericanIndianStateEnum = "UM"
	EmployeeResultPersonDetailsAmericanIndianStateEnumUt EmployeeResultPersonDetailsAmericanIndianStateEnum = "UT"
	EmployeeResultPersonDetailsAmericanIndianStateEnumVa EmployeeResultPersonDetailsAmericanIndianStateEnum = "VA"
	EmployeeResultPersonDetailsAmericanIndianStateEnumVi EmployeeResultPersonDetailsAmericanIndianStateEnum = "VI"
	EmployeeResultPersonDetailsAmericanIndianStateEnumVt EmployeeResultPersonDetailsAmericanIndianStateEnum = "VT"
	EmployeeResultPersonDetailsAmericanIndianStateEnumWa EmployeeResultPersonDetailsAmericanIndianStateEnum = "WA"
	EmployeeResultPersonDetailsAmericanIndianStateEnumWi EmployeeResultPersonDetailsAmericanIndianStateEnum = "WI"
	EmployeeResultPersonDetailsAmericanIndianStateEnumWv EmployeeResultPersonDetailsAmericanIndianStateEnum = "WV"
	EmployeeResultPersonDetailsAmericanIndianStateEnumWy EmployeeResultPersonDetailsAmericanIndianStateEnum = "WY"
)

// EmployeeResultPersonDetailsAmericanIndian
// American Indian status details (if applicable)
type EmployeeResultPersonDetailsAmericanIndian struct {
	State *EmployeeResultPersonDetailsAmericanIndianStateEnum `json:"state,omitempty"`
	Tribe *string                                             `json:"tribe,omitempty"`
}

// EmployeeResultPersonDetailsDisability
// Disability details (if applicable)
type EmployeeResultPersonDetailsDisability struct {
	Communication *bool   `json:"communication,omitempty"`
	Disabled      *bool   `json:"disabled,omitempty"`
	Reason        *string `json:"reason,omitempty"`
}

type EmployeeResultPersonDetailsTobaccoTypesEnum string

const (
	EmployeeResultPersonDetailsTobaccoTypesEnumChewingTobacco EmployeeResultPersonDetailsTobaccoTypesEnum = "chewing-tobacco"
	EmployeeResultPersonDetailsTobaccoTypesEnumCigarettes     EmployeeResultPersonDetailsTobaccoTypesEnum = "cigarettes"
	EmployeeResultPersonDetailsTobaccoTypesEnumPipe           EmployeeResultPersonDetailsTobaccoTypesEnum = "pipe"
)

// EmployeeResultPersonDetailsTobacco
// Tobacco usage details (if applicable)
type EmployeeResultPersonDetailsTobacco struct {
	Duration  *string                                       `json:"duration,omitempty"`
	Frequency *string                                       `json:"frequency,omitempty"`
	Types     []EmployeeResultPersonDetailsTobaccoTypesEnum `json:"types,omitempty"`
	User      *bool                                         `json:"user,omitempty"`
}

// EmployeeResultPersonDetails
// Additional personal details of the person
type EmployeeResultPersonDetails struct {
	AmericanIndian *EmployeeResultPersonDetailsAmericanIndian `json:"american_indian,omitempty"`
	Disability     *EmployeeResultPersonDetailsDisability     `json:"disability,omitempty"`
	IsMilitary     *bool                                      `json:"is_military,omitempty"`
	IsStudent      *bool                                      `json:"is_student,omitempty"`
	Tobacco        *EmployeeResultPersonDetailsTobacco        `json:"tobacco,omitempty"`
}

type EmployeeResultPersonHomeAddressStateEnum string

const (
	EmployeeResultPersonHomeAddressStateEnumAk EmployeeResultPersonHomeAddressStateEnum = "AK"
	EmployeeResultPersonHomeAddressStateEnumAl EmployeeResultPersonHomeAddressStateEnum = "AL"
	EmployeeResultPersonHomeAddressStateEnumAr EmployeeResultPersonHomeAddressStateEnum = "AR"
	EmployeeResultPersonHomeAddressStateEnumAs EmployeeResultPersonHomeAddressStateEnum = "AS"
	EmployeeResultPersonHomeAddressStateEnumAz EmployeeResultPersonHomeAddressStateEnum = "AZ"
	EmployeeResultPersonHomeAddressStateEnumCa EmployeeResultPersonHomeAddressStateEnum = "CA"
	EmployeeResultPersonHomeAddressStateEnumCo EmployeeResultPersonHomeAddressStateEnum = "CO"
	EmployeeResultPersonHomeAddressStateEnumCt EmployeeResultPersonHomeAddressStateEnum = "CT"
	EmployeeResultPersonHomeAddressStateEnumDc EmployeeResultPersonHomeAddressStateEnum = "DC"
	EmployeeResultPersonHomeAddressStateEnumDe EmployeeResultPersonHomeAddressStateEnum = "DE"
	EmployeeResultPersonHomeAddressStateEnumFl EmployeeResultPersonHomeAddressStateEnum = "FL"
	EmployeeResultPersonHomeAddressStateEnumFm EmployeeResultPersonHomeAddressStateEnum = "FM"
	EmployeeResultPersonHomeAddressStateEnumGa EmployeeResultPersonHomeAddressStateEnum = "GA"
	EmployeeResultPersonHomeAddressStateEnumGu EmployeeResultPersonHomeAddressStateEnum = "GU"
	EmployeeResultPersonHomeAddressStateEnumHi EmployeeResultPersonHomeAddressStateEnum = "HI"
	EmployeeResultPersonHomeAddressStateEnumIa EmployeeResultPersonHomeAddressStateEnum = "IA"
	EmployeeResultPersonHomeAddressStateEnumID EmployeeResultPersonHomeAddressStateEnum = "ID"
	EmployeeResultPersonHomeAddressStateEnumIl EmployeeResultPersonHomeAddressStateEnum = "IL"
	EmployeeResultPersonHomeAddressStateEnumIn EmployeeResultPersonHomeAddressStateEnum = "IN"
	EmployeeResultPersonHomeAddressStateEnumKs EmployeeResultPersonHomeAddressStateEnum = "KS"
	EmployeeResultPersonHomeAddressStateEnumKy EmployeeResultPersonHomeAddressStateEnum = "KY"
	EmployeeResultPersonHomeAddressStateEnumLa EmployeeResultPersonHomeAddressStateEnum = "LA"
	EmployeeResultPersonHomeAddressStateEnumMa EmployeeResultPersonHomeAddressStateEnum = "MA"
	EmployeeResultPersonHomeAddressStateEnumMd EmployeeResultPersonHomeAddressStateEnum = "MD"
	EmployeeResultPersonHomeAddressStateEnumMe EmployeeResultPersonHomeAddressStateEnum = "ME"
	EmployeeResultPersonHomeAddressStateEnumMh EmployeeResultPersonHomeAddressStateEnum = "MH"
	EmployeeResultPersonHomeAddressStateEnumMi EmployeeResultPersonHomeAddressStateEnum = "MI"
	EmployeeResultPersonHomeAddressStateEnumMn EmployeeResultPersonHomeAddressStateEnum = "MN"
	EmployeeResultPersonHomeAddressStateEnumMo EmployeeResultPersonHomeAddressStateEnum = "MO"
	EmployeeResultPersonHomeAddressStateEnumMp EmployeeResultPersonHomeAddressStateEnum = "MP"
	EmployeeResultPersonHomeAddressStateEnumMs EmployeeResultPersonHomeAddressStateEnum = "MS"
	EmployeeResultPersonHomeAddressStateEnumMt EmployeeResultPersonHomeAddressStateEnum = "MT"
	EmployeeResultPersonHomeAddressStateEnumNc EmployeeResultPersonHomeAddressStateEnum = "NC"
	EmployeeResultPersonHomeAddressStateEnumNd EmployeeResultPersonHomeAddressStateEnum = "ND"
	EmployeeResultPersonHomeAddressStateEnumNe EmployeeResultPersonHomeAddressStateEnum = "NE"
	EmployeeResultPersonHomeAddressStateEnumNh EmployeeResultPersonHomeAddressStateEnum = "NH"
	EmployeeResultPersonHomeAddressStateEnumNj EmployeeResultPersonHomeAddressStateEnum = "NJ"
	EmployeeResultPersonHomeAddressStateEnumNm EmployeeResultPersonHomeAddressStateEnum = "NM"
	EmployeeResultPersonHomeAddressStateEnumNv EmployeeResultPersonHomeAddressStateEnum = "NV"
	EmployeeResultPersonHomeAddressStateEnumNy EmployeeResultPersonHomeAddressStateEnum = "NY"
	EmployeeResultPersonHomeAddressStateEnumOh EmployeeResultPersonHomeAddressStateEnum = "OH"
	EmployeeResultPersonHomeAddressStateEnumOk EmployeeResultPersonHomeAddressStateEnum = "OK"
	EmployeeResultPersonHomeAddressStateEnumOr EmployeeResultPersonHomeAddressStateEnum = "OR"
	EmployeeResultPersonHomeAddressStateEnumPa EmployeeResultPersonHomeAddressStateEnum = "PA"
	EmployeeResultPersonHomeAddressStateEnumPr EmployeeResultPersonHomeAddressStateEnum = "PR"
	EmployeeResultPersonHomeAddressStateEnumPw EmployeeResultPersonHomeAddressStateEnum = "PW"
	EmployeeResultPersonHomeAddressStateEnumRi EmployeeResultPersonHomeAddressStateEnum = "RI"
	EmployeeResultPersonHomeAddressStateEnumSc EmployeeResultPersonHomeAddressStateEnum = "SC"
	EmployeeResultPersonHomeAddressStateEnumSd EmployeeResultPersonHomeAddressStateEnum = "SD"
	EmployeeResultPersonHomeAddressStateEnumTn EmployeeResultPersonHomeAddressStateEnum = "TN"
	EmployeeResultPersonHomeAddressStateEnumTx EmployeeResultPersonHomeAddressStateEnum = "TX"
	EmployeeResultPersonHomeAddressStateEnumUm EmployeeResultPersonHomeAddressStateEnum = "UM"
	EmployeeResultPersonHomeAddressStateEnumUt EmployeeResultPersonHomeAddressStateEnum = "UT"
	EmployeeResultPersonHomeAddressStateEnumVa EmployeeResultPersonHomeAddressStateEnum = "VA"
	EmployeeResultPersonHomeAddressStateEnumVi EmployeeResultPersonHomeAddressStateEnum = "VI"
	EmployeeResultPersonHomeAddressStateEnumVt EmployeeResultPersonHomeAddressStateEnum = "VT"
	EmployeeResultPersonHomeAddressStateEnumWa EmployeeResultPersonHomeAddressStateEnum = "WA"
	EmployeeResultPersonHomeAddressStateEnumWi EmployeeResultPersonHomeAddressStateEnum = "WI"
	EmployeeResultPersonHomeAddressStateEnumWv EmployeeResultPersonHomeAddressStateEnum = "WV"
	EmployeeResultPersonHomeAddressStateEnumWy EmployeeResultPersonHomeAddressStateEnum = "WY"
)

// EmployeeResultPersonHomeAddress
// Home address of the person
type EmployeeResultPersonHomeAddress struct {
	City      string                                   `json:"city"`
	County    *string                                  `json:"county,omitempty"`
	State     EmployeeResultPersonHomeAddressStateEnum `json:"state"`
	StreetOne string                                   `json:"street_one"`
	StreetTwo *string                                  `json:"street_two,omitempty"`
	ZipCode   string                                   `json:"zip_code"`
}

type EmployeeResultPersonMailingAddressStateEnum string

const (
	EmployeeResultPersonMailingAddressStateEnumAk EmployeeResultPersonMailingAddressStateEnum = "AK"
	EmployeeResultPersonMailingAddressStateEnumAl EmployeeResultPersonMailingAddressStateEnum = "AL"
	EmployeeResultPersonMailingAddressStateEnumAr EmployeeResultPersonMailingAddressStateEnum = "AR"
	EmployeeResultPersonMailingAddressStateEnumAs EmployeeResultPersonMailingAddressStateEnum = "AS"
	EmployeeResultPersonMailingAddressStateEnumAz EmployeeResultPersonMailingAddressStateEnum = "AZ"
	EmployeeResultPersonMailingAddressStateEnumCa EmployeeResultPersonMailingAddressStateEnum = "CA"
	EmployeeResultPersonMailingAddressStateEnumCo EmployeeResultPersonMailingAddressStateEnum = "CO"
	EmployeeResultPersonMailingAddressStateEnumCt EmployeeResultPersonMailingAddressStateEnum = "CT"
	EmployeeResultPersonMailingAddressStateEnumDc EmployeeResultPersonMailingAddressStateEnum = "DC"
	EmployeeResultPersonMailingAddressStateEnumDe EmployeeResultPersonMailingAddressStateEnum = "DE"
	EmployeeResultPersonMailingAddressStateEnumFl EmployeeResultPersonMailingAddressStateEnum = "FL"
	EmployeeResultPersonMailingAddressStateEnumFm EmployeeResultPersonMailingAddressStateEnum = "FM"
	EmployeeResultPersonMailingAddressStateEnumGa EmployeeResultPersonMailingAddressStateEnum = "GA"
	EmployeeResultPersonMailingAddressStateEnumGu EmployeeResultPersonMailingAddressStateEnum = "GU"
	EmployeeResultPersonMailingAddressStateEnumHi EmployeeResultPersonMailingAddressStateEnum = "HI"
	EmployeeResultPersonMailingAddressStateEnumIa EmployeeResultPersonMailingAddressStateEnum = "IA"
	EmployeeResultPersonMailingAddressStateEnumID EmployeeResultPersonMailingAddressStateEnum = "ID"
	EmployeeResultPersonMailingAddressStateEnumIl EmployeeResultPersonMailingAddressStateEnum = "IL"
	EmployeeResultPersonMailingAddressStateEnumIn EmployeeResultPersonMailingAddressStateEnum = "IN"
	EmployeeResultPersonMailingAddressStateEnumKs EmployeeResultPersonMailingAddressStateEnum = "KS"
	EmployeeResultPersonMailingAddressStateEnumKy EmployeeResultPersonMailingAddressStateEnum = "KY"
	EmployeeResultPersonMailingAddressStateEnumLa EmployeeResultPersonMailingAddressStateEnum = "LA"
	EmployeeResultPersonMailingAddressStateEnumMa EmployeeResultPersonMailingAddressStateEnum = "MA"
	EmployeeResultPersonMailingAddressStateEnumMd EmployeeResultPersonMailingAddressStateEnum = "MD"
	EmployeeResultPersonMailingAddressStateEnumMe EmployeeResultPersonMailingAddressStateEnum = "ME"
	EmployeeResultPersonMailingAddressStateEnumMh EmployeeResultPersonMailingAddressStateEnum = "MH"
	EmployeeResultPersonMailingAddressStateEnumMi EmployeeResultPersonMailingAddressStateEnum = "MI"
	EmployeeResultPersonMailingAddressStateEnumMn EmployeeResultPersonMailingAddressStateEnum = "MN"
	EmployeeResultPersonMailingAddressStateEnumMo EmployeeResultPersonMailingAddressStateEnum = "MO"
	EmployeeResultPersonMailingAddressStateEnumMp EmployeeResultPersonMailingAddressStateEnum = "MP"
	EmployeeResultPersonMailingAddressStateEnumMs EmployeeResultPersonMailingAddressStateEnum = "MS"
	EmployeeResultPersonMailingAddressStateEnumMt EmployeeResultPersonMailingAddressStateEnum = "MT"
	EmployeeResultPersonMailingAddressStateEnumNc EmployeeResultPersonMailingAddressStateEnum = "NC"
	EmployeeResultPersonMailingAddressStateEnumNd EmployeeResultPersonMailingAddressStateEnum = "ND"
	EmployeeResultPersonMailingAddressStateEnumNe EmployeeResultPersonMailingAddressStateEnum = "NE"
	EmployeeResultPersonMailingAddressStateEnumNh EmployeeResultPersonMailingAddressStateEnum = "NH"
	EmployeeResultPersonMailingAddressStateEnumNj EmployeeResultPersonMailingAddressStateEnum = "NJ"
	EmployeeResultPersonMailingAddressStateEnumNm EmployeeResultPersonMailingAddressStateEnum = "NM"
	EmployeeResultPersonMailingAddressStateEnumNv EmployeeResultPersonMailingAddressStateEnum = "NV"
	EmployeeResultPersonMailingAddressStateEnumNy EmployeeResultPersonMailingAddressStateEnum = "NY"
	EmployeeResultPersonMailingAddressStateEnumOh EmployeeResultPersonMailingAddressStateEnum = "OH"
	EmployeeResultPersonMailingAddressStateEnumOk EmployeeResultPersonMailingAddressStateEnum = "OK"
	EmployeeResultPersonMailingAddressStateEnumOr EmployeeResultPersonMailingAddressStateEnum = "OR"
	EmployeeResultPersonMailingAddressStateEnumPa EmployeeResultPersonMailingAddressStateEnum = "PA"
	EmployeeResultPersonMailingAddressStateEnumPr EmployeeResultPersonMailingAddressStateEnum = "PR"
	EmployeeResultPersonMailingAddressStateEnumPw EmployeeResultPersonMailingAddressStateEnum = "PW"
	EmployeeResultPersonMailingAddressStateEnumRi EmployeeResultPersonMailingAddressStateEnum = "RI"
	EmployeeResultPersonMailingAddressStateEnumSc EmployeeResultPersonMailingAddressStateEnum = "SC"
	EmployeeResultPersonMailingAddressStateEnumSd EmployeeResultPersonMailingAddressStateEnum = "SD"
	EmployeeResultPersonMailingAddressStateEnumTn EmployeeResultPersonMailingAddressStateEnum = "TN"
	EmployeeResultPersonMailingAddressStateEnumTx EmployeeResultPersonMailingAddressStateEnum = "TX"
	EmployeeResultPersonMailingAddressStateEnumUm EmployeeResultPersonMailingAddressStateEnum = "UM"
	EmployeeResultPersonMailingAddressStateEnumUt EmployeeResultPersonMailingAddressStateEnum = "UT"
	EmployeeResultPersonMailingAddressStateEnumVa EmployeeResultPersonMailingAddressStateEnum = "VA"
	EmployeeResultPersonMailingAddressStateEnumVi EmployeeResultPersonMailingAddressStateEnum = "VI"
	EmployeeResultPersonMailingAddressStateEnumVt EmployeeResultPersonMailingAddressStateEnum = "VT"
	EmployeeResultPersonMailingAddressStateEnumWa EmployeeResultPersonMailingAddressStateEnum = "WA"
	EmployeeResultPersonMailingAddressStateEnumWi EmployeeResultPersonMailingAddressStateEnum = "WI"
	EmployeeResultPersonMailingAddressStateEnumWv EmployeeResultPersonMailingAddressStateEnum = "WV"
	EmployeeResultPersonMailingAddressStateEnumWy EmployeeResultPersonMailingAddressStateEnum = "WY"
)

// EmployeeResultPersonMailingAddress
// Mailing address of the person
type EmployeeResultPersonMailingAddress struct {
	City      string                                      `json:"city"`
	County    *string                                     `json:"county,omitempty"`
	State     EmployeeResultPersonMailingAddressStateEnum `json:"state"`
	StreetOne string                                      `json:"street_one"`
	StreetTwo *string                                     `json:"street_two,omitempty"`
	ZipCode   string                                      `json:"zip_code"`
}

type EmployeeResultPersonMaritalStatusEnum string

const (
	EmployeeResultPersonMaritalStatusEnumDivorced         EmployeeResultPersonMaritalStatusEnum = "divorced"
	EmployeeResultPersonMaritalStatusEnumDomesticPartner  EmployeeResultPersonMaritalStatusEnum = "domestic-partner"
	EmployeeResultPersonMaritalStatusEnumLegallySeparated EmployeeResultPersonMaritalStatusEnum = "legally-separated"
	EmployeeResultPersonMaritalStatusEnumMarried          EmployeeResultPersonMaritalStatusEnum = "married"
	EmployeeResultPersonMaritalStatusEnumSingle           EmployeeResultPersonMaritalStatusEnum = "single"
	EmployeeResultPersonMaritalStatusEnumWidowed          EmployeeResultPersonMaritalStatusEnum = "widowed"
)

type EmployeeResultPersonSexEnum string

const (
	EmployeeResultPersonSexEnumF EmployeeResultPersonSexEnum = "F"
	EmployeeResultPersonSexEnumM EmployeeResultPersonSexEnum = "M"
	EmployeeResultPersonSexEnumU EmployeeResultPersonSexEnum = "U"
	EmployeeResultPersonSexEnumX EmployeeResultPersonSexEnum = "X"
)

// EmployeeResultPerson
// Personal information for the employee
type EmployeeResultPerson struct {
	Contact        *EmployeeResultPersonContact           `json:"contact,omitempty"`
	DateOfBirth    time.Time                              `json:"date_of_birth"`
	Details        *EmployeeResultPersonDetails           `json:"details,omitempty"`
	FirstName      string                                 `json:"first_name"`
	HomeAddress    *EmployeeResultPersonHomeAddress       `json:"home_address,omitempty"`
	LastName       string                                 `json:"last_name"`
	MailingAddress *EmployeeResultPersonMailingAddress    `json:"mailing_address,omitempty"`
	MaritalStatus  *EmployeeResultPersonMaritalStatusEnum `json:"marital_status,omitempty"`
	MiddleName     *string                                `json:"middle_name,omitempty"`
	Sex            EmployeeResultPersonSexEnum            `json:"sex"`
	Ssn            *string                                `json:"ssn,omitempty"`
	Suffix         *string                                `json:"suffix,omitempty"`
}

type EmployeeResult struct {
	Created    int64                    `json:"created"`
	Employment EmployeeResultEmployment `json:"employment"`
	GroupID    string                   `json:"group_id"`
	ID         string                   `json:"id"`
	Modified   int64                    `json:"modified"`
	Person     EmployeeResultPerson     `json:"person"`
	Version    string                   `json:"version"`
}
