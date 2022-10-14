package operations

import (
	"time"
)

type GetBranchesHeaders struct {
	IfModifiedSince *string `header:"name=If-Modified-Since"`
	IfNoneMatch     *string `header:"name=If-None-Match"`
}

type GetBranchesRequest struct {
	Headers GetBranchesHeaders
}

type GetBranches400ApplicationPrsOpenbankingOpendataV13PlusJSONDescriptionEnum string

const (
	GetBranches400ApplicationPrsOpenbankingOpendataV13PlusJSONDescriptionEnumYouHaveSentARequestWhichCouldNotBeUnderstood GetBranches400ApplicationPrsOpenbankingOpendataV13PlusJSONDescriptionEnum = "You have sent a request which could not be understood."
)

type GetBranches400ApplicationPrsOpenbankingOpendataV13PlusJSONStatusEnum string

const (
	GetBranches400ApplicationPrsOpenbankingOpendataV13PlusJSONStatusEnumFourHundred GetBranches400ApplicationPrsOpenbankingOpendataV13PlusJSONStatusEnum = "400"
)

type GetBranches400ApplicationPrsOpenbankingOpendataV13PlusJSONTitleEnum string

const (
	GetBranches400ApplicationPrsOpenbankingOpendataV13PlusJSONTitleEnumBadRequest GetBranches400ApplicationPrsOpenbankingOpendataV13PlusJSONTitleEnum = "Bad request"
)

type GetBranches400ApplicationPrsOpenbankingOpendataV13PlusJSON400ErrorObject struct {
	Description GetBranches400ApplicationPrsOpenbankingOpendataV13PlusJSONDescriptionEnum `json:"description"`
	Status      GetBranches400ApplicationPrsOpenbankingOpendataV13PlusJSONStatusEnum      `json:"status"`
	Title       GetBranches400ApplicationPrsOpenbankingOpendataV13PlusJSONTitleEnum       `json:"title"`
}

type GetBranches408ApplicationPrsOpenbankingOpendataV13PlusJSONDescriptionEnum string

const (
	GetBranches408ApplicationPrsOpenbankingOpendataV13PlusJSONDescriptionEnumYourClientHasFailedToSubmitARequestAndATimeoutHasOccurred GetBranches408ApplicationPrsOpenbankingOpendataV13PlusJSONDescriptionEnum = "Your client has failed to submit a request, and a timeout has occurred."
)

type GetBranches408ApplicationPrsOpenbankingOpendataV13PlusJSONStatusEnum string

const (
	GetBranches408ApplicationPrsOpenbankingOpendataV13PlusJSONStatusEnumFourHundredAndEight GetBranches408ApplicationPrsOpenbankingOpendataV13PlusJSONStatusEnum = "408"
)

type GetBranches408ApplicationPrsOpenbankingOpendataV13PlusJSONTitleEnum string

const (
	GetBranches408ApplicationPrsOpenbankingOpendataV13PlusJSONTitleEnumClientTimeout GetBranches408ApplicationPrsOpenbankingOpendataV13PlusJSONTitleEnum = "Client timeout"
)

type GetBranches408ApplicationPrsOpenbankingOpendataV13PlusJSON408ErrorObject struct {
	Description GetBranches408ApplicationPrsOpenbankingOpendataV13PlusJSONDescriptionEnum `json:"description"`
	Status      GetBranches408ApplicationPrsOpenbankingOpendataV13PlusJSONStatusEnum      `json:"status"`
	Title       GetBranches408ApplicationPrsOpenbankingOpendataV13PlusJSONTitleEnum       `json:"title"`
}

type GetBranches429ApplicationPrsOpenbankingOpendataV13PlusJSONDescriptionEnum string

const (
	GetBranches429ApplicationPrsOpenbankingOpendataV13PlusJSONDescriptionEnumYouHaveRequestedThisResourceTooOftenSlowDown GetBranches429ApplicationPrsOpenbankingOpendataV13PlusJSONDescriptionEnum = "You have requested this resource too often. Slow down."
)

type GetBranches429ApplicationPrsOpenbankingOpendataV13PlusJSONStatusEnum string

const (
	GetBranches429ApplicationPrsOpenbankingOpendataV13PlusJSONStatusEnumFourHundredAndTwentyNine GetBranches429ApplicationPrsOpenbankingOpendataV13PlusJSONStatusEnum = "429"
)

