package shared

import (
	"time"
)

type DependentResultPersonContactEmailAddressTypeEnum string

const (
	DependentResultPersonContactEmailAddressTypeEnumHome DependentResultPersonContactEmailAddressTypeEnum = "home"
	DependentResultPersonContactEmailAddressTypeEnumWork DependentResultPersonContactEmailAddressTypeEnum = "work"
)

type DependentResultPersonContactPreferredMethodEnum string

const (
	DependentResultPersonContactPreferredMethodEnumEmail     DependentResultPersonContactPreferredMethodEnum = "email"
	DependentResultPersonContactPreferredMethodEnumHomePhone DependentResultPersonContactPreferredMethodEnum = "home-phone"
	DependentResultPersonContactPreferredMethodEnumMail      DependentResultPersonContactPreferredMethodEnum = "mail"
	DependentResultPersonContactPreferredMethodEnumOther     DependentResultPersonContactPreferredMethodEnum = "other"
	DependentResultPersonContactPreferredMethodEnumWorkPhone DependentResultPersonContactPreferredMethodEnum = "work-phone"
)

// DependentResultPersonContact
// Contact information for the person
type DependentResultPersonContact struct {
	EmailAddress      *string                                           `json:"email_address,omitempty"`
	EmailAddressType  *DependentResultPersonContactEmailAddressTypeEnum `json:"email_address_type,omitempty"`
	HomePhone         *string                                           `json:"home_phone,omitempty"`
	PreferredLanguage *string                                           `json:"preferred_language,omitempty"`
	PreferredMethod   *DependentResultPersonContactPreferredMethodEnum  `json:"preferred_method,omitempty"`
	SpeaksEnglish     *bool                                             `json:"speaks_english,omitempty"`
	WorkPhone         *string                                           `json:"work_phone,omitempty"`
}

type DependentResultPersonDetailsAmericanIndianStateEnum string

