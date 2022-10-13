package operations

import (
	"time"
)

type GetAtmsHeaders struct {
	IfModifiedSince *string `header:"name=If-Modified-Since"`
	IfNoneMatch     *string `header:"name=If-None-Match"`
}

type GetAtmsRequest struct {
	Headers GetAtmsHeaders
}

type GetAtms400ApplicationPrsOpenbankingOpendataV13PlusJSONDescriptionEnum string

const (
	GetAtms400ApplicationPrsOpenbankingOpendataV13PlusJSONDescriptionEnumYouHaveSentARequestWhichCouldNotBeUnderstood GetAtms400ApplicationPrsOpenbankingOpendataV13PlusJSONDescriptionEnum = "You have sent a request which could not be understood."
)

type GetAtms400ApplicationPrsOpenbankingOpendataV13PlusJSONStatusEnum string

const (
	GetAtms400ApplicationPrsOpenbankingOpendataV13PlusJSONStatusEnumFourHundred GetAtms400ApplicationPrsOpenbankingOpendataV13PlusJSONStatusEnum = "400"
)

type GetAtms400ApplicationPrsOpenbankingOpendataV13PlusJSONTitleEnum string

const (
	GetAtms400ApplicationPrsOpenbankingOpendataV13PlusJSONTitleEnumBadRequest GetAtms400ApplicationPrsOpenbankingOpendataV13PlusJSONTitleEnum = "Bad request"
)

type GetAtms400ApplicationPrsOpenbankingOpendataV13PlusJSON400ErrorObject struct {
	Description GetAtms400ApplicationPrsOpenbankingOpendataV13PlusJSONDescriptionEnum `json:"description"`
	Status      GetAtms400ApplicationPrsOpenbankingOpendataV13PlusJSONStatusEnum      `json:"status"`
	Title       GetAtms400ApplicationPrsOpenbankingOpendataV13PlusJSONTitleEnum       `json:"title"`
}

type GetAtms408ApplicationPrsOpenbankingOpendataV13PlusJSONDescriptionEnum string

const (
	GetAtms408ApplicationPrsOpenbankingOpendataV13PlusJSONDescriptionEnumYourClientHasFailedToSubmitARequestAndATimeoutHasOccurred GetAtms408ApplicationPrsOpenbankingOpendataV13PlusJSONDescriptionEnum = "Your client has failed to submit a request, and a timeout has occurred."
)

type GetAtms408ApplicationPrsOpenbankingOpendataV13PlusJSONStatusEnum string

const (
	GetAtms408ApplicationPrsOpenbankingOpendataV13PlusJSONStatusEnumFourHundredAndEight GetAtms408ApplicationPrsOpenbankingOpendataV13PlusJSONStatusEnum = "408"
)

type GetAtms408ApplicationPrsOpenbankingOpendataV13PlusJSONTitleEnum string

const (
	GetAtms408ApplicationPrsOpenbankingOpendataV13PlusJSONTitleEnumClientTimeout GetAtms408ApplicationPrsOpenbankingOpendataV13PlusJSONTitleEnum = "Client timeout"
)

type GetAtms408ApplicationPrsOpenbankingOpendataV13PlusJSON408ErrorObject struct {
	Description GetAtms408ApplicationPrsOpenbankingOpendataV13PlusJSONDescriptionEnum `json:"description"`
	Status      GetAtms408ApplicationPrsOpenbankingOpendataV13PlusJSONStatusEnum      `json:"status"`
	Title       GetAtms408ApplicationPrsOpenbankingOpendataV13PlusJSONTitleEnum       `json:"title"`
}

type GetAtms429ApplicationPrsOpenbankingOpendataV13PlusJSONDescriptionEnum string

const (
	GetAtms429ApplicationPrsOpenbankingOpendataV13PlusJSONDescriptionEnumYouHaveRequestedThisResourceTooOftenSlowDown GetAtms429ApplicationPrsOpenbankingOpendataV13PlusJSONDescriptionEnum = "You have requested this resource too often. Slow down."
)

type GetAtms429ApplicationPrsOpenbankingOpendataV13PlusJSONStatusEnum string

const (
	GetAtms429ApplicationPrsOpenbankingOpendataV13PlusJSONStatusEnumFourHundredAndTwentyNine GetAtms429ApplicationPrsOpenbankingOpendataV13PlusJSONStatusEnum = "429"
)

type GetAtms429ApplicationPrsOpenbankingOpendataV13PlusJSONTitleEnum string

