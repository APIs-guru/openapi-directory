package shared

import (
	"time"
)

type DependentCreateRequestPersonContactEmailAddressTypeEnum string

const (
	DependentCreateRequestPersonContactEmailAddressTypeEnumHome DependentCreateRequestPersonContactEmailAddressTypeEnum = "home"
	DependentCreateRequestPersonContactEmailAddressTypeEnumWork DependentCreateRequestPersonContactEmailAddressTypeEnum = "work"
)

type DependentCreateRequestPersonContactPreferredMethodEnum string

const (
	DependentCreateRequestPersonContactPreferredMethodEnumEmail     DependentCreateRequestPersonContactPreferredMethodEnum = "email"
	DependentCreateRequestPersonContactPreferredMethodEnumHomePhone DependentCreateRequestPersonContactPreferredMethodEnum = "home-phone"
	DependentCreateRequestPersonContactPreferredMethodEnumMail      DependentCreateRequestPersonContactPreferredMethodEnum = "mail"
	DependentCreateRequestPersonContactPreferredMethodEnumOther     DependentCreateRequestPersonContactPreferredMethodEnum = "other"
	DependentCreateRequestPersonContactPreferredMethodEnumWorkPhone DependentCreateRequestPersonContactPreferredMethodEnum = "work-phone"
)

// DependentCreateRequestPersonContact
// Contact information for the person
type DependentCreateRequestPersonContact struct {
	EmailAddress      *string                                                  `json:"email_address,omitempty"`
	EmailAddressType  *DependentCreateRequestPersonContactEmailAddressTypeEnum `json:"email_address_type,omitempty"`
	HomePhone         *string                                                  `json:"home_phone,omitempty"`
	PreferredLanguage *string                                                  `json:"preferred_language,omitempty"`
	PreferredMethod   *DependentCreateRequestPersonContactPreferredMethodEnum  `json:"preferred_method,omitempty"`
	SpeaksEnglish     *bool                                                    `json:"speaks_english,omitempty"`
	WorkPhone         *string                                                  `json:"work_phone,omitempty"`
}

type DependentCreateRequestPersonDetailsAmericanIndianStateEnum string

