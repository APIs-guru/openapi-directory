package operations

import (
	"time"
)

type GetAtmsHeaders struct {
	IfModifiedSince *string `header:"style=simple,explode=false,name=If-Modified-Since"`
	IfNoneMatch     *string `header:"style=simple,explode=false,name=If-None-Match"`
}

type GetAtmsRequest struct {
	Headers GetAtmsHeaders
}

type GetAtms400ErrorObjectDescriptionEnum string

const (
	GetAtms400ErrorObjectDescriptionEnumYouHaveSentARequestWhichCouldNotBeUnderstood GetAtms400ErrorObjectDescriptionEnum = "You have sent a request which could not be understood."
)

type GetAtms400ErrorObjectStatusEnum string

const (
	GetAtms400ErrorObjectStatusEnumFourHundred GetAtms400ErrorObjectStatusEnum = "400"
)

type GetAtms400ErrorObjectTitleEnum string

const (
	GetAtms400ErrorObjectTitleEnumBadRequest GetAtms400ErrorObjectTitleEnum = "Bad request"
)

type GetAtms400ErrorObject struct {
	Description GetAtms400ErrorObjectDescriptionEnum `json:"description"`
	Status      GetAtms400ErrorObjectStatusEnum      `json:"status"`
	Title       GetAtms400ErrorObjectTitleEnum       `json:"title"`
}

type GetAtms408ErrorObjectDescriptionEnum string

const (
	GetAtms408ErrorObjectDescriptionEnumYourClientHasFailedToSubmitARequestAndATimeoutHasOccurred GetAtms408ErrorObjectDescriptionEnum = "Your client has failed to submit a request, and a timeout has occurred."
)

type GetAtms408ErrorObjectStatusEnum string

const (
	GetAtms408ErrorObjectStatusEnumFourHundredAndEight GetAtms408ErrorObjectStatusEnum = "408"
)

type GetAtms408ErrorObjectTitleEnum string

const (
	GetAtms408ErrorObjectTitleEnumClientTimeout GetAtms408ErrorObjectTitleEnum = "Client timeout"
)

type GetAtms408ErrorObject struct {
	Description GetAtms408ErrorObjectDescriptionEnum `json:"description"`
	Status      GetAtms408ErrorObjectStatusEnum      `json:"status"`
	Title       GetAtms408ErrorObjectTitleEnum       `json:"title"`
}

type GetAtms429ErrorObjectDescriptionEnum string

const (
	GetAtms429ErrorObjectDescriptionEnumYouHaveRequestedThisResourceTooOftenSlowDown GetAtms429ErrorObjectDescriptionEnum = "You have requested this resource too often. Slow down."
)

type GetAtms429ErrorObjectStatusEnum string

const (
	GetAtms429ErrorObjectStatusEnumFourHundredAndTwentyNine GetAtms429ErrorObjectStatusEnum = "429"
)

type GetAtms429ErrorObjectTitleEnum string

const (
	GetAtms429ErrorObjectTitleEnumTooManyRequests GetAtms429ErrorObjectTitleEnum = "Too many requests"
)

type GetAtms429ErrorObject struct {
	Description GetAtms429ErrorObjectDescriptionEnum `json:"description"`
	Status      GetAtms429ErrorObjectStatusEnum      `json:"status"`
	Title       GetAtms429ErrorObjectTitleEnum       `json:"title"`
}

type GetAtms500ErrorObjectDescriptionEnum string

const (
	GetAtms500ErrorObjectDescriptionEnumAnErrorOccurredOnTheServerNoFurtherInformationIsAvailable GetAtms500ErrorObjectDescriptionEnum = "An error occurred on the server. No further information is available."
)

type GetAtms500ErrorObjectStatusEnum string

const (
	GetAtms500ErrorObjectStatusEnumFiveHundred GetAtms500ErrorObjectStatusEnum = "500"
)

type GetAtms500ErrorObjectTitleEnum string

const (
	GetAtms500ErrorObjectTitleEnumInternalServerError GetAtms500ErrorObjectTitleEnum = "Internal server error"
)

type GetAtms500ErrorObject struct {
	Description GetAtms500ErrorObjectDescriptionEnum `json:"description"`
	Status      GetAtms500ErrorObjectStatusEnum      `json:"status"`
	Title       GetAtms500ErrorObjectTitleEnum       `json:"title"`
}

type GetAtms503ErrorObjectDescriptionEnum string

const (
	GetAtms503ErrorObjectDescriptionEnumTheServiceIsTemporarilyUnavailable GetAtms503ErrorObjectDescriptionEnum = "The service is temporarily unavailable."
)

type GetAtms503ErrorObjectStatusEnum string

const (
	GetAtms503ErrorObjectStatusEnumFiveHundredAndThree GetAtms503ErrorObjectStatusEnum = "503"
)

type GetAtms503ErrorObjectTitleEnum string

