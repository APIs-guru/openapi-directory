package operations

import (
	"time"
)

type GetBranchesHeaders struct {
	IfModifiedSince *string `header:"style=simple,explode=false,name=If-Modified-Since"`
	IfNoneMatch     *string `header:"style=simple,explode=false,name=If-None-Match"`
}

type GetBranchesRequest struct {
	Headers GetBranchesHeaders
}

type GetBranches400ErrorObjectDescriptionEnum string

const (
	GetBranches400ErrorObjectDescriptionEnumYouHaveSentARequestWhichCouldNotBeUnderstood GetBranches400ErrorObjectDescriptionEnum = "You have sent a request which could not be understood."
)

type GetBranches400ErrorObjectStatusEnum string

const (
	GetBranches400ErrorObjectStatusEnumFourHundred GetBranches400ErrorObjectStatusEnum = "400"
)

type GetBranches400ErrorObjectTitleEnum string

const (
	GetBranches400ErrorObjectTitleEnumBadRequest GetBranches400ErrorObjectTitleEnum = "Bad request"
)

type GetBranches400ErrorObject struct {
	Description GetBranches400ErrorObjectDescriptionEnum `json:"description"`
	Status      GetBranches400ErrorObjectStatusEnum      `json:"status"`
	Title       GetBranches400ErrorObjectTitleEnum       `json:"title"`
}

type GetBranches408ErrorObjectDescriptionEnum string

const (
	GetBranches408ErrorObjectDescriptionEnumYourClientHasFailedToSubmitARequestAndATimeoutHasOccurred GetBranches408ErrorObjectDescriptionEnum = "Your client has failed to submit a request, and a timeout has occurred."
)

type GetBranches408ErrorObjectStatusEnum string

const (
	GetBranches408ErrorObjectStatusEnumFourHundredAndEight GetBranches408ErrorObjectStatusEnum = "408"
)

type GetBranches408ErrorObjectTitleEnum string

const (
	GetBranches408ErrorObjectTitleEnumClientTimeout GetBranches408ErrorObjectTitleEnum = "Client timeout"
)

type GetBranches408ErrorObject struct {
	Description GetBranches408ErrorObjectDescriptionEnum `json:"description"`
	Status      GetBranches408ErrorObjectStatusEnum      `json:"status"`
	Title       GetBranches408ErrorObjectTitleEnum       `json:"title"`
}

type GetBranches429ErrorObjectDescriptionEnum string

const (
	GetBranches429ErrorObjectDescriptionEnumYouHaveRequestedThisResourceTooOftenSlowDown GetBranches429ErrorObjectDescriptionEnum = "You have requested this resource too often. Slow down."
)

type GetBranches429ErrorObjectStatusEnum string

const (
	GetBranches429ErrorObjectStatusEnumFourHundredAndTwentyNine GetBranches429ErrorObjectStatusEnum = "429"
)

type GetBranches429ErrorObjectTitleEnum string

const (
	GetBranches429ErrorObjectTitleEnumTooManyRequests GetBranches429ErrorObjectTitleEnum = "Too many requests"
)

type GetBranches429ErrorObject struct {
	Description GetBranches429ErrorObjectDescriptionEnum `json:"description"`
	Status      GetBranches429ErrorObjectStatusEnum      `json:"status"`
	Title       GetBranches429ErrorObjectTitleEnum       `json:"title"`
}

type GetBranches500ErrorObjectDescriptionEnum string

const (
	GetBranches500ErrorObjectDescriptionEnumAnErrorOccurredOnTheServerNoFurtherInformationIsAvailable GetBranches500ErrorObjectDescriptionEnum = "An error occurred on the server. No further information is available."
)

type GetBranches500ErrorObjectStatusEnum string

const (
	GetBranches500ErrorObjectStatusEnumFiveHundred GetBranches500ErrorObjectStatusEnum = "500"
)

type GetBranches500ErrorObjectTitleEnum string

const (
	GetBranches500ErrorObjectTitleEnumInternalServerError GetBranches500ErrorObjectTitleEnum = "Internal server error"
)

type GetBranches500ErrorObject struct {
	Description GetBranches500ErrorObjectDescriptionEnum `json:"description"`
	Status      GetBranches500ErrorObjectStatusEnum      `json:"status"`
	Title       GetBranches500ErrorObjectTitleEnum       `json:"title"`
}

type GetBranches503ErrorObjectDescriptionEnum string

const (
	GetBranches503ErrorObjectDescriptionEnumTheServiceIsTemporarilyUnavailable GetBranches503ErrorObjectDescriptionEnum = "The service is temporarily unavailable."
)

type GetBranches503ErrorObjectStatusEnum string

