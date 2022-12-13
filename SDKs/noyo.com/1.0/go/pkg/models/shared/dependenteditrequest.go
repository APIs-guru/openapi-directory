package shared

import (
	"time"
)

type DependentEditRequestPersonContactEmailAddressTypeEnum string

const (
	DependentEditRequestPersonContactEmailAddressTypeEnumHome DependentEditRequestPersonContactEmailAddressTypeEnum = "home"
	DependentEditRequestPersonContactEmailAddressTypeEnumWork DependentEditRequestPersonContactEmailAddressTypeEnum = "work"
)

type DependentEditRequestPersonContactPreferredMethodEnum string

const (
	DependentEditRequestPersonContactPreferredMethodEnumEmail     DependentEditRequestPersonContactPreferredMethodEnum = "email"
	DependentEditRequestPersonContactPreferredMethodEnumHomePhone DependentEditRequestPersonContactPreferredMethodEnum = "home-phone"
	DependentEditRequestPersonContactPreferredMethodEnumMail      DependentEditRequestPersonContactPreferredMethodEnum = "mail"
	DependentEditRequestPersonContactPreferredMethodEnumOther     DependentEditRequestPersonContactPreferredMethodEnum = "other"
	DependentEditRequestPersonContactPreferredMethodEnumWorkPhone DependentEditRequestPersonContactPreferredMethodEnum = "work-phone"
)

// DependentEditRequestPersonContact
// Contact information for the person
type DependentEditRequestPersonContact struct {
	EmailAddress      *string                                                `json:"email_address,omitempty"`
	EmailAddressType  *DependentEditRequestPersonContactEmailAddressTypeEnum `json:"email_address_type,omitempty"`
	HomePhone         *string                                                `json:"home_phone,omitempty"`
	PreferredLanguage *string                                                `json:"preferred_language,omitempty"`
	PreferredMethod   *DependentEditRequestPersonContactPreferredMethodEnum  `json:"preferred_method,omitempty"`
	SpeaksEnglish     *bool                                                  `json:"speaks_english,omitempty"`
	WorkPhone         *string                                                `json:"work_phone,omitempty"`
}

type DependentEditRequestPersonDetailsAmericanIndianStateEnum string