const (
	GetAtms429ApplicationPrsOpenbankingOpendataV13PlusJSONTitleEnumTooManyRequests GetAtms429ApplicationPrsOpenbankingOpendataV13PlusJSONTitleEnum = "Too many requests"
)

type GetAtms429ApplicationPrsOpenbankingOpendataV13PlusJSON429ErrorObject struct {
	Description GetAtms429ApplicationPrsOpenbankingOpendataV13PlusJSONDescriptionEnum `json:"description"`
	Status      GetAtms429ApplicationPrsOpenbankingOpendataV13PlusJSONStatusEnum      `json:"status"`
	Title       GetAtms429ApplicationPrsOpenbankingOpendataV13PlusJSONTitleEnum       `json:"title"`
}

type GetAtms500ApplicationPrsOpenbankingOpendataV13PlusJSONDescriptionEnum string

const (
	GetAtms500ApplicationPrsOpenbankingOpendataV13PlusJSONDescriptionEnumAnErrorOccurredOnTheServerNoFurtherInformationIsAvailable GetAtms500ApplicationPrsOpenbankingOpendataV13PlusJSONDescriptionEnum = "An error occurred on the server. No further information is available."
)

type GetAtms500ApplicationPrsOpenbankingOpendataV13PlusJSONStatusEnum string

const (
	GetAtms500ApplicationPrsOpenbankingOpendataV13PlusJSONStatusEnumFiveHundred GetAtms500ApplicationPrsOpenbankingOpendataV13PlusJSONStatusEnum = "500"
)

type GetAtms500ApplicationPrsOpenbankingOpendataV13PlusJSONTitleEnum string

const (
	GetAtms500ApplicationPrsOpenbankingOpendataV13PlusJSONTitleEnumInternalServerError GetAtms500ApplicationPrsOpenbankingOpendataV13PlusJSONTitleEnum = "Internal server error"
)

type GetAtms500ApplicationPrsOpenbankingOpendataV13PlusJSON500ErrorObject struct {
	Description GetAtms500ApplicationPrsOpenbankingOpendataV13PlusJSONDescriptionEnum `json:"description"`
	Status      GetAtms500ApplicationPrsOpenbankingOpendataV13PlusJSONStatusEnum      `json:"status"`
	Title       GetAtms500ApplicationPrsOpenbankingOpendataV13PlusJSONTitleEnum       `json:"title"`
}

type GetAtms503ApplicationPrsOpenbankingOpendataV13PlusJSONDescriptionEnum string

const (
	GetAtms503ApplicationPrsOpenbankingOpendataV13PlusJSONDescriptionEnumTheServiceIsTemporarilyUnavailable GetAtms503ApplicationPrsOpenbankingOpendataV13PlusJSONDescriptionEnum = "The service is temporarily unavailable."
)

type GetAtms503ApplicationPrsOpenbankingOpendataV13PlusJSONStatusEnum string

const (
	GetAtms503ApplicationPrsOpenbankingOpendataV13PlusJSONStatusEnumFiveHundredAndThree GetAtms503ApplicationPrsOpenbankingOpendataV13PlusJSONStatusEnum = "503"
)

type GetAtms503ApplicationPrsOpenbankingOpendataV13PlusJSONTitleEnum string

const (
	GetAtms503ApplicationPrsOpenbankingOpendataV13PlusJSONTitleEnumServiceTemporarilyUnavailable GetAtms503ApplicationPrsOpenbankingOpendataV13PlusJSONTitleEnum = "Service temporarily unavailable"
)

type GetAtms503ApplicationPrsOpenbankingOpendataV13PlusJSON503ErrorObject struct {
	Description GetAtms503ApplicationPrsOpenbankingOpendataV13PlusJSONDescriptionEnum `json:"description"`
	Status      GetAtms503ApplicationPrsOpenbankingOpendataV13PlusJSONStatusEnum      `json:"status"`
	Title       GetAtms503ApplicationPrsOpenbankingOpendataV13PlusJSONTitleEnum       `json:"title"`
}

type GetAtmsDefaultApplicationPrsOpenbankingOpendataV13PlusJSONErrorObject struct {
	Description string `json:"description"`
	Status      string `json:"status"`
	Title       string `json:"title"`
}

type GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONDataAtmServicesEnum string