const (
	DependentResultPersonDetailsAmericanIndianStateEnumAk DependentResultPersonDetailsAmericanIndianStateEnum = "AK"
	DependentResultPersonDetailsAmericanIndianStateEnumAl DependentResultPersonDetailsAmericanIndianStateEnum = "AL"
	DependentResultPersonDetailsAmericanIndianStateEnumAr DependentResultPersonDetailsAmericanIndianStateEnum = "AR"
	DependentResultPersonDetailsAmericanIndianStateEnumAs DependentResultPersonDetailsAmericanIndianStateEnum = "AS"
	DependentResultPersonDetailsAmericanIndianStateEnumAz DependentResultPersonDetailsAmericanIndianStateEnum = "AZ"
	DependentResultPersonDetailsAmericanIndianStateEnumCa DependentResultPersonDetailsAmericanIndianStateEnum = "CA"
	DependentResultPersonDetailsAmericanIndianStateEnumCo DependentResultPersonDetailsAmericanIndianStateEnum = "CO"
	DependentResultPersonDetailsAmericanIndianStateEnumCt DependentResultPersonDetailsAmericanIndianStateEnum = "CT"
	DependentResultPersonDetailsAmericanIndianStateEnumDc DependentResultPersonDetailsAmericanIndianStateEnum = "DC"
	DependentResultPersonDetailsAmericanIndianStateEnumDe DependentResultPersonDetailsAmericanIndianStateEnum = "DE"
	DependentResultPersonDetailsAmericanIndianStateEnumFl DependentResultPersonDetailsAmericanIndianStateEnum = "FL"
	DependentResultPersonDetailsAmericanIndianStateEnumFm DependentResultPersonDetailsAmericanIndianStateEnum = "FM"
	DependentResultPersonDetailsAmericanIndianStateEnumGa DependentResultPersonDetailsAmericanIndianStateEnum = "GA"
	DependentResultPersonDetailsAmericanIndianStateEnumGu DependentResultPersonDetailsAmericanIndianStateEnum = "GU"
	DependentResultPersonDetailsAmericanIndianStateEnumHi DependentResultPersonDetailsAmericanIndianStateEnum = "HI"
	DependentResultPersonDetailsAmericanIndianStateEnumIa DependentResultPersonDetailsAmericanIndianStateEnum = "IA"
	DependentResultPersonDetailsAmericanIndianStateEnumID DependentResultPersonDetailsAmericanIndianStateEnum = "ID"
	DependentResultPersonDetailsAmericanIndianStateEnumIl DependentResultPersonDetailsAmericanIndianStateEnum = "IL"
	DependentResultPersonDetailsAmericanIndianStateEnumIn DependentResultPersonDetailsAmericanIndianStateEnum = "IN"
	DependentResultPersonDetailsAmericanIndianStateEnumKs DependentResultPersonDetailsAmericanIndianStateEnum = "KS"
	DependentResultPersonDetailsAmericanIndianStateEnumKy DependentResultPersonDetailsAmericanIndianStateEnum = "KY"
	DependentResultPersonDetailsAmericanIndianStateEnumLa DependentResultPersonDetailsAmericanIndianStateEnum = "LA"
	DependentResultPersonDetailsAmericanIndianStateEnumMa DependentResultPersonDetailsAmericanIndianStateEnum = "MA"
	DependentResultPersonDetailsAmericanIndianStateEnumMd DependentResultPersonDetailsAmericanIndianStateEnum = "MD"
	DependentResultPersonDetailsAmericanIndianStateEnumMe DependentResultPersonDetailsAmericanIndianStateEnum = "ME"
	DependentResultPersonDetailsAmericanIndianStateEnumMh DependentResultPersonDetailsAmericanIndianStateEnum = "MH"
	DependentResultPersonDetailsAmericanIndianStateEnumMi DependentResultPersonDetailsAmericanIndianStateEnum = "MI"
	DependentResultPersonDetailsAmericanIndianStateEnumMn DependentResultPersonDetailsAmericanIndianStateEnum = "MN"
	DependentResultPersonDetailsAmericanIndianStateEnumMo DependentResultPersonDetailsAmericanIndianStateEnum = "MO"
	DependentResultPersonDetailsAmericanIndianStateEnumMp DependentResultPersonDetailsAmericanIndianStateEnum = "MP"
	DependentResultPersonDetailsAmericanIndianStateEnumMs DependentResultPersonDetailsAmericanIndianStateEnum = "MS"
	DependentResultPersonDetailsAmericanIndianStateEnumMt DependentResultPersonDetailsAmericanIndianStateEnum = "MT"
	DependentResultPersonDetailsAmericanIndianStateEnumNc DependentResultPersonDetailsAmericanIndianStateEnum = "NC"
	DependentResultPersonDetailsAmericanIndianStateEnumNd DependentResultPersonDetailsAmericanIndianStateEnum = "ND"
	DependentResultPersonDetailsAmericanIndianStateEnumNe DependentResultPersonDetailsAmericanIndianStateEnum = "NE"
	DependentResultPersonDetailsAmericanIndianStateEnumNh DependentResultPersonDetailsAmericanIndianStateEnum = "NH"
	DependentResultPersonDetailsAmericanIndianStateEnumNj DependentResultPersonDetailsAmericanIndianStateEnum = "NJ"
	DependentResultPersonDetailsAmericanIndianStateEnumNm DependentResultPersonDetailsAmericanIndianStateEnum = "NM"
	DependentResultPersonDetailsAmericanIndianStateEnumNv DependentResultPersonDetailsAmericanIndianStateEnum = "NV"
	DependentResultPersonDetailsAmericanIndianStateEnumNy DependentResultPersonDetailsAmericanIndianStateEnum = "NY"
	DependentResultPersonDetailsAmericanIndianStateEnumOh DependentResultPersonDetailsAmericanIndianStateEnum = "OH"
	DependentResultPersonDetailsAmericanIndianStateEnumOk DependentResultPersonDetailsAmericanIndianStateEnum = "OK"
	DependentResultPersonDetailsAmericanIndianStateEnumOr DependentResultPersonDetailsAmericanIndianStateEnum = "OR"
	DependentResultPersonDetailsAmericanIndianStateEnumPa DependentResultPersonDetailsAmericanIndianStateEnum = "PA"
	DependentResultPersonDetailsAmericanIndianStateEnumPr DependentResultPersonDetailsAmericanIndianStateEnum = "PR"
	DependentResultPersonDetailsAmericanIndianStateEnumPw DependentResultPersonDetailsAmericanIndianStateEnum = "PW"
	DependentResultPersonDetailsAmericanIndianStateEnumRi DependentResultPersonDetailsAmericanIndianStateEnum = "RI"
	DependentResultPersonDetailsAmericanIndianStateEnumSc DependentResultPersonDetailsAmericanIndianStateEnum = "SC"
	DependentResultPersonDetailsAmericanIndianStateEnumSd DependentResultPersonDetailsAmericanIndianStateEnum = "SD"
	DependentResultPersonDetailsAmericanIndianStateEnumTn DependentResultPersonDetailsAmericanIndianStateEnum = "TN"
	DependentResultPersonDetailsAmericanIndianStateEnumTx DependentResultPersonDetailsAmericanIndianStateEnum = "TX"
	DependentResultPersonDetailsAmericanIndianStateEnumUm DependentResultPersonDetailsAmericanIndianStateEnum = "UM"
	DependentResultPersonDetailsAmericanIndianStateEnumUt DependentResultPersonDetailsAmericanIndianStateEnum = "UT"
	DependentResultPersonDetailsAmericanIndianStateEnumVa DependentResultPersonDetailsAmericanIndianStateEnum = "VA"
	DependentResultPersonDetailsAmericanIndianStateEnumVi DependentResultPersonDetailsAmericanIndianStateEnum = "VI"
	DependentResultPersonDetailsAmericanIndianStateEnumVt DependentResultPersonDetailsAmericanIndianStateEnum = "VT"
	DependentResultPersonDetailsAmericanIndianStateEnumWa DependentResultPersonDetailsAmericanIndianStateEnum = "WA"
	DependentResultPersonDetailsAmericanIndianStateEnumWi DependentResultPersonDetailsAmericanIndianStateEnum = "WI"
	DependentResultPersonDetailsAmericanIndianStateEnumWv DependentResultPersonDetailsAmericanIndianStateEnum = "WV"
	DependentResultPersonDetailsAmericanIndianStateEnumWy DependentResultPersonDetailsAmericanIndianStateEnum = "WY"
)