const (
	DependentEditRequestPersonDetailsAmericanIndianStateEnumAk DependentEditRequestPersonDetailsAmericanIndianStateEnum = "AK"
	DependentEditRequestPersonDetailsAmericanIndianStateEnumAl DependentEditRequestPersonDetailsAmericanIndianStateEnum = "AL"
	DependentEditRequestPersonDetailsAmericanIndianStateEnumAr DependentEditRequestPersonDetailsAmericanIndianStateEnum = "AR"
	DependentEditRequestPersonDetailsAmericanIndianStateEnumAs DependentEditRequestPersonDetailsAmericanIndianStateEnum = "AS"
	DependentEditRequestPersonDetailsAmericanIndianStateEnumAz DependentEditRequestPersonDetailsAmericanIndianStateEnum = "AZ"
	DependentEditRequestPersonDetailsAmericanIndianStateEnumCa DependentEditRequestPersonDetailsAmericanIndianStateEnum = "CA"
	DependentEditRequestPersonDetailsAmericanIndianStateEnumCo DependentEditRequestPersonDetailsAmericanIndianStateEnum = "CO"
	DependentEditRequestPersonDetailsAmericanIndianStateEnumCt DependentEditRequestPersonDetailsAmericanIndianStateEnum = "CT"
	DependentEditRequestPersonDetailsAmericanIndianStateEnumDc DependentEditRequestPersonDetailsAmericanIndianStateEnum = "DC"
	DependentEditRequestPersonDetailsAmericanIndianStateEnumDe DependentEditRequestPersonDetailsAmericanIndianStateEnum = "DE"
	DependentEditRequestPersonDetailsAmericanIndianStateEnumFl DependentEditRequestPersonDetailsAmericanIndianStateEnum = "FL"
	DependentEditRequestPersonDetailsAmericanIndianStateEnumFm DependentEditRequestPersonDetailsAmericanIndianStateEnum = "FM"
	DependentEditRequestPersonDetailsAmericanIndianStateEnumGa DependentEditRequestPersonDetailsAmericanIndianStateEnum = "GA"
	DependentEditRequestPersonDetailsAmericanIndianStateEnumGu DependentEditRequestPersonDetailsAmericanIndianStateEnum = "GU"
	DependentEditRequestPersonDetailsAmericanIndianStateEnumHi DependentEditRequestPersonDetailsAmericanIndianStateEnum = "HI"
	DependentEditRequestPersonDetailsAmericanIndianStateEnumIa DependentEditRequestPersonDetailsAmericanIndianStateEnum = "IA"
	DependentEditRequestPersonDetailsAmericanIndianStateEnumID DependentEditRequestPersonDetailsAmericanIndianStateEnum = "ID"
	DependentEditRequestPersonDetailsAmericanIndianStateEnumIl DependentEditRequestPersonDetailsAmericanIndianStateEnum = "IL"
	DependentEditRequestPersonDetailsAmericanIndianStateEnumIn DependentEditRequestPersonDetailsAmericanIndianStateEnum = "IN"
	DependentEditRequestPersonDetailsAmericanIndianStateEnumKs DependentEditRequestPersonDetailsAmericanIndianStateEnum = "KS"
	DependentEditRequestPersonDetailsAmericanIndianStateEnumKy DependentEditRequestPersonDetailsAmericanIndianStateEnum = "KY"
	DependentEditRequestPersonDetailsAmericanIndianStateEnumLa DependentEditRequestPersonDetailsAmericanIndianStateEnum = "LA"
	DependentEditRequestPersonDetailsAmericanIndianStateEnumMa DependentEditRequestPersonDetailsAmericanIndianStateEnum = "MA"
	DependentEditRequestPersonDetailsAmericanIndianStateEnumMd DependentEditRequestPersonDetailsAmericanIndianStateEnum = "MD"
	DependentEditRequestPersonDetailsAmericanIndianStateEnumMe DependentEditRequestPersonDetailsAmericanIndianStateEnum = "ME"
	DependentEditRequestPersonDetailsAmericanIndianStateEnumMh DependentEditRequestPersonDetailsAmericanIndianStateEnum = "MH"
	DependentEditRequestPersonDetailsAmericanIndianStateEnumMi DependentEditRequestPersonDetailsAmericanIndianStateEnum = "MI"
	DependentEditRequestPersonDetailsAmericanIndianStateEnumMn DependentEditRequestPersonDetailsAmericanIndianStateEnum = "MN"
	DependentEditRequestPersonDetailsAmericanIndianStateEnumMo DependentEditRequestPersonDetailsAmericanIndianStateEnum = "MO"
	DependentEditRequestPersonDetailsAmericanIndianStateEnumMp DependentEditRequestPersonDetailsAmericanIndianStateEnum = "MP"
	DependentEditRequestPersonDetailsAmericanIndianStateEnumMs DependentEditRequestPersonDetailsAmericanIndianStateEnum = "MS"
	DependentEditRequestPersonDetailsAmericanIndianStateEnumMt DependentEditRequestPersonDetailsAmericanIndianStateEnum = "MT"
	DependentEditRequestPersonDetailsAmericanIndianStateEnumNc DependentEditRequestPersonDetailsAmericanIndianStateEnum = "NC"
	DependentEditRequestPersonDetailsAmericanIndianStateEnumNd DependentEditRequestPersonDetailsAmericanIndianStateEnum = "ND"
	DependentEditRequestPersonDetailsAmericanIndianStateEnumNe DependentEditRequestPersonDetailsAmericanIndianStateEnum = "NE"
	DependentEditRequestPersonDetailsAmericanIndianStateEnumNh DependentEditRequestPersonDetailsAmericanIndianStateEnum = "NH"
	DependentEditRequestPersonDetailsAmericanIndianStateEnumNj DependentEditRequestPersonDetailsAmericanIndianStateEnum = "NJ"
	DependentEditRequestPersonDetailsAmericanIndianStateEnumNm DependentEditRequestPersonDetailsAmericanIndianStateEnum = "NM"
	DependentEditRequestPersonDetailsAmericanIndianStateEnumNv DependentEditRequestPersonDetailsAmericanIndianStateEnum = "NV"
	DependentEditRequestPersonDetailsAmericanIndianStateEnumNy DependentEditRequestPersonDetailsAmericanIndianStateEnum = "NY"
	DependentEditRequestPersonDetailsAmericanIndianStateEnumOh DependentEditRequestPersonDetailsAmericanIndianStateEnum = "OH"
	DependentEditRequestPersonDetailsAmericanIndianStateEnumOk DependentEditRequestPersonDetailsAmericanIndianStateEnum = "OK"
	DependentEditRequestPersonDetailsAmericanIndianStateEnumOr DependentEditRequestPersonDetailsAmericanIndianStateEnum = "OR"
	DependentEditRequestPersonDetailsAmericanIndianStateEnumPa DependentEditRequestPersonDetailsAmericanIndianStateEnum = "PA"
	DependentEditRequestPersonDetailsAmericanIndianStateEnumPr DependentEditRequestPersonDetailsAmericanIndianStateEnum = "PR"
	DependentEditRequestPersonDetailsAmericanIndianStateEnumPw DependentEditRequestPersonDetailsAmericanIndianStateEnum = "PW"
	DependentEditRequestPersonDetailsAmericanIndianStateEnumRi DependentEditRequestPersonDetailsAmericanIndianStateEnum = "RI"
	DependentEditRequestPersonDetailsAmericanIndianStateEnumSc DependentEditRequestPersonDetailsAmericanIndianStateEnum = "SC"
	DependentEditRequestPersonDetailsAmericanIndianStateEnumSd DependentEditRequestPersonDetailsAmericanIndianStateEnum = "SD"
	DependentEditRequestPersonDetailsAmericanIndianStateEnumTn DependentEditRequestPersonDetailsAmericanIndianStateEnum = "TN"
	DependentEditRequestPersonDetailsAmericanIndianStateEnumTx DependentEditRequestPersonDetailsAmericanIndianStateEnum = "TX"
	DependentEditRequestPersonDetailsAmericanIndianStateEnumUm DependentEditRequestPersonDetailsAmericanIndianStateEnum = "UM"
	DependentEditRequestPersonDetailsAmericanIndianStateEnumUt DependentEditRequestPersonDetailsAmericanIndianStateEnum = "UT"
	DependentEditRequestPersonDetailsAmericanIndianStateEnumVa DependentEditRequestPersonDetailsAmericanIndianStateEnum = "VA"
	DependentEditRequestPersonDetailsAmericanIndianStateEnumVi DependentEditRequestPersonDetailsAmericanIndianStateEnum = "VI"
	DependentEditRequestPersonDetailsAmericanIndianStateEnumVt DependentEditRequestPersonDetailsAmericanIndianStateEnum = "VT"
	DependentEditRequestPersonDetailsAmericanIndianStateEnumWa DependentEditRequestPersonDetailsAmericanIndianStateEnum = "WA"
	DependentEditRequestPersonDetailsAmericanIndianStateEnumWi DependentEditRequestPersonDetailsAmericanIndianStateEnum = "WI"
	DependentEditRequestPersonDetailsAmericanIndianStateEnumWv DependentEditRequestPersonDetailsAmericanIndianStateEnum = "WV"
	DependentEditRequestPersonDetailsAmericanIndianStateEnumWy DependentEditRequestPersonDetailsAmericanIndianStateEnum = "WY"
)