const (
	DependentCreateRequestPersonDetailsAmericanIndianStateEnumAk DependentCreateRequestPersonDetailsAmericanIndianStateEnum = "AK"
	DependentCreateRequestPersonDetailsAmericanIndianStateEnumAl DependentCreateRequestPersonDetailsAmericanIndianStateEnum = "AL"
	DependentCreateRequestPersonDetailsAmericanIndianStateEnumAr DependentCreateRequestPersonDetailsAmericanIndianStateEnum = "AR"
	DependentCreateRequestPersonDetailsAmericanIndianStateEnumAs DependentCreateRequestPersonDetailsAmericanIndianStateEnum = "AS"
	DependentCreateRequestPersonDetailsAmericanIndianStateEnumAz DependentCreateRequestPersonDetailsAmericanIndianStateEnum = "AZ"
	DependentCreateRequestPersonDetailsAmericanIndianStateEnumCa DependentCreateRequestPersonDetailsAmericanIndianStateEnum = "CA"
	DependentCreateRequestPersonDetailsAmericanIndianStateEnumCo DependentCreateRequestPersonDetailsAmericanIndianStateEnum = "CO"
	DependentCreateRequestPersonDetailsAmericanIndianStateEnumCt DependentCreateRequestPersonDetailsAmericanIndianStateEnum = "CT"
	DependentCreateRequestPersonDetailsAmericanIndianStateEnumDc DependentCreateRequestPersonDetailsAmericanIndianStateEnum = "DC"
	DependentCreateRequestPersonDetailsAmericanIndianStateEnumDe DependentCreateRequestPersonDetailsAmericanIndianStateEnum = "DE"
	DependentCreateRequestPersonDetailsAmericanIndianStateEnumFl DependentCreateRequestPersonDetailsAmericanIndianStateEnum = "FL"
	DependentCreateRequestPersonDetailsAmericanIndianStateEnumFm DependentCreateRequestPersonDetailsAmericanIndianStateEnum = "FM"
	DependentCreateRequestPersonDetailsAmericanIndianStateEnumGa DependentCreateRequestPersonDetailsAmericanIndianStateEnum = "GA"
	DependentCreateRequestPersonDetailsAmericanIndianStateEnumGu DependentCreateRequestPersonDetailsAmericanIndianStateEnum = "GU"
	DependentCreateRequestPersonDetailsAmericanIndianStateEnumHi DependentCreateRequestPersonDetailsAmericanIndianStateEnum = "HI"
	DependentCreateRequestPersonDetailsAmericanIndianStateEnumIa DependentCreateRequestPersonDetailsAmericanIndianStateEnum = "IA"
	DependentCreateRequestPersonDetailsAmericanIndianStateEnumID DependentCreateRequestPersonDetailsAmericanIndianStateEnum = "ID"
	DependentCreateRequestPersonDetailsAmericanIndianStateEnumIl DependentCreateRequestPersonDetailsAmericanIndianStateEnum = "IL"
	DependentCreateRequestPersonDetailsAmericanIndianStateEnumIn DependentCreateRequestPersonDetailsAmericanIndianStateEnum = "IN"
	DependentCreateRequestPersonDetailsAmericanIndianStateEnumKs DependentCreateRequestPersonDetailsAmericanIndianStateEnum = "KS"
	DependentCreateRequestPersonDetailsAmericanIndianStateEnumKy DependentCreateRequestPersonDetailsAmericanIndianStateEnum = "KY"
	DependentCreateRequestPersonDetailsAmericanIndianStateEnumLa DependentCreateRequestPersonDetailsAmericanIndianStateEnum = "LA"
	DependentCreateRequestPersonDetailsAmericanIndianStateEnumMa DependentCreateRequestPersonDetailsAmericanIndianStateEnum = "MA"
	DependentCreateRequestPersonDetailsAmericanIndianStateEnumMd DependentCreateRequestPersonDetailsAmericanIndianStateEnum = "MD"
	DependentCreateRequestPersonDetailsAmericanIndianStateEnumMe DependentCreateRequestPersonDetailsAmericanIndianStateEnum = "ME"
	DependentCreateRequestPersonDetailsAmericanIndianStateEnumMh DependentCreateRequestPersonDetailsAmericanIndianStateEnum = "MH"
	DependentCreateRequestPersonDetailsAmericanIndianStateEnumMi DependentCreateRequestPersonDetailsAmericanIndianStateEnum = "MI"
	DependentCreateRequestPersonDetailsAmericanIndianStateEnumMn DependentCreateRequestPersonDetailsAmericanIndianStateEnum = "MN"
	DependentCreateRequestPersonDetailsAmericanIndianStateEnumMo DependentCreateRequestPersonDetailsAmericanIndianStateEnum = "MO"
	DependentCreateRequestPersonDetailsAmericanIndianStateEnumMp DependentCreateRequestPersonDetailsAmericanIndianStateEnum = "MP"
	DependentCreateRequestPersonDetailsAmericanIndianStateEnumMs DependentCreateRequestPersonDetailsAmericanIndianStateEnum = "MS"
	DependentCreateRequestPersonDetailsAmericanIndianStateEnumMt DependentCreateRequestPersonDetailsAmericanIndianStateEnum = "MT"
	DependentCreateRequestPersonDetailsAmericanIndianStateEnumNc DependentCreateRequestPersonDetailsAmericanIndianStateEnum = "NC"
	DependentCreateRequestPersonDetailsAmericanIndianStateEnumNd DependentCreateRequestPersonDetailsAmericanIndianStateEnum = "ND"
	DependentCreateRequestPersonDetailsAmericanIndianStateEnumNe DependentCreateRequestPersonDetailsAmericanIndianStateEnum = "NE"
	DependentCreateRequestPersonDetailsAmericanIndianStateEnumNh DependentCreateRequestPersonDetailsAmericanIndianStateEnum = "NH"
	DependentCreateRequestPersonDetailsAmericanIndianStateEnumNj DependentCreateRequestPersonDetailsAmericanIndianStateEnum = "NJ"
	DependentCreateRequestPersonDetailsAmericanIndianStateEnumNm DependentCreateRequestPersonDetailsAmericanIndianStateEnum = "NM"
	DependentCreateRequestPersonDetailsAmericanIndianStateEnumNv DependentCreateRequestPersonDetailsAmericanIndianStateEnum = "NV"
	DependentCreateRequestPersonDetailsAmericanIndianStateEnumNy DependentCreateRequestPersonDetailsAmericanIndianStateEnum = "NY"
	DependentCreateRequestPersonDetailsAmericanIndianStateEnumOh DependentCreateRequestPersonDetailsAmericanIndianStateEnum = "OH"
	DependentCreateRequestPersonDetailsAmericanIndianStateEnumOk DependentCreateRequestPersonDetailsAmericanIndianStateEnum = "OK"
	DependentCreateRequestPersonDetailsAmericanIndianStateEnumOr DependentCreateRequestPersonDetailsAmericanIndianStateEnum = "OR"
	DependentCreateRequestPersonDetailsAmericanIndianStateEnumPa DependentCreateRequestPersonDetailsAmericanIndianStateEnum = "PA"
	DependentCreateRequestPersonDetailsAmericanIndianStateEnumPr DependentCreateRequestPersonDetailsAmericanIndianStateEnum = "PR"
	DependentCreateRequestPersonDetailsAmericanIndianStateEnumPw DependentCreateRequestPersonDetailsAmericanIndianStateEnum = "PW"
	DependentCreateRequestPersonDetailsAmericanIndianStateEnumRi DependentCreateRequestPersonDetailsAmericanIndianStateEnum = "RI"
	DependentCreateRequestPersonDetailsAmericanIndianStateEnumSc DependentCreateRequestPersonDetailsAmericanIndianStateEnum = "SC"
	DependentCreateRequestPersonDetailsAmericanIndianStateEnumSd DependentCreateRequestPersonDetailsAmericanIndianStateEnum = "SD"
	DependentCreateRequestPersonDetailsAmericanIndianStateEnumTn DependentCreateRequestPersonDetailsAmericanIndianStateEnum = "TN"
	DependentCreateRequestPersonDetailsAmericanIndianStateEnumTx DependentCreateRequestPersonDetailsAmericanIndianStateEnum = "TX"
	DependentCreateRequestPersonDetailsAmericanIndianStateEnumUm DependentCreateRequestPersonDetailsAmericanIndianStateEnum = "UM"
	DependentCreateRequestPersonDetailsAmericanIndianStateEnumUt DependentCreateRequestPersonDetailsAmericanIndianStateEnum = "UT"
	DependentCreateRequestPersonDetailsAmericanIndianStateEnumVa DependentCreateRequestPersonDetailsAmericanIndianStateEnum = "VA"
	DependentCreateRequestPersonDetailsAmericanIndianStateEnumVi DependentCreateRequestPersonDetailsAmericanIndianStateEnum = "VI"
	DependentCreateRequestPersonDetailsAmericanIndianStateEnumVt DependentCreateRequestPersonDetailsAmericanIndianStateEnum = "VT"
	DependentCreateRequestPersonDetailsAmericanIndianStateEnumWa DependentCreateRequestPersonDetailsAmericanIndianStateEnum = "WA"
	DependentCreateRequestPersonDetailsAmericanIndianStateEnumWi DependentCreateRequestPersonDetailsAmericanIndianStateEnum = "WI"
	DependentCreateRequestPersonDetailsAmericanIndianStateEnumWv DependentCreateRequestPersonDetailsAmericanIndianStateEnum = "WV"
	DependentCreateRequestPersonDetailsAmericanIndianStateEnumWy DependentCreateRequestPersonDetailsAmericanIndianStateEnum = "WY"
)