// DependentResultPersonDetailsAmericanIndian
// American Indian status details (if applicable)
type DependentResultPersonDetailsAmericanIndian struct {
	State *DependentResultPersonDetailsAmericanIndianStateEnum `json:"state,omitempty"`
	Tribe *string                                              `json:"tribe,omitempty"`
}

// DependentResultPersonDetailsDisability
// Disability details (if applicable)
type DependentResultPersonDetailsDisability struct {
	Communication *bool   `json:"communication,omitempty"`
	Disabled      *bool   `json:"disabled,omitempty"`
	Reason        *string `json:"reason,omitempty"`
}

type DependentResultPersonDetailsTobaccoTypesEnum string

const (
	DependentResultPersonDetailsTobaccoTypesEnumChewingTobacco DependentResultPersonDetailsTobaccoTypesEnum = "chewing-tobacco"
	DependentResultPersonDetailsTobaccoTypesEnumCigarettes     DependentResultPersonDetailsTobaccoTypesEnum = "cigarettes"
	DependentResultPersonDetailsTobaccoTypesEnumPipe           DependentResultPersonDetailsTobaccoTypesEnum = "pipe"
)

// DependentResultPersonDetailsTobacco
// Tobacco usage details (if applicable)
type DependentResultPersonDetailsTobacco struct {
	Duration  *string                                        `json:"duration,omitempty"`
	Frequency *string                                        `json:"frequency,omitempty"`
	Types     []DependentResultPersonDetailsTobaccoTypesEnum `json:"types,omitempty"`
	User      *bool                                          `json:"user,omitempty"`
}