// DependentEditRequestPersonDetailsAmericanIndian
// American Indian status details (if applicable)
type DependentEditRequestPersonDetailsAmericanIndian struct {
	State *DependentEditRequestPersonDetailsAmericanIndianStateEnum `json:"state,omitempty"`
	Tribe *string                                                   `json:"tribe,omitempty"`
}

// DependentEditRequestPersonDetailsDisability
// Disability details (if applicable)
type DependentEditRequestPersonDetailsDisability struct {
	Communication *bool   `json:"communication,omitempty"`
	Disabled      *bool   `json:"disabled,omitempty"`
	Reason        *string `json:"reason,omitempty"`
}

type DependentEditRequestPersonDetailsTobaccoTypesEnum string

const (
	DependentEditRequestPersonDetailsTobaccoTypesEnumChewingTobacco DependentEditRequestPersonDetailsTobaccoTypesEnum = "chewing-tobacco"
	DependentEditRequestPersonDetailsTobaccoTypesEnumCigarettes     DependentEditRequestPersonDetailsTobaccoTypesEnum = "cigarettes"
	DependentEditRequestPersonDetailsTobaccoTypesEnumPipe           DependentEditRequestPersonDetailsTobaccoTypesEnum = "pipe"
)

// DependentEditRequestPersonDetailsTobacco
// Tobacco usage details (if applicable)
type DependentEditRequestPersonDetailsTobacco struct {
	Duration  *string                                             `json:"duration,omitempty"`
	Frequency *string                                             `json:"frequency,omitempty"`
	Types     []DependentEditRequestPersonDetailsTobaccoTypesEnum `json:"types,omitempty"`
	User      *bool                                               `json:"user,omitempty"`
}

