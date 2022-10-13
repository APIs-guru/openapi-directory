package operations

import (
	"time"
)

type GetBusinessCurrentAccountsHeaders struct {
	IfModifiedSince *string `header:"name=If-Modified-Since"`
	IfNoneMatch     *string `header:"name=If-None-Match"`
}

type GetBusinessCurrentAccountsRequest struct {
	Headers GetBusinessCurrentAccountsHeaders
}

type GetBusinessCurrentAccounts400ApplicationPrsOpenbankingOpendataV13PlusJSONDescriptionEnum string

const (
	GetBusinessCurrentAccounts400ApplicationPrsOpenbankingOpendataV13PlusJSONDescriptionEnumYouHaveSentARequestWhichCouldNotBeUnderstood GetBusinessCurrentAccounts400ApplicationPrsOpenbankingOpendataV13PlusJSONDescriptionEnum = "You have sent a request which could not be understood."
)

type GetBusinessCurrentAccounts400ApplicationPrsOpenbankingOpendataV13PlusJSONStatusEnum string

const (
	GetBusinessCurrentAccounts400ApplicationPrsOpenbankingOpendataV13PlusJSONStatusEnumFourHundred GetBusinessCurrentAccounts400ApplicationPrsOpenbankingOpendataV13PlusJSONStatusEnum = "400"
)

type GetBusinessCurrentAccounts400ApplicationPrsOpenbankingOpendataV13PlusJSONTitleEnum string

const (
	GetBusinessCurrentAccounts400ApplicationPrsOpenbankingOpendataV13PlusJSONTitleEnumBadRequest GetBusinessCurrentAccounts400ApplicationPrsOpenbankingOpendataV13PlusJSONTitleEnum = "Bad request"
)

type GetBusinessCurrentAccounts400ApplicationPrsOpenbankingOpendataV13PlusJSON400ErrorObject struct {
	Description GetBusinessCurrentAccounts400ApplicationPrsOpenbankingOpendataV13PlusJSONDescriptionEnum `json:"description"`
	Status      GetBusinessCurrentAccounts400ApplicationPrsOpenbankingOpendataV13PlusJSONStatusEnum      `json:"status"`
	Title       GetBusinessCurrentAccounts400ApplicationPrsOpenbankingOpendataV13PlusJSONTitleEnum       `json:"title"`
}

type GetBusinessCurrentAccounts408ApplicationPrsOpenbankingOpendataV13PlusJSONDescriptionEnum string

const (
	GetBusinessCurrentAccounts408ApplicationPrsOpenbankingOpendataV13PlusJSONDescriptionEnumYourClientHasFailedToSubmitARequestAndATimeoutHasOccurred GetBusinessCurrentAccounts408ApplicationPrsOpenbankingOpendataV13PlusJSONDescriptionEnum = "Your client has failed to submit a request, and a timeout has occurred."
)

type GetBusinessCurrentAccounts408ApplicationPrsOpenbankingOpendataV13PlusJSONStatusEnum string

const (
	GetBusinessCurrentAccounts408ApplicationPrsOpenbankingOpendataV13PlusJSONStatusEnumFourHundredAndEight GetBusinessCurrentAccounts408ApplicationPrsOpenbankingOpendataV13PlusJSONStatusEnum = "408"
)

type GetBusinessCurrentAccounts408ApplicationPrsOpenbankingOpendataV13PlusJSONTitleEnum string

const (
	GetBusinessCurrentAccounts408ApplicationPrsOpenbankingOpendataV13PlusJSONTitleEnumClientTimeout GetBusinessCurrentAccounts408ApplicationPrsOpenbankingOpendataV13PlusJSONTitleEnum = "Client timeout"
)

type GetBusinessCurrentAccounts408ApplicationPrsOpenbankingOpendataV13PlusJSON408ErrorObject struct {
	Description GetBusinessCurrentAccounts408ApplicationPrsOpenbankingOpendataV13PlusJSONDescriptionEnum `json:"description"`
	Status      GetBusinessCurrentAccounts408ApplicationPrsOpenbankingOpendataV13PlusJSONStatusEnum      `json:"status"`
	Title       GetBusinessCurrentAccounts408ApplicationPrsOpenbankingOpendataV13PlusJSONTitleEnum       `json:"title"`
}

type GetBusinessCurrentAccounts429ApplicationPrsOpenbankingOpendataV13PlusJSONDescriptionEnum string

const (
	GetBusinessCurrentAccounts429ApplicationPrsOpenbankingOpendataV13PlusJSONDescriptionEnumYouHaveRequestedThisResourceTooOftenSlowDown GetBusinessCurrentAccounts429ApplicationPrsOpenbankingOpendataV13PlusJSONDescriptionEnum = "You have requested this resource too often. Slow down."
)

type GetBusinessCurrentAccounts429ApplicationPrsOpenbankingOpendataV13PlusJSONStatusEnum string

const (
	GetBusinessCurrentAccounts429ApplicationPrsOpenbankingOpendataV13PlusJSONStatusEnumFourHundredAndTwentyNine GetBusinessCurrentAccounts429ApplicationPrsOpenbankingOpendataV13PlusJSONStatusEnum = "429"
)

type GetBusinessCurrentAccounts429ApplicationPrsOpenbankingOpendataV13PlusJSONTitleEnum string

const (
	GetBusinessCurrentAccounts429ApplicationPrsOpenbankingOpendataV13PlusJSONTitleEnumTooManyRequests GetBusinessCurrentAccounts429ApplicationPrsOpenbankingOpendataV13PlusJSONTitleEnum = "Too many requests"
)

type GetBusinessCurrentAccounts429ApplicationPrsOpenbankingOpendataV13PlusJSON429ErrorObject struct {
	Description GetBusinessCurrentAccounts429ApplicationPrsOpenbankingOpendataV13PlusJSONDescriptionEnum `json:"description"`
	Status      GetBusinessCurrentAccounts429ApplicationPrsOpenbankingOpendataV13PlusJSONStatusEnum      `json:"status"`
	Title       GetBusinessCurrentAccounts429ApplicationPrsOpenbankingOpendataV13PlusJSONTitleEnum       `json:"title"`
}

type GetBusinessCurrentAccounts500ApplicationPrsOpenbankingOpendataV13PlusJSONDescriptionEnum string

const (
	GetBusinessCurrentAccounts500ApplicationPrsOpenbankingOpendataV13PlusJSONDescriptionEnumAnErrorOccurredOnTheServerNoFurtherInformationIsAvailable GetBusinessCurrentAccounts500ApplicationPrsOpenbankingOpendataV13PlusJSONDescriptionEnum = "An error occurred on the server. No further information is available."
)

type GetBusinessCurrentAccounts500ApplicationPrsOpenbankingOpendataV13PlusJSONStatusEnum string

const (
	GetBusinessCurrentAccounts500ApplicationPrsOpenbankingOpendataV13PlusJSONStatusEnumFiveHundred GetBusinessCurrentAccounts500ApplicationPrsOpenbankingOpendataV13PlusJSONStatusEnum = "500"
)

type GetBusinessCurrentAccounts500ApplicationPrsOpenbankingOpendataV13PlusJSONTitleEnum string

const (
	GetBusinessCurrentAccounts500ApplicationPrsOpenbankingOpendataV13PlusJSONTitleEnumInternalServerError GetBusinessCurrentAccounts500ApplicationPrsOpenbankingOpendataV13PlusJSONTitleEnum = "Internal server error"
)

type GetBusinessCurrentAccounts500ApplicationPrsOpenbankingOpendataV13PlusJSON500ErrorObject struct {
	Description GetBusinessCurrentAccounts500ApplicationPrsOpenbankingOpendataV13PlusJSONDescriptionEnum `json:"description"`
	Status      GetBusinessCurrentAccounts500ApplicationPrsOpenbankingOpendataV13PlusJSONStatusEnum      `json:"status"`
	Title       GetBusinessCurrentAccounts500ApplicationPrsOpenbankingOpendataV13PlusJSONTitleEnum       `json:"title"`
}

type GetBusinessCurrentAccounts503ApplicationPrsOpenbankingOpendataV13PlusJSONDescriptionEnum string

const (
	GetBusinessCurrentAccounts503ApplicationPrsOpenbankingOpendataV13PlusJSONDescriptionEnumTheServiceIsTemporarilyUnavailable GetBusinessCurrentAccounts503ApplicationPrsOpenbankingOpendataV13PlusJSONDescriptionEnum = "The service is temporarily unavailable."
)

type GetBusinessCurrentAccounts503ApplicationPrsOpenbankingOpendataV13PlusJSONStatusEnum string

const (
	GetBusinessCurrentAccounts503ApplicationPrsOpenbankingOpendataV13PlusJSONStatusEnumFiveHundredAndThree GetBusinessCurrentAccounts503ApplicationPrsOpenbankingOpendataV13PlusJSONStatusEnum = "503"
)

type GetBusinessCurrentAccounts503ApplicationPrsOpenbankingOpendataV13PlusJSONTitleEnum string

const (
	GetBusinessCurrentAccounts503ApplicationPrsOpenbankingOpendataV13PlusJSONTitleEnumServiceTemporarilyUnavailable GetBusinessCurrentAccounts503ApplicationPrsOpenbankingOpendataV13PlusJSONTitleEnum = "Service temporarily unavailable"
)

type GetBusinessCurrentAccounts503ApplicationPrsOpenbankingOpendataV13PlusJSON503ErrorObject struct {
	Description GetBusinessCurrentAccounts503ApplicationPrsOpenbankingOpendataV13PlusJSONDescriptionEnum `json:"description"`
	Status      GetBusinessCurrentAccounts503ApplicationPrsOpenbankingOpendataV13PlusJSONStatusEnum      `json:"status"`
	Title       GetBusinessCurrentAccounts503ApplicationPrsOpenbankingOpendataV13PlusJSONTitleEnum       `json:"title"`
}

type GetBusinessCurrentAccountsDefaultApplicationPrsOpenbankingOpendataV13PlusJSONErrorObject struct {
	Description string `json:"description"`
	Status      string `json:"status"`
	Title       string `json:"title"`
}

type GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataAccessChannelsEnum string

const (
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataAccessChannelsEnumAtm                      GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataAccessChannelsEnum = "ATM"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataAccessChannelsEnumBranch                   GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataAccessChannelsEnum = "Branch"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataAccessChannelsEnumBusinessCommercialCentre GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataAccessChannelsEnum = "BusinessCommercialCentre"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataAccessChannelsEnumCallCentre               GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataAccessChannelsEnum = "CallCentre"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataAccessChannelsEnumMobileApps               GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataAccessChannelsEnum = "MobileApps"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataAccessChannelsEnumMobileBanking            GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataAccessChannelsEnum = "MobileBanking"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataAccessChannelsEnumOnline                   GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataAccessChannelsEnum = "Online"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataAccessChannelsEnumPhone                    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataAccessChannelsEnum = "Phone"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataAccessChannelsEnumPost                     GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataAccessChannelsEnum = "Post"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataAccessChannelsEnumPostOffice               GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataAccessChannelsEnum = "PostOffice"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataAccessChannelsEnumRelationshipManager      GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataAccessChannelsEnum = "RelationshipManager"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataAccessChannelsEnumText                     GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataAccessChannelsEnum = "Text"
)

type GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataBenefitsBenefitGroupBenefitItemBenefitDetailCriteriaTypeEnum string

const (
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataBenefitsBenefitGroupBenefitItemBenefitDetailCriteriaTypeEnumCashDeposit    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataBenefitsBenefitGroupBenefitItemBenefitDetailCriteriaTypeEnum = "CashDeposit"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataBenefitsBenefitGroupBenefitItemBenefitDetailCriteriaTypeEnumDeposit        GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataBenefitsBenefitGroupBenefitItemBenefitDetailCriteriaTypeEnum = "Deposit"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataBenefitsBenefitGroupBenefitItemBenefitDetailCriteriaTypeEnumDirectDebit    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataBenefitsBenefitGroupBenefitItemBenefitDetailCriteriaTypeEnum = "DirectDebit"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataBenefitsBenefitGroupBenefitItemBenefitDetailCriteriaTypeEnumInitialDeposit GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataBenefitsBenefitGroupBenefitItemBenefitDetailCriteriaTypeEnum = "InitialDeposit"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataBenefitsBenefitGroupBenefitItemBenefitDetailCriteriaTypeEnumInternetLogon  GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataBenefitsBenefitGroupBenefitItemBenefitDetailCriteriaTypeEnum = "InternetLogon"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataBenefitsBenefitGroupBenefitItemBenefitDetailCriteriaTypeEnumMobileLogon    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataBenefitsBenefitGroupBenefitItemBenefitDetailCriteriaTypeEnum = "MobileLogon"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataBenefitsBenefitGroupBenefitItemBenefitDetailCriteriaTypeEnumRegularDeposit GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataBenefitsBenefitGroupBenefitItemBenefitDetailCriteriaTypeEnum = "RegularDeposit"
)

type GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataBenefitsBenefitGroupBenefitItemBenefitDetail struct {
	BenefitDescription *string                                                                                                                                     `json:"BenefitDescription"`
	BenefitID          *string                                                                                                                                     `json:"BenefitID"`
	BenefitName        *string                                                                                                                                     `json:"BenefitName"`
	BenefitType        *string                                                                                                                                     `json:"BenefitType"`
	BenefitValue       *string                                                                                                                                     `json:"BenefitValue"`
	Counter            *int64                                                                                                                                      `json:"Counter"`
	CriteriaType       []GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataBenefitsBenefitGroupBenefitItemBenefitDetailCriteriaTypeEnum `json:"CriteriaType"`
	DefaultToAccounts  *bool                                                                                                                                       `json:"DefaultToAccounts"`
	MaximumCriteria    *string                                                                                                                                     `json:"MaximumCriteria"`
	MinimumCriteria    *string                                                                                                                                     `json:"MinimumCriteria"`
	PromotionEndDate   *string                                                                                                                                     `json:"PromotionEndDate"`
	PromotionStartDate *string                                                                                                                                     `json:"PromotionStartDate"`
}

type GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataBenefitsBenefitGroupBenefitItem struct {
	BenefitDetail               []GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataBenefitsBenefitGroupBenefitItemBenefitDetail `json:"BenefitDetail"`
	DateOfChange                *string                                                                                                                     `json:"DateOfChange"`
	LengthPromotionalInDays     *int64                                                                                                                      `json:"LengthPromotionalInDays"`
	StartPromotionOrFutureTerms *string                                                                                                                     `json:"StartPromotionOrFutureTerms"`
	StopPromotionOrFutureTerms  *string                                                                                                                     `json:"StopPromotionOrFutureTerms"`
}

type GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataBenefitsBenefitGroupBenefitSubTypeEnum string

const (
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataBenefitsBenefitGroupBenefitSubTypeEnumFutureMultipleTerms GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataBenefitsBenefitGroupBenefitSubTypeEnum = "FutureMultipleTerms"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataBenefitsBenefitGroupBenefitSubTypeEnumPromotional         GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataBenefitsBenefitGroupBenefitSubTypeEnum = "Promotional"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataBenefitsBenefitGroupBenefitSubTypeEnumRegular             GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataBenefitsBenefitGroupBenefitSubTypeEnum = "Regular"
)

type GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataBenefitsBenefitGroup struct {
	BenefitItem    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataBenefitsBenefitGroupBenefitItem         `json:"BenefitItem"`
	BenefitSubType *GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataBenefitsBenefitGroupBenefitSubTypeEnum `json:"BenefitSubType"`
}

type GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataBenefits struct {
	Benefit      bool                                                                                                `json:"Benefit"`
	BenefitGroup []GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataBenefitsBenefitGroup `json:"BenefitGroup"`
}

type GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataCaPricingCaPricingItem struct {
	DateOfChange                *string `json:"DateOfChange"`
	ExchangeRateAdjustment      *string `json:"ExchangeRateAdjustment"`
	LengthPromotionalInDays     *int64  `json:"LengthPromotionalInDays"`
	StartPromotionOrFutureTerms *string `json:"StartPromotionOrFutureTerms"`
	StopPromotionOrFutureTerms  *string `json:"StopPromotionOrFutureTerms"`
}

type GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataCaPricingProductStateEnum string

const (
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataCaPricingProductStateEnumFutureMultipleTerms GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataCaPricingProductStateEnum = "FutureMultipleTerms"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataCaPricingProductStateEnumPromotional         GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataCaPricingProductStateEnum = "Promotional"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataCaPricingProductStateEnumRegular             GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataCaPricingProductStateEnum = "Regular"
)

type GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataCaPricing struct {
	CaPricingItem GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataCaPricingCaPricingItem    `json:"CAPricingItem"`
	ProductState  GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataCaPricingProductStateEnum `json:"ProductState"`
}

type GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataCardTypeEnum string

const (
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataCardTypeEnumBasicCard                  GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataCardTypeEnum = "BasicCard"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataCardTypeEnumBusinessQuickLodgeCard     GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataCardTypeEnum = "BusinessQuickLodgeCard"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataCardTypeEnumCashcard                   GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataCardTypeEnum = "Cashcard"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataCardTypeEnumContactlessCashcard        GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataCardTypeEnum = "ContactlessCashcard"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataCardTypeEnumContactlessDebitMastercard GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataCardTypeEnum = "ContactlessDebitMastercard"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataCardTypeEnumContactlessDebitVisa       GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataCardTypeEnum = "ContactlessDebitVisa"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataCardTypeEnumDebitMastercard            GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataCardTypeEnum = "DebitMastercard"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataCardTypeEnumVisaDebit                  GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataCardTypeEnum = "VisaDebit"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataCardTypeEnumDepositCard                GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataCardTypeEnum = "DepositCard"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataCardTypeEnumOperatorCard               GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataCardTypeEnum = "OperatorCard"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataCardTypeEnumPocaCard                   GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataCardTypeEnum = "POCACard"
)

type GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataCreditInterestCreditInterestGroupCreditInterestItemCalculationFrequencyEnum string

const (
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataCreditInterestCreditInterestGroupCreditInterestItemCalculationFrequencyEnumDaily      GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataCreditInterestCreditInterestGroupCreditInterestItemCalculationFrequencyEnum = "Daily"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataCreditInterestCreditInterestGroupCreditInterestItemCalculationFrequencyEnumWeekly     GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataCreditInterestCreditInterestGroupCreditInterestItemCalculationFrequencyEnum = "Weekly"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataCreditInterestCreditInterestGroupCreditInterestItemCalculationFrequencyEnumMonthly    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataCreditInterestCreditInterestGroupCreditInterestItemCalculationFrequencyEnum = "Monthly"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataCreditInterestCreditInterestGroupCreditInterestItemCalculationFrequencyEnumQuarterly  GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataCreditInterestCreditInterestGroupCreditInterestItemCalculationFrequencyEnum = "Quarterly"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataCreditInterestCreditInterestGroupCreditInterestItemCalculationFrequencyEnumHalfYearly GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataCreditInterestCreditInterestGroupCreditInterestItemCalculationFrequencyEnum = "Half-Yearly"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataCreditInterestCreditInterestGroupCreditInterestItemCalculationFrequencyEnumYearly     GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataCreditInterestCreditInterestGroupCreditInterestItemCalculationFrequencyEnum = "Yearly"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataCreditInterestCreditInterestGroupCreditInterestItemCalculationFrequencyEnumOvernight  GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataCreditInterestCreditInterestGroupCreditInterestItemCalculationFrequencyEnum = "Overnight"
)

type GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataCreditInterestCreditInterestGroupCreditInterestItemCalculationMethodEnum string

const (
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataCreditInterestCreditInterestGroupCreditInterestItemCalculationMethodEnumBanded GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataCreditInterestCreditInterestGroupCreditInterestItemCalculationMethodEnum = "Banded"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataCreditInterestCreditInterestGroupCreditInterestItemCalculationMethodEnumTiered GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataCreditInterestCreditInterestGroupCreditInterestItemCalculationMethodEnum = "Tiered"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataCreditInterestCreditInterestGroupCreditInterestItemCalculationMethodEnumWhole  GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataCreditInterestCreditInterestGroupCreditInterestItemCalculationMethodEnum = "Whole"
)

type GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataCreditInterestCreditInterestGroupCreditInterestItemInterestRateTypeEnum string

const (
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataCreditInterestCreditInterestGroupCreditInterestItemInterestRateTypeEnumFixed    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataCreditInterestCreditInterestGroupCreditInterestItemInterestRateTypeEnum = "Fixed"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataCreditInterestCreditInterestGroupCreditInterestItemInterestRateTypeEnumVariable GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataCreditInterestCreditInterestGroupCreditInterestItemInterestRateTypeEnum = "Variable"
)

type GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataCreditInterestCreditInterestGroupCreditInterestItemInterestTiersRateComparisonTypeEnum string

const (
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataCreditInterestCreditInterestGroupCreditInterestItemInterestTiersRateComparisonTypeEnumApr    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataCreditInterestCreditInterestGroupCreditInterestItemInterestTiersRateComparisonTypeEnum = "APR"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataCreditInterestCreditInterestGroupCreditInterestItemInterestTiersRateComparisonTypeEnumAer    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataCreditInterestCreditInterestGroupCreditInterestItemInterestTiersRateComparisonTypeEnum = "AER"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataCreditInterestCreditInterestGroupCreditInterestItemInterestTiersRateComparisonTypeEnumGross  GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataCreditInterestCreditInterestGroupCreditInterestItemInterestTiersRateComparisonTypeEnum = "Gross"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataCreditInterestCreditInterestGroupCreditInterestItemInterestTiersRateComparisonTypeEnumNet    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataCreditInterestCreditInterestGroupCreditInterestItemInterestTiersRateComparisonTypeEnum = "Net"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataCreditInterestCreditInterestGroupCreditInterestItemInterestTiersRateComparisonTypeEnumRepApr GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataCreditInterestCreditInterestGroupCreditInterestItemInterestTiersRateComparisonTypeEnum = "RepApr"
)

type GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataCreditInterestCreditInterestGroupCreditInterestItemInterestTiers struct {
	ApraerRate            *string                                                                                                                                                              `json:"APRAERRate"`
	DailyChargeForMaximum *string                                                                                                                                                              `json:"DailyChargeForMaximum"`
	DailyChargeForMinimum *string                                                                                                                                                              `json:"DailyChargeForMinimum"`
	InterestTier          *string                                                                                                                                                              `json:"InterestTier"`
	Rate                  *string                                                                                                                                                              `json:"Rate"`
	RateComparisonType    *GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataCreditInterestCreditInterestGroupCreditInterestItemInterestTiersRateComparisonTypeEnum `json:"RateComparisonType"`
	TierValueMaximum      *string                                                                                                                                                              `json:"TierValueMaximum"`
	TierValueMinimum      *string                                                                                                                                                              `json:"TierValueMinimum"`
}

type GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataCreditInterestCreditInterestGroupCreditInterestItemPaymentMethodEnum string

const (
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataCreditInterestCreditInterestGroupCreditInterestItemPaymentMethodEnumCompound       GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataCreditInterestCreditInterestGroupCreditInterestItemPaymentMethodEnum = "Compound"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataCreditInterestCreditInterestGroupCreditInterestItemPaymentMethodEnumPayAway        GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataCreditInterestCreditInterestGroupCreditInterestItemPaymentMethodEnum = "PayAway"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataCreditInterestCreditInterestGroupCreditInterestItemPaymentMethodEnumSelfCredit     GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataCreditInterestCreditInterestGroupCreditInterestItemPaymentMethodEnum = "SelfCredit"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataCreditInterestCreditInterestGroupCreditInterestItemPaymentMethodEnumSimpleInterest GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataCreditInterestCreditInterestGroupCreditInterestItemPaymentMethodEnum = "SimpleInterest"
)

type GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataCreditInterestCreditInterestGroupCreditInterestItem struct {
	CalculationFrequency        *GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataCreditInterestCreditInterestGroupCreditInterestItemCalculationFrequencyEnum `json:"CalculationFrequency"`
	CalculationMethod           *GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataCreditInterestCreditInterestGroupCreditInterestItemCalculationMethodEnum    `json:"CalculationMethod"`
	DateOfChange                *string                                                                                                                                                   `json:"DateOfChange"`
	EndDate                     *string                                                                                                                                                   `json:"EndDate"`
	FixedInterestLength         *int64                                                                                                                                                    `json:"FixedInterestLength"`
	InterestNotes               *string                                                                                                                                                   `json:"InterestNotes"`
	InterestRateType            *GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataCreditInterestCreditInterestGroupCreditInterestItemInterestRateTypeEnum     `json:"InterestRateType"`
	InterestTiers               []GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataCreditInterestCreditInterestGroupCreditInterestItemInterestTiers           `json:"InterestTiers"`
	LengthPromotionalInDays     *int64                                                                                                                                                    `json:"LengthPromotionalInDays"`
	PaymentMethod               *GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataCreditInterestCreditInterestGroupCreditInterestItemPaymentMethodEnum        `json:"PaymentMethod"`
	StartDate                   *string                                                                                                                                                   `json:"StartDate"`
	StartPromotionOrFutureTerms *string                                                                                                                                                   `json:"StartPromotionOrFutureTerms"`
	StopPromotionOrFutureTerms  *string                                                                                                                                                   `json:"StopPromotionOrFutureTerms"`
}

type GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataCreditInterestCreditInterestGroupInterestTierSubTypeEnum string

const (
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataCreditInterestCreditInterestGroupInterestTierSubTypeEnumFutureMultipleTerms GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataCreditInterestCreditInterestGroupInterestTierSubTypeEnum = "FutureMultipleTerms"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataCreditInterestCreditInterestGroupInterestTierSubTypeEnumPromotional         GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataCreditInterestCreditInterestGroupInterestTierSubTypeEnum = "Promotional"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataCreditInterestCreditInterestGroupInterestTierSubTypeEnumRegular             GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataCreditInterestCreditInterestGroupInterestTierSubTypeEnum = "Regular"
)

type GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataCreditInterestCreditInterestGroup struct {
	CreditInterestItem  GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataCreditInterestCreditInterestGroupCreditInterestItem       `json:"CreditInterestItem"`
	InterestTierSubType *GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataCreditInterestCreditInterestGroupInterestTierSubTypeEnum `json:"InterestTierSubType"`
}

type GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataCreditInterest struct {
	CreditCharged       bool                                                                                                             `json:"CreditCharged"`
	CreditInterestGroup []GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataCreditInterestCreditInterestGroup `json:"CreditInterestGroup"`
}

type GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataCreditScoringPartOfAccountOpeningIDVerificationIsAHardOrSoftCreditScoreEnum string

const (
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataCreditScoringPartOfAccountOpeningIDVerificationIsAHardOrSoftCreditScoreEnumHard GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataCreditScoringPartOfAccountOpeningIDVerificationIsAHardOrSoftCreditScoreEnum = "Hard"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataCreditScoringPartOfAccountOpeningIDVerificationIsAHardOrSoftCreditScoreEnumSoft GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataCreditScoringPartOfAccountOpeningIDVerificationIsAHardOrSoftCreditScoreEnum = "Soft"
)

type GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataCreditScoringPartOfAccountOpeningIsAHardOrSoftCreditScoreEnum string

const (
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataCreditScoringPartOfAccountOpeningIsAHardOrSoftCreditScoreEnumHard GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataCreditScoringPartOfAccountOpeningIsAHardOrSoftCreditScoreEnum = "Hard"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataCreditScoringPartOfAccountOpeningIsAHardOrSoftCreditScoreEnumSoft GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataCreditScoringPartOfAccountOpeningIsAHardOrSoftCreditScoreEnum = "Soft"
)

type GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataEligibilityEligibilityTypeEnum string

const (
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataEligibilityEligibilityTypeEnumAnyBusinessCustomer       GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataEligibilityEligibilityTypeEnum = "AnyBusinessCustomer"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataEligibilityEligibilityTypeEnumBusinessOnly              GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataEligibilityEligibilityTypeEnum = "BusinessOnly"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataEligibilityEligibilityTypeEnumCreditCard                GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataEligibilityEligibilityTypeEnum = "CreditCard"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataEligibilityEligibilityTypeEnumCreditScoring             GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataEligibilityEligibilityTypeEnum = "CreditScoring"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataEligibilityEligibilityTypeEnumEmailAddress              GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataEligibilityEligibilityTypeEnum = "EmailAddress"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataEligibilityEligibilityTypeEnumExistingCustomers         GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataEligibilityEligibilityTypeEnum = "ExistingCustomers"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataEligibilityEligibilityTypeEnumIDAndV                    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataEligibilityEligibilityTypeEnum = "IdAndV"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataEligibilityEligibilityTypeEnumMortgage                  GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataEligibilityEligibilityTypeEnum = "Mortgage"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataEligibilityEligibilityTypeEnumNoArrearsOnLoan           GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataEligibilityEligibilityTypeEnum = "NoArrearsOnLoan"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataEligibilityEligibilityTypeEnumNoCustomerInArrears       GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataEligibilityEligibilityTypeEnum = "NoCustomerInArrears"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataEligibilityEligibilityTypeEnumNoOverOverdraftThirtyDays GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataEligibilityEligibilityTypeEnum = "NoOverOverdraftThirtyDays"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataEligibilityEligibilityTypeEnumNoSoleUkAccountOrBankrupt GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataEligibilityEligibilityTypeEnum = "NoSoleUkAccountOrBankrupt"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataEligibilityEligibilityTypeEnumNtb                       GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataEligibilityEligibilityTypeEnum = "NTB"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataEligibilityEligibilityTypeEnumNtbBusiness               GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataEligibilityEligibilityTypeEnum = "NTBBusiness"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataEligibilityEligibilityTypeEnumSoleStudentAccount        GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataEligibilityEligibilityTypeEnum = "SoleStudentAccount"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataEligibilityEligibilityTypeEnumSoleUkAccount             GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataEligibilityEligibilityTypeEnum = "SoleUkAccount"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataEligibilityEligibilityTypeEnumStudentsOnly              GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataEligibilityEligibilityTypeEnum = "StudentsOnly"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataEligibilityEligibilityTypeEnumTwoMonthsOfCourseStart    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataEligibilityEligibilityTypeEnum = "TwoMonthsOfCourseStart"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataEligibilityEligibilityTypeEnumUcasFulltimeTwoYears      GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataEligibilityEligibilityTypeEnum = "UCASFulltimeTwoYears"
)

type GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataEligibilityMarketingEligibilityEnum string

const (
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataEligibilityMarketingEligibilityEnumExistingCustomers GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataEligibilityMarketingEligibilityEnum = "ExistingCustomers"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataEligibilityMarketingEligibilityEnumNewCustomersOnly  GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataEligibilityMarketingEligibilityEnum = "NewCustomersOnly"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataEligibilityMarketingEligibilityEnumSwitchersOnly     GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataEligibilityMarketingEligibilityEnum = "SwitchersOnly"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataEligibilityMarketingEligibilityEnumStartUp           GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataEligibilityMarketingEligibilityEnum = "StartUp"
)

type GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataEligibilityMinimumIncomeFrequencyEnum string

const (
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataEligibilityMinimumIncomeFrequencyEnumAcademicTerm GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataEligibilityMinimumIncomeFrequencyEnum = "AcademicTerm"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataEligibilityMinimumIncomeFrequencyEnumHalfYearly   GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataEligibilityMinimumIncomeFrequencyEnum = "HalfYearly"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataEligibilityMinimumIncomeFrequencyEnumMonthly      GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataEligibilityMinimumIncomeFrequencyEnum = "Monthly"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataEligibilityMinimumIncomeFrequencyEnumQuarterly    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataEligibilityMinimumIncomeFrequencyEnum = "Quarterly"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataEligibilityMinimumIncomeFrequencyEnumWeekly       GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataEligibilityMinimumIncomeFrequencyEnum = "Weekly"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataEligibilityMinimumIncomeFrequencyEnumYearly       GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataEligibilityMinimumIncomeFrequencyEnum = "Yearly"
)

type GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataEligibilityResidencyRestrictedRegionEnum string

const (
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataEligibilityResidencyRestrictedRegionEnumUk    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataEligibilityResidencyRestrictedRegionEnum = "UK"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataEligibilityResidencyRestrictedRegionEnumEea   GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataEligibilityResidencyRestrictedRegionEnum = "EEA"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataEligibilityResidencyRestrictedRegionEnumEu    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataEligibilityResidencyRestrictedRegionEnum = "EU"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataEligibilityResidencyRestrictedRegionEnumEfta  GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataEligibilityResidencyRestrictedRegionEnum = "EFTA"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataEligibilityResidencyRestrictedRegionEnumGbEng GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataEligibilityResidencyRestrictedRegionEnum = "GB - ENG"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataEligibilityResidencyRestrictedRegionEnumGbNir GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataEligibilityResidencyRestrictedRegionEnum = "GB - NIR"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataEligibilityResidencyRestrictedRegionEnumGbSct GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataEligibilityResidencyRestrictedRegionEnum = "GB - SCT"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataEligibilityResidencyRestrictedRegionEnumGbWls GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataEligibilityResidencyRestrictedRegionEnum = "GB - WLS"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataEligibilityResidencyRestrictedRegionEnumIrl   GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataEligibilityResidencyRestrictedRegionEnum = "IRL"
)

type GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataEligibilitySingleJointIncomeEnum string

const (
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataEligibilitySingleJointIncomeEnumJoint       GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataEligibilitySingleJointIncomeEnum = "Joint"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataEligibilitySingleJointIncomeEnumSoleIncome  GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataEligibilitySingleJointIncomeEnum = "SoleIncome"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataEligibilitySingleJointIncomeEnumSoleOrJoint GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataEligibilitySingleJointIncomeEnum = "SoleOrJoint"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataEligibilitySingleJointIncomeEnumTurnover    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataEligibilitySingleJointIncomeEnum = "Turnover"
)

type GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataEligibility struct {
	AgeRestricted                    bool                                                                                                                   `json:"AgeRestricted"`
	AnnualBusinessTurnover           *string                                                                                                                `json:"AnnualBusinessTurnover"`
	AnnualBusinessTurnoverCurrency   *string                                                                                                                `json:"AnnualBusinessTurnoverCurrency"`
	Description                      string                                                                                                                 `json:"Description"`
	EligibilityName                  *string                                                                                                                `json:"EligibilityName"`
	EligibilityNotes                 *string                                                                                                                `json:"EligibilityNotes"`
	EligibilityType                  *GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataEligibilityEligibilityTypeEnum           `json:"EligibilityType"`
	IncomeCondition                  *string                                                                                                                `json:"IncomeCondition"`
	IncomeTurnoverRelated            bool                                                                                                                   `json:"IncomeTurnoverRelated"`
	MarketingEligibility             []GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataEligibilityMarketingEligibilityEnum     `json:"MarketingEligibility"`
	MaxNumberOfAccounts              *string                                                                                                                `json:"MaxNumberOfAccounts"`
	MaximumAge                       *int64                                                                                                                 `json:"MaximumAge"`
	MaximumAgeToOpen                 *int64                                                                                                                 `json:"MaximumAgeToOpen"`
	MaximumOpeningAmount             *bool                                                                                                                  `json:"MaximumOpeningAmount"`
	MinIncomeTurnoverPaidIntoAccount *int64                                                                                                                 `json:"MinIncomeTurnoverPaidIntoAccount"`
	MinimumAge                       *int64                                                                                                                 `json:"MinimumAge"`
	MinimumDeposit                   *bool                                                                                                                  `json:"MinimumDeposit"`
	MinimumIncomeFrequency           *GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataEligibilityMinimumIncomeFrequencyEnum    `json:"MinimumIncomeFrequency"`
	MinimumIncomeTurnoverAmount      *string                                                                                                                `json:"MinimumIncomeTurnoverAmount"`
	MinimumIncomeTurnoverCurrency    *string                                                                                                                `json:"MinimumIncomeTurnoverCurrency"`
	MinimumOperatingBalance          *string                                                                                                                `json:"MinimumOperatingBalance"`
	MinimumOperatingBalanceCurrency  *string                                                                                                                `json:"MinimumOperatingBalanceCurrency"`
	MinimumOperatingBalanceExists    *bool                                                                                                                  `json:"MinimumOperatingBalanceExists"`
	OpeningDepositMaximumAmount      *string                                                                                                                `json:"OpeningDepositMaximumAmount"`
	OpeningDepositMaximumCurrency    *string                                                                                                                `json:"OpeningDepositMaximumCurrency"`
	OpeningDepositMinimum            *string                                                                                                                `json:"OpeningDepositMinimum"`
	OpeningDepositMinimumCurrency    *string                                                                                                                `json:"OpeningDepositMinimumCurrency"`
	OtherFinancialHoldingRequired    bool                                                                                                                   `json:"OtherFinancialHoldingRequired"`
	PreviousBankruptcy               bool                                                                                                                   `json:"PreviousBankruptcy"`
	ResidencyRestricted              bool                                                                                                                   `json:"ResidencyRestricted"`
	ResidencyRestrictedRegion        *GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataEligibilityResidencyRestrictedRegionEnum `json:"ResidencyRestrictedRegion"`
	SingleJointIncome                *GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataEligibilitySingleJointIncomeEnum         `json:"SingleJointIncome"`
	ThirdSectorOrganisations         bool                                                                                                                   `json:"ThirdSectorOrganisations"`
}

type GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeatureFeatureDetailsFeatureSubTypeEnum string

const (
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeatureFeatureDetailsFeatureSubTypeEnumFutureMultipleTerms GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeatureFeatureDetailsFeatureSubTypeEnum = "FutureMultipleTerms"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeatureFeatureDetailsFeatureSubTypeEnumPromotional         GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeatureFeatureDetailsFeatureSubTypeEnum = "Promotional"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeatureFeatureDetailsFeatureSubTypeEnumRegular             GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeatureFeatureDetailsFeatureSubTypeEnum = "Regular"
)

type GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeatureFeatureDetails struct {
	CriteriaType                *string                                                                                                               `json:"CriteriaType"`
	DateOfChange                *string                                                                                                               `json:"DateOfChange"`
	FeatureDescription          *string                                                                                                               `json:"FeatureDescription"`
	FeatureName                 *string                                                                                                               `json:"FeatureName"`
	FeatureSubType              *GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeatureFeatureDetailsFeatureSubTypeEnum `json:"FeatureSubType"`
	FeatureType                 *string                                                                                                               `json:"FeatureType"`
	FeatureValue                *string                                                                                                               `json:"FeatureValue"`
	LengthPromotionalInDays     *int64                                                                                                                `json:"LengthPromotionalInDays"`
	StartPromotionOrFutureTerms *string                                                                                                               `json:"StartPromotionOrFutureTerms"`
	StopPromotionOrFutureTerms  *string                                                                                                               `json:"StopPromotionOrFutureTerms"`
}

type GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeatureProductStateEnum string