// DependentResultPersonDetails
// Additional personal details of the person
type DependentResultPersonDetails struct {
	AmericanIndian *DependentResultPersonDetailsAmericanIndian `json:"american_indian,omitempty"`
	Disability     *DependentResultPersonDetailsDisability     `json:"disability,omitempty"`
	IsMilitary     *bool                                       `json:"is_military,omitempty"`
	IsStudent      *bool                                       `json:"is_student,omitempty"`
	Tobacco        *DependentResultPersonDetailsTobacco        `json:"tobacco,omitempty"`
}

type DependentResultPersonHomeAddressStateEnum string

const (
	DependentResultPersonHomeAddressStateEnumAk DependentResultPersonHomeAddressStateEnum = "AK"
	DependentResultPersonHomeAddressStateEnumAl DependentResultPersonHomeAddressStateEnum = "AL"
	DependentResultPersonHomeAddressStateEnumAr DependentResultPersonHomeAddressStateEnum = "AR"
	DependentResultPersonHomeAddressStateEnumAs DependentResultPersonHomeAddressStateEnum = "AS"
	DependentResultPersonHomeAddressStateEnumAz DependentResultPersonHomeAddressStateEnum = "AZ"
	DependentResultPersonHomeAddressStateEnumCa DependentResultPersonHomeAddressStateEnum = "CA"
	DependentResultPersonHomeAddressStateEnumCo DependentResultPersonHomeAddressStateEnum = "CO"
	DependentResultPersonHomeAddressStateEnumCt DependentResultPersonHomeAddressStateEnum = "CT"
	DependentResultPersonHomeAddressStateEnumDc DependentResultPersonHomeAddressStateEnum = "DC"
	DependentResultPersonHomeAddressStateEnumDe DependentResultPersonHomeAddressStateEnum = "DE"
	DependentResultPersonHomeAddressStateEnumFl DependentResultPersonHomeAddressStateEnum = "FL"
	DependentResultPersonHomeAddressStateEnumFm DependentResultPersonHomeAddressStateEnum = "FM"
	DependentResultPersonHomeAddressStateEnumGa DependentResultPersonHomeAddressStateEnum = "GA"
	DependentResultPersonHomeAddressStateEnumGu DependentResultPersonHomeAddressStateEnum = "GU"
	DependentResultPersonHomeAddressStateEnumHi DependentResultPersonHomeAddressStateEnum = "HI"
	DependentResultPersonHomeAddressStateEnumIa DependentResultPersonHomeAddressStateEnum = "IA"
	DependentResultPersonHomeAddressStateEnumID DependentResultPersonHomeAddressStateEnum = "ID"
	DependentResultPersonHomeAddressStateEnumIl DependentResultPersonHomeAddressStateEnum = "IL"
	DependentResultPersonHomeAddressStateEnumIn DependentResultPersonHomeAddressStateEnum = "IN"
	DependentResultPersonHomeAddressStateEnumKs DependentResultPersonHomeAddressStateEnum = "KS"
	DependentResultPersonHomeAddressStateEnumKy DependentResultPersonHomeAddressStateEnum = "KY"
	DependentResultPersonHomeAddressStateEnumLa DependentResultPersonHomeAddressStateEnum = "LA"
	DependentResultPersonHomeAddressStateEnumMa DependentResultPersonHomeAddressStateEnum = "MA"
	DependentResultPersonHomeAddressStateEnumMd DependentResultPersonHomeAddressStateEnum = "MD"
	DependentResultPersonHomeAddressStateEnumMe DependentResultPersonHomeAddressStateEnum = "ME"
	DependentResultPersonHomeAddressStateEnumMh DependentResultPersonHomeAddressStateEnum = "MH"
	DependentResultPersonHomeAddressStateEnumMi DependentResultPersonHomeAddressStateEnum = "MI"
	DependentResultPersonHomeAddressStateEnumMn DependentResultPersonHomeAddressStateEnum = "MN"
	DependentResultPersonHomeAddressStateEnumMo DependentResultPersonHomeAddressStateEnum = "MO"
	DependentResultPersonHomeAddressStateEnumMp DependentResultPersonHomeAddressStateEnum = "MP"
	DependentResultPersonHomeAddressStateEnumMs DependentResultPersonHomeAddressStateEnum = "MS"
	DependentResultPersonHomeAddressStateEnumMt DependentResultPersonHomeAddressStateEnum = "MT"
	DependentResultPersonHomeAddressStateEnumNc DependentResultPersonHomeAddressStateEnum = "NC"
	DependentResultPersonHomeAddressStateEnumNd DependentResultPersonHomeAddressStateEnum = "ND"
	DependentResultPersonHomeAddressStateEnumNe DependentResultPersonHomeAddressStateEnum = "NE"
	DependentResultPersonHomeAddressStateEnumNh DependentResultPersonHomeAddressStateEnum = "NH"
	DependentResultPersonHomeAddressStateEnumNj DependentResultPersonHomeAddressStateEnum = "NJ"
	DependentResultPersonHomeAddressStateEnumNm DependentResultPersonHomeAddressStateEnum = "NM"
	DependentResultPersonHomeAddressStateEnumNv DependentResultPersonHomeAddressStateEnum = "NV"
	DependentResultPersonHomeAddressStateEnumNy DependentResultPersonHomeAddressStateEnum = "NY"
	DependentResultPersonHomeAddressStateEnumOh DependentResultPersonHomeAddressStateEnum = "OH"
	DependentResultPersonHomeAddressStateEnumOk DependentResultPersonHomeAddressStateEnum = "OK"
	DependentResultPersonHomeAddressStateEnumOr DependentResultPersonHomeAddressStateEnum = "OR"
	DependentResultPersonHomeAddressStateEnumPa DependentResultPersonHomeAddressStateEnum = "PA"
	DependentResultPersonHomeAddressStateEnumPr DependentResultPersonHomeAddressStateEnum = "PR"
	DependentResultPersonHomeAddressStateEnumPw DependentResultPersonHomeAddressStateEnum = "PW"
	DependentResultPersonHomeAddressStateEnumRi DependentResultPersonHomeAddressStateEnum = "RI"
	DependentResultPersonHomeAddressStateEnumSc DependentResultPersonHomeAddressStateEnum = "SC"
	DependentResultPersonHomeAddressStateEnumSd DependentResultPersonHomeAddressStateEnum = "SD"
	DependentResultPersonHomeAddressStateEnumTn DependentResultPersonHomeAddressStateEnum = "TN"
	DependentResultPersonHomeAddressStateEnumTx DependentResultPersonHomeAddressStateEnum = "TX"
	DependentResultPersonHomeAddressStateEnumUm DependentResultPersonHomeAddressStateEnum = "UM"
	DependentResultPersonHomeAddressStateEnumUt DependentResultPersonHomeAddressStateEnum = "UT"
	DependentResultPersonHomeAddressStateEnumVa DependentResultPersonHomeAddressStateEnum = "VA"
	DependentResultPersonHomeAddressStateEnumVi DependentResultPersonHomeAddressStateEnum = "VI"
	DependentResultPersonHomeAddressStateEnumVt DependentResultPersonHomeAddressStateEnum = "VT"
	DependentResultPersonHomeAddressStateEnumWa DependentResultPersonHomeAddressStateEnum = "WA"
	DependentResultPersonHomeAddressStateEnumWi DependentResultPersonHomeAddressStateEnum = "WI"
	DependentResultPersonHomeAddressStateEnumWv DependentResultPersonHomeAddressStateEnum = "WV"
	DependentResultPersonHomeAddressStateEnumWy DependentResultPersonHomeAddressStateEnum = "WY"
)