// DependentEditRequestPersonDetails
// Additional personal details of the person
type DependentEditRequestPersonDetails struct {
	AmericanIndian *DependentEditRequestPersonDetailsAmericanIndian `json:"american_indian,omitempty"`
	Disability     *DependentEditRequestPersonDetailsDisability     `json:"disability,omitempty"`
	IsMilitary     *bool                                            `json:"is_military,omitempty"`
	IsStudent      *bool                                            `json:"is_student,omitempty"`
	Tobacco        *DependentEditRequestPersonDetailsTobacco        `json:"tobacco,omitempty"`
}

type DependentEditRequestPersonHomeAddressStateEnum string

const (
	DependentEditRequestPersonHomeAddressStateEnumAk DependentEditRequestPersonHomeAddressStateEnum = "AK"
	DependentEditRequestPersonHomeAddressStateEnumAl DependentEditRequestPersonHomeAddressStateEnum = "AL"
	DependentEditRequestPersonHomeAddressStateEnumAr DependentEditRequestPersonHomeAddressStateEnum = "AR"
	DependentEditRequestPersonHomeAddressStateEnumAs DependentEditRequestPersonHomeAddressStateEnum = "AS"
	DependentEditRequestPersonHomeAddressStateEnumAz DependentEditRequestPersonHomeAddressStateEnum = "AZ"
	DependentEditRequestPersonHomeAddressStateEnumCa DependentEditRequestPersonHomeAddressStateEnum = "CA"
	DependentEditRequestPersonHomeAddressStateEnumCo DependentEditRequestPersonHomeAddressStateEnum = "CO"
	DependentEditRequestPersonHomeAddressStateEnumCt DependentEditRequestPersonHomeAddressStateEnum = "CT"
	DependentEditRequestPersonHomeAddressStateEnumDc DependentEditRequestPersonHomeAddressStateEnum = "DC"
	DependentEditRequestPersonHomeAddressStateEnumDe DependentEditRequestPersonHomeAddressStateEnum = "DE"
	DependentEditRequestPersonHomeAddressStateEnumFl DependentEditRequestPersonHomeAddressStateEnum = "FL"
	DependentEditRequestPersonHomeAddressStateEnumFm DependentEditRequestPersonHomeAddressStateEnum = "FM"
	DependentEditRequestPersonHomeAddressStateEnumGa DependentEditRequestPersonHomeAddressStateEnum = "GA"
	DependentEditRequestPersonHomeAddressStateEnumGu DependentEditRequestPersonHomeAddressStateEnum = "GU"
	DependentEditRequestPersonHomeAddressStateEnumHi DependentEditRequestPersonHomeAddressStateEnum = "HI"
	DependentEditRequestPersonHomeAddressStateEnumIa DependentEditRequestPersonHomeAddressStateEnum = "IA"
	DependentEditRequestPersonHomeAddressStateEnumID DependentEditRequestPersonHomeAddressStateEnum = "ID"
	DependentEditRequestPersonHomeAddressStateEnumIl DependentEditRequestPersonHomeAddressStateEnum = "IL"
	DependentEditRequestPersonHomeAddressStateEnumIn DependentEditRequestPersonHomeAddressStateEnum = "IN"
	DependentEditRequestPersonHomeAddressStateEnumKs DependentEditRequestPersonHomeAddressStateEnum = "KS"
	DependentEditRequestPersonHomeAddressStateEnumKy DependentEditRequestPersonHomeAddressStateEnum = "KY"
	DependentEditRequestPersonHomeAddressStateEnumLa DependentEditRequestPersonHomeAddressStateEnum = "LA"
	DependentEditRequestPersonHomeAddressStateEnumMa DependentEditRequestPersonHomeAddressStateEnum = "MA"
	DependentEditRequestPersonHomeAddressStateEnumMd DependentEditRequestPersonHomeAddressStateEnum = "MD"
	DependentEditRequestPersonHomeAddressStateEnumMe DependentEditRequestPersonHomeAddressStateEnum = "ME"
	DependentEditRequestPersonHomeAddressStateEnumMh DependentEditRequestPersonHomeAddressStateEnum = "MH"
	DependentEditRequestPersonHomeAddressStateEnumMi DependentEditRequestPersonHomeAddressStateEnum = "MI"
	DependentEditRequestPersonHomeAddressStateEnumMn DependentEditRequestPersonHomeAddressStateEnum = "MN"
	DependentEditRequestPersonHomeAddressStateEnumMo DependentEditRequestPersonHomeAddressStateEnum = "MO"
	DependentEditRequestPersonHomeAddressStateEnumMp DependentEditRequestPersonHomeAddressStateEnum = "MP"
	DependentEditRequestPersonHomeAddressStateEnumMs DependentEditRequestPersonHomeAddressStateEnum = "MS"
	DependentEditRequestPersonHomeAddressStateEnumMt DependentEditRequestPersonHomeAddressStateEnum = "MT"
	DependentEditRequestPersonHomeAddressStateEnumNc DependentEditRequestPersonHomeAddressStateEnum = "NC"
	DependentEditRequestPersonHomeAddressStateEnumNd DependentEditRequestPersonHomeAddressStateEnum = "ND"
	DependentEditRequestPersonHomeAddressStateEnumNe DependentEditRequestPersonHomeAddressStateEnum = "NE"
	DependentEditRequestPersonHomeAddressStateEnumNh DependentEditRequestPersonHomeAddressStateEnum = "NH"
	DependentEditRequestPersonHomeAddressStateEnumNj DependentEditRequestPersonHomeAddressStateEnum = "NJ"
	DependentEditRequestPersonHomeAddressStateEnumNm DependentEditRequestPersonHomeAddressStateEnum = "NM"
	DependentEditRequestPersonHomeAddressStateEnumNv DependentEditRequestPersonHomeAddressStateEnum = "NV"
	DependentEditRequestPersonHomeAddressStateEnumNy DependentEditRequestPersonHomeAddressStateEnum = "NY"
	DependentEditRequestPersonHomeAddressStateEnumOh DependentEditRequestPersonHomeAddressStateEnum = "OH"
	DependentEditRequestPersonHomeAddressStateEnumOk DependentEditRequestPersonHomeAddressStateEnum = "OK"
	DependentEditRequestPersonHomeAddressStateEnumOr DependentEditRequestPersonHomeAddressStateEnum = "OR"
	DependentEditRequestPersonHomeAddressStateEnumPa DependentEditRequestPersonHomeAddressStateEnum = "PA"
	DependentEditRequestPersonHomeAddressStateEnumPr DependentEditRequestPersonHomeAddressStateEnum = "PR"
	DependentEditRequestPersonHomeAddressStateEnumPw DependentEditRequestPersonHomeAddressStateEnum = "PW"
	DependentEditRequestPersonHomeAddressStateEnumRi DependentEditRequestPersonHomeAddressStateEnum = "RI"
	DependentEditRequestPersonHomeAddressStateEnumSc DependentEditRequestPersonHomeAddressStateEnum = "SC"
	DependentEditRequestPersonHomeAddressStateEnumSd DependentEditRequestPersonHomeAddressStateEnum = "SD"
	DependentEditRequestPersonHomeAddressStateEnumTn DependentEditRequestPersonHomeAddressStateEnum = "TN"
	DependentEditRequestPersonHomeAddressStateEnumTx DependentEditRequestPersonHomeAddressStateEnum = "TX"
	DependentEditRequestPersonHomeAddressStateEnumUm DependentEditRequestPersonHomeAddressStateEnum = "UM"
	DependentEditRequestPersonHomeAddressStateEnumUt DependentEditRequestPersonHomeAddressStateEnum = "UT"
	DependentEditRequestPersonHomeAddressStateEnumVa DependentEditRequestPersonHomeAddressStateEnum = "VA"
	DependentEditRequestPersonHomeAddressStateEnumVi DependentEditRequestPersonHomeAddressStateEnum = "VI"
	DependentEditRequestPersonHomeAddressStateEnumVt DependentEditRequestPersonHomeAddressStateEnum = "VT"
	DependentEditRequestPersonHomeAddressStateEnumWa DependentEditRequestPersonHomeAddressStateEnum = "WA"
	DependentEditRequestPersonHomeAddressStateEnumWi DependentEditRequestPersonHomeAddressStateEnum = "WI"
	DependentEditRequestPersonHomeAddressStateEnumWv DependentEditRequestPersonHomeAddressStateEnum = "WV"
	DependentEditRequestPersonHomeAddressStateEnumWy DependentEditRequestPersonHomeAddressStateEnum = "WY"
)