const (
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeatureProductStateEnumFutureMultipleTerms GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeatureProductStateEnum = "FutureMultipleTerms"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeatureProductStateEnumPromotional         GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeatureProductStateEnum = "Promotional"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeatureProductStateEnumRegular             GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeatureProductStateEnum = "Regular"
)

type GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeature struct {
	DateOfChange                *string                                                                                               `json:"DateOfChange"`
	ExistingFeature             bool                                                                                                  `json:"ExistingFeature"`
	FeatureDetails              []GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeatureFeatureDetails  `json:"FeatureDetails"`
	LengthPromotionalInDays     *int64                                                                                                `json:"LengthPromotionalInDays"`
	ProductState                *GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeatureProductStateEnum `json:"ProductState"`
	StartPromotionOrFutureTerms *string                                                                                               `json:"StartPromotionOrFutureTerms"`
	StopPromotionOrFutureTerms  *string                                                                                               `json:"StopPromotionOrFutureTerms"`
}

type GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeSubDetailsFeeFrequencyEnum string

const (
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeSubDetailsFeeFrequencyEnumAcademicTerm             GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeSubDetailsFeeFrequencyEnum = "AcademicTerm"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeSubDetailsFeeFrequencyEnumAccountClosing           GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeSubDetailsFeeFrequencyEnum = "AccountClosing"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeSubDetailsFeeFrequencyEnumAccountOpening           GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeSubDetailsFeeFrequencyEnum = "AccountOpening"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeSubDetailsFeeFrequencyEnumAtTimeOfLoanRepayment    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeSubDetailsFeeFrequencyEnum = "AtTimeOfLoanRepayment"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeSubDetailsFeeFrequencyEnumChargingPeriod           GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeSubDetailsFeeFrequencyEnum = "ChargingPeriod"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeSubDetailsFeeFrequencyEnumDaily                    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeSubDetailsFeeFrequencyEnum = "Daily"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeSubDetailsFeeFrequencyEnumEveryFiveBusinessDays    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeSubDetailsFeeFrequencyEnum = "EveryFiveBusinessDays"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeSubDetailsFeeFrequencyEnumItem                     GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeSubDetailsFeeFrequencyEnum = "Item"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeSubDetailsFeeFrequencyEnumMonthly                  GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeSubDetailsFeeFrequencyEnum = "Monthly"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeSubDetailsFeeFrequencyEnumOnAccountAnniversary     GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeSubDetailsFeeFrequencyEnum = "OnAccountAnniversary"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeSubDetailsFeeFrequencyEnumPerHour                  GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeSubDetailsFeeFrequencyEnum = "PerHour"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeSubDetailsFeeFrequencyEnumPerOccurrence            GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeSubDetailsFeeFrequencyEnum = "PerOccurrence"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeSubDetailsFeeFrequencyEnumPerSheet                 GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeSubDetailsFeeFrequencyEnum = "PerSheet"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeSubDetailsFeeFrequencyEnumPerTransactionAmount     GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeSubDetailsFeeFrequencyEnum = "PerTransactionAmount"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeSubDetailsFeeFrequencyEnumPerTransactionPercentage GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeSubDetailsFeeFrequencyEnum = "PerTransactionPercentage"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeSubDetailsFeeFrequencyEnumQuarterly                GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeSubDetailsFeeFrequencyEnum = "Quarterly"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeSubDetailsFeeFrequencyEnumSixMonthly               GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeSubDetailsFeeFrequencyEnum = "SixMonthly"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeSubDetailsFeeFrequencyEnumStartOfLoan              GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeSubDetailsFeeFrequencyEnum = "StartOfLoan"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeSubDetailsFeeFrequencyEnumStatementMonthly         GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeSubDetailsFeeFrequencyEnum = "StatementMonthly"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeSubDetailsFeeFrequencyEnumWeekly                   GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeSubDetailsFeeFrequencyEnum = "Weekly"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeSubDetailsFeeFrequencyEnumYearly                   GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeSubDetailsFeeFrequencyEnum = "Yearly"
)

type GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeSubDetails struct {
	FeeAmount           *string                                                                                                                                         `json:"FeeAmount"`
	FeeFrequency        GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeSubDetailsFeeFrequencyEnum `json:"FeeFrequency"`
	FeeHigherTier       *int64                                                                                                                                          `json:"FeeHigherTier"`
	FeeLowerTier        *int64                                                                                                                                          `json:"FeeLowerTier"`
	FeeMax              *string                                                                                                                                         `json:"FeeMax"`
	FeeMin              *string                                                                                                                                         `json:"FeeMin"`
	FeeRate             *string                                                                                                                                         `json:"FeeRate"`
	FeesAndChargesNotes *string                                                                                                                                         `json:"FeesAndChargesNotes"`
	Negotiable          bool                                                                                                                                            `json:"Negotiable"`
	RepresentativeRate  *string                                                                                                                                         `json:"RepresentativeRate"`
}

type GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum string