const (
	GetBranches503ErrorObjectStatusEnumFiveHundredAndThree GetBranches503ErrorObjectStatusEnum = "503"
)

type GetBranches503ErrorObjectTitleEnum string

const (
	GetBranches503ErrorObjectTitleEnumServiceTemporarilyUnavailable GetBranches503ErrorObjectTitleEnum = "Service temporarily unavailable"
)

type GetBranches503ErrorObject struct {
	Description GetBranches503ErrorObjectDescriptionEnum `json:"description"`
	Status      GetBranches503ErrorObjectStatusEnum      `json:"status"`
	Title       GetBranches503ErrorObjectTitleEnum       `json:"title"`
}

type GetBranchesErrorObject struct {
	Description string `json:"description"`
	Status      string `json:"status"`
	Title       string `json:"title"`
}

type GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONBranchAccessibilityTypesEnum string

const (
	GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONBranchAccessibilityTypesEnumAudioCashMachine  GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONBranchAccessibilityTypesEnum = "AudioCashMachine"
	GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONBranchAccessibilityTypesEnumAutomaticDoors    GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONBranchAccessibilityTypesEnum = "AutomaticDoors"
	GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONBranchAccessibilityTypesEnumChairAccess       GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONBranchAccessibilityTypesEnum = "ChairAccess"
	GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONBranchAccessibilityTypesEnumDriveThru         GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONBranchAccessibilityTypesEnum = "DriveThru"
	GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONBranchAccessibilityTypesEnumExternalRamp      GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONBranchAccessibilityTypesEnum = "ExternalRamp"
	GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONBranchAccessibilityTypesEnumInductionLoop     GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONBranchAccessibilityTypesEnum = "InductionLoop"
	GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONBranchAccessibilityTypesEnumInternalRamp      GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONBranchAccessibilityTypesEnum = "InternalRamp"
	GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONBranchAccessibilityTypesEnumLevelAccess       GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONBranchAccessibilityTypesEnum = "LevelAccess"
	GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONBranchAccessibilityTypesEnumLowerLevelCounter GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONBranchAccessibilityTypesEnum = "LowerLevelCounter"
	GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONBranchAccessibilityTypesEnumWheelchairAccess  GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONBranchAccessibilityTypesEnum = "WheelchairAccess"
)

type GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONBranchAddress struct {
	BuildingNumberOrName *string `json:"BuildingNumberOrName,omitempty"`
	Country              string  `json:"Country"`
	CountrySubDivision   *string `json:"CountrySubDivision,omitempty"`
	OptionalAddressField *string `json:"OptionalAddressField,omitempty"`
	PostCode             *string `json:"PostCode,omitempty"`
	StreetName           *string `json:"StreetName,omitempty"`
	TownName             *string `json:"TownName,omitempty"`
}

type GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONBranchAlternatePhone struct {
	AlternateTelephoneNumber            *string `json:"AlternateTelephoneNumber,omitempty"`
	AlternateTelephoneNumberDescription *string `json:"AlternateTelephoneNumberDescription,omitempty"`
}

type GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONBranchBranchFacilitiesNameEnum string

const (
	GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONBranchBranchFacilitiesNameEnumBusinessItSupport GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONBranchBranchFacilitiesNameEnum = "BusinessITSupport"
	GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONBranchBranchFacilitiesNameEnumCollectionLockers GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONBranchBranchFacilitiesNameEnum = "CollectionLockers"
	GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONBranchBranchFacilitiesNameEnumMeetingRooms      GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONBranchBranchFacilitiesNameEnum = "MeetingRooms"
	GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONBranchBranchFacilitiesNameEnumParking           GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONBranchBranchFacilitiesNameEnum = "Parking"
	GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONBranchBranchFacilitiesNameEnumWifi              GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONBranchBranchFacilitiesNameEnum = "Wifi"
)

type GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONBranchBranchMediatedServiceNameEnum string

const (
	GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONBranchBranchMediatedServiceNameEnumBureauDeChange       GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONBranchBranchMediatedServiceNameEnum = "BureauDeChange"
	GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONBranchBranchMediatedServiceNameEnumBusinessCounter      GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONBranchBranchMediatedServiceNameEnum = "BusinessCounter"
	GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONBranchBranchMediatedServiceNameEnumCardIssuanceFacility GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONBranchBranchMediatedServiceNameEnum = "CardIssuanceFacility"
	GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONBranchBranchMediatedServiceNameEnumCounterServices      GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONBranchBranchMediatedServiceNameEnum = "CounterServices"
	GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONBranchBranchMediatedServiceNameEnumDriveThru            GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONBranchBranchMediatedServiceNameEnum = "DriveThru"
	GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONBranchBranchMediatedServiceNameEnumMortgageAdvisor      GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONBranchBranchMediatedServiceNameEnum = "MortgageAdvisor"
	GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONBranchBranchMediatedServiceNameEnumNightSafe            GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONBranchBranchMediatedServiceNameEnum = "NightSafe"
	GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONBranchBranchMediatedServiceNameEnumOnDemandCurrency     GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONBranchBranchMediatedServiceNameEnum = "OnDemandCurrency"
	GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONBranchBranchMediatedServiceNameEnumPremierCounter       GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONBranchBranchMediatedServiceNameEnum = "PremierCounter"
	GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONBranchBranchMediatedServiceNameEnumVideoBanking         GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONBranchBranchMediatedServiceNameEnum = "VideoBanking"
	GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONBranchBranchMediatedServiceNameEnumWheelChairAccess     GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONBranchBranchMediatedServiceNameEnum = "WheelChairAccess"
)

type GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONBranchBranchSelfServeServiceNameEnum string

const (
	GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONBranchBranchSelfServeServiceNameEnumAccountVerificationService     GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONBranchBranchSelfServeServiceNameEnum = "AccountVerificationService"
	GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONBranchBranchSelfServeServiceNameEnumAssistedServiceCounter         GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONBranchBranchSelfServeServiceNameEnum = "AssistedServiceCounter"
	GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONBranchBranchSelfServeServiceNameEnumBusinessDepositTerminal        GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONBranchBranchSelfServeServiceNameEnum = "BusinessDepositTerminal"
	GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONBranchBranchSelfServeServiceNameEnumCashChequeDepositMachineCoin   GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONBranchBranchSelfServeServiceNameEnum = "CashChequeDepositMachineCoin"
	GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONBranchBranchSelfServeServiceNameEnumCashChequeDepositMachineNoCoin GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONBranchBranchSelfServeServiceNameEnum = "CashChequeDepositMachineNoCoin"
	GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONBranchBranchSelfServeServiceNameEnumExternalAtmAudio               GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONBranchBranchSelfServeServiceNameEnum = "ExternalAtmAudio"
	GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONBranchBranchSelfServeServiceNameEnumExternalAtmNoAudio             GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONBranchBranchSelfServeServiceNameEnum = "ExternalAtmNoAudio"
	GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONBranchBranchSelfServeServiceNameEnumExternalQuickServicePoint      GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONBranchBranchSelfServeServiceNameEnum = "ExternalQuickServicePoint"
	GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONBranchBranchSelfServeServiceNameEnumInternalAtmAudio               GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONBranchBranchSelfServeServiceNameEnum = "InternalAtmAudio"
	GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONBranchBranchSelfServeServiceNameEnumInternalAtmNoAudio             GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONBranchBranchSelfServeServiceNameEnum = "InternalAtmNoAudio"
	GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONBranchBranchSelfServeServiceNameEnumInternalQuickServicePoint      GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONBranchBranchSelfServeServiceNameEnum = "InternalQuickServicePoint"
	GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONBranchBranchSelfServeServiceNameEnumLodgementDevice                GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONBranchBranchSelfServeServiceNameEnum = "LodgementDevice"
	GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONBranchBranchSelfServeServiceNameEnumOnlineBankingPoint             GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONBranchBranchSelfServeServiceNameEnum = "OnlineBankingPoint"
	GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONBranchBranchSelfServeServiceNameEnumQuickDeposit                   GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONBranchBranchSelfServeServiceNameEnum = "QuickDeposit"
	GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONBranchBranchSelfServeServiceNameEnumSaturdayCounterService         GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONBranchBranchSelfServeServiceNameEnum = "SaturdayCounterService"
	GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONBranchBranchSelfServeServiceNameEnumSelfServiceAccountOpening      GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONBranchBranchSelfServeServiceNameEnum = "SelfServiceAccountOpening"
	GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONBranchBranchSelfServeServiceNameEnumStatementPrinter               GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONBranchBranchSelfServeServiceNameEnum = "StatementPrinter"
)

type GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONBranchBranchTypeEnum string

const (
	GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONBranchBranchTypeEnumPhysical GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONBranchBranchTypeEnum = "Physical"
	GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONBranchBranchTypeEnumMobile   GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONBranchBranchTypeEnum = "Mobile"
)

type GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONBranchCustomerSegmentEnum string

const (
	GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONBranchCustomerSegmentEnumBusiness  GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONBranchCustomerSegmentEnum = "Business"
	GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONBranchCustomerSegmentEnumCorporate GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONBranchCustomerSegmentEnum = "Corporate"
	GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONBranchCustomerSegmentEnumPersonal  GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONBranchCustomerSegmentEnum = "Personal"
	GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONBranchCustomerSegmentEnumPremier   GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONBranchCustomerSegmentEnum = "Premier"
	GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONBranchCustomerSegmentEnumPrivate   GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONBranchCustomerSegmentEnum = "Private"
	GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONBranchCustomerSegmentEnumSelect    GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONBranchCustomerSegmentEnum = "Select"
	GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONBranchCustomerSegmentEnumSme       GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONBranchCustomerSegmentEnum = "SME"
	GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONBranchCustomerSegmentEnumWealth    GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONBranchCustomerSegmentEnum = "Wealth"
)

type GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONBranchGeographicLocation struct {
	Latitude  string `json:"Latitude"`
	Longitude string `json:"Longitude"`
}

type GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONBranchOpeningTimesOpeningDayEnum string

const (
	GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONBranchOpeningTimesOpeningDayEnumMonday               GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONBranchOpeningTimesOpeningDayEnum = "Monday"
	GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONBranchOpeningTimesOpeningDayEnumTuesday              GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONBranchOpeningTimesOpeningDayEnum = "Tuesday"
	GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONBranchOpeningTimesOpeningDayEnumWednesday            GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONBranchOpeningTimesOpeningDayEnum = "Wednesday"
	GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONBranchOpeningTimesOpeningDayEnumThursday             GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONBranchOpeningTimesOpeningDayEnum = "Thursday"
	GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONBranchOpeningTimesOpeningDayEnumFriday               GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONBranchOpeningTimesOpeningDayEnum = "Friday"
	GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONBranchOpeningTimesOpeningDayEnumSaturday             GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONBranchOpeningTimesOpeningDayEnum = "Saturday"
	GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONBranchOpeningTimesOpeningDayEnumSunday               GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONBranchOpeningTimesOpeningDayEnum = "Sunday"
	GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONBranchOpeningTimesOpeningDayEnumPublicAndBankHoliday GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONBranchOpeningTimesOpeningDayEnum = "Public and Bank Holiday"
)

type GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONBranchOpeningTimes struct {
	ClosingTime           string                                                                                     `json:"ClosingTime"`
	OpeningDay            GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONBranchOpeningTimesOpeningDayEnum `json:"OpeningDay"`
	OpeningTime           string                                                                                     `json:"OpeningTime"`
	UnavailableFinishTime *string                                                                                    `json:"UnavailableFinishTime,omitempty"`
	UnavailableStartTime  *string                                                                                    `json:"UnavailableStartTime,omitempty"`
}

type GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONBranchOrganisationBrandTrademarkIpoCodeEnum string

const (
	GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONBranchOrganisationBrandTrademarkIpoCodeEnumUk GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONBranchOrganisationBrandTrademarkIpoCodeEnum = "UK"
	GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONBranchOrganisationBrandTrademarkIpoCodeEnumEu GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONBranchOrganisationBrandTrademarkIpoCodeEnum = "EU"
)

type GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONBranchOrganisationBrand struct {
	TrademarkID      string                                                                                                `json:"TrademarkID"`
	TrademarkIpoCode GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONBranchOrganisationBrandTrademarkIpoCodeEnum `json:"TrademarkIPOCode"`
}

type GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONBranchOrganisationParentOrganisationOrganisationName struct {
	LegalName string `json:"LegalName"`
}

type GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONBranchOrganisationParentOrganisation struct {
	Bic              *string                                                                                                        `json:"BIC,omitempty"`
	Lei              *string                                                                                                        `json:"LEI,omitempty"`
	OrganisationName GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONBranchOrganisationParentOrganisationOrganisationName `json:"OrganisationName"`
}

type GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONBranchOrganisation struct {
	Brand              GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONBranchOrganisationBrand              `json:"Brand"`
	ParentOrganisation GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONBranchOrganisationParentOrganisation `json:"ParentOrganisation"`
}

type GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONBranchPlannedBranchClosure struct {
	EndDate   *string `json:"EndDate,omitempty"`
	StartDate *string `json:"StartDate,omitempty"`
}

type GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONBranch struct {
	AtmAtBranch                 bool                                                                                             `json:"ATMAtBranch"`
	AccessibilityTypes          *GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONBranchAccessibilityTypesEnum          `json:"AccessibilityTypes,omitempty"`
	Address                     GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONBranchAddress                          `json:"Address"`
	AlternatePhone              []GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONBranchAlternatePhone                 `json:"AlternatePhone,omitempty"`
	ArrivalTime                 *string                                                                                          `json:"ArrivalTime,omitempty"`
	BranchDescription           *string                                                                                          `json:"BranchDescription,omitempty"`
	BranchFacilitiesName        []GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONBranchBranchFacilitiesNameEnum       `json:"BranchFacilitiesName,omitempty"`
	BranchIdentification        string                                                                                           `json:"BranchIdentification"`
	BranchMediatedServiceName   []GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONBranchBranchMediatedServiceNameEnum  `json:"BranchMediatedServiceName,omitempty"`
	BranchName                  *string                                                                                          `json:"BranchName,omitempty"`
	BranchOtherFacilities       []string                                                                                         `json:"BranchOtherFacilities,omitempty"`
	BranchOtherMediatedServices []string                                                                                         `json:"BranchOtherMediatedServices,omitempty"`
	BranchOtherSelfServices     []string                                                                                         `json:"BranchOtherSelfServices,omitempty"`
	BranchPhoto                 *string                                                                                          `json:"BranchPhoto,omitempty"`
	BranchSelfServeServiceName  []GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONBranchBranchSelfServeServiceNameEnum `json:"BranchSelfServeServiceName,omitempty"`
	BranchType                  GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONBranchBranchTypeEnum                   `json:"BranchType"`
	CustomerSegment             []GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONBranchCustomerSegmentEnum            `json:"CustomerSegment"`
	DaysOfTheWeek               *string                                                                                          `json:"DaysOfTheWeek,omitempty"`
	DepartureTime               *string                                                                                          `json:"DepartureTime,omitempty"`
	FaxNumber                   []string                                                                                         `json:"FaxNumber,omitempty"`
	GeographicLocation          *GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONBranchGeographicLocation              `json:"GeographicLocation,omitempty"`
	OpeningTimes                []GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONBranchOpeningTimes                   `json:"OpeningTimes"`
	Organisation                GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONBranchOrganisation                     `json:"Organisation"`
	ParkingLocation             *string                                                                                          `json:"ParkingLocation,omitempty"`
	PlannedBranchClosure        []GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONBranchPlannedBranchClosure           `json:"PlannedBranchClosure,omitempty"`
	StopName                    *string                                                                                          `json:"StopName,omitempty"`
	TelephoneNumber             string                                                                                           `json:"TelephoneNumber"`
}

type GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONMetaDataAgreementEnum string

const (
	GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONMetaDataAgreementEnumUseOfTheApIsAndAnyRelatedDataWillBeSubjectToTheTermsOfTheOpenLicenceAndSubjectToTermsAndConditions GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONMetaDataAgreementEnum = "Use of the APIs and any related data will be subject to the terms of the Open Licence and subject to terms and conditions"
)

type GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONMetaDataLicenseEnum string

const (
	GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONMetaDataLicenseEnumHTTPSWwwOpenbankingOrgUkOpenLicence GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONMetaDataLicenseEnum = "https://www.openbanking.org.uk/open-licence"
)

type GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONMetaDataTermsOfUseEnum string

const (
	GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONMetaDataTermsOfUseEnumHTTPSWwwOpenbankingOrgUkTerms GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONMetaDataTermsOfUseEnum = "https://www.openbanking.org.uk/terms"
)

type GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONMetaData struct {
	Agreement    GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONMetaDataAgreementEnum  `json:"Agreement"`
	LastUpdated  time.Time                                                                        `json:"LastUpdated"`
	License      GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONMetaDataLicenseEnum    `json:"License"`
	TermsOfUse   GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONMetaDataTermsOfUseEnum `json:"TermsOfUse"`
	TotalResults int64                                                                            `json:"TotalResults"`
}

type GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSON struct {
	Data []GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONBranch `json:"data"`
	Meta GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONMetaData `json:"meta"`
}

type GetBranchesResponse struct {
	FourHundredErrorObject                                           *GetBranches400ErrorObject
	FourHundredAndEightErrorObject                                   *GetBranches408ErrorObject
	FourHundredAndTwentyNineErrorObject                              *GetBranches429ErrorObject
	FiveHundredErrorObject                                           *GetBranches500ErrorObject
	FiveHundredAndThreeErrorObject                                   *GetBranches503ErrorObject
	ContentType                                                      string
	ErrorObject                                                      *GetBranchesErrorObject
	GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONObject *GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSON
	Headers                                                          map[string][]string
	StatusCode                                                       int64
}