// DependentEditRequestPersonHomeAddress
// Home address of the person
type DependentEditRequestPersonHomeAddress struct {
	City      string                                         `json:"city"`
	County    *string                                        `json:"county,omitempty"`
	State     DependentEditRequestPersonHomeAddressStateEnum `json:"state"`
	StreetOne string                                         `json:"street_one"`
	StreetTwo *string                                        `json:"street_two,omitempty"`
	ZipCode   string                                         `json:"zip_code"`
}

type DependentEditRequestPersonMailingAddressStateEnum string

const (
	DependentEditRequestPersonMailingAddressStateEnumAk DependentEditRequestPersonMailingAddressStateEnum = "AK"
	DependentEditRequestPersonMailingAddressStateEnumAl DependentEditRequestPersonMailingAddressStateEnum = "AL"
	DependentEditRequestPersonMailingAddressStateEnumAr DependentEditRequestPersonMailingAddressStateEnum = "AR"
	DependentEditRequestPersonMailingAddressStateEnumAs DependentEditRequestPersonMailingAddressStateEnum = "AS"
	DependentEditRequestPersonMailingAddressStateEnumAz DependentEditRequestPersonMailingAddressStateEnum = "AZ"
	DependentEditRequestPersonMailingAddressStateEnumCa DependentEditRequestPersonMailingAddressStateEnum = "CA"
	DependentEditRequestPersonMailingAddressStateEnumCo DependentEditRequestPersonMailingAddressStateEnum = "CO"
	DependentEditRequestPersonMailingAddressStateEnumCt DependentEditRequestPersonMailingAddressStateEnum = "CT"
	DependentEditRequestPersonMailingAddressStateEnumDc DependentEditRequestPersonMailingAddressStateEnum = "DC"
	DependentEditRequestPersonMailingAddressStateEnumDe DependentEditRequestPersonMailingAddressStateEnum = "DE"
	DependentEditRequestPersonMailingAddressStateEnumFl DependentEditRequestPersonMailingAddressStateEnum = "FL"
	DependentEditRequestPersonMailingAddressStateEnumFm DependentEditRequestPersonMailingAddressStateEnum = "FM"
	DependentEditRequestPersonMailingAddressStateEnumGa DependentEditRequestPersonMailingAddressStateEnum = "GA"
	DependentEditRequestPersonMailingAddressStateEnumGu DependentEditRequestPersonMailingAddressStateEnum = "GU"
	DependentEditRequestPersonMailingAddressStateEnumHi DependentEditRequestPersonMailingAddressStateEnum = "HI"
	DependentEditRequestPersonMailingAddressStateEnumIa DependentEditRequestPersonMailingAddressStateEnum = "IA"
	DependentEditRequestPersonMailingAddressStateEnumID DependentEditRequestPersonMailingAddressStateEnum = "ID"
	DependentEditRequestPersonMailingAddressStateEnumIl DependentEditRequestPersonMailingAddressStateEnum = "IL"
	DependentEditRequestPersonMailingAddressStateEnumIn DependentEditRequestPersonMailingAddressStateEnum = "IN"
	DependentEditRequestPersonMailingAddressStateEnumKs DependentEditRequestPersonMailingAddressStateEnum = "KS"
	DependentEditRequestPersonMailingAddressStateEnumKy DependentEditRequestPersonMailingAddressStateEnum = "KY"
	DependentEditRequestPersonMailingAddressStateEnumLa DependentEditRequestPersonMailingAddressStateEnum = "LA"
	DependentEditRequestPersonMailingAddressStateEnumMa DependentEditRequestPersonMailingAddressStateEnum = "MA"
	DependentEditRequestPersonMailingAddressStateEnumMd DependentEditRequestPersonMailingAddressStateEnum = "MD"
	DependentEditRequestPersonMailingAddressStateEnumMe DependentEditRequestPersonMailingAddressStateEnum = "ME"
	DependentEditRequestPersonMailingAddressStateEnumMh DependentEditRequestPersonMailingAddressStateEnum = "MH"
	DependentEditRequestPersonMailingAddressStateEnumMi DependentEditRequestPersonMailingAddressStateEnum = "MI"
	DependentEditRequestPersonMailingAddressStateEnumMn DependentEditRequestPersonMailingAddressStateEnum = "MN"
	DependentEditRequestPersonMailingAddressStateEnumMo DependentEditRequestPersonMailingAddressStateEnum = "MO"
	DependentEditRequestPersonMailingAddressStateEnumMp DependentEditRequestPersonMailingAddressStateEnum = "MP"
	DependentEditRequestPersonMailingAddressStateEnumMs DependentEditRequestPersonMailingAddressStateEnum = "MS"
	DependentEditRequestPersonMailingAddressStateEnumMt DependentEditRequestPersonMailingAddressStateEnum = "MT"
	DependentEditRequestPersonMailingAddressStateEnumNc DependentEditRequestPersonMailingAddressStateEnum = "NC"
	DependentEditRequestPersonMailingAddressStateEnumNd DependentEditRequestPersonMailingAddressStateEnum = "ND"
	DependentEditRequestPersonMailingAddressStateEnumNe DependentEditRequestPersonMailingAddressStateEnum = "NE"
	DependentEditRequestPersonMailingAddressStateEnumNh DependentEditRequestPersonMailingAddressStateEnum = "NH"
	DependentEditRequestPersonMailingAddressStateEnumNj DependentEditRequestPersonMailingAddressStateEnum = "NJ"
	DependentEditRequestPersonMailingAddressStateEnumNm DependentEditRequestPersonMailingAddressStateEnum = "NM"
	DependentEditRequestPersonMailingAddressStateEnumNv DependentEditRequestPersonMailingAddressStateEnum = "NV"
	DependentEditRequestPersonMailingAddressStateEnumNy DependentEditRequestPersonMailingAddressStateEnum = "NY"
	DependentEditRequestPersonMailingAddressStateEnumOh DependentEditRequestPersonMailingAddressStateEnum = "OH"
	DependentEditRequestPersonMailingAddressStateEnumOk DependentEditRequestPersonMailingAddressStateEnum = "OK"
	DependentEditRequestPersonMailingAddressStateEnumOr DependentEditRequestPersonMailingAddressStateEnum = "OR"
	DependentEditRequestPersonMailingAddressStateEnumPa DependentEditRequestPersonMailingAddressStateEnum = "PA"
	DependentEditRequestPersonMailingAddressStateEnumPr DependentEditRequestPersonMailingAddressStateEnum = "PR"
	DependentEditRequestPersonMailingAddressStateEnumPw DependentEditRequestPersonMailingAddressStateEnum = "PW"
	DependentEditRequestPersonMailingAddressStateEnumRi DependentEditRequestPersonMailingAddressStateEnum = "RI"
	DependentEditRequestPersonMailingAddressStateEnumSc DependentEditRequestPersonMailingAddressStateEnum = "SC"
	DependentEditRequestPersonMailingAddressStateEnumSd DependentEditRequestPersonMailingAddressStateEnum = "SD"
	DependentEditRequestPersonMailingAddressStateEnumTn DependentEditRequestPersonMailingAddressStateEnum = "TN"
	DependentEditRequestPersonMailingAddressStateEnumTx DependentEditRequestPersonMailingAddressStateEnum = "TX"
	DependentEditRequestPersonMailingAddressStateEnumUm DependentEditRequestPersonMailingAddressStateEnum = "UM"
	DependentEditRequestPersonMailingAddressStateEnumUt DependentEditRequestPersonMailingAddressStateEnum = "UT"
	DependentEditRequestPersonMailingAddressStateEnumVa DependentEditRequestPersonMailingAddressStateEnum = "VA"
	DependentEditRequestPersonMailingAddressStateEnumVi DependentEditRequestPersonMailingAddressStateEnum = "VI"
	DependentEditRequestPersonMailingAddressStateEnumVt DependentEditRequestPersonMailingAddressStateEnum = "VT"
	DependentEditRequestPersonMailingAddressStateEnumWa DependentEditRequestPersonMailingAddressStateEnum = "WA"
	DependentEditRequestPersonMailingAddressStateEnumWi DependentEditRequestPersonMailingAddressStateEnum = "WI"
	DependentEditRequestPersonMailingAddressStateEnumWv DependentEditRequestPersonMailingAddressStateEnum = "WV"
	DependentEditRequestPersonMailingAddressStateEnumWy DependentEditRequestPersonMailingAddressStateEnum = "WY"
)