// DependentCreateRequestPersonDetailsAmericanIndian
// American Indian status details (if applicable)
type DependentCreateRequestPersonDetailsAmericanIndian struct {
	State *DependentCreateRequestPersonDetailsAmericanIndianStateEnum `json:"state,omitempty"`
	Tribe *string                                                     `json:"tribe,omitempty"`
}

// DependentCreateRequestPersonDetailsDisability
// Disability details (if applicable)
type DependentCreateRequestPersonDetailsDisability struct {
	Communication *bool   `json:"communication,omitempty"`
	Disabled      *bool   `json:"disabled,omitempty"`
	Reason        *string `json:"reason,omitempty"`
}

type DependentCreateRequestPersonDetailsTobaccoTypesEnum string

const (
	DependentCreateRequestPersonDetailsTobaccoTypesEnumChewingTobacco DependentCreateRequestPersonDetailsTobaccoTypesEnum = "chewing-tobacco"
	DependentCreateRequestPersonDetailsTobaccoTypesEnumCigarettes     DependentCreateRequestPersonDetailsTobaccoTypesEnum = "cigarettes"
	DependentCreateRequestPersonDetailsTobaccoTypesEnumPipe           DependentCreateRequestPersonDetailsTobaccoTypesEnum = "pipe"
)

// DependentCreateRequestPersonDetailsTobacco
// Tobacco usage details (if applicable)
type DependentCreateRequestPersonDetailsTobacco struct {
	Duration  *string                                               `json:"duration,omitempty"`
	Frequency *string                                               `json:"frequency,omitempty"`
	Types     []DependentCreateRequestPersonDetailsTobaccoTypesEnum `json:"types,omitempty"`
	User      *bool                                                 `json:"user,omitempty"`
}