// DependentResultPersonHomeAddress
// Home address of the person
type DependentResultPersonHomeAddress struct {
	City      string                                    `json:"city"`
	County    *string                                   `json:"county,omitempty"`
	State     DependentResultPersonHomeAddressStateEnum `json:"state"`
	StreetOne string                                    `json:"street_one"`
	StreetTwo *string                                   `json:"street_two,omitempty"`
	ZipCode   string                                    `json:"zip_code"`
}

type DependentResultPersonMailingAddressStateEnum string

const (
	DependentResultPersonMailingAddressStateEnumAk DependentResultPersonMailingAddressStateEnum = "AK"
	DependentResultPersonMailingAddressStateEnumAl DependentResultPersonMailingAddressStateEnum = "AL"
	DependentResultPersonMailingAddressStateEnumAr DependentResultPersonMailingAddressStateEnum = "AR"
	DependentResultPersonMailingAddressStateEnumAs DependentResultPersonMailingAddressStateEnum = "AS"
	DependentResultPersonMailingAddressStateEnumAz DependentResultPersonMailingAddressStateEnum = "AZ"
	DependentResultPersonMailingAddressStateEnumCa DependentResultPersonMailingAddressStateEnum = "CA"
	DependentResultPersonMailingAddressStateEnumCo DependentResultPersonMailingAddressStateEnum = "CO"
	DependentResultPersonMailingAddressStateEnumCt DependentResultPersonMailingAddressStateEnum = "CT"
	DependentResultPersonMailingAddressStateEnumDc DependentResultPersonMailingAddressStateEnum = "DC"
	DependentResultPersonMailingAddressStateEnumDe DependentResultPersonMailingAddressStateEnum = "DE"
	DependentResultPersonMailingAddressStateEnumFl DependentResultPersonMailingAddressStateEnum = "FL"
	DependentResultPersonMailingAddressStateEnumFm DependentResultPersonMailingAddressStateEnum = "FM"
	DependentResultPersonMailingAddressStateEnumGa DependentResultPersonMailingAddressStateEnum = "GA"
	DependentResultPersonMailingAddressStateEnumGu DependentResultPersonMailingAddressStateEnum = "GU"
	DependentResultPersonMailingAddressStateEnumHi DependentResultPersonMailingAddressStateEnum = "HI"
	DependentResultPersonMailingAddressStateEnumIa DependentResultPersonMailingAddressStateEnum = "IA"
	DependentResultPersonMailingAddressStateEnumID DependentResultPersonMailingAddressStateEnum = "ID"
	DependentResultPersonMailingAddressStateEnumIl DependentResultPersonMailingAddressStateEnum = "IL"
	DependentResultPersonMailingAddressStateEnumIn DependentResultPersonMailingAddressStateEnum = "IN"
	DependentResultPersonMailingAddressStateEnumKs DependentResultPersonMailingAddressStateEnum = "KS"
	DependentResultPersonMailingAddressStateEnumKy DependentResultPersonMailingAddressStateEnum = "KY"
	DependentResultPersonMailingAddressStateEnumLa DependentResultPersonMailingAddressStateEnum = "LA"
	DependentResultPersonMailingAddressStateEnumMa DependentResultPersonMailingAddressStateEnum = "MA"
	DependentResultPersonMailingAddressStateEnumMd DependentResultPersonMailingAddressStateEnum = "MD"
	DependentResultPersonMailingAddressStateEnumMe DependentResultPersonMailingAddressStateEnum = "ME"
	DependentResultPersonMailingAddressStateEnumMh DependentResultPersonMailingAddressStateEnum = "MH"
	DependentResultPersonMailingAddressStateEnumMi DependentResultPersonMailingAddressStateEnum = "MI"
	DependentResultPersonMailingAddressStateEnumMn DependentResultPersonMailingAddressStateEnum = "MN"
	DependentResultPersonMailingAddressStateEnumMo DependentResultPersonMailingAddressStateEnum = "MO"
	DependentResultPersonMailingAddressStateEnumMp DependentResultPersonMailingAddressStateEnum = "MP"
	DependentResultPersonMailingAddressStateEnumMs DependentResultPersonMailingAddressStateEnum = "MS"
	DependentResultPersonMailingAddressStateEnumMt DependentResultPersonMailingAddressStateEnum = "MT"
	DependentResultPersonMailingAddressStateEnumNc DependentResultPersonMailingAddressStateEnum = "NC"
	DependentResultPersonMailingAddressStateEnumNd DependentResultPersonMailingAddressStateEnum = "ND"
	DependentResultPersonMailingAddressStateEnumNe DependentResultPersonMailingAddressStateEnum = "NE"
	DependentResultPersonMailingAddressStateEnumNh DependentResultPersonMailingAddressStateEnum = "NH"
	DependentResultPersonMailingAddressStateEnumNj DependentResultPersonMailingAddressStateEnum = "NJ"
	DependentResultPersonMailingAddressStateEnumNm DependentResultPersonMailingAddressStateEnum = "NM"
	DependentResultPersonMailingAddressStateEnumNv DependentResultPersonMailingAddressStateEnum = "NV"
	DependentResultPersonMailingAddressStateEnumNy DependentResultPersonMailingAddressStateEnum = "NY"
	DependentResultPersonMailingAddressStateEnumOh DependentResultPersonMailingAddressStateEnum = "OH"
	DependentResultPersonMailingAddressStateEnumOk DependentResultPersonMailingAddressStateEnum = "OK"
	DependentResultPersonMailingAddressStateEnumOr DependentResultPersonMailingAddressStateEnum = "OR"
	DependentResultPersonMailingAddressStateEnumPa DependentResultPersonMailingAddressStateEnum = "PA"
	DependentResultPersonMailingAddressStateEnumPr DependentResultPersonMailingAddressStateEnum = "PR"
	DependentResultPersonMailingAddressStateEnumPw DependentResultPersonMailingAddressStateEnum = "PW"
	DependentResultPersonMailingAddressStateEnumRi DependentResultPersonMailingAddressStateEnum = "RI"
	DependentResultPersonMailingAddressStateEnumSc DependentResultPersonMailingAddressStateEnum = "SC"
	DependentResultPersonMailingAddressStateEnumSd DependentResultPersonMailingAddressStateEnum = "SD"
	DependentResultPersonMailingAddressStateEnumTn DependentResultPersonMailingAddressStateEnum = "TN"
	DependentResultPersonMailingAddressStateEnumTx DependentResultPersonMailingAddressStateEnum = "TX"
	DependentResultPersonMailingAddressStateEnumUm DependentResultPersonMailingAddressStateEnum = "UM"
	DependentResultPersonMailingAddressStateEnumUt DependentResultPersonMailingAddressStateEnum = "UT"
	DependentResultPersonMailingAddressStateEnumVa DependentResultPersonMailingAddressStateEnum = "VA"
	DependentResultPersonMailingAddressStateEnumVi DependentResultPersonMailingAddressStateEnum = "VI"
	DependentResultPersonMailingAddressStateEnumVt DependentResultPersonMailingAddressStateEnum = "VT"
	DependentResultPersonMailingAddressStateEnumWa DependentResultPersonMailingAddressStateEnum = "WA"
	DependentResultPersonMailingAddressStateEnumWi DependentResultPersonMailingAddressStateEnum = "WI"
	DependentResultPersonMailingAddressStateEnumWv DependentResultPersonMailingAddressStateEnum = "WV"
	DependentResultPersonMailingAddressStateEnumWy DependentResultPersonMailingAddressStateEnum = "WY"
)