const (
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumOther                                 GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "Other"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumAtmDonation                           GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "ATMDonation"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumAtmDeposAtmPaidIn                     GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "ATMDeposATMPaidIn"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumReportCertBalance                     GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "ReportCertBalance"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumAtmAbroadConVisaCredit                GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "ATMAbroadConVisaCredit"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumAtmAbroadConVisaDebit                 GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "ATMAbroadConVisaDebit"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumAtmCardnetEnvIn                       GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "ATMCardnetEnvIn"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumAtmCashGroupAtmCreditCard             GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "ATMCashGroupATMCreditCard"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumAtmCashNonGroupAtmCredittcard         GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "ATMCashNonGroupATMCredittcard"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumAtmCashGroupAtmDebitCard              GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "ATMCashGroupATMDebitCard"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumAtmCashNonGroupAtmDebitcard           GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "ATMCashNonGroupATMDebitcard"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumAtmConGroupAtm                        GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "ATMConGroupATM"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumAtmAbroad                             GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "ATMAbroad"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumAtmForeignCashDebCard                 GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "ATMForeignCashDebCard"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumAtmAbroadGoldVisaDebit                GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "ATMAbroadGoldVisaDebit"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumAtmSpainCashCard                      GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "ATMSpainCashCard"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumAtmSpainDebitCard                     GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "ATMSpainDebitCard"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumAtmSpainConversionDebitCard           GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "ATMSpainConversionDebitCard"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumAtmSpainConversionCashCard            GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "ATMSpainConversionCashCard"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumAtmNonSterlingWithdrawal              GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "ATMNonSterlingWithdrawal"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumAtmAbroadVisaCredit                   GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "ATMAbroadVisaCredit"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumAtmAbroadVisaDebit                    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "ATMAbroadVisaDebit"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumAtmAbroadConVisaGoldDebit             GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "ATMAbroadConVisaGoldDebit"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumAtmWidthdrawCash                      GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "ATMWidthdrawCash"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumBacsOnLineAncilliary                  GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "BACSOnLineAncilliary"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumBacsBatch                             GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "BACSBatch"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumBacsOnLineFile                        GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "BACSOnLineFile"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumBacsFileItem                          GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "BACSFileItem"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumBacsOnLineSetup                       GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "BACSOnLineSetup "
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumBacsItem                              GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "BACSItem"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumBacsItemInterbranch                   GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "BACSItemInterbranch"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumBacsBulkBatch                         GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "BACSBulkBatch"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumBacsOnLineOverlimit                   GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "BACSOnLineOverlimit"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumBacsOnLinePayment                     GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "BACSOnLinePayment"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumBacsRecallItem                        GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "BACSRecallItem"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumBacsOnLineService                     GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "BACSOnLineService"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumBacsBulkInternet                      GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "BACSBulkInternet"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumBacstelDirDebSmartCard                GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "BACSTELDirDebSmartCard"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumBacstelDirDebWebInit                  GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "BACSTELDirDebWebInit"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumBacsteLirDebWebInit                   GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "BACSTELirDebWebInit"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumBacstelDirDebOverlimit                GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "BACSTELDirDebOverlimit"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumBacstelDirDebPayment                  GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "BACSTELDirDebPayment"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumBacstelDirDebService                  GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "BACSTELDirDebService"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumBacstelDirDebAncilliary               GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "BACSTELDirDebAncilliary"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumBacsDirectItemProfile                 GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "BACSDirectItemProfile"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumBacstelAncilliary                     GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "BACSTELAncilliary"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumBacstelSmartCard                      GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "BACSTELSmartCard"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumBacstelFile                           GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "BACSTELFile"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumBacstelSetup                          GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "BACSTELSetup "
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumBacstelOverlimit                      GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "BACSTELOverlimit"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumBacstelPayment                        GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "BACSTELPayment"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumBacstelService                        GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "BACSTELService"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumChapsOutBranch                        GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "CHAPSOutBranch"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumChapsCancellation                     GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "CHAPSCancellation"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumChapsOutOnlineDepositAcc              GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "CHAPSOutOnlineDepositAcc"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumChapsIn                               GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "CHAPSIn"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumChapsOutInterBank                     GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "CHAPSOutInterBank"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumChapsInterBank                        GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "CHAPSInterBank"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumChapsOutPost                          GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "CHAPSOutPost"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumChapsOutInterBranch                   GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "CHAPSOutInterBranch"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumChapsOut                              GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "CHAPSOut"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumChapsOutOnline                        GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "CHAPSOutOnline"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumChapSandForeignPay                    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "CHAPSandForeignPay"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumChapsOutManual                        GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "CHAPSOutManual"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumCardCardReplacement                   GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "CardCardReplacement"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumDraftsCounter                         GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "DraftsCounter"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumDraftsBankers                         GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "DraftsBankers"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumDraftsIntlPayableAbroad               GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "DraftsIntlPayableAbroad"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumDraftsLostStolen                      GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "DraftsLostStolen"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumCardPersonalisedCard                  GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "CardPersonalisedCard"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumDraftsIntlStoppedCancelled            GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "DraftsIntlStoppedCancelled"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumEuroChqXLess                          GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "EuroChqXLess"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumEuroChqXPlus                          GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "EuroChqXPlus"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumFpsOutFutureDated                     GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "FPSOutFutureDated"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumFpsOutImmediate                       GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "FPSOutImmediate"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumFpsOut                                GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "FPSOut"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumFpsOutOwn                             GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "FPSOutOwn"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumFpsInBranch                           GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "FPSInBranch"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumFpsukPayUrgent                        GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "FPSUKPayUrgent"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumLegalArticlesReport                   GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "LegalArticlesReport"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumLegalSealing                          GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "LegalSealing"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumLegalBondAndGuarantee                 GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "LegalBondAndGuarantee"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumLegalCourtOrder                       GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "LegalCourtOrder"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumLegalCoSearch                         GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "LegalCoSearch"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumLegalDepositAssignment                GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "LegalDepositAssignment"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumLegalGuaranteePrep                    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "LegalGuaranteePrep"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumLegalLifePolicyPrepCo                 GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "LegalLifePolicyPrepCo"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumLegalLifePolicyPrepPersonal           GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "LegalLifePolicyPrepPersonal"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumLegalPriorityPariPassu                GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "LegalPriorityPariPassu"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumLegalSubordinationAgreement           GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "LegalSubordinationAgreement"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumDirDebDirectDebitAdmin                GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "DirDebDirectDebitAdmin"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumDirDebDirectDebitCancel               GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "DirDebDirectDebitCancel"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumIntlPayBibForeignLimit                GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "IntlPayBIBForeignLimit"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumIntlPayCreditTransCust                GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "IntlPayCreditTransCust"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumIntlPayCreditTransNonCust             GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "IntlPayCreditTransNonCust"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumIntlPayUrgentPaymentForeign           GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "IntlPayUrgentPaymentForeign"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumIntlPayExpressMoneyMover              GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "IntlPayExpressMoneyMover"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumIntlPayEeaPayUrgent                   GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "IntlPayEEAPayUrgent"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumIntlPayIrishPayUrgent                 GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "IntlPayIrishPayUrgent"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumIntlPayEeaPay                         GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "IntlPayEEAPay"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumIntlPayForeignIn1CPlus                GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "IntlPayForeignIn1CPlus"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumIntlPayForeignPaymentInUkAcc          GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "IntlPayForeignPaymentInUKAcc"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumIntlPayForeignCharge                  GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "IntlPayForeignCharge"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumIntlPayForeignCancellation            GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "IntlPayForeignCancellation"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumIntlPayForeignStandardEuEuroBic       GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "IntlPayForeignStandardEUEuroBIC"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumIntlPayFxFeeRate                      GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "IntlPayFXFeeRate"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumIntlPayForeignInternet                GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "IntlPayForeignInternet"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumIntlPayForeign                        GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "IntlPayForeign"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumIntlPayForeignInbound                 GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "IntlPayForeignInbound"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumIntlPayFxPaymentOut                   GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "IntlPayFXPaymentOut"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumIntlPayForeignInSub1C                 GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "IntlPayForeignInSub1C"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumIntlPayFxRate                         GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "IntlPayFXRate"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumIntlPayForeignStandardEuEuroNoBic     GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "IntlPayForeignStandardEUEuroNoBIC"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumIntlPayFxPaymentOutIr                 GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "IntlPayFXPaymentOutIR"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumIntlPayFxFee                          GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "IntlPayFXFee"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumIntlPayPurchaseNonSterling            GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "IntlPayPurchaseNonSterling"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumIntlPayPostPaymentForeign             GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "IntlPayPostPaymentForeign"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumIntlPayPurchaseRateNonSterling        GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "IntlPayPurchaseRateNonSterling"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumIntlPayPaymentTracing                 GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "IntlPayPaymentTracing"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumIntlPayStandardMoneyMover             GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "IntlPayStandardMoneyMover"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumIntlPayMt101Transaction               GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "IntlPayMT101Transaction"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumIntlPayTransNonSterling               GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "IntlPayTransNonSterling"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumIntlPayTransRateNonSterling           GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "IntlPayTransRateNonSterling"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumIntlPayForeignUrgentEuEuroBic         GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "IntlPayForeignUrgentEUEuroBIC"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumIntlPayForeignUrgentEuEuroNoBic       GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "IntlPayForeignUrgentEUEuroNoBIC"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumIntlPayUrgentPaymentGroup             GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "IntlPayUrgentPaymentGroup"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumIntlPayUrgentPaymentUk                GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "IntlPayUrgentPaymentUK"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumIntlPayUsaPayUrgent                   GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "IntlPayUSAPayUrgent"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumIntlPayCurrencyPurchase               GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "IntlPayCurrencyPurchase"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumIntlPayWorldpayPayment                GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "IntlPayWorldpayPayment"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumIntlPayCurrencyWithdraw               GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "IntlPayCurrencyWithdraw"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumInvPayBankDetailsWrong                GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "InvPayBankDetailsWrong"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumInvPayForeignBcnr                     GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "InvPayForeignBCNR"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumInvPayForeignRecall                   GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "InvPayForeignRecall"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumInvGeneralInq                         GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "InvGeneralInq"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumInvOldInstruction                     GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "InvOldInstruction"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumInvPayPaymentRecall                   GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "InvPayPaymentRecall"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumInvPayReturnDebitXvLess               GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "InvPayReturnDebitXVLess"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumInvPayReturnDebitXvPlus               GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "InvPayReturnDebitXVPlus"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumInvPayStopPayment                     GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "InvPayStopPayment"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumInvPayStandingOrdUnpaid               GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "InvPayStandingOrdUnpaid"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumSafeKeepAccess                        GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "SafeKeepAccess"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumSafeKeepDeedMedium                    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "SafeKeepDeedMedium"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumSafeKeepingEnvelope                   GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "SafeKeepingEnvelope"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumSafeKeepingInspection                 GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "SafeKeepingInspection"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumSafeKeepingLargeItem                  GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "SafeKeepingLargeItem"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumSafeKeepMultipleItems                 GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "SafeKeepMultipleItems"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumSafeKeepingParcel                     GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "SafeKeepingParcel"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumSafeKeepDeedSmall                     GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "SafeKeepDeedSmall"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumSafeKeepOneItem                       GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "SafeKeepOneItem"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumSafeKeepSafeCustody                   GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "SafeKeepSafeCustody"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumLoanArrangementFeePc                  GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "LoanArrangementFeePC"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumLoanArrangement                       GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "LoanArrangement"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumLoanEarlyRepayment                    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "LoanEarlyRepayment"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumLoanLatePayment                       GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "LoanLatePayment"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumLoanSmeUnsecuredLoan                  GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "LoanSMEUnsecuredLoan"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumLoanTieredArrangement                 GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "LoanTieredArrangement"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumNightSafeNightSafeBankOpen            GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "NightSafeNightSafeBankOpen"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumNightSafeCreditSub5K                  GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "NightSafeCreditSub5K"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumNightSafeNightSafe                    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "NightSafeNightSafe"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumNightSafeNightSafePaidIn              GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "NightSafeNightSafePaidIn"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumOverdraftAnnualReview                 GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "OverdraftAnnualReview"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumOverdraftTempOverdraft                GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "OverdraftTempOverdraft"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumOverdraftUnauthorisedBorrowing        GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "OverdraftUnauthorisedBorrowing"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumPoPostOfficeCounterCredit             GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "POPostOfficeCounterCredit"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumPoPostOfficeCashCredit                GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "POPostOfficeCashCredit"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumPoPostOfficeCashOut                   GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "POPostOfficeCashOut"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumPoPostOfficeWithdrawal                GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "POPostOfficeWithdrawal"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumChqBookTheftLossAllStopped            GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "ChqBookTheftLossAllStopped"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumChqIssuedCurrencyAcc                  GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "ChqIssuedCurrencyAcc"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumChqCopy                               GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "ChqCopy"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumChqDraft                              GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "ChqDraft"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumChqIn                                 GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "ChqIn"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumChqDraftSterling                      GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "ChqDraftSterling"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumChqOutIssued                          GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "ChqOutIssued"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumChqSpecialChqPresentation             GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "ChqSpecialChqPresentation"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumChqCounterCheque                      GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "ChqCounterCheque"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumChqChequeswithStatement               GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "ChqChequeswithStatement"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumChqStopped                            GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "ChqStopped"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumChqTrans                              GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "ChqTrans"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumChqDraftFx                            GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "ChqDraftFX"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumChqForeignCourier                     GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "ChqForeignCourier"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumChqForeignNegTenThou                  GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "ChqForeignNegTenThou"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumChqForeignNegHundred                  GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "ChqForeignNegHundred"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumChequeForeignBankDivi                 GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "ChequeForeignBankDivi"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumChqForeignNegFiftyThou                GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "ChqForeignNegFiftyThou"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumChqPensionCheque                      GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "ChqPensionCheque"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumChequeForeignOtherDivi                GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "ChequeForeignOtherDivi"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumChqForeignNegFiveThou                 GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "ChqForeignNegFiveThou"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumChqForeignNegMax                      GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "ChqForeignNegMax"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumChqForeignGbpmmdPlus                  GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "ChqForeignGBPMMDPlus"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumChqGiftCheque                         GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "ChqGiftCheque"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumChqCounterLodgement                   GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "ChqCounterLodgement"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumChqCashDropLodgement                  GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "ChqCashDropLodgement"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumChqChequePhotocopy                    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "ChqChequePhotocopy"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumChqPostOfficeCredit                   GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "ChqPostOfficeCredit"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumChqPostOfficeChequeCollected          GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "ChqPostOfficeChequeCollected"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumChqChequeRetrieval                    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "ChqChequeRetrieval"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumChqReconcilliationPerTrans            GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "ChqReconcilliationPerTrans"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumChqSpecialPresentationCount           GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "ChqSpecialPresentationCount"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumChqSpecialPresentationPtt             GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "ChqSpecialPresentationPTT"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumChqUnpaidCharge                       GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "ChqUnpaidCharge"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumChqUnpaidTransIn                      GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "ChqUnpaidTransIn"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumChqUnpaidTransOut                     GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "ChqUnpaidTransOut"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumChqUnpaidCheque                       GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "ChqUnpaidCheque"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumReportAuditLetter                     GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "ReportAuditLetter"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumReportFaxAdviceAdditional             GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "ReportFAXAdviceAdditional"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumReportTelAdviceAdditional             GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "ReportTelAdviceAdditional"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumReportCreditHistory                   GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "ReportCreditHistory"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumReportCertInterestDuplicate           GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "ReportCertInterestDuplicate"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumReportCertInterest                    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "ReportCertInterest"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumReportCreditHistoryAdditionalInYear   GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "ReportCreditHistoryAdditionalInYear"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumReportForeignStatusEnqElec            GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "ReportForeignStatusEnqElec"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumReportForeignStatusEnq                GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "ReportForeignStatusEnq"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumReportCashBackorInterestAnal          GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "ReportCashBackorInterestAnal"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumReportStatementChqDaily               GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "ReportStatementChqDaily"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumReportStatementChqFortnightly         GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "ReportStatementChqFortnightly"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumReportStatementChqMonthly             GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "ReportStatementChqMonthly"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumReportStatementChqWeekly              GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "ReportStatementChqWeekly"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumReportStatementAndDiviChq             GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "ReportStatementAndDiviChq"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumReportReference                       GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "ReportReference"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumReportReferralItem                    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "ReportReferralItem"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumReportStatementByAtm                  GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "ReportStatementByATM"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumReportStatementByBranch               GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "ReportStatementByBranch"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumReportStatementCopyRegular            GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "ReportStatementCopyRegular"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumReportStatusEnquiry                   GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "ReportStatusEnquiry"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumReportStatementFrequent               GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "ReportStatementFrequent"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumReportStatementMonthly                GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "ReportStatementMonthly"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumReportStatementCopy1                  GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "ReportStatementCopy1"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumReportStatementToBranch               GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "ReportStatementToBranch"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumReportSmsTextMiniStatementorAlert     GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "ReportSMSTextMiniStatementorAlert"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumReportStatementFortnightly            GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "ReportStatementFortnightly"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumReportSmsTextMiniStatementWoM         GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "ReportSMSTextMiniStatementWoM"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumReportSmsTextAlertBalance             GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "ReportSMSTextAlertBalance"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumReportSmsTextAlert                    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "ReportSMSTextAlert"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumReportTaxCert                         GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "ReportTaxCert"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumReportWeeklyStatement                 GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "ReportWeeklyStatement"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumReportTextMessageBanking              GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "ReportTextMessageBanking"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumSepaCancellation                      GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "SEPACancellation"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumSepaBranch                            GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "SEPABranch"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumSepaCredit                            GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "SEPACredit"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumSepaDirectDebit                       GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "SEPADirectDebit"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumSepaIn                                GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "SEPAIn"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumSepaEuro                              GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "SEPAEuro"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumSepaOut                               GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "SEPAOut"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumSepaUnpaid                            GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "SEPAUnpaid"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumSepaWinbitsAnnualService              GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "SEPAWinbitsAnnual Service"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumSepaWinbitsTransaction                GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "SEPAWinbitsTransaction"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumTransBillPaymentBranch                GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "TransBillPaymentBranch"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumTransBillCollect                      GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "TransBillCollect"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumTransTelephoneBillPayment             GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "TransTelephoneBillPayment"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumTransBankPayment                      GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "TransBankPayment"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumTransBillPaymentTelephone             GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "TransBillPaymentTelephone"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumTransCorrespondentBankFee             GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "TransCorrespondentBankFee"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumTransCreditTransferUkDifferent        GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "TransCreditTransferUKDifferent"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumTransCreditTransferUkSame             GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "TransCreditTransferUKSame"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumTransCredit                           GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "TransCredit"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumTransCreditTransfer                   GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "TransCreditTransfer"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumTransBranchCredit                     GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "TransBranchCredit"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumTransDebit                            GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "TransDebit"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumTransDebCardDeb                       GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "TransDebCardDeb"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumTransUkDirDeb                         GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "TransUKDirDeb"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumTransManualDeb                        GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "TransManualDeb"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumTransBuyForeignWithGbp                GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "TransBuyForeignWithGBP"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumTransGoodValueReq                     GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "TransGoodValueReq"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumTransSwiftOutUkForeign                GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "TransSWIFTOutUKForeign"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumTransInconpleteInstruction            GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "TransInconpleteInstruction"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumTransManualEntries                    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "TransManualEntries"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumTransManualTrans                      GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "TransManualTrans"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumTransNonSterling                      GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "TransNonSterling"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumTransPosSaleForeign                   GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "TransPOSSaleForeign"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumTransPriPaymentPost                   GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "TransPriPaymentPost"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumTransPosSaleUk                        GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "TransPOSSaleUK"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumTransReturnPayment                    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "TransReturnPayment"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumTransReconciliationPerTrans           GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "TransReconciliationPerTrans"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumTransStandingOrdAdmin                 GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "TransStandingOrdAdmin"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumTransStandingOrd                      GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "TransStandingOrd"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumTransStandingOrdManPay                GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "TransStandingOrdManPay"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumTransTravellersChqOtherBank           GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "TransTravellersChqOtherBank"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumTransTelBusiPriPaymentForeignToUkAcc  GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "TransTelBusiPriPaymentForeignToUKAcc"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumTransTeleItem                         GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "TransTeleItem"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumTransTelBusiPriPaymentToGrpAcc        GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "TransTelBusiPriPaymentToGrpAcc"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumTransTravellersChqRate                GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "TransTravellersChqRate"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumTransTransferExGroup                  GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "TransTransferExGroup"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumTransUnauthorisedPaidTrans            GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "TransUnauthorisedPaidTrans"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumTransUrgentPaymentPostal              GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "TransUrgentPaymentPostal"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumTransUnpaidTrans                      GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "TransUnpaidTrans"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumTransTelBusiPriPaymentToNonGrpAcc     GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "TransTelBusiPriPaymentToNonGrpAcc"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumTransSwiftOutNonEeaSterling           GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "TransSWIFTOutNonEEASterling"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumAutoAutoCredit                        GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "AutoAutoCredit"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumAutoAutomatedEntries                  GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "AutoAutomatedEntries"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumAutoAutoCreditPhoneInet               GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "AutoAutoCreditPhoneInet"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumAutoAutomatedTrans                    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "AutoAutomatedTrans"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumAutoDebitCardCommercial               GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "AutoDebitCardCommercial"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumAutoFpsAutoCredit                     GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "AutoFPSAutoCredit"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumVisaConvertAbroadForeign              GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "VisaConvertAbroadForeign"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumVisaBureauDeChange                    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "VisaBureauDeChange"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumVisaTravellersChqorCurrency           GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "VisaTravellersChqorCurrency"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumOnlineInternetBillPayment             GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "OnlineInternetBillPayment"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumOnlineBusinessOnlineEuroPayment       GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "OnlineBusinessOnlineEuroPayment"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumOnlineBusinessOnlineUrgentEuroPayment GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "OnlineBusinessOnlineUrgentEuroPayment"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumOnlineBusinessOnlineForeignPayment    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "OnlineBusinessOnlineForeignPayment"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumOnlineInterbankTransfer               GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "OnlineInterbankTransfer"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumOnlineInterbankPerTransfer            GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "OnlineInterbankPerTransfer"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumOnlineInterbranchTransfer             GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "OnlineInterbranchTransfer"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumOnlineInterbranchPerTransfer          GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "OnlineInterbranchPerTransfer"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumOnlineSubscriptionMonthly             GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "OnlineSubscriptionMonthly"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumOnlineBankingPayment                  GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "OnlineBankingPayment"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumOnlineBankingSubscription             GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "OnlineBankingSubscription"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumOnlinePosSale                         GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "OnlinePOSSale"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumOnlinePersonalCustAncillarys          GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "OnlinePersonalCustAncillarys"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumOnlinePersonalCustService             GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "OnlinePersonalCustService"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumOnlinePersonalCustOverlimits          GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "OnlinePersonalCustOverlimits"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumOnlineReplacementCardReader           GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "OnlineReplacementCardReader"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumOnlinePersonalCustSetUp               GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "OnlinePersonalCustSetUp"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumOnlinePersonalCustTransaction         GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "OnlinePersonalCustTransaction"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumOnlinePaymentinGbPtoUk                GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "OnlinePaymentinGBPtoUK"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumOnlineUrgentPayment                   GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "OnlineUrgentPayment"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumOnlinePaymentinUsDtoUs                GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "OnlinePaymentinUSDtoUS"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumOnlineBulkDirectDebSterling           GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "OnlineBulkDirectDebSterling"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumForeignChqSent                        GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "ForeignChqSent"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumForeignChqSelf                        GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "ForeignChqSelf"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumForeignChqEncashment                  GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "ForeignChqEncashment"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumForeignFxInwardsCust                  GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "ForeignFXInwardsCust"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumForeignFxTransfersRoi                 GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "ForeignFXTransfersROI"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumForeignFxForwardTrans                 GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "ForeignFXForwardTrans"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumForeignFxTransfersBoi                 GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "ForeignFXTransfersBOI"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumForeignExMaintenance                  GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "ForeignExMaintenance"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumForeignFxInwardsNonCust               GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "ForeignFXInwardsNonCust"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumForeignFxOutwards                     GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "ForeignFXOutwards"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumForeignPurchase                       GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "ForeignPurchase"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumForeignStatusRep                      GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "ForeignStatusRep"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumForeignChqDraft                       GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "ForeignChqDraft"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumForeignChqCLess                       GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "ForeignChqCLess"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumForeignChqMLess                       GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "ForeignChqMLess"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumForeignChqOther                       GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "ForeignChqOther"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumForeignChqMPlus                       GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "ForeignChqMPlus"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumForeignChqCcc                         GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "ForeignChqCCC"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumServiceCAccountFee                    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "ServiceCAccountFee"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumServiceCAccountFeeMonthly             GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "ServiceCAccountFeeMonthly"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumServiceCAccountFeeQuarterly           GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "ServiceCAccountFeeQuarterly"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumServiceCBalanceHandling               GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "ServiceCBalanceHandling"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumServiceCFixedTariff                   GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "ServiceCFixedTariff"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumServiceCBusiDepAccBreakage            GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "ServiceCBusiDepAccBreakage"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumServiceCMonitorDaily                  GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "ServiceCMonitorDaily"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumServiceCManagementFee                 GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "ServiceCManagementFee"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumServiceCMinimumMonthlyFee             GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "ServiceCMinimumMonthlyFee"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumServiceCMonitorMonthly                GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "ServiceCMonitorMonthly"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumServiceCMonitorWeekly                 GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "ServiceCMonitorWeekly"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumServiceCSecurityFee                   GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "ServiceCSecurityFee"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumServiceCmt940AccountFirst             GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "ServiceCMT940AccountFirst"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumServiceCmt940AccountSubsequent        GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "ServiceCMT940AccountSubsequent"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumServiceCOther                         GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "ServiceCOther"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumCounterCoinHandling                   GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "CounterCoinHandling"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumCounterCashIn                         GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "CounterCashIn"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumCounterCashInNotUs                    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "CounterCashInNotUs"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumCounterCashOut                        GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "CounterCashOut"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumCounterCashX                          GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "CounterCashX"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumCounterForeignCashMax                 GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "CounterForeignCashMax"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumCounterForeignNoteHandling            GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "CounterForeignNoteHandling"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumCounterForeignCashOut                 GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "CounterForeignCashOut"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumCounterCashFeeRate                    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "CounterCashFeeRate"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumCounterForeignCashOutTx               GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "CounterForeignCashOutTx"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumCounterCounterLodgement               GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "CounterCounterLodgement"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumCounterCashDropLodgement              GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "CounterCashDropLodgement"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumCounterNotesLodged                    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "CounterNotesLodged"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumCounterNotesOut                       GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "CounterNotesOut"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumCounterCashInOwn                      GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "CounterCashInOwn"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumCounterPaidTrans                      GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "CounterPaidTrans"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnumCounterCashFeePercent                 GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum = "CounterCashFeePercent"
)

type GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetail struct {
	DateOfChange                *string                                                                                                                         `json:"DateOfChange"`
	FeeSubDetails               GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeSubDetails `json:"FeeSubDetails"`
	FeeType                     GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetailFeeTypeEnum   `json:"FeeType"`
	LengthPromotionalInDays     *int64                                                                                                                          `json:"LengthPromotionalInDays"`
	Other                       *string                                                                                                                         `json:"Other"`
	StartPromotionOrFutureTerms *string                                                                                                                         `json:"StartPromotionOrFutureTerms"`
	StopPromotionOrFutureTerms  *string                                                                                                                         `json:"StopPromotionOrFutureTerms"`
}

type GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeSubTypeEnum string

const (
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeSubTypeEnumFutureMultipleTerms GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeSubTypeEnum = "FutureMultipleTerms"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeSubTypeEnumPromotional         GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeSubTypeEnum = "Promotional"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeSubTypeEnumRegular             GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeSubTypeEnum = "Regular"
)

type GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetails struct {
	FeeDetail  GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeDetail      `json:"FeeDetail"`
	FeeSubType GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetailsFeeSubTypeEnum `json:"FeeSubType"`
}

type GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFees struct {
	DateOfChange                *string                                                                                                     `json:"DateOfChange"`
	FeeDetails                  []GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFeesFeeDetails `json:"FeeDetails"`
	FeeHigherTier               *int64                                                                                                      `json:"FeeHigherTier"`
	FeeLowerTier                *int64                                                                                                      `json:"FeeLowerTier"`
	LengthPromotionalInDays     *int64                                                                                                      `json:"LengthPromotionalInDays"`
	StartPromotionOrFutureTerms *string                                                                                                     `json:"StartPromotionOrFutureTerms"`
	StopPromotionOrFutureTerms  *string                                                                                                     `json:"StopPromotionOrFutureTerms"`
}

type GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesProductStateEnum string

const (
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesProductStateEnumFutureMultipleTerms GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesProductStateEnum = "FutureMultipleTerms"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesProductStateEnumPromotional         GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesProductStateEnum = "Promotional"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesProductStateEnumRegular             GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesProductStateEnum = "Regular"
)

type GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndCharges struct {
	Fees         GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesFees             `json:"Fees"`
	ProductState GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndChargesProductStateEnum `json:"ProductState"`
}

type GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataMobileWalletEnum string

const (
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataMobileWalletEnumAndroidPay       GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataMobileWalletEnum = "AndroidPay"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataMobileWalletEnumApplePay         GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataMobileWalletEnum = "ApplePay"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataMobileWalletEnumIssuerMobileApp  GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataMobileWalletEnum = "IssuerMobileApp"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataMobileWalletEnumMobileBankingApp GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataMobileWalletEnum = "MobileBankingApp"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataMobileWalletEnumOther            GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataMobileWalletEnum = "Other"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataMobileWalletEnumPayM             GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataMobileWalletEnum = "PayM"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataMobileWalletEnumSamsungPay       GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataMobileWalletEnum = "SamsungPay"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataMobileWalletEnumVodafoneWallet   GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataMobileWalletEnum = "VodafoneWallet"
)

type GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOrganisationBrandTrademarkIpoCodeEnum string

const (
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOrganisationBrandTrademarkIpoCodeEnumUk GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOrganisationBrandTrademarkIpoCodeEnum = "UK"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOrganisationBrandTrademarkIpoCodeEnumEu GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOrganisationBrandTrademarkIpoCodeEnum = "EU"
)

type GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOrganisationBrand struct {
	TrademarkID      string                                                                                                             `json:"TrademarkID"`
	TrademarkIpoCode GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOrganisationBrandTrademarkIpoCodeEnum `json:"TrademarkIPOCode"`
}

type GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOrganisationParentOrganisationOrganisationName struct {
	LegalName string `json:"LegalName"`
}

type GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOrganisationParentOrganisation struct {
	Bic              *string                                                                                                                     `json:"BIC"`
	Lei              *string                                                                                                                     `json:"LEI"`
	OrganisationName GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOrganisationParentOrganisationOrganisationName `json:"OrganisationName"`
}

type GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOrganisation struct {
	Brand              GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOrganisationBrand              `json:"Brand"`
	ParentOrganisation GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOrganisationParentOrganisation `json:"ParentOrganisation"`
}

type GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftFeeChargeNegotiableIndicatorEnum string

const (
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftFeeChargeNegotiableIndicatorEnumNo  GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftFeeChargeNegotiableIndicatorEnum = "No"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftFeeChargeNegotiableIndicatorEnumYes GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftFeeChargeNegotiableIndicatorEnum = "Yes"
)

type GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftFeesAndChargesFeeChargeApplicationFrequencyEnum string

const (
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftFeesAndChargesFeeChargeApplicationFrequencyEnumAcademicTerm GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftFeesAndChargesFeeChargeApplicationFrequencyEnum = "AcademicTerm"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftFeesAndChargesFeeChargeApplicationFrequencyEnumDaily        GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftFeesAndChargesFeeChargeApplicationFrequencyEnum = "Daily"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftFeesAndChargesFeeChargeApplicationFrequencyEnumWeekly       GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftFeesAndChargesFeeChargeApplicationFrequencyEnum = "Weekly"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftFeesAndChargesFeeChargeApplicationFrequencyEnumMonthly      GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftFeesAndChargesFeeChargeApplicationFrequencyEnum = "Monthly"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftFeesAndChargesFeeChargeApplicationFrequencyEnumQuarterly    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftFeesAndChargesFeeChargeApplicationFrequencyEnum = "Quarterly"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftFeesAndChargesFeeChargeApplicationFrequencyEnumHalfYearly   GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftFeesAndChargesFeeChargeApplicationFrequencyEnum = "Half-Yearly"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftFeesAndChargesFeeChargeApplicationFrequencyEnumYearly       GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftFeesAndChargesFeeChargeApplicationFrequencyEnum = "Yearly"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftFeesAndChargesFeeChargeApplicationFrequencyEnumOvernight    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftFeesAndChargesFeeChargeApplicationFrequencyEnum = "Overnight"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftFeesAndChargesFeeChargeApplicationFrequencyEnumOther        GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftFeesAndChargesFeeChargeApplicationFrequencyEnum = "Other"
)

type GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftFeesAndChargesFeeChargeCalculationFrequencyEnum string

const (
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftFeesAndChargesFeeChargeCalculationFrequencyEnumAcademicTerm GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftFeesAndChargesFeeChargeCalculationFrequencyEnum = "AcademicTerm"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftFeesAndChargesFeeChargeCalculationFrequencyEnumDaily        GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftFeesAndChargesFeeChargeCalculationFrequencyEnum = "Daily"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftFeesAndChargesFeeChargeCalculationFrequencyEnumWeekly       GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftFeesAndChargesFeeChargeCalculationFrequencyEnum = "Weekly"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftFeesAndChargesFeeChargeCalculationFrequencyEnumMonthly      GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftFeesAndChargesFeeChargeCalculationFrequencyEnum = "Monthly"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftFeesAndChargesFeeChargeCalculationFrequencyEnumQuarterly    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftFeesAndChargesFeeChargeCalculationFrequencyEnum = "Quarterly"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftFeesAndChargesFeeChargeCalculationFrequencyEnumHalfYearly   GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftFeesAndChargesFeeChargeCalculationFrequencyEnum = "Half-Yearly"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftFeesAndChargesFeeChargeCalculationFrequencyEnumYearly       GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftFeesAndChargesFeeChargeCalculationFrequencyEnum = "Yearly"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftFeesAndChargesFeeChargeCalculationFrequencyEnumOvernight    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftFeesAndChargesFeeChargeCalculationFrequencyEnum = "Overnight"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftFeesAndChargesFeeChargeCalculationFrequencyEnumOther        GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftFeesAndChargesFeeChargeCalculationFrequencyEnum = "Other"
)

type GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftFeesAndChargesFeeChargeOtherApplicationFrequency struct {
	Code        *string `json:"Code"`
	Description *string `json:"Description"`
	Name        *string `json:"Name"`
}

type GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftFeesAndChargesFeeChargeOtherCalculationFrequency struct {
	Code        *string `json:"Code"`
	Description *string `json:"Description"`
	Name        *string `json:"Name"`
}

type GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftFeesAndChargesFeeChargeOtherType struct {
	Code        *string `json:"Code"`
	Description *string `json:"Description"`
	Name        *string `json:"Name"`
}

type GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftFeesAndChargesFeeChargeRateOtherType struct {
	Code        *string `json:"Code"`
	Description *string `json:"Description"`
	Name        *string `json:"Name"`
}

type GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftFeesAndChargesFeeChargeRateTypeEnum string

const (
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftFeesAndChargesFeeChargeRateTypeEnumGross GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftFeesAndChargesFeeChargeRateTypeEnum = "Gross"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftFeesAndChargesFeeChargeRateTypeEnumNet   GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftFeesAndChargesFeeChargeRateTypeEnum = "Net"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftFeesAndChargesFeeChargeRateTypeEnumOther GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftFeesAndChargesFeeChargeRateTypeEnum = "Other"
)

type GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftFeesAndChargesFeeChargeTypeEnum string

const (
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftFeesAndChargesFeeChargeTypeEnumPeriodic         GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftFeesAndChargesFeeChargeTypeEnum = "Periodic"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftFeesAndChargesFeeChargeTypeEnumMinimum          GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftFeesAndChargesFeeChargeTypeEnum = "Minimum"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftFeesAndChargesFeeChargeTypeEnumMaximum          GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftFeesAndChargesFeeChargeTypeEnum = "Maximum"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftFeesAndChargesFeeChargeTypeEnumSetup            GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftFeesAndChargesFeeChargeTypeEnum = "Setup"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftFeesAndChargesFeeChargeTypeEnumReview           GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftFeesAndChargesFeeChargeTypeEnum = "Review"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftFeesAndChargesFeeChargeTypeEnumRenewal          GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftFeesAndChargesFeeChargeTypeEnum = "Renewal"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftFeesAndChargesFeeChargeTypeEnumMinimumSetup     GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftFeesAndChargesFeeChargeTypeEnum = "MinimumSetup"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftFeesAndChargesFeeChargeTypeEnumMaximumSetup     GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftFeesAndChargesFeeChargeTypeEnum = "MaximumSetup"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftFeesAndChargesFeeChargeTypeEnumTotal            GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftFeesAndChargesFeeChargeTypeEnum = "Total"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftFeesAndChargesFeeChargeTypeEnumItem             GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftFeesAndChargesFeeChargeTypeEnum = "Item"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftFeesAndChargesFeeChargeTypeEnumEmergencyLending GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftFeesAndChargesFeeChargeTypeEnum = "EmergencyLending"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftFeesAndChargesFeeChargeTypeEnumOther            GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftFeesAndChargesFeeChargeTypeEnum = "Other"
)

type GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftFeesAndCharges struct {
	FeeChargeAmount                    *string                                                                                                                                 `json:"FeeChargeAmount"`
	FeeChargeApplicationFrequency      *GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftFeesAndChargesFeeChargeApplicationFrequencyEnum  `json:"FeeChargeApplicationFrequency"`
	FeeChargeCalculationFrequency      *GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftFeesAndChargesFeeChargeCalculationFrequencyEnum  `json:"FeeChargeCalculationFrequency"`
	FeeChargeOtherApplicationFrequency *GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftFeesAndChargesFeeChargeOtherApplicationFrequency `json:"FeeChargeOtherApplicationFrequency"`
	FeeChargeOtherCalculationFrequency *GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftFeesAndChargesFeeChargeOtherCalculationFrequency `json:"FeeChargeOtherCalculationFrequency"`
	FeeChargeOtherType                 *GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftFeesAndChargesFeeChargeOtherType                 `json:"FeeChargeOtherType"`
	FeeChargeRate                      *string                                                                                                                                 `json:"FeeChargeRate"`
	FeeChargeRateOtherType             *GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftFeesAndChargesFeeChargeRateOtherType             `json:"FeeChargeRateOtherType"`
	FeeChargeRateType                  *GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftFeesAndChargesFeeChargeRateTypeEnum              `json:"FeeChargeRateType"`
	FeeChargeType                      GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftFeesAndChargesFeeChargeTypeEnum                   `json:"FeeChargeType"`
}

type GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftOverdraftProductStateEnum string

const (
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftOverdraftProductStateEnumFutureMultipleTerms GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftOverdraftProductStateEnum = "FutureMultipleTerms"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftOverdraftProductStateEnumPromotional         GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftOverdraftProductStateEnum = "Promotional"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftOverdraftProductStateEnumRegular             GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftOverdraftProductStateEnum = "Regular"
)

type GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftOverdraftTierBandSetArrangementOtherType struct {
	Code        *string `json:"Code"`
	Description *string `json:"Description"`
	Name        *string `json:"Name"`
}

type GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftOverdraftTierBandSetArrangementTypeEnum string

const (
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftOverdraftTierBandSetArrangementTypeEnumUnarranged GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftOverdraftTierBandSetArrangementTypeEnum = "Unarranged"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftOverdraftTierBandSetArrangementTypeEnumArranged   GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftOverdraftTierBandSetArrangementTypeEnum = "Arranged"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftOverdraftTierBandSetArrangementTypeEnumOther      GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftOverdraftTierBandSetArrangementTypeEnum = "Other"
)

type GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeApplicationFrequencyEnum string

const (
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeApplicationFrequencyEnumAcademicTerm GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeApplicationFrequencyEnum = "AcademicTerm"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeApplicationFrequencyEnumDaily        GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeApplicationFrequencyEnum = "Daily"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeApplicationFrequencyEnumWeekly       GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeApplicationFrequencyEnum = "Weekly"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeApplicationFrequencyEnumMonthly      GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeApplicationFrequencyEnum = "Monthly"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeApplicationFrequencyEnumQuarterly    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeApplicationFrequencyEnum = "Quarterly"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeApplicationFrequencyEnumHalfYearly   GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeApplicationFrequencyEnum = "Half-Yearly"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeApplicationFrequencyEnumYearly       GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeApplicationFrequencyEnum = "Yearly"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeApplicationFrequencyEnumOvernight    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeApplicationFrequencyEnum = "Overnight"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeApplicationFrequencyEnumOther        GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeApplicationFrequencyEnum = "Other"
)

type GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeCalculationFrequencyEnum string

const (
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeCalculationFrequencyEnumAcademicTerm GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeCalculationFrequencyEnum = "AcademicTerm"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeCalculationFrequencyEnumDaily        GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeCalculationFrequencyEnum = "Daily"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeCalculationFrequencyEnumWeekly       GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeCalculationFrequencyEnum = "Weekly"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeCalculationFrequencyEnumMonthly      GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeCalculationFrequencyEnum = "Monthly"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeCalculationFrequencyEnumQuarterly    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeCalculationFrequencyEnum = "Quarterly"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeCalculationFrequencyEnumHalfYearly   GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeCalculationFrequencyEnum = "Half-Yearly"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeCalculationFrequencyEnumYearly       GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeCalculationFrequencyEnum = "Yearly"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeCalculationFrequencyEnumOvernight    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeCalculationFrequencyEnum = "Overnight"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeCalculationFrequencyEnumOther        GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeCalculationFrequencyEnum = "Other"
)

type GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeOtherApplicationFrequency struct {
	Code        *string `json:"Code"`
	Description *string `json:"Description"`
	Name        *string `json:"Name"`
}

type GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeOtherCalculationFrequency struct {
	Code        *string `json:"Code"`
	Description *string `json:"Description"`
	Name        *string `json:"Name"`
}

type GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeOtherType struct {
	Code        *string `json:"Code"`
	Description *string `json:"Description"`
	Name        *string `json:"Name"`
}

type GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeRateOtherType struct {
	Code        *string `json:"Code"`
	Description *string `json:"Description"`
	Name        *string `json:"Name"`
}

type GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeRateTypeEnum string

const (
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeRateTypeEnumGross GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeRateTypeEnum = "Gross"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeRateTypeEnumNet   GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeRateTypeEnum = "Net"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeRateTypeEnumOther GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeRateTypeEnum = "Other"
)

type GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeTypeEnum string

const (
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeTypeEnumPeriodic         GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeTypeEnum = "Periodic"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeTypeEnumMinimum          GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeTypeEnum = "Minimum"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeTypeEnumMaximum          GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeTypeEnum = "Maximum"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeTypeEnumSetup            GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeTypeEnum = "Setup"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeTypeEnumReview           GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeTypeEnum = "Review"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeTypeEnumRenewal          GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeTypeEnum = "Renewal"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeTypeEnumMinimumSetup     GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeTypeEnum = "MinimumSetup"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeTypeEnumMaximumSetup     GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeTypeEnum = "MaximumSetup"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeTypeEnumTotal            GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeTypeEnum = "Total"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeTypeEnumItem             GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeTypeEnum = "Item"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeTypeEnumEmergencyLending GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeTypeEnum = "EmergencyLending"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeTypeEnumOther            GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeTypeEnum = "Other"
)

type GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftOverdraftTierBandSetFeesAndCharges struct {
	FeeChargeAmount                    *string                                                                                                                                                     `json:"FeeChargeAmount"`
	FeeChargeApplicationFrequency      *GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeApplicationFrequencyEnum  `json:"FeeChargeApplicationFrequency"`
	FeeChargeCalculationFrequency      *GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeCalculationFrequencyEnum  `json:"FeeChargeCalculationFrequency"`
	FeeChargeOtherApplicationFrequency *GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeOtherApplicationFrequency `json:"FeeChargeOtherApplicationFrequency"`
	FeeChargeOtherCalculationFrequency *GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeOtherCalculationFrequency `json:"FeeChargeOtherCalculationFrequency"`
	FeeChargeOtherType                 *GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeOtherType                 `json:"FeeChargeOtherType"`
	FeeChargeRate                      *string                                                                                                                                                     `json:"FeeChargeRate"`
	FeeChargeRateOtherType             *GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeRateOtherType             `json:"FeeChargeRateOtherType"`
	FeeChargeRateType                  *GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeRateTypeEnum              `json:"FeeChargeRateType"`
	FeeChargeType                      GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftOverdraftTierBandSetFeesAndChargesFeeChargeTypeEnum                   `json:"FeeChargeType"`
}

type GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeApplicationFrequencyEnum string

const (
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeApplicationFrequencyEnumAcademicTerm GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeApplicationFrequencyEnum = "AcademicTerm"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeApplicationFrequencyEnumDaily        GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeApplicationFrequencyEnum = "Daily"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeApplicationFrequencyEnumWeekly       GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeApplicationFrequencyEnum = "Weekly"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeApplicationFrequencyEnumMonthly      GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeApplicationFrequencyEnum = "Monthly"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeApplicationFrequencyEnumQuarterly    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeApplicationFrequencyEnum = "Quarterly"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeApplicationFrequencyEnumHalfYearly   GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeApplicationFrequencyEnum = "Half-Yearly"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeApplicationFrequencyEnumYearly       GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeApplicationFrequencyEnum = "Yearly"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeApplicationFrequencyEnumOvernight    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeApplicationFrequencyEnum = "Overnight"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeApplicationFrequencyEnumOther        GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeApplicationFrequencyEnum = "Other"
)

type GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeCalculationFrequencyEnum string

const (
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeCalculationFrequencyEnumAcademicTerm GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeCalculationFrequencyEnum = "AcademicTerm"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeCalculationFrequencyEnumDaily        GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeCalculationFrequencyEnum = "Daily"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeCalculationFrequencyEnumWeekly       GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeCalculationFrequencyEnum = "Weekly"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeCalculationFrequencyEnumMonthly      GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeCalculationFrequencyEnum = "Monthly"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeCalculationFrequencyEnumQuarterly    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeCalculationFrequencyEnum = "Quarterly"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeCalculationFrequencyEnumHalfYearly   GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeCalculationFrequencyEnum = "Half-Yearly"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeCalculationFrequencyEnumYearly       GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeCalculationFrequencyEnum = "Yearly"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeCalculationFrequencyEnumOvernight    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeCalculationFrequencyEnum = "Overnight"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeCalculationFrequencyEnumOther        GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeCalculationFrequencyEnum = "Other"
)

type GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeOtherApplicationFrequency struct {
	Code        *string `json:"Code"`
	Description *string `json:"Description"`
	Name        *string `json:"Name"`
}

type GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeOtherCalculationFrequency struct {
	Code        *string `json:"Code"`
	Description *string `json:"Description"`
	Name        *string `json:"Name"`
}

type GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeOtherType struct {
	Code        *string `json:"Code"`
	Description *string `json:"Description"`
	Name        *string `json:"Name"`
}

type GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeRateOtherType struct {
	Code        *string `json:"Code"`
	Description *string `json:"Description"`
	Name        *string `json:"Name"`
}

type GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeRateTypeEnum string

const (
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeRateTypeEnumGross GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeRateTypeEnum = "Gross"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeRateTypeEnumNet   GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeRateTypeEnum = "Net"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeRateTypeEnumOther GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeRateTypeEnum = "Other"
)

type GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeTypeEnum string

const (
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeTypeEnumPeriodic         GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeTypeEnum = "Periodic"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeTypeEnumMinimum          GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeTypeEnum = "Minimum"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeTypeEnumMaximum          GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeTypeEnum = "Maximum"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeTypeEnumSetup            GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeTypeEnum = "Setup"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeTypeEnumReview           GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeTypeEnum = "Review"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeTypeEnumRenewal          GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeTypeEnum = "Renewal"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeTypeEnumMinimumSetup     GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeTypeEnum = "MinimumSetup"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeTypeEnumMaximumSetup     GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeTypeEnum = "MaximumSetup"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeTypeEnumTotal            GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeTypeEnum = "Total"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeTypeEnumItem             GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeTypeEnum = "Item"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeTypeEnumEmergencyLending GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeTypeEnum = "EmergencyLending"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeTypeEnumOther            GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeTypeEnum = "Other"
)

type GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndCharges struct {
	FeeChargeAmount                    *string                                                                                                                                                                      `json:"FeeChargeAmount"`
	FeeChargeApplicationFrequency      *GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeApplicationFrequencyEnum  `json:"FeeChargeApplicationFrequency"`
	FeeChargeCalculationFrequency      *GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeCalculationFrequencyEnum  `json:"FeeChargeCalculationFrequency"`
	FeeChargeOtherApplicationFrequency *GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeOtherApplicationFrequency `json:"FeeChargeOtherApplicationFrequency"`
	FeeChargeOtherCalculationFrequency *GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeOtherCalculationFrequency `json:"FeeChargeOtherCalculationFrequency"`
	FeeChargeOtherType                 *GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeOtherType                 `json:"FeeChargeOtherType"`
	FeeChargeRate                      *string                                                                                                                                                                      `json:"FeeChargeRate"`
	FeeChargeRateOtherType             *GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeRateOtherType             `json:"FeeChargeRateOtherType"`
	FeeChargeRateType                  *GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeRateTypeEnum              `json:"FeeChargeRateType"`
	FeeChargeType                      GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndChargesFeeChargeTypeEnum                   `json:"FeeChargeType"`
}

type GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftOverdraftTierBandSetOverdraftTierBand struct {
	Ear                    *string                                                                                                                                     `json:"EAR"`
	FeesAndCharges         []GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftOverdraftTierBandSetOverdraftTierBandFeesAndCharges `json:"FeesAndCharges"`
	Notes                  *string                                                                                                                                     `json:"Notes"`
	TierBandIdentification *string                                                                                                                                     `json:"TierBandIdentification"`
	TierValueMaximum       string                                                                                                                                      `json:"TierValueMaximum"`
	TierValueMinimum       string                                                                                                                                      `json:"TierValueMinimum"`
}

type GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftOverdraftTierBandSet struct {
	ArrangementOtherType      *GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftOverdraftTierBandSetArrangementOtherType `json:"ArrangementOtherType"`
	ArrangementType           GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftOverdraftTierBandSetArrangementTypeEnum   `json:"ArrangementType"`
	BufferAmount              *string                                                                                                                         `json:"BufferAmount"`
	CmaDefinedIndicator       bool                                                                                                                            `json:"CMADefinedIndicator"`
	Ear                       *string                                                                                                                         `json:"EAR"`
	FeesAndCharges            []GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftOverdraftTierBandSetFeesAndCharges      `json:"FeesAndCharges"`
	Notes                     *string                                                                                                                         `json:"Notes"`
	OverdraftTierBand         []GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftOverdraftTierBandSetOverdraftTierBand   `json:"OverdraftTierBand"`
	TierBandSetIdentification *string                                                                                                                         `json:"TierBandSetIdentification"`
}

type GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftOverdraftTypeEnum string

const (
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftOverdraftTypeEnumCommitted GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftOverdraftTypeEnum = "Committed"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftOverdraftTypeEnumOnDemand  GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftOverdraftTypeEnum = "OnDemand"
)

type GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraft struct {
	DateOfChange                  *string                                                                                                                 `json:"DateOfChange"`
	FeeChargeNegotiableIndicator  *GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftFeeChargeNegotiableIndicatorEnum `json:"FeeChargeNegotiableIndicator"`
	FeesAndCharges                []GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftFeesAndCharges                  `json:"FeesAndCharges"`
	LengthPromotionalInDays       *int64                                                                                                                  `json:"LengthPromotionalInDays"`
	MaximumMonthlyOverdraftCharge *string                                                                                                                 `json:"MaximumMonthlyOverdraftCharge"`
	Notes                         *string                                                                                                                 `json:"Notes"`
	OverdraftProductState         *GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftOverdraftProductStateEnum        `json:"OverdraftProductState"`
	OverdraftTierBandSet          []GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftOverdraftTierBandSet            `json:"OverdraftTierBandSet"`
	OverdraftType                 *GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraftOverdraftTypeEnum                `json:"OverdraftType"`
	StartPromotionOrFutureTerms   *string                                                                                                                 `json:"StartPromotionOrFutureTerms"`
	StopPromotionOrFutureTerms    *string                                                                                                                 `json:"StopPromotionOrFutureTerms"`
	Term                          *string                                                                                                                 `json:"Term"`
}

type GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataProductSegmentEnum string

const (
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataProductSegmentEnumBasic         GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataProductSegmentEnum = "Basic"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataProductSegmentEnumBusiness      GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataProductSegmentEnum = "Business"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataProductSegmentEnumGeneral       GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataProductSegmentEnum = "General"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataProductSegmentEnumGraduate      GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataProductSegmentEnum = "Graduate"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataProductSegmentEnumInternational GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataProductSegmentEnum = "International"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataProductSegmentEnumPackaged      GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataProductSegmentEnum = "Packaged"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataProductSegmentEnumPersonal      GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataProductSegmentEnum = "Personal"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataProductSegmentEnumPremium       GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataProductSegmentEnum = "Premium"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataProductSegmentEnumReward        GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataProductSegmentEnum = "Reward"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataProductSegmentEnumSme           GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataProductSegmentEnum = "SME"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataProductSegmentEnumStudent       GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataProductSegmentEnum = "Student"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataProductSegmentEnumYoungAdult    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataProductSegmentEnum = "YoungAdult"
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataProductSegmentEnumYouth         GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataProductSegmentEnum = "Youth"
)

type GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataProductTypeEnum string

const (
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataProductTypeEnumBca GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataProductTypeEnum = "BCA"
)

type GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataBusinessCurrentAccount struct {
	AccessChannels                                                          []GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataAccessChannelsEnum                                                          `json:"AccessChannels"`
	Benefits                                                                GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataBenefits                                                                      `json:"Benefits"`
	CaPricing                                                               []GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataCaPricing                                                                   `json:"CAPricing"`
	CardNotes                                                               *string                                                                                                                                                    `json:"CardNotes"`
	CardType                                                                []GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataCardTypeEnum                                                                `json:"CardType"`
	CardWithdrawalLimit                                                     string                                                                                                                                                     `json:"CardWithdrawalLimit"`
	ChequeBookAvailable                                                     bool                                                                                                                                                       `json:"ChequeBookAvailable"`
	Contactless                                                             bool                                                                                                                                                       `json:"Contactless"`
	CreditInterest                                                          GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataCreditInterest                                                                `json:"CreditInterest"`
	CreditScoringPartOfAccountOpeningForGettingAnAccount                    bool                                                                                                                                                       `json:"CreditScoringPartOfAccountOpeningForGettingAnAccount"`
	CreditScoringPartOfAccountOpeningForIDVerification                      *bool                                                                                                                                                      `json:"CreditScoringPartOfAccountOpeningForIDVerification"`
	CreditScoringPartOfAccountOpeningIDVerificationIsAHardOrSoftCreditScore []GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataCreditScoringPartOfAccountOpeningIDVerificationIsAHardOrSoftCreditScoreEnum `json:"CreditScoringPartOfAccountOpeningIDVerificationIsAHardOrSoftCreditScore"`
	CreditScoringPartOfAccountOpeningIDVerificationText                     []string                                                                                                                                                   `json:"CreditScoringPartOfAccountOpeningIDVerificationText"`
	CreditScoringPartOfAccountOpeningIsAHardOrSoftCreditScore               []GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataCreditScoringPartOfAccountOpeningIsAHardOrSoftCreditScoreEnum               `json:"CreditScoringPartOfAccountOpeningIsAHardOrSoftCreditScore"`
	CreditScoringPartOfAccountOpeningText                                   *string                                                                                                                                                    `json:"CreditScoringPartOfAccountOpeningText"`
	Currency                                                                []string                                                                                                                                                   `json:"Currency"`
	Eligibility                                                             GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataEligibility                                                                   `json:"Eligibility"`
	Feature                                                                 []GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeature                                                                     `json:"Feature"`
	FeesAndCharges                                                          []GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataFeesAndCharges                                                              `json:"FeesAndCharges"`
	InternationalPaymentsSupported                                          bool                                                                                                                                                       `json:"InternationalPaymentsSupported"`
	MaximumMonthlyCharge                                                    *string                                                                                                                                                    `json:"MaximumMonthlyCharge"`
	MobileWallet                                                            []GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataMobileWalletEnum                                                            `json:"MobileWallet"`
	Organisation                                                            GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOrganisation                                                                  `json:"Organisation"`
	Overdraft                                                               []GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOverdraft                                                                   `json:"Overdraft"`
	OverdraftOffered                                                        bool                                                                                                                                                       `json:"OverdraftOffered"`
	ProductDescription                                                      string                                                                                                                                                     `json:"ProductDescription"`
	ProductIdentifier                                                       string                                                                                                                                                     `json:"ProductIdentifier"`
	ProductName                                                             *string                                                                                                                                                    `json:"ProductName"`
	ProductSegment                                                          []GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataProductSegmentEnum                                                          `json:"ProductSegment"`
	ProductType                                                             GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataProductTypeEnum                                                               `json:"ProductType"`
	ProductURL                                                              []string                                                                                                                                                   `json:"ProductURL"`
	TsandCs                                                                 []string                                                                                                                                                   `json:"TsandCs"`
}

type GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONMetaAgreementEnum string

const (
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONMetaAgreementEnumUseOfTheApIsAndAnyRelatedDataWillBeSubjectToTheTermsOfTheOpenLicenceAndSubjectToTermsAndConditions GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONMetaAgreementEnum = "Use of the APIs and any related data will be subject to the terms of the Open Licence and subject to terms and conditions"
)

type GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONMetaLicenseEnum string

const (
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONMetaLicenseEnumHTTPSWwwOpenbankingOrgUkOpenLicence GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONMetaLicenseEnum = "https://www.openbanking.org.uk/open-licence"
)

type GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONMetaTermsOfUseEnum string

const (
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONMetaTermsOfUseEnumHTTPSWwwOpenbankingOrgUkTerms GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONMetaTermsOfUseEnum = "https://www.openbanking.org.uk/terms"
)

type GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONMetaMetaData struct {
	Agreement    GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONMetaAgreementEnum  `json:"Agreement"`
	LastUpdated  time.Time                                                                                   `json:"LastUpdated"`
	License      GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONMetaLicenseEnum    `json:"License"`
	TermsOfUse   GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONMetaTermsOfUseEnum `json:"TermsOfUse"`
	TotalResults int64                                                                                       `json:"TotalResults"`
}

type GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSON struct {
	Data []GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONDataBusinessCurrentAccount `json:"data"`
	Meta GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONMetaMetaData                 `json:"meta"`
}

type GetBusinessCurrentAccountsResponse struct {
	FourHundredErrorObject                                                          *GetBusinessCurrentAccounts400ApplicationPrsOpenbankingOpendataV13PlusJSON400ErrorObject
	FourHundredAndEightErrorObject                                                  *GetBusinessCurrentAccounts408ApplicationPrsOpenbankingOpendataV13PlusJSON408ErrorObject
	FourHundredAndTwentyNineErrorObject                                             *GetBusinessCurrentAccounts429ApplicationPrsOpenbankingOpendataV13PlusJSON429ErrorObject
	FiveHundredErrorObject                                                          *GetBusinessCurrentAccounts500ApplicationPrsOpenbankingOpendataV13PlusJSON500ErrorObject
	FiveHundredAndThreeErrorObject                                                  *GetBusinessCurrentAccounts503ApplicationPrsOpenbankingOpendataV13PlusJSON503ErrorObject
	ContentType                                                                     string
	ErrorObject                                                                     *GetBusinessCurrentAccountsDefaultApplicationPrsOpenbankingOpendataV13PlusJSONErrorObject
	GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSONObject *GetBusinessCurrentAccounts200ApplicationPrsOpenbankingOpendataV13PlusJSON
	Headers                                                                         map[string][]string
	StatusCode                                                                      int64
}