// DependentCreateRequestPersonDetails
// Additional personal details of the person
type DependentCreateRequestPersonDetails struct {
	AmericanIndian *DependentCreateRequestPersonDetailsAmericanIndian `json:"american_indian,omitempty"`
	Disability     *DependentCreateRequestPersonDetailsDisability     `json:"disability,omitempty"`
	IsMilitary     *bool                                              `json:"is_military,omitempty"`
	IsStudent      *bool                                              `json:"is_student,omitempty"`
	Tobacco        *DependentCreateRequestPersonDetailsTobacco        `json:"tobacco,omitempty"`
}

type DependentCreateRequestPersonHomeAddressStateEnum string

const (
	DependentCreateRequestPersonHomeAddressStateEnumAk DependentCreateRequestPersonHomeAddressStateEnum = "AK"
	DependentCreateRequestPersonHomeAddressStateEnumAl DependentCreateRequestPersonHomeAddressStateEnum = "AL"
	DependentCreateRequestPersonHomeAddressStateEnumAr DependentCreateRequestPersonHomeAddressStateEnum = "AR"
	DependentCreateRequestPersonHomeAddressStateEnumAs DependentCreateRequestPersonHomeAddressStateEnum = "AS"
	DependentCreateRequestPersonHomeAddressStateEnumAz DependentCreateRequestPersonHomeAddressStateEnum = "AZ"
	DependentCreateRequestPersonHomeAddressStateEnumCa DependentCreateRequestPersonHomeAddressStateEnum = "CA"
	DependentCreateRequestPersonHomeAddressStateEnumCo DependentCreateRequestPersonHomeAddressStateEnum = "CO"
	DependentCreateRequestPersonHomeAddressStateEnumCt DependentCreateRequestPersonHomeAddressStateEnum = "CT"
	DependentCreateRequestPersonHomeAddressStateEnumDc DependentCreateRequestPersonHomeAddressStateEnum = "DC"
	DependentCreateRequestPersonHomeAddressStateEnumDe DependentCreateRequestPersonHomeAddressStateEnum = "DE"
	DependentCreateRequestPersonHomeAddressStateEnumFl DependentCreateRequestPersonHomeAddressStateEnum = "FL"
	DependentCreateRequestPersonHomeAddressStateEnumFm DependentCreateRequestPersonHomeAddressStateEnum = "FM"
	DependentCreateRequestPersonHomeAddressStateEnumGa DependentCreateRequestPersonHomeAddressStateEnum = "GA"
	DependentCreateRequestPersonHomeAddressStateEnumGu DependentCreateRequestPersonHomeAddressStateEnum = "GU"
	DependentCreateRequestPersonHomeAddressStateEnumHi DependentCreateRequestPersonHomeAddressStateEnum = "HI"
	DependentCreateRequestPersonHomeAddressStateEnumIa DependentCreateRequestPersonHomeAddressStateEnum = "IA"
	DependentCreateRequestPersonHomeAddressStateEnumID DependentCreateRequestPersonHomeAddressStateEnum = "ID"
	DependentCreateRequestPersonHomeAddressStateEnumIl DependentCreateRequestPersonHomeAddressStateEnum = "IL"
	DependentCreateRequestPersonHomeAddressStateEnumIn DependentCreateRequestPersonHomeAddressStateEnum = "IN"
	DependentCreateRequestPersonHomeAddressStateEnumKs DependentCreateRequestPersonHomeAddressStateEnum = "KS"
	DependentCreateRequestPersonHomeAddressStateEnumKy DependentCreateRequestPersonHomeAddressStateEnum = "KY"
	DependentCreateRequestPersonHomeAddressStateEnumLa DependentCreateRequestPersonHomeAddressStateEnum = "LA"
	DependentCreateRequestPersonHomeAddressStateEnumMa DependentCreateRequestPersonHomeAddressStateEnum = "MA"
	DependentCreateRequestPersonHomeAddressStateEnumMd DependentCreateRequestPersonHomeAddressStateEnum = "MD"
	DependentCreateRequestPersonHomeAddressStateEnumMe DependentCreateRequestPersonHomeAddressStateEnum = "ME"
	DependentCreateRequestPersonHomeAddressStateEnumMh DependentCreateRequestPersonHomeAddressStateEnum = "MH"
	DependentCreateRequestPersonHomeAddressStateEnumMi DependentCreateRequestPersonHomeAddressStateEnum = "MI"
	DependentCreateRequestPersonHomeAddressStateEnumMn DependentCreateRequestPersonHomeAddressStateEnum = "MN"
	DependentCreateRequestPersonHomeAddressStateEnumMo DependentCreateRequestPersonHomeAddressStateEnum = "MO"
	DependentCreateRequestPersonHomeAddressStateEnumMp DependentCreateRequestPersonHomeAddressStateEnum = "MP"
	DependentCreateRequestPersonHomeAddressStateEnumMs DependentCreateRequestPersonHomeAddressStateEnum = "MS"
	DependentCreateRequestPersonHomeAddressStateEnumMt DependentCreateRequestPersonHomeAddressStateEnum = "MT"
	DependentCreateRequestPersonHomeAddressStateEnumNc DependentCreateRequestPersonHomeAddressStateEnum = "NC"
	DependentCreateRequestPersonHomeAddressStateEnumNd DependentCreateRequestPersonHomeAddressStateEnum = "ND"
	DependentCreateRequestPersonHomeAddressStateEnumNe DependentCreateRequestPersonHomeAddressStateEnum = "NE"
	DependentCreateRequestPersonHomeAddressStateEnumNh DependentCreateRequestPersonHomeAddressStateEnum = "NH"
	DependentCreateRequestPersonHomeAddressStateEnumNj DependentCreateRequestPersonHomeAddressStateEnum = "NJ"
	DependentCreateRequestPersonHomeAddressStateEnumNm DependentCreateRequestPersonHomeAddressStateEnum = "NM"
	DependentCreateRequestPersonHomeAddressStateEnumNv DependentCreateRequestPersonHomeAddressStateEnum = "NV"
	DependentCreateRequestPersonHomeAddressStateEnumNy DependentCreateRequestPersonHomeAddressStateEnum = "NY"
	DependentCreateRequestPersonHomeAddressStateEnumOh DependentCreateRequestPersonHomeAddressStateEnum = "OH"
	DependentCreateRequestPersonHomeAddressStateEnumOk DependentCreateRequestPersonHomeAddressStateEnum = "OK"
	DependentCreateRequestPersonHomeAddressStateEnumOr DependentCreateRequestPersonHomeAddressStateEnum = "OR"
	DependentCreateRequestPersonHomeAddressStateEnumPa DependentCreateRequestPersonHomeAddressStateEnum = "PA"
	DependentCreateRequestPersonHomeAddressStateEnumPr DependentCreateRequestPersonHomeAddressStateEnum = "PR"
	DependentCreateRequestPersonHomeAddressStateEnumPw DependentCreateRequestPersonHomeAddressStateEnum = "PW"
	DependentCreateRequestPersonHomeAddressStateEnumRi DependentCreateRequestPersonHomeAddressStateEnum = "RI"
	DependentCreateRequestPersonHomeAddressStateEnumSc DependentCreateRequestPersonHomeAddressStateEnum = "SC"
	DependentCreateRequestPersonHomeAddressStateEnumSd DependentCreateRequestPersonHomeAddressStateEnum = "SD"
	DependentCreateRequestPersonHomeAddressStateEnumTn DependentCreateRequestPersonHomeAddressStateEnum = "TN"
	DependentCreateRequestPersonHomeAddressStateEnumTx DependentCreateRequestPersonHomeAddressStateEnum = "TX"
	DependentCreateRequestPersonHomeAddressStateEnumUm DependentCreateRequestPersonHomeAddressStateEnum = "UM"
	DependentCreateRequestPersonHomeAddressStateEnumUt DependentCreateRequestPersonHomeAddressStateEnum = "UT"
	DependentCreateRequestPersonHomeAddressStateEnumVa DependentCreateRequestPersonHomeAddressStateEnum = "VA"
	DependentCreateRequestPersonHomeAddressStateEnumVi DependentCreateRequestPersonHomeAddressStateEnum = "VI"
	DependentCreateRequestPersonHomeAddressStateEnumVt DependentCreateRequestPersonHomeAddressStateEnum = "VT"
	DependentCreateRequestPersonHomeAddressStateEnumWa DependentCreateRequestPersonHomeAddressStateEnum = "WA"
	DependentCreateRequestPersonHomeAddressStateEnumWi DependentCreateRequestPersonHomeAddressStateEnum = "WI"
	DependentCreateRequestPersonHomeAddressStateEnumWv DependentCreateRequestPersonHomeAddressStateEnum = "WV"
	DependentCreateRequestPersonHomeAddressStateEnumWy DependentCreateRequestPersonHomeAddressStateEnum = "WY"
)