// DependentResultPersonMailingAddress
// Mailing address of the person
type DependentResultPersonMailingAddress struct {
	City      string                                       `json:"city"`
	County    *string                                      `json:"county,omitempty"`
	State     DependentResultPersonMailingAddressStateEnum `json:"state"`
	StreetOne string                                       `json:"street_one"`
	StreetTwo *string                                      `json:"street_two,omitempty"`
	ZipCode   string                                       `json:"zip_code"`
}

type DependentResultPersonMaritalStatusEnum string

const (
	DependentResultPersonMaritalStatusEnumDivorced         DependentResultPersonMaritalStatusEnum = "divorced"
	DependentResultPersonMaritalStatusEnumDomesticPartner  DependentResultPersonMaritalStatusEnum = "domestic-partner"
	DependentResultPersonMaritalStatusEnumLegallySeparated DependentResultPersonMaritalStatusEnum = "legally-separated"
	DependentResultPersonMaritalStatusEnumMarried          DependentResultPersonMaritalStatusEnum = "married"
	DependentResultPersonMaritalStatusEnumSingle           DependentResultPersonMaritalStatusEnum = "single"
	DependentResultPersonMaritalStatusEnumWidowed          DependentResultPersonMaritalStatusEnum = "widowed"
)

type DependentResultPersonSexEnum string