// DependentEditRequestPersonMailingAddress
// Mailing address for the person
type DependentEditRequestPersonMailingAddress struct {
	City      string                                            `json:"city"`
	County    *string                                           `json:"county,omitempty"`
	State     DependentEditRequestPersonMailingAddressStateEnum `json:"state"`
	StreetOne string                                            `json:"street_one"`
	StreetTwo *string                                           `json:"street_two,omitempty"`
	ZipCode   string                                            `json:"zip_code"`
}

type DependentEditRequestPersonMaritalStatusEnum string

const (
	DependentEditRequestPersonMaritalStatusEnumDivorced         DependentEditRequestPersonMaritalStatusEnum = "divorced"
	DependentEditRequestPersonMaritalStatusEnumDomesticPartner  DependentEditRequestPersonMaritalStatusEnum = "domestic-partner"
	DependentEditRequestPersonMaritalStatusEnumLegallySeparated DependentEditRequestPersonMaritalStatusEnum = "legally-separated"
	DependentEditRequestPersonMaritalStatusEnumMarried          DependentEditRequestPersonMaritalStatusEnum = "married"
	DependentEditRequestPersonMaritalStatusEnumSingle           DependentEditRequestPersonMaritalStatusEnum = "single"
	DependentEditRequestPersonMaritalStatusEnumWidowed          DependentEditRequestPersonMaritalStatusEnum = "widowed"
)