// DependentCreateRequestPersonHomeAddress
// Home address of the person
type DependentCreateRequestPersonHomeAddress struct {
	City      string                                           `json:"city"`
	County    *string                                          `json:"county,omitempty"`
	State     DependentCreateRequestPersonHomeAddressStateEnum `json:"state"`
	StreetOne string                                           `json:"street_one"`
	StreetTwo *string                                          `json:"street_two,omitempty"`
	ZipCode   string                                           `json:"zip_code"`
}

type DependentCreateRequestPersonMailingAddressStateEnum string

const (
	DependentCreateRequestPersonMailingAddressStateEnumAk DependentCreateRequestPersonMailingAddressStateEnum = "AK"
	DependentCreateRequestPersonMailingAddressStateEnumAl DependentCreateRequestPersonMailingAddressStateEnum = "AL"
	DependentCreateRequestPersonMailingAddressStateEnumAr DependentCreateRequestPersonMailingAddressStateEnum = "AR"
	DependentCreateRequestPersonMailingAddressStateEnumAs DependentCreateRequestPersonMailingAddressStateEnum = "AS"
	DependentCreateRequestPersonMailingAddressStateEnumAz DependentCreateRequestPersonMailingAddressStateEnum = "AZ"
	DependentCreateRequestPersonMailingAddressStateEnumCa DependentCreateRequestPersonMailingAddressStateEnum = "CA"
	DependentCreateRequestPersonMailingAddressStateEnumCo DependentCreateRequestPersonMailingAddressStateEnum = "CO"
	DependentCreateRequestPersonMailingAddressStateEnumCt DependentCreateRequestPersonMailingAddressStateEnum = "CT"
	DependentCreateRequestPersonMailingAddressStateEnumDc DependentCreateRequestPersonMailingAddressStateEnum = "DC"
	DependentCreateRequestPersonMailingAddressStateEnumDe DependentCreateRequestPersonMailingAddressStateEnum = "DE"
	DependentCreateRequestPersonMailingAddressStateEnumFl DependentCreateRequestPersonMailingAddressStateEnum = "FL"
	DependentCreateRequestPersonMailingAddressStateEnumFm DependentCreateRequestPersonMailingAddressStateEnum = "FM"
	DependentCreateRequestPersonMailingAddressStateEnumGa DependentCreateRequestPersonMailingAddressStateEnum = "GA"
	DependentCreateRequestPersonMailingAddressStateEnumGu DependentCreateRequestPersonMailingAddressStateEnum = "GU"
	DependentCreateRequestPersonMailingAddressStateEnumHi DependentCreateRequestPersonMailingAddressStateEnum = "HI"
	DependentCreateRequestPersonMailingAddressStateEnumIa DependentCreateRequestPersonMailingAddressStateEnum = "IA"
	DependentCreateRequestPersonMailingAddressStateEnumID DependentCreateRequestPersonMailingAddressStateEnum = "ID"
	DependentCreateRequestPersonMailingAddressStateEnumIl DependentCreateRequestPersonMailingAddressStateEnum = "IL"
	DependentCreateRequestPersonMailingAddressStateEnumIn DependentCreateRequestPersonMailingAddressStateEnum = "IN"
	DependentCreateRequestPersonMailingAddressStateEnumKs DependentCreateRequestPersonMailingAddressStateEnum = "KS"
	DependentCreateRequestPersonMailingAddressStateEnumKy DependentCreateRequestPersonMailingAddressStateEnum = "KY"
	DependentCreateRequestPersonMailingAddressStateEnumLa DependentCreateRequestPersonMailingAddressStateEnum = "LA"
	DependentCreateRequestPersonMailingAddressStateEnumMa DependentCreateRequestPersonMailingAddressStateEnum = "MA"
	DependentCreateRequestPersonMailingAddressStateEnumMd DependentCreateRequestPersonMailingAddressStateEnum = "MD"
	DependentCreateRequestPersonMailingAddressStateEnumMe DependentCreateRequestPersonMailingAddressStateEnum = "ME"
	DependentCreateRequestPersonMailingAddressStateEnumMh DependentCreateRequestPersonMailingAddressStateEnum = "MH"
	DependentCreateRequestPersonMailingAddressStateEnumMi DependentCreateRequestPersonMailingAddressStateEnum = "MI"
	DependentCreateRequestPersonMailingAddressStateEnumMn DependentCreateRequestPersonMailingAddressStateEnum = "MN"
	DependentCreateRequestPersonMailingAddressStateEnumMo DependentCreateRequestPersonMailingAddressStateEnum = "MO"
	DependentCreateRequestPersonMailingAddressStateEnumMp DependentCreateRequestPersonMailingAddressStateEnum = "MP"
	DependentCreateRequestPersonMailingAddressStateEnumMs DependentCreateRequestPersonMailingAddressStateEnum = "MS"
	DependentCreateRequestPersonMailingAddressStateEnumMt DependentCreateRequestPersonMailingAddressStateEnum = "MT"
	DependentCreateRequestPersonMailingAddressStateEnumNc DependentCreateRequestPersonMailingAddressStateEnum = "NC"
	DependentCreateRequestPersonMailingAddressStateEnumNd DependentCreateRequestPersonMailingAddressStateEnum = "ND"
	DependentCreateRequestPersonMailingAddressStateEnumNe DependentCreateRequestPersonMailingAddressStateEnum = "NE"
	DependentCreateRequestPersonMailingAddressStateEnumNh DependentCreateRequestPersonMailingAddressStateEnum = "NH"
	DependentCreateRequestPersonMailingAddressStateEnumNj DependentCreateRequestPersonMailingAddressStateEnum = "NJ"
	DependentCreateRequestPersonMailingAddressStateEnumNm DependentCreateRequestPersonMailingAddressStateEnum = "NM"
	DependentCreateRequestPersonMailingAddressStateEnumNv DependentCreateRequestPersonMailingAddressStateEnum = "NV"
	DependentCreateRequestPersonMailingAddressStateEnumNy DependentCreateRequestPersonMailingAddressStateEnum = "NY"
	DependentCreateRequestPersonMailingAddressStateEnumOh DependentCreateRequestPersonMailingAddressStateEnum = "OH"
	DependentCreateRequestPersonMailingAddressStateEnumOk DependentCreateRequestPersonMailingAddressStateEnum = "OK"
	DependentCreateRequestPersonMailingAddressStateEnumOr DependentCreateRequestPersonMailingAddressStateEnum = "OR"
	DependentCreateRequestPersonMailingAddressStateEnumPa DependentCreateRequestPersonMailingAddressStateEnum = "PA"
	DependentCreateRequestPersonMailingAddressStateEnumPr DependentCreateRequestPersonMailingAddressStateEnum = "PR"
	DependentCreateRequestPersonMailingAddressStateEnumPw DependentCreateRequestPersonMailingAddressStateEnum = "PW"
	DependentCreateRequestPersonMailingAddressStateEnumRi DependentCreateRequestPersonMailingAddressStateEnum = "RI"
	DependentCreateRequestPersonMailingAddressStateEnumSc DependentCreateRequestPersonMailingAddressStateEnum = "SC"
	DependentCreateRequestPersonMailingAddressStateEnumSd DependentCreateRequestPersonMailingAddressStateEnum = "SD"
	DependentCreateRequestPersonMailingAddressStateEnumTn DependentCreateRequestPersonMailingAddressStateEnum = "TN"
	DependentCreateRequestPersonMailingAddressStateEnumTx DependentCreateRequestPersonMailingAddressStateEnum = "TX"
	DependentCreateRequestPersonMailingAddressStateEnumUm DependentCreateRequestPersonMailingAddressStateEnum = "UM"
	DependentCreateRequestPersonMailingAddressStateEnumUt DependentCreateRequestPersonMailingAddressStateEnum = "UT"
	DependentCreateRequestPersonMailingAddressStateEnumVa DependentCreateRequestPersonMailingAddressStateEnum = "VA"
	DependentCreateRequestPersonMailingAddressStateEnumVi DependentCreateRequestPersonMailingAddressStateEnum = "VI"
	DependentCreateRequestPersonMailingAddressStateEnumVt DependentCreateRequestPersonMailingAddressStateEnum = "VT"
	DependentCreateRequestPersonMailingAddressStateEnumWa DependentCreateRequestPersonMailingAddressStateEnum = "WA"
	DependentCreateRequestPersonMailingAddressStateEnumWi DependentCreateRequestPersonMailingAddressStateEnum = "WI"
	DependentCreateRequestPersonMailingAddressStateEnumWv DependentCreateRequestPersonMailingAddressStateEnum = "WV"
	DependentCreateRequestPersonMailingAddressStateEnumWy DependentCreateRequestPersonMailingAddressStateEnum = "WY"
)