const (
	GetAtms503ErrorObjectTitleEnumServiceTemporarilyUnavailable GetAtms503ErrorObjectTitleEnum = "Service temporarily unavailable"
)

type GetAtms503ErrorObject struct {
	Description GetAtms503ErrorObjectDescriptionEnum `json:"description"`
	Status      GetAtms503ErrorObjectStatusEnum      `json:"status"`
	Title       GetAtms503ErrorObjectTitleEnum       `json:"title"`
}

type GetAtmsErrorObject struct {
	Description string `json:"description"`
	Status      string `json:"status"`
	Title       string `json:"title"`
}

type GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONAtmAtmServicesEnum string

const (
	GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONAtmAtmServicesEnumBalance                   GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONAtmAtmServicesEnum = "Balance"
	GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONAtmAtmServicesEnumBillPayments              GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONAtmAtmServicesEnum = "BillPayments"
	GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONAtmAtmServicesEnumCashDeposits              GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONAtmAtmServicesEnum = "CashDeposits"
	GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONAtmAtmServicesEnumCashWithdrawal            GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONAtmAtmServicesEnum = "CashWithdrawal"
	GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONAtmAtmServicesEnumCharityDonation           GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONAtmAtmServicesEnum = "CharityDonation"
	GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONAtmAtmServicesEnumChequeBookRequest         GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONAtmAtmServicesEnum = "ChequeBookRequest"
	GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONAtmAtmServicesEnumChequeDeposits            GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONAtmAtmServicesEnum = "ChequeDeposits"
	GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONAtmAtmServicesEnumFastCash                  GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONAtmAtmServicesEnum = "FastCash"
	GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONAtmAtmServicesEnumMiniStatement             GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONAtmAtmServicesEnum = "MiniStatement"
	GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONAtmAtmServicesEnumMobileBankingRegistration GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONAtmAtmServicesEnum = "MobileBankingRegistration"
	GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONAtmAtmServicesEnumMobilePaymentRegistration GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONAtmAtmServicesEnum = "MobilePaymentRegistration"
	GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONAtmAtmServicesEnumMobilePhoneTopUp          GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONAtmAtmServicesEnum = "MobilePhoneTopUp"
	GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONAtmAtmServicesEnumOrderStatement            GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONAtmAtmServicesEnum = "OrderStatement"
	GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONAtmAtmServicesEnumPinActivation             GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONAtmAtmServicesEnum = "PINActivation"
	GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONAtmAtmServicesEnumPinChange                 GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONAtmAtmServicesEnum = "PINChange"
)

type GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONAtmAccessibilityTypesEnum string

const (
	GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONAtmAccessibilityTypesEnumAudioCashMachine  GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONAtmAccessibilityTypesEnum = "AudioCashMachine"
	GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONAtmAccessibilityTypesEnumAutomaticDoors    GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONAtmAccessibilityTypesEnum = "AutomaticDoors"
	GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONAtmAccessibilityTypesEnumChairAccess       GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONAtmAccessibilityTypesEnum = "ChairAccess"
	GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONAtmAccessibilityTypesEnumDriveThru         GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONAtmAccessibilityTypesEnum = "DriveThru"
	GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONAtmAccessibilityTypesEnumExternalRamp      GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONAtmAccessibilityTypesEnum = "ExternalRamp"
	GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONAtmAccessibilityTypesEnumInductionLoop     GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONAtmAccessibilityTypesEnum = "InductionLoop"
	GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONAtmAccessibilityTypesEnumInternalRamp      GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONAtmAccessibilityTypesEnum = "InternalRamp"
	GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONAtmAccessibilityTypesEnumLevelAccess       GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONAtmAccessibilityTypesEnum = "LevelAccess"
	GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONAtmAccessibilityTypesEnumLowerLevelCounter GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONAtmAccessibilityTypesEnum = "LowerLevelCounter"
	GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONAtmAccessibilityTypesEnumWheelchairAccess  GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONAtmAccessibilityTypesEnum = "WheelchairAccess"
)

type GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONAtmAddress struct {
	BuildingNumberOrName *string `json:"BuildingNumberOrName,omitempty"`
	Country              string  `json:"Country"`
	CountrySubDivision   *string `json:"CountrySubDivision,omitempty"`
	OptionalAddressField *string `json:"OptionalAddressField,omitempty"`
	PostCode             string  `json:"PostCode"`
	StreetName           string  `json:"StreetName"`
	TownName             *string `json:"TownName,omitempty"`
}

type GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONAtmGeographicLocation struct {
	Latitude  string `json:"Latitude"`
	Longitude string `json:"Longitude"`
}

type GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONAtmLocationCategoryEnum string

const (
	GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONAtmLocationCategoryEnumAirport                   GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONAtmLocationCategoryEnum = "Airport"
	GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONAtmLocationCategoryEnumBankSpecialisedOutlet     GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONAtmLocationCategoryEnum = "BankSpecialisedOutlet"
	GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONAtmLocationCategoryEnumBranchExternal            GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONAtmLocationCategoryEnum = "BranchExternal"
	GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONAtmLocationCategoryEnumBranchInternal            GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONAtmLocationCategoryEnum = "BranchInternal"
	GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONAtmLocationCategoryEnumBranchLobby               GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONAtmLocationCategoryEnum = "BranchLobby"
	GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONAtmLocationCategoryEnumBureauDeChange            GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONAtmLocationCategoryEnum = "BureauDeChange"
	GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONAtmLocationCategoryEnumCoachStation              GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONAtmLocationCategoryEnum = "CoachStation"
	GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONAtmLocationCategoryEnumCommercialSpaceInternal   GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONAtmLocationCategoryEnum = "CommercialSpaceInternal"
	GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONAtmLocationCategoryEnumConvenienceStore          GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONAtmLocationCategoryEnum = "ConvenienceStore"
	GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONAtmLocationCategoryEnumExhibitionCentre          GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONAtmLocationCategoryEnum = "ExhibitionCentre"
	GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONAtmLocationCategoryEnumFactoryOrOffice           GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONAtmLocationCategoryEnum = "FactoryOrOffice"
	GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONAtmLocationCategoryEnumFillingStation            GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONAtmLocationCategoryEnum = "FillingStation"
	GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONAtmLocationCategoryEnumFinancialInstitution      GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONAtmLocationCategoryEnum = "FinancialInstitution"
	GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONAtmLocationCategoryEnumGovernmentOffice          GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONAtmLocationCategoryEnum = "GovernmentOffice"
	GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONAtmLocationCategoryEnumHospital                  GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONAtmLocationCategoryEnum = "Hospital"
	GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONAtmLocationCategoryEnumHotel                     GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONAtmLocationCategoryEnum = "Hotel"
	GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONAtmLocationCategoryEnumKioskPod                  GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONAtmLocationCategoryEnum = "KioskPod"
	GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONAtmLocationCategoryEnumLeisureCentre             GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONAtmLocationCategoryEnum = "LeisureCentre"
	GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONAtmLocationCategoryEnumPleasurePark              GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONAtmLocationCategoryEnum = "PleasurePark"
	GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONAtmLocationCategoryEnumPublicHouse               GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONAtmLocationCategoryEnum = "PublicHouse"
	GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONAtmLocationCategoryEnumRailwayStation            GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONAtmLocationCategoryEnum = "RailwayStation"
	GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONAtmLocationCategoryEnumRemoteUnit                GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONAtmLocationCategoryEnum = "RemoteUnit"
	GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONAtmLocationCategoryEnumRetailerDepartmentStore   GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONAtmLocationCategoryEnum = "RetailerDepartmentStore"
	GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONAtmLocationCategoryEnumRetailerOutlet            GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONAtmLocationCategoryEnum = "RetailerOutlet"
	GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONAtmLocationCategoryEnumSeaportTerminal           GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONAtmLocationCategoryEnum = "SeaportTerminal"
	GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONAtmLocationCategoryEnumServiceStation            GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONAtmLocationCategoryEnum = "ServiceStation"
	GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONAtmLocationCategoryEnumShoppingCentreExternal    GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONAtmLocationCategoryEnum = "ShoppingCentreExternal"
	GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONAtmLocationCategoryEnumShoppingCentreInternal    GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONAtmLocationCategoryEnum = "ShoppingCentreInternal"
	GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONAtmLocationCategoryEnumStorageDepot              GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONAtmLocationCategoryEnum = "StorageDepot"
	GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONAtmLocationCategoryEnumSupermarketExternal       GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONAtmLocationCategoryEnum = "SupermarketExternal"
	GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONAtmLocationCategoryEnumSupermarketInternal       GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONAtmLocationCategoryEnum = "SupermarketInternal"
	GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONAtmLocationCategoryEnumUndergroundRailwayStation GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONAtmLocationCategoryEnum = "UndergroundRailwayStation"
	GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONAtmLocationCategoryEnumUniversityOrCollege       GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONAtmLocationCategoryEnum = "UniversityOrCollege"
)

type GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONAtmMinimumValueDispensedEnum string

const (
	GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONAtmMinimumValueDispensedEnumPound5   GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONAtmMinimumValueDispensedEnum = "£5"
	GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONAtmMinimumValueDispensedEnumPound10  GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONAtmMinimumValueDispensedEnum = "£10"
	GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONAtmMinimumValueDispensedEnumPound20  GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONAtmMinimumValueDispensedEnum = "£20"
	GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONAtmMinimumValueDispensedEnumPound50  GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONAtmMinimumValueDispensedEnum = "£50"
	GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONAtmMinimumValueDispensedEnumPound100 GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONAtmMinimumValueDispensedEnum = "£100"
)

type GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONAtmOrganisationBrandTrademarkIpoCodeEnum string

const (
	GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONAtmOrganisationBrandTrademarkIpoCodeEnumUk GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONAtmOrganisationBrandTrademarkIpoCodeEnum = "UK"
	GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONAtmOrganisationBrandTrademarkIpoCodeEnumEu GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONAtmOrganisationBrandTrademarkIpoCodeEnum = "EU"
)

type GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONAtmOrganisationBrand struct {
	TrademarkID      string                                                                                         `json:"TrademarkID"`
	TrademarkIpoCode GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONAtmOrganisationBrandTrademarkIpoCodeEnum `json:"TrademarkIPOCode"`
}

type GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONAtmOrganisationParentOrganisationOrganisationName struct {
	LegalName string `json:"LegalName"`
}

type GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONAtmOrganisationParentOrganisation struct {
	Bic              *string                                                                                                 `json:"BIC,omitempty"`
	Lei              *string                                                                                                 `json:"LEI,omitempty"`
	OrganisationName GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONAtmOrganisationParentOrganisationOrganisationName `json:"OrganisationName"`
}

type GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONAtmOrganisation struct {
	Brand              GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONAtmOrganisationBrand              `json:"Brand"`
	ParentOrganisation GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONAtmOrganisationParentOrganisation `json:"ParentOrganisation"`
}

type GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONAtm struct {
	Atmid                 string                                                                              `json:"ATMID"`
	AtmServices           []GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONAtmAtmServicesEnum          `json:"ATMServices"`
	AccessibilityTypes    []GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONAtmAccessibilityTypesEnum   `json:"AccessibilityTypes,omitempty"`
	AdditionalAtmServices []string                                                                            `json:"AdditionalATMServices,omitempty"`
	Address               GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONAtmAddress                    `json:"Address"`
	BranchIdentification  *string                                                                             `json:"BranchIdentification,omitempty"`
	Currency              []string                                                                            `json:"Currency"`
	GeographicLocation    GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONAtmGeographicLocation         `json:"GeographicLocation"`
	LocationCategory      *GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONAtmLocationCategoryEnum      `json:"LocationCategory,omitempty"`
	MinimumValueDispensed *GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONAtmMinimumValueDispensedEnum `json:"MinimumValueDispensed,omitempty"`
	Organisation          GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONAtmOrganisation               `json:"Organisation"`
	SiteID                *string                                                                             `json:"SiteID,omitempty"`
	SiteName              *string                                                                             `json:"SiteName,omitempty"`
	SupportedLanguages    []string                                                                            `json:"SupportedLanguages"`
}

type GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONMetaDataAgreementEnum string

const (
	GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONMetaDataAgreementEnumUseOfTheApIsAndAnyRelatedDataWillBeSubjectToTheTermsOfTheOpenLicenceAndSubjectToTermsAndConditions GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONMetaDataAgreementEnum = "Use of the APIs and any related data will be subject to the terms of the Open Licence and subject to terms and conditions"
)

type GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONMetaDataLicenseEnum string

const (
	GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONMetaDataLicenseEnumHTTPSWwwOpenbankingOrgUkOpenLicence GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONMetaDataLicenseEnum = "https://www.openbanking.org.uk/open-licence"
)

type GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONMetaDataTermsOfUseEnum string

const (
	GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONMetaDataTermsOfUseEnumHTTPSWwwOpenbankingOrgUkTerms GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONMetaDataTermsOfUseEnum = "https://www.openbanking.org.uk/terms"
)

type GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONMetaData struct {
	Agreement    GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONMetaDataAgreementEnum  `json:"Agreement"`
	LastUpdated  time.Time                                                                    `json:"LastUpdated"`
	License      GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONMetaDataLicenseEnum    `json:"License"`
	TermsOfUse   GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONMetaDataTermsOfUseEnum `json:"TermsOfUse"`
	TotalResults int64                                                                        `json:"TotalResults"`
}

type GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSON struct {
	Data []GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONAtm    `json:"data"`
	Meta GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONMetaData `json:"meta"`
}

type GetAtmsResponse struct {
	FourHundredErrorObject                                       *GetAtms400ErrorObject
	FourHundredAndEightErrorObject                               *GetAtms408ErrorObject
	FourHundredAndTwentyNineErrorObject                          *GetAtms429ErrorObject
	FiveHundredErrorObject                                       *GetAtms500ErrorObject
	FiveHundredAndThreeErrorObject                               *GetAtms503ErrorObject
	ContentType                                                  string
	ErrorObject                                                  *GetAtmsErrorObject
	GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONObject *GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSON
	Headers                                                      map[string][]string
	StatusCode                                                   int64
}