const (
	DependentResultPersonSexEnumF DependentResultPersonSexEnum = "F"
	DependentResultPersonSexEnumM DependentResultPersonSexEnum = "M"
	DependentResultPersonSexEnumU DependentResultPersonSexEnum = "U"
	DependentResultPersonSexEnumX DependentResultPersonSexEnum = "X"
)

// DependentResultPerson
// Personal information for the dependent
type DependentResultPerson struct {
	Contact        *DependentResultPersonContact           `json:"contact,omitempty"`
	DateOfBirth    time.Time                               `json:"date_of_birth"`
	Details        *DependentResultPersonDetails           `json:"details,omitempty"`
	FirstName      string                                  `json:"first_name"`
	HomeAddress    *DependentResultPersonHomeAddress       `json:"home_address,omitempty"`
	LastName       string                                  `json:"last_name"`
	MailingAddress *DependentResultPersonMailingAddress    `json:"mailing_address,omitempty"`
	MaritalStatus  *DependentResultPersonMaritalStatusEnum `json:"marital_status,omitempty"`
	MiddleName     *string                                 `json:"middle_name,omitempty"`
	Sex            DependentResultPersonSexEnum            `json:"sex"`
	Ssn            *string                                 `json:"ssn,omitempty"`
	Suffix         *string                                 `json:"suffix,omitempty"`
}