// DependentCreateRequestPersonMailingAddress
// Mailing address of the person
type DependentCreateRequestPersonMailingAddress struct {
	City      string                                              `json:"city"`
	County    *string                                             `json:"county,omitempty"`
	State     DependentCreateRequestPersonMailingAddressStateEnum `json:"state"`
	StreetOne string                                              `json:"street_one"`
	StreetTwo *string                                             `json:"street_two,omitempty"`
	ZipCode   string                                              `json:"zip_code"`
}

type DependentCreateRequestPersonMaritalStatusEnum string

const (
	DependentCreateRequestPersonMaritalStatusEnumDivorced         DependentCreateRequestPersonMaritalStatusEnum = "divorced"
	DependentCreateRequestPersonMaritalStatusEnumDomesticPartner  DependentCreateRequestPersonMaritalStatusEnum = "domestic-partner"
	DependentCreateRequestPersonMaritalStatusEnumLegallySeparated DependentCreateRequestPersonMaritalStatusEnum = "legally-separated"
	DependentCreateRequestPersonMaritalStatusEnumMarried          DependentCreateRequestPersonMaritalStatusEnum = "married"
	DependentCreateRequestPersonMaritalStatusEnumSingle           DependentCreateRequestPersonMaritalStatusEnum = "single"
	DependentCreateRequestPersonMaritalStatusEnumWidowed          DependentCreateRequestPersonMaritalStatusEnum = "widowed"
)