type GetBranches429ApplicationPrsOpenbankingOpendataV13PlusJSONTitleEnum string

const (
	GetBranches429ApplicationPrsOpenbankingOpendataV13PlusJSONTitleEnumTooManyRequests GetBranches429ApplicationPrsOpenbankingOpendataV13PlusJSONTitleEnum = "Too many requests"
)

type GetBranches429ApplicationPrsOpenbankingOpendataV13PlusJSON429ErrorObject struct {
	Description GetBranches429ApplicationPrsOpenbankingOpendataV13PlusJSONDescriptionEnum `json:"description"`
	Status      GetBranches429ApplicationPrsOpenbankingOpendataV13PlusJSONStatusEnum      `json:"status"`
	Title       GetBranches429ApplicationPrsOpenbankingOpendataV13PlusJSONTitleEnum       `json:"title"`
}

type GetBranches500ApplicationPrsOpenbankingOpendataV13PlusJSONDescriptionEnum string

const (
	GetBranches500ApplicationPrsOpenbankingOpendataV13PlusJSONDescriptionEnumAnErrorOccurredOnTheServerNoFurtherInformationIsAvailable GetBranches500ApplicationPrsOpenbankingOpendataV13PlusJSONDescriptionEnum = "An error occurred on the server. No further information is available."
)

type GetBranches500ApplicationPrsOpenbankingOpendataV13PlusJSONStatusEnum string

const (
	GetBranches500ApplicationPrsOpenbankingOpendataV13PlusJSONStatusEnumFiveHundred GetBranches500ApplicationPrsOpenbankingOpendataV13PlusJSONStatusEnum = "500"
)

type GetBranches500ApplicationPrsOpenbankingOpendataV13PlusJSONTitleEnum string

const (
	GetBranches500ApplicationPrsOpenbankingOpendataV13PlusJSONTitleEnumInternalServerError GetBranches500ApplicationPrsOpenbankingOpendataV13PlusJSONTitleEnum = "Internal server error"
)

type GetBranches500ApplicationPrsOpenbankingOpendataV13PlusJSON500ErrorObject struct {
	Description GetBranches500ApplicationPrsOpenbankingOpendataV13PlusJSONDescriptionEnum `json:"description"`
	Status      GetBranches500ApplicationPrsOpenbankingOpendataV13PlusJSONStatusEnum      `json:"status"`
	Title       GetBranches500ApplicationPrsOpenbankingOpendataV13PlusJSONTitleEnum       `json:"title"`
}

type GetBranches503ApplicationPrsOpenbankingOpendataV13PlusJSONDescriptionEnum string

const (
	GetBranches503ApplicationPrsOpenbankingOpendataV13PlusJSONDescriptionEnumTheServiceIsTemporarilyUnavailable GetBranches503ApplicationPrsOpenbankingOpendataV13PlusJSONDescriptionEnum = "The service is temporarily unavailable."
)

type GetBranches503ApplicationPrsOpenbankingOpendataV13PlusJSONStatusEnum string

const (
	GetBranches503ApplicationPrsOpenbankingOpendataV13PlusJSONStatusEnumFiveHundredAndThree GetBranches503ApplicationPrsOpenbankingOpendataV13PlusJSONStatusEnum = "503"
)

type GetBranches503ApplicationPrsOpenbankingOpendataV13PlusJSONTitleEnum string

const (
	GetBranches503ApplicationPrsOpenbankingOpendataV13PlusJSONTitleEnumServiceTemporarilyUnavailable GetBranches503ApplicationPrsOpenbankingOpendataV13PlusJSONTitleEnum = "Service temporarily unavailable"
)

type GetBranches503ApplicationPrsOpenbankingOpendataV13PlusJSON503ErrorObject struct {
	Description GetBranches503ApplicationPrsOpenbankingOpendataV13PlusJSONDescriptionEnum `json:"description"`
	Status      GetBranches503ApplicationPrsOpenbankingOpendataV13PlusJSONStatusEnum      `json:"status"`
	Title       GetBranches503ApplicationPrsOpenbankingOpendataV13PlusJSONTitleEnum       `json:"title"`
}

type GetBranchesDefaultApplicationPrsOpenbankingOpendataV13PlusJSONErrorObject struct {
	Description string `json:"description"`
	Status      string `json:"status"`
	Title       string `json:"title"`
}

type GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONDataAccessibilityTypesEnum string

const (
	GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONDataAccessibilityTypesEnumAudioCashMachine  GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONDataAccessibilityTypesEnum = "AudioCashMachine"
	GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONDataAccessibilityTypesEnumAutomaticDoors    GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONDataAccessibilityTypesEnum = "AutomaticDoors"
	GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONDataAccessibilityTypesEnumChairAccess       GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONDataAccessibilityTypesEnum = "ChairAccess"
	GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONDataAccessibilityTypesEnumDriveThru         GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONDataAccessibilityTypesEnum = "DriveThru"
	GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONDataAccessibilityTypesEnumExternalRamp      GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONDataAccessibilityTypesEnum = "ExternalRamp"
	GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONDataAccessibilityTypesEnumInductionLoop     GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONDataAccessibilityTypesEnum = "InductionLoop"
	GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONDataAccessibilityTypesEnumInternalRamp      GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONDataAccessibilityTypesEnum = "InternalRamp"
	GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONDataAccessibilityTypesEnumLevelAccess       GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONDataAccessibilityTypesEnum = "LevelAccess"
	GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONDataAccessibilityTypesEnumLowerLevelCounter GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONDataAccessibilityTypesEnum = "LowerLevelCounter"
	GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONDataAccessibilityTypesEnumWheelchairAccess  GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONDataAccessibilityTypesEnum = "WheelchairAccess"
)

type GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONDataAddress struct {
	BuildingNumberOrName *string `json:"BuildingNumberOrName,omitempty"`
	Country              string  `json:"Country"`
	CountrySubDivision   *string `json:"CountrySubDivision,omitempty"`
	OptionalAddressField *string `json:"OptionalAddressField,omitempty"`
	PostCode             *string `json:"PostCode,omitempty"`
	StreetName           *string `json:"StreetName,omitempty"`
	TownName             *string `json:"TownName,omitempty"`
}

type GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONDataAlternatePhone struct {
	AlternateTelephoneNumber            *string `json:"AlternateTelephoneNumber,omitempty"`
	AlternateTelephoneNumberDescription *string `json:"AlternateTelephoneNumberDescription,omitempty"`
}

type GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONDataBranchFacilitiesNameEnum string

const (
	GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONDataBranchFacilitiesNameEnumBusinessItSupport GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONDataBranchFacilitiesNameEnum = "BusinessITSupport"
	GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONDataBranchFacilitiesNameEnumCollectionLockers GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONDataBranchFacilitiesNameEnum = "CollectionLockers"
	GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONDataBranchFacilitiesNameEnumMeetingRooms      GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONDataBranchFacilitiesNameEnum = "MeetingRooms"
	GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONDataBranchFacilitiesNameEnumParking           GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONDataBranchFacilitiesNameEnum = "Parking"
	GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONDataBranchFacilitiesNameEnumWifi              GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONDataBranchFacilitiesNameEnum = "Wifi"
)

type GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONDataBranchMediatedServiceNameEnum string

const (
	GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONDataBranchMediatedServiceNameEnumBureauDeChange       GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONDataBranchMediatedServiceNameEnum = "BureauDeChange"
	GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONDataBranchMediatedServiceNameEnumBusinessCounter      GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONDataBranchMediatedServiceNameEnum = "BusinessCounter"
	GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONDataBranchMediatedServiceNameEnumCardIssuanceFacility GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONDataBranchMediatedServiceNameEnum = "CardIssuanceFacility"
	GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONDataBranchMediatedServiceNameEnumCounterServices      GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONDataBranchMediatedServiceNameEnum = "CounterServices"
	GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONDataBranchMediatedServiceNameEnumDriveThru            GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONDataBranchMediatedServiceNameEnum = "DriveThru"
	GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONDataBranchMediatedServiceNameEnumMortgageAdvisor      GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONDataBranchMediatedServiceNameEnum = "MortgageAdvisor"
	GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONDataBranchMediatedServiceNameEnumNightSafe            GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONDataBranchMediatedServiceNameEnum = "NightSafe"
	GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONDataBranchMediatedServiceNameEnumOnDemandCurrency     GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONDataBranchMediatedServiceNameEnum = "OnDemandCurrency"
	GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONDataBranchMediatedServiceNameEnumPremierCounter       GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONDataBranchMediatedServiceNameEnum = "PremierCounter"
	GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONDataBranchMediatedServiceNameEnumVideoBanking         GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONDataBranchMediatedServiceNameEnum = "VideoBanking"
	GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONDataBranchMediatedServiceNameEnumWheelChairAccess     GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONDataBranchMediatedServiceNameEnum = "WheelChairAccess"
)

type GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONDataBranchSelfServeServiceNameEnum string

const (
	GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONDataBranchSelfServeServiceNameEnumAccountVerificationService     GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONDataBranchSelfServeServiceNameEnum = "AccountVerificationService"
	GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONDataBranchSelfServeServiceNameEnumAssistedServiceCounter         GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONDataBranchSelfServeServiceNameEnum = "AssistedServiceCounter"
	GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONDataBranchSelfServeServiceNameEnumBusinessDepositTerminal        GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONDataBranchSelfServeServiceNameEnum = "BusinessDepositTerminal"
	GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONDataBranchSelfServeServiceNameEnumCashChequeDepositMachineCoin   GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONDataBranchSelfServeServiceNameEnum = "CashChequeDepositMachineCoin"
	GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONDataBranchSelfServeServiceNameEnumCashChequeDepositMachineNoCoin GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONDataBranchSelfServeServiceNameEnum = "CashChequeDepositMachineNoCoin"
	GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONDataBranchSelfServeServiceNameEnumExternalAtmAudio               GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONDataBranchSelfServeServiceNameEnum = "ExternalAtmAudio"
	GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONDataBranchSelfServeServiceNameEnumExternalAtmNoAudio             GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONDataBranchSelfServeServiceNameEnum = "ExternalAtmNoAudio"
	GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONDataBranchSelfServeServiceNameEnumExternalQuickServicePoint      GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONDataBranchSelfServeServiceNameEnum = "ExternalQuickServicePoint"
	GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONDataBranchSelfServeServiceNameEnumInternalAtmAudio               GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONDataBranchSelfServeServiceNameEnum = "InternalAtmAudio"
	GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONDataBranchSelfServeServiceNameEnumInternalAtmNoAudio             GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONDataBranchSelfServeServiceNameEnum = "InternalAtmNoAudio"
	GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONDataBranchSelfServeServiceNameEnumInternalQuickServicePoint      GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONDataBranchSelfServeServiceNameEnum = "InternalQuickServicePoint"
	GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONDataBranchSelfServeServiceNameEnumLodgementDevice                GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONDataBranchSelfServeServiceNameEnum = "LodgementDevice"
	GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONDataBranchSelfServeServiceNameEnumOnlineBankingPoint             GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONDataBranchSelfServeServiceNameEnum = "OnlineBankingPoint"
	GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONDataBranchSelfServeServiceNameEnumQuickDeposit                   GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONDataBranchSelfServeServiceNameEnum = "QuickDeposit"
	GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONDataBranchSelfServeServiceNameEnumSaturdayCounterService         GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONDataBranchSelfServeServiceNameEnum = "SaturdayCounterService"
	GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONDataBranchSelfServeServiceNameEnumSelfServiceAccountOpening      GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONDataBranchSelfServeServiceNameEnum = "SelfServiceAccountOpening"
	GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONDataBranchSelfServeServiceNameEnumStatementPrinter               GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONDataBranchSelfServeServiceNameEnum = "StatementPrinter"
)

type GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONDataBranchTypeEnum string

const (
	GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONDataBranchTypeEnumPhysical GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONDataBranchTypeEnum = "Physical"
	GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONDataBranchTypeEnumMobile   GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONDataBranchTypeEnum = "Mobile"
)

type GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONDataCustomerSegmentEnum string

const (
	GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONDataCustomerSegmentEnumBusiness  GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONDataCustomerSegmentEnum = "Business"
	GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONDataCustomerSegmentEnumCorporate GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONDataCustomerSegmentEnum = "Corporate"
	GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONDataCustomerSegmentEnumPersonal  GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONDataCustomerSegmentEnum = "Personal"
	GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONDataCustomerSegmentEnumPremier   GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONDataCustomerSegmentEnum = "Premier"
	GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONDataCustomerSegmentEnumPrivate   GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONDataCustomerSegmentEnum = "Private"
	GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONDataCustomerSegmentEnumSelect    GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONDataCustomerSegmentEnum = "Select"
	GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONDataCustomerSegmentEnumSme       GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONDataCustomerSegmentEnum = "SME"
	GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONDataCustomerSegmentEnumWealth    GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONDataCustomerSegmentEnum = "Wealth"
)

type GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONDataGeographicLocation struct {
	Latitude  string `json:"Latitude"`
	Longitude string `json:"Longitude"`
}

type GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOpeningTimesOpeningDayEnum string

const (
	GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOpeningTimesOpeningDayEnumMonday               GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOpeningTimesOpeningDayEnum = "Monday"
	GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOpeningTimesOpeningDayEnumTuesday              GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOpeningTimesOpeningDayEnum = "Tuesday"
	GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOpeningTimesOpeningDayEnumWednesday            GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOpeningTimesOpeningDayEnum = "Wednesday"
	GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOpeningTimesOpeningDayEnumThursday             GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOpeningTimesOpeningDayEnum = "Thursday"
	GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOpeningTimesOpeningDayEnumFriday               GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOpeningTimesOpeningDayEnum = "Friday"
	GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOpeningTimesOpeningDayEnumSaturday             GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOpeningTimesOpeningDayEnum = "Saturday"
	GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOpeningTimesOpeningDayEnumSunday               GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOpeningTimesOpeningDayEnum = "Sunday"
	GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOpeningTimesOpeningDayEnumPublicAndBankHoliday GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOpeningTimesOpeningDayEnum = "Public and Bank Holiday"
)

type GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOpeningTimes struct {
	ClosingTime           string                                                                                   `json:"ClosingTime"`
	OpeningDay            GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOpeningTimesOpeningDayEnum `json:"OpeningDay"`
	OpeningTime           string                                                                                   `json:"OpeningTime"`
	UnavailableFinishTime *string                                                                                  `json:"UnavailableFinishTime,omitempty"`
	UnavailableStartTime  *string                                                                                  `json:"UnavailableStartTime,omitempty"`
}

type GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOrganisationBrandTrademarkIpoCodeEnum string

const (
	GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOrganisationBrandTrademarkIpoCodeEnumUk GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOrganisationBrandTrademarkIpoCodeEnum = "UK"
	GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOrganisationBrandTrademarkIpoCodeEnumEu GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOrganisationBrandTrademarkIpoCodeEnum = "EU"
)

type GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOrganisationBrand struct {
	TrademarkID      string                                                                                              `json:"TrademarkID"`
	TrademarkIpoCode GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOrganisationBrandTrademarkIpoCodeEnum `json:"TrademarkIPOCode"`
}

type GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOrganisationParentOrganisationOrganisationName struct {
	LegalName string `json:"LegalName"`
}

type GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOrganisationParentOrganisation struct {
	Bic              *string                                                                                                      `json:"BIC,omitempty"`
	Lei              *string                                                                                                      `json:"LEI,omitempty"`
	OrganisationName GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOrganisationParentOrganisationOrganisationName `json:"OrganisationName"`
}

type GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOrganisation struct {
	Brand              GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOrganisationBrand              `json:"Brand"`
	ParentOrganisation GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOrganisationParentOrganisation `json:"ParentOrganisation"`
}

type GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONDataPlannedBranchClosure struct {
	EndDate   *string `json:"EndDate,omitempty"`
	StartDate *string `json:"StartDate,omitempty"`
}

type GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONDataBranch struct {
	AtmAtBranch                 bool                                                                                           `json:"ATMAtBranch"`
	AccessibilityTypes          *GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONDataAccessibilityTypesEnum          `json:"AccessibilityTypes,omitempty"`
	Address                     GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONDataAddress                          `json:"Address"`
	AlternatePhone              []GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONDataAlternatePhone                 `json:"AlternatePhone,omitempty"`
	ArrivalTime                 *string                                                                                        `json:"ArrivalTime,omitempty"`
	BranchDescription           *string                                                                                        `json:"BranchDescription,omitempty"`
	BranchFacilitiesName        []GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONDataBranchFacilitiesNameEnum       `json:"BranchFacilitiesName,omitempty"`
	BranchIdentification        string                                                                                         `json:"BranchIdentification"`
	BranchMediatedServiceName   []GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONDataBranchMediatedServiceNameEnum  `json:"BranchMediatedServiceName,omitempty"`
	BranchName                  *string                                                                                        `json:"BranchName,omitempty"`
	BranchOtherFacilities       []string                                                                                       `json:"BranchOtherFacilities,omitempty"`
	BranchOtherMediatedServices []string                                                                                       `json:"BranchOtherMediatedServices,omitempty"`
	BranchOtherSelfServices     []string                                                                                       `json:"BranchOtherSelfServices,omitempty"`
	BranchPhoto                 *string                                                                                        `json:"BranchPhoto,omitempty"`
	BranchSelfServeServiceName  []GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONDataBranchSelfServeServiceNameEnum `json:"BranchSelfServeServiceName,omitempty"`
	BranchType                  GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONDataBranchTypeEnum                   `json:"BranchType"`
	CustomerSegment             []GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONDataCustomerSegmentEnum            `json:"CustomerSegment"`
	DaysOfTheWeek               *string                                                                                        `json:"DaysOfTheWeek,omitempty"`
	DepartureTime               *string                                                                                        `json:"DepartureTime,omitempty"`
	FaxNumber                   []string                                                                                       `json:"FaxNumber,omitempty"`
	GeographicLocation          *GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONDataGeographicLocation              `json:"GeographicLocation,omitempty"`
	OpeningTimes                []GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOpeningTimes                   `json:"OpeningTimes"`
	Organisation                GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOrganisation                     `json:"Organisation"`
	ParkingLocation             *string                                                                                        `json:"ParkingLocation,omitempty"`
	PlannedBranchClosure        []GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONDataPlannedBranchClosure           `json:"PlannedBranchClosure,omitempty"`
	StopName                    *string                                                                                        `json:"StopName,omitempty"`
	TelephoneNumber             string                                                                                         `json:"TelephoneNumber"`
}

type GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONMetaAgreementEnum string

const (
	GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONMetaAgreementEnumUseOfTheApIsAndAnyRelatedDataWillBeSubjectToTheTermsOfTheOpenLicenceAndSubjectToTermsAndConditions GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONMetaAgreementEnum = "Use of the APIs and any related data will be subject to the terms of the Open Licence and subject to terms and conditions"
)

type GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONMetaLicenseEnum string

const (
	GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONMetaLicenseEnumHTTPSWwwOpenbankingOrgUkOpenLicence GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONMetaLicenseEnum = "https://www.openbanking.org.uk/open-licence"
)

type GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONMetaTermsOfUseEnum string

const (
	GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONMetaTermsOfUseEnumHTTPSWwwOpenbankingOrgUkTerms GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONMetaTermsOfUseEnum = "https://www.openbanking.org.uk/terms"
)

type GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONMetaMetaData struct {
	Agreement    GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONMetaAgreementEnum  `json:"Agreement"`
	LastUpdated  time.Time                                                                    `json:"LastUpdated"`
	License      GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONMetaLicenseEnum    `json:"License"`
	TermsOfUse   GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONMetaTermsOfUseEnum `json:"TermsOfUse"`
	TotalResults int64                                                                        `json:"TotalResults"`
}

type GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSON struct {
	Data []GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONDataBranch `json:"data"`
	Meta GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONMetaMetaData `json:"meta"`
}

type GetBranchesResponse struct {
	FourHundredErrorObject                                           *GetBranches400ApplicationPrsOpenbankingOpendataV13PlusJSON400ErrorObject
	FourHundredAndEightErrorObject                                   *GetBranches408ApplicationPrsOpenbankingOpendataV13PlusJSON408ErrorObject
	FourHundredAndTwentyNineErrorObject                              *GetBranches429ApplicationPrsOpenbankingOpendataV13PlusJSON429ErrorObject
	FiveHundredErrorObject                                           *GetBranches500ApplicationPrsOpenbankingOpendataV13PlusJSON500ErrorObject
	FiveHundredAndThreeErrorObject                                   *GetBranches503ApplicationPrsOpenbankingOpendataV13PlusJSON503ErrorObject
	ContentType                                                      string
	ErrorObject                                                      *GetBranchesDefaultApplicationPrsOpenbankingOpendataV13PlusJSONErrorObject
	GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSONObject *GetBranches200ApplicationPrsOpenbankingOpendataV13PlusJSON
	Headers                                                          map[string][]string
	StatusCode                                                       int64
}