type DependentResultRelationshipEnum string

const (
	DependentResultRelationshipEnumAdoptedChild      DependentResultRelationshipEnum = "adopted-child"
	DependentResultRelationshipEnumChild             DependentResultRelationshipEnum = "child"
	DependentResultRelationshipEnumCivilUnion        DependentResultRelationshipEnum = "civil-union"
	DependentResultRelationshipEnumDomesticPartner   DependentResultRelationshipEnum = "domestic-partner"
	DependentResultRelationshipEnumExSpouse          DependentResultRelationshipEnum = "ex-spouse"
	DependentResultRelationshipEnumFosterChild       DependentResultRelationshipEnum = "foster-child"
	DependentResultRelationshipEnumGrandchild        DependentResultRelationshipEnum = "grandchild"
	DependentResultRelationshipEnumLegalGuardianship DependentResultRelationshipEnum = "legal-guardianship"
	DependentResultRelationshipEnumOther             DependentResultRelationshipEnum = "other"
	DependentResultRelationshipEnumSpouse            DependentResultRelationshipEnum = "spouse"
	DependentResultRelationshipEnumStepChild         DependentResultRelationshipEnum = "step-child"
)

type DependentResult struct {
	Created      int64                           `json:"created"`
	EmployeeID   string                          `json:"employee_id"`
	ID           string                          `json:"id"`
	Modified     int64                           `json:"modified"`
	Person       DependentResultPerson           `json:"person"`
	Relationship DependentResultRelationshipEnum `json:"relationship"`
	Version      string                          `json:"version"`
}