type DependentCreateRequestPersonSexEnum string

const (
	DependentCreateRequestPersonSexEnumF DependentCreateRequestPersonSexEnum = "F"
	DependentCreateRequestPersonSexEnumM DependentCreateRequestPersonSexEnum = "M"
	DependentCreateRequestPersonSexEnumU DependentCreateRequestPersonSexEnum = "U"
	DependentCreateRequestPersonSexEnumX DependentCreateRequestPersonSexEnum = "X"
)

// DependentCreateRequestPerson
// Personal information for the dependent
type DependentCreateRequestPerson struct {
	Contact        *DependentCreateRequestPersonContact           `json:"contact,omitempty"`
	DateOfBirth    time.Time                                      `json:"date_of_birth"`
	Details        *DependentCreateRequestPersonDetails           `json:"details,omitempty"`
	FirstName      string                                         `json:"first_name"`
	HomeAddress    *DependentCreateRequestPersonHomeAddress       `json:"home_address,omitempty"`
	LastName       string                                         `json:"last_name"`
	MailingAddress *DependentCreateRequestPersonMailingAddress    `json:"mailing_address,omitempty"`
	MaritalStatus  *DependentCreateRequestPersonMaritalStatusEnum `json:"marital_status,omitempty"`
	MiddleName     *string                                        `json:"middle_name,omitempty"`
	Sex            DependentCreateRequestPersonSexEnum            `json:"sex"`
	Ssn            *string                                        `json:"ssn,omitempty"`
	Suffix         *string                                        `json:"suffix,omitempty"`
}