const (
	GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONDataAtmServicesEnumBalance                   GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONDataAtmServicesEnum = "Balance"
	GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONDataAtmServicesEnumBillPayments              GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONDataAtmServicesEnum = "BillPayments"
	GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONDataAtmServicesEnumCashDeposits              GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONDataAtmServicesEnum = "CashDeposits"
	GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONDataAtmServicesEnumCashWithdrawal            GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONDataAtmServicesEnum = "CashWithdrawal"
	GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONDataAtmServicesEnumCharityDonation           GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONDataAtmServicesEnum = "CharityDonation"
	GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONDataAtmServicesEnumChequeBookRequest         GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONDataAtmServicesEnum = "ChequeBookRequest"
	GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONDataAtmServicesEnumChequeDeposits            GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONDataAtmServicesEnum = "ChequeDeposits"
	GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONDataAtmServicesEnumFastCash                  GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONDataAtmServicesEnum = "FastCash"
	GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONDataAtmServicesEnumMiniStatement             GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONDataAtmServicesEnum = "MiniStatement"
	GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONDataAtmServicesEnumMobileBankingRegistration GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONDataAtmServicesEnum = "MobileBankingRegistration"
	GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONDataAtmServicesEnumMobilePaymentRegistration GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONDataAtmServicesEnum = "MobilePaymentRegistration"
	GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONDataAtmServicesEnumMobilePhoneTopUp          GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONDataAtmServicesEnum = "MobilePhoneTopUp"
	GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONDataAtmServicesEnumOrderStatement            GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONDataAtmServicesEnum = "OrderStatement"
	GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONDataAtmServicesEnumPinActivation             GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONDataAtmServicesEnum = "PINActivation"
	GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONDataAtmServicesEnumPinChange                 GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONDataAtmServicesEnum = "PINChange"
)

type GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONDataAccessibilityTypesEnum string

const (
	GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONDataAccessibilityTypesEnumAudioCashMachine  GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONDataAccessibilityTypesEnum = "AudioCashMachine"
	GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONDataAccessibilityTypesEnumAutomaticDoors    GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONDataAccessibilityTypesEnum = "AutomaticDoors"
	GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONDataAccessibilityTypesEnumChairAccess       GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONDataAccessibilityTypesEnum = "ChairAccess"
	GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONDataAccessibilityTypesEnumDriveThru         GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONDataAccessibilityTypesEnum = "DriveThru"
	GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONDataAccessibilityTypesEnumExternalRamp      GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONDataAccessibilityTypesEnum = "ExternalRamp"
	GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONDataAccessibilityTypesEnumInductionLoop     GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONDataAccessibilityTypesEnum = "InductionLoop"
	GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONDataAccessibilityTypesEnumInternalRamp      GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONDataAccessibilityTypesEnum = "InternalRamp"
	GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONDataAccessibilityTypesEnumLevelAccess       GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONDataAccessibilityTypesEnum = "LevelAccess"
	GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONDataAccessibilityTypesEnumLowerLevelCounter GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONDataAccessibilityTypesEnum = "LowerLevelCounter"
	GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONDataAccessibilityTypesEnumWheelchairAccess  GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONDataAccessibilityTypesEnum = "WheelchairAccess"
)

type GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONDataAddress struct {
	BuildingNumberOrName *string `json:"BuildingNumberOrName"`
	Country              string  `json:"Country"`
	CountrySubDivision   *string `json:"CountrySubDivision"`
	OptionalAddressField *string `json:"OptionalAddressField"`
	PostCode             string  `json:"PostCode"`
	StreetName           string  `json:"StreetName"`
	TownName             *string `json:"TownName"`
}

type GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONDataGeographicLocation struct {
	Latitude  string `json:"Latitude"`
	Longitude string `json:"Longitude"`
}

type GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONDataLocationCategoryEnum string

const (
	GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONDataLocationCategoryEnumAirport                   GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONDataLocationCategoryEnum = "Airport"
	GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONDataLocationCategoryEnumBankSpecialisedOutlet     GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONDataLocationCategoryEnum = "BankSpecialisedOutlet"
	GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONDataLocationCategoryEnumBranchExternal            GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONDataLocationCategoryEnum = "BranchExternal"
	GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONDataLocationCategoryEnumBranchInternal            GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONDataLocationCategoryEnum = "BranchInternal"
	GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONDataLocationCategoryEnumBranchLobby               GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONDataLocationCategoryEnum = "BranchLobby"
	GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONDataLocationCategoryEnumBureauDeChange            GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONDataLocationCategoryEnum = "BureauDeChange"
	GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONDataLocationCategoryEnumCoachStation              GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONDataLocationCategoryEnum = "CoachStation"
	GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONDataLocationCategoryEnumCommercialSpaceInternal   GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONDataLocationCategoryEnum = "CommercialSpaceInternal"
	GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONDataLocationCategoryEnumConvenienceStore          GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONDataLocationCategoryEnum = "ConvenienceStore"
	GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONDataLocationCategoryEnumExhibitionCentre          GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONDataLocationCategoryEnum = "ExhibitionCentre"
	GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONDataLocationCategoryEnumFactoryOrOffice           GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONDataLocationCategoryEnum = "FactoryOrOffice"
	GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONDataLocationCategoryEnumFillingStation            GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONDataLocationCategoryEnum = "FillingStation"
	GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONDataLocationCategoryEnumFinancialInstitution      GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONDataLocationCategoryEnum = "FinancialInstitution"
	GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONDataLocationCategoryEnumGovernmentOffice          GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONDataLocationCategoryEnum = "GovernmentOffice"
	GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONDataLocationCategoryEnumHospital                  GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONDataLocationCategoryEnum = "Hospital"
	GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONDataLocationCategoryEnumHotel                     GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONDataLocationCategoryEnum = "Hotel"
	GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONDataLocationCategoryEnumKioskPod                  GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONDataLocationCategoryEnum = "KioskPod"
	GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONDataLocationCategoryEnumLeisureCentre             GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONDataLocationCategoryEnum = "LeisureCentre"
	GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONDataLocationCategoryEnumPleasurePark              GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONDataLocationCategoryEnum = "PleasurePark"
	GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONDataLocationCategoryEnumPublicHouse               GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONDataLocationCategoryEnum = "PublicHouse"
	GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONDataLocationCategoryEnumRailwayStation            GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONDataLocationCategoryEnum = "RailwayStation"
	GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONDataLocationCategoryEnumRemoteUnit                GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONDataLocationCategoryEnum = "RemoteUnit"
	GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONDataLocationCategoryEnumRetailerDepartmentStore   GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONDataLocationCategoryEnum = "RetailerDepartmentStore"
	GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONDataLocationCategoryEnumRetailerOutlet            GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONDataLocationCategoryEnum = "RetailerOutlet"
	GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONDataLocationCategoryEnumSeaportTerminal           GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONDataLocationCategoryEnum = "SeaportTerminal"
	GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONDataLocationCategoryEnumServiceStation            GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONDataLocationCategoryEnum = "ServiceStation"
	GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONDataLocationCategoryEnumShoppingCentreExternal    GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONDataLocationCategoryEnum = "ShoppingCentreExternal"
	GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONDataLocationCategoryEnumShoppingCentreInternal    GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONDataLocationCategoryEnum = "ShoppingCentreInternal"
	GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONDataLocationCategoryEnumStorageDepot              GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONDataLocationCategoryEnum = "StorageDepot"
	GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONDataLocationCategoryEnumSupermarketExternal       GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONDataLocationCategoryEnum = "SupermarketExternal"
	GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONDataLocationCategoryEnumSupermarketInternal       GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONDataLocationCategoryEnum = "SupermarketInternal"
	GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONDataLocationCategoryEnumUndergroundRailwayStation GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONDataLocationCategoryEnum = "UndergroundRailwayStation"
	GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONDataLocationCategoryEnumUniversityOrCollege       GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONDataLocationCategoryEnum = "UniversityOrCollege"
)

type GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONDataMinimumValueDispensedEnum string

const (
	GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONDataMinimumValueDispensedEnumPound5   GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONDataMinimumValueDispensedEnum = "£5"
	GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONDataMinimumValueDispensedEnumPound10  GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONDataMinimumValueDispensedEnum = "£10"
	GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONDataMinimumValueDispensedEnumPound20  GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONDataMinimumValueDispensedEnum = "£20"
	GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONDataMinimumValueDispensedEnumPound50  GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONDataMinimumValueDispensedEnum = "£50"
	GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONDataMinimumValueDispensedEnumPound100 GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONDataMinimumValueDispensedEnum = "£100"
)

type GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOrganisationBrandTrademarkIpoCodeEnum string

const (
	GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOrganisationBrandTrademarkIpoCodeEnumUk GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOrganisationBrandTrademarkIpoCodeEnum = "UK"
	GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOrganisationBrandTrademarkIpoCodeEnumEu GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOrganisationBrandTrademarkIpoCodeEnum = "EU"
)

type GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOrganisationBrand struct {
	TrademarkID      string                                                                                          `json:"TrademarkID"`
	TrademarkIpoCode GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOrganisationBrandTrademarkIpoCodeEnum `json:"TrademarkIPOCode"`
}

type GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOrganisationParentOrganisationOrganisationName struct {
	LegalName string `json:"LegalName"`
}

type GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOrganisationParentOrganisation struct {
	Bic              *string                                                                                                  `json:"BIC"`
	Lei              *string                                                                                                  `json:"LEI"`
	OrganisationName GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOrganisationParentOrganisationOrganisationName `json:"OrganisationName"`
}

type GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOrganisation struct {
	Brand              GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOrganisationBrand              `json:"Brand"`
	ParentOrganisation GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOrganisationParentOrganisation `json:"ParentOrganisation"`
}

type GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONDataAtm struct {
	Atmid                 string                                                                               `json:"ATMID"`
	AtmServices           []GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONDataAtmServicesEnum          `json:"ATMServices"`
	AccessibilityTypes    []GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONDataAccessibilityTypesEnum   `json:"AccessibilityTypes"`
	AdditionalAtmServices []string                                                                             `json:"AdditionalATMServices"`
	Address               GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONDataAddress                    `json:"Address"`
	BranchIdentification  *string                                                                              `json:"BranchIdentification"`
	Currency              []string                                                                             `json:"Currency"`
	GeographicLocation    GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONDataGeographicLocation         `json:"GeographicLocation"`
	LocationCategory      *GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONDataLocationCategoryEnum      `json:"LocationCategory"`
	MinimumValueDispensed *GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONDataMinimumValueDispensedEnum `json:"MinimumValueDispensed"`
	Organisation          GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOrganisation               `json:"Organisation"`
	SiteID                *string                                                                              `json:"SiteID"`
	SiteName              *string                                                                              `json:"SiteName"`
	SupportedLanguages    []string                                                                             `json:"SupportedLanguages"`
}

type GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONMetaAgreementEnum string

const (
	GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONMetaAgreementEnumUseOfTheApIsAndAnyRelatedDataWillBeSubjectToTheTermsOfTheOpenLicenceAndSubjectToTermsAndConditions GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONMetaAgreementEnum = "Use of the APIs and any related data will be subject to the terms of the Open Licence and subject to terms and conditions"
)

type GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONMetaLicenseEnum string

const (
	GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONMetaLicenseEnumHTTPSWwwOpenbankingOrgUkOpenLicence GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONMetaLicenseEnum = "https://www.openbanking.org.uk/open-licence"
)

type GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONMetaTermsOfUseEnum string

const (
	GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONMetaTermsOfUseEnumHTTPSWwwOpenbankingOrgUkTerms GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONMetaTermsOfUseEnum = "https://www.openbanking.org.uk/terms"
)

type GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONMetaMetaData struct {
	Agreement    GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONMetaAgreementEnum  `json:"Agreement"`
	LastUpdated  time.Time                                                                `json:"LastUpdated"`
	License      GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONMetaLicenseEnum    `json:"License"`
	TermsOfUse   GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONMetaTermsOfUseEnum `json:"TermsOfUse"`
	TotalResults int64                                                                    `json:"TotalResults"`
}

type GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSON struct {
	Data []GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONDataAtm    `json:"data"`
	Meta GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONMetaMetaData `json:"meta"`
}

type GetAtmsResponse struct {
	FourHundredErrorObject                                       *GetAtms400ApplicationPrsOpenbankingOpendataV13PlusJSON400ErrorObject
	FourHundredAndEightErrorObject                               *GetAtms408ApplicationPrsOpenbankingOpendataV13PlusJSON408ErrorObject
	FourHundredAndTwentyNineErrorObject                          *GetAtms429ApplicationPrsOpenbankingOpendataV13PlusJSON429ErrorObject
	FiveHundredErrorObject                                       *GetAtms500ApplicationPrsOpenbankingOpendataV13PlusJSON500ErrorObject
	FiveHundredAndThreeErrorObject                               *GetAtms503ApplicationPrsOpenbankingOpendataV13PlusJSON503ErrorObject
	ContentType                                                  string
	ErrorObject                                                  *GetAtmsDefaultApplicationPrsOpenbankingOpendataV13PlusJSONErrorObject
	GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSONObject *GetAtms200ApplicationPrsOpenbankingOpendataV13PlusJSON
	Headers                                                      map[string][]string
	StatusCode                                                   int64
}