type DependentEditRequestPersonSexEnum string

const (
	DependentEditRequestPersonSexEnumF DependentEditRequestPersonSexEnum = "F"
	DependentEditRequestPersonSexEnumM DependentEditRequestPersonSexEnum = "M"
	DependentEditRequestPersonSexEnumU DependentEditRequestPersonSexEnum = "U"
	DependentEditRequestPersonSexEnumX DependentEditRequestPersonSexEnum = "X"
)

// DependentEditRequestPerson
// Personal information for the dependent
type DependentEditRequestPerson struct {
	Contact        *DependentEditRequestPersonContact           `json:"contact,omitempty"`
	DateOfBirth    *time.Time                                   `json:"date_of_birth,omitempty"`
	Details        *DependentEditRequestPersonDetails           `json:"details,omitempty"`
	FirstName      *string                                      `json:"first_name,omitempty"`
	HomeAddress    *DependentEditRequestPersonHomeAddress       `json:"home_address,omitempty"`
	LastName       *string                                      `json:"last_name,omitempty"`
	MailingAddress *DependentEditRequestPersonMailingAddress    `json:"mailing_address,omitempty"`
	MaritalStatus  *DependentEditRequestPersonMaritalStatusEnum `json:"marital_status,omitempty"`
	MiddleName     *string                                      `json:"middle_name,omitempty"`
	Sex            *DependentEditRequestPersonSexEnum           `json:"sex,omitempty"`
	Ssn            *string                                      `json:"ssn,omitempty"`
	Suffix         *string                                      `json:"suffix,omitempty"`
}