type DependentCreateRequestRelationshipEnum string

const (
	DependentCreateRequestRelationshipEnumAdoptedChild      DependentCreateRequestRelationshipEnum = "adopted-child"
	DependentCreateRequestRelationshipEnumChild             DependentCreateRequestRelationshipEnum = "child"
	DependentCreateRequestRelationshipEnumCivilUnion        DependentCreateRequestRelationshipEnum = "civil-union"
	DependentCreateRequestRelationshipEnumDomesticPartner   DependentCreateRequestRelationshipEnum = "domestic-partner"
	DependentCreateRequestRelationshipEnumExSpouse          DependentCreateRequestRelationshipEnum = "ex-spouse"
	DependentCreateRequestRelationshipEnumFosterChild       DependentCreateRequestRelationshipEnum = "foster-child"
	DependentCreateRequestRelationshipEnumGrandchild        DependentCreateRequestRelationshipEnum = "grandchild"
	DependentCreateRequestRelationshipEnumLegalGuardianship DependentCreateRequestRelationshipEnum = "legal-guardianship"
	DependentCreateRequestRelationshipEnumOther             DependentCreateRequestRelationshipEnum = "other"
	DependentCreateRequestRelationshipEnumSpouse            DependentCreateRequestRelationshipEnum = "spouse"
	DependentCreateRequestRelationshipEnumStepChild         DependentCreateRequestRelationshipEnum = "step-child"
)

type DependentCreateRequest struct {
	Person       DependentCreateRequestPerson           `json:"person"`
	Relationship DependentCreateRequestRelationshipEnum `json:"relationship"`
}