type DependentEditRequestRelationshipEnum string

const (
	DependentEditRequestRelationshipEnumAdoptedChild      DependentEditRequestRelationshipEnum = "adopted-child"
	DependentEditRequestRelationshipEnumChild             DependentEditRequestRelationshipEnum = "child"
	DependentEditRequestRelationshipEnumCivilUnion        DependentEditRequestRelationshipEnum = "civil-union"
	DependentEditRequestRelationshipEnumDomesticPartner   DependentEditRequestRelationshipEnum = "domestic-partner"
	DependentEditRequestRelationshipEnumExSpouse          DependentEditRequestRelationshipEnum = "ex-spouse"
	DependentEditRequestRelationshipEnumFosterChild       DependentEditRequestRelationshipEnum = "foster-child"
	DependentEditRequestRelationshipEnumGrandchild        DependentEditRequestRelationshipEnum = "grandchild"
	DependentEditRequestRelationshipEnumLegalGuardianship DependentEditRequestRelationshipEnum = "legal-guardianship"
	DependentEditRequestRelationshipEnumOther             DependentEditRequestRelationshipEnum = "other"
	DependentEditRequestRelationshipEnumSpouse            DependentEditRequestRelationshipEnum = "spouse"
	DependentEditRequestRelationshipEnumStepChild         DependentEditRequestRelationshipEnum = "step-child"
)

type DependentEditRequest struct {
	Person       *DependentEditRequestPerson           `json:"person,omitempty"`
	Relationship *DependentEditRequestRelationshipEnum `json:"relationship,omitempty"`
}
