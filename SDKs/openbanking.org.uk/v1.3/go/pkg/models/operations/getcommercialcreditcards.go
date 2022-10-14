package operations

import (
	"time"
)

type GetCommercialCreditCardsHeaders struct {
	IfModifiedSince *string `header:"name=If-Modified-Since"`
	IfNoneMatch     *string `header:"name=If-None-Match"`
}

type GetCommercialCreditCardsRequest struct {
	Headers GetCommercialCreditCardsHeaders
}

type GetCommercialCreditCards400ApplicationPrsOpenbankingOpendataV13PlusJSONDescriptionEnum string

const (
	GetCommercialCreditCards400ApplicationPrsOpenbankingOpendataV13PlusJSONDescriptionEnumYouHaveSentARequestWhichCouldNotBeUnderstood GetCommercialCreditCards400ApplicationPrsOpenbankingOpendataV13PlusJSONDescriptionEnum = "You have sent a request which could not be understood."
)

type GetCommercialCreditCards400ApplicationPrsOpenbankingOpendataV13PlusJSONStatusEnum string

const (
	GetCommercialCreditCards400ApplicationPrsOpenbankingOpendataV13PlusJSONStatusEnumFourHundred GetCommercialCreditCards400ApplicationPrsOpenbankingOpendataV13PlusJSONStatusEnum = "400"
)

type GetCommercialCreditCards400ApplicationPrsOpenbankingOpendataV13PlusJSONTitleEnum string

const (
	GetCommercialCreditCards400ApplicationPrsOpenbankingOpendataV13PlusJSONTitleEnumBadRequest GetCommercialCreditCards400ApplicationPrsOpenbankingOpendataV13PlusJSONTitleEnum = "Bad request"
)

type GetCommercialCreditCards400ApplicationPrsOpenbankingOpendataV13PlusJSON400ErrorObject struct {
	Description GetCommercialCreditCards400ApplicationPrsOpenbankingOpendataV13PlusJSONDescriptionEnum `json:"description"`
	Status      GetCommercialCreditCards400ApplicationPrsOpenbankingOpendataV13PlusJSONStatusEnum      `json:"status"`
	Title       GetCommercialCreditCards400ApplicationPrsOpenbankingOpendataV13PlusJSONTitleEnum       `json:"title"`
}

type GetCommercialCreditCards408ApplicationPrsOpenbankingOpendataV13PlusJSONDescriptionEnum string

const (
	GetCommercialCreditCards408ApplicationPrsOpenbankingOpendataV13PlusJSONDescriptionEnumYourClientHasFailedToSubmitARequestAndATimeoutHasOccurred GetCommercialCreditCards408ApplicationPrsOpenbankingOpendataV13PlusJSONDescriptionEnum = "Your client has failed to submit a request, and a timeout has occurred."
)

type GetCommercialCreditCards408ApplicationPrsOpenbankingOpendataV13PlusJSONStatusEnum string

const (
	GetCommercialCreditCards408ApplicationPrsOpenbankingOpendataV13PlusJSONStatusEnumFourHundredAndEight GetCommercialCreditCards408ApplicationPrsOpenbankingOpendataV13PlusJSONStatusEnum = "408"
)

type GetCommercialCreditCards408ApplicationPrsOpenbankingOpendataV13PlusJSONTitleEnum string

const (
	GetCommercialCreditCards408ApplicationPrsOpenbankingOpendataV13PlusJSONTitleEnumClientTimeout GetCommercialCreditCards408ApplicationPrsOpenbankingOpendataV13PlusJSONTitleEnum = "Client timeout"
)

type GetCommercialCreditCards408ApplicationPrsOpenbankingOpendataV13PlusJSON408ErrorObject struct {
	Description GetCommercialCreditCards408ApplicationPrsOpenbankingOpendataV13PlusJSONDescriptionEnum `json:"description"`
	Status      GetCommercialCreditCards408ApplicationPrsOpenbankingOpendataV13PlusJSONStatusEnum      `json:"status"`
	Title       GetCommercialCreditCards408ApplicationPrsOpenbankingOpendataV13PlusJSONTitleEnum       `json:"title"`
}

type GetCommercialCreditCards429ApplicationPrsOpenbankingOpendataV13PlusJSONDescriptionEnum string

const (
	GetCommercialCreditCards429ApplicationPrsOpenbankingOpendataV13PlusJSONDescriptionEnumYouHaveRequestedThisResourceTooOftenSlowDown GetCommercialCreditCards429ApplicationPrsOpenbankingOpendataV13PlusJSONDescriptionEnum = "You have requested this resource too often. Slow down."
)

type GetCommercialCreditCards429ApplicationPrsOpenbankingOpendataV13PlusJSONStatusEnum string

const (
	GetCommercialCreditCards429ApplicationPrsOpenbankingOpendataV13PlusJSONStatusEnumFourHundredAndTwentyNine GetCommercialCreditCards429ApplicationPrsOpenbankingOpendataV13PlusJSONStatusEnum = "429"
)

type GetCommercialCreditCards429ApplicationPrsOpenbankingOpendataV13PlusJSONTitleEnum string

const (
	GetCommercialCreditCards429ApplicationPrsOpenbankingOpendataV13PlusJSONTitleEnumTooManyRequests GetCommercialCreditCards429ApplicationPrsOpenbankingOpendataV13PlusJSONTitleEnum = "Too many requests"
)

type GetCommercialCreditCards429ApplicationPrsOpenbankingOpendataV13PlusJSON429ErrorObject struct {
	Description GetCommercialCreditCards429ApplicationPrsOpenbankingOpendataV13PlusJSONDescriptionEnum `json:"description"`
	Status      GetCommercialCreditCards429ApplicationPrsOpenbankingOpendataV13PlusJSONStatusEnum      `json:"status"`
	Title       GetCommercialCreditCards429ApplicationPrsOpenbankingOpendataV13PlusJSONTitleEnum       `json:"title"`
}

type GetCommercialCreditCards500ApplicationPrsOpenbankingOpendataV13PlusJSONDescriptionEnum string

const (
	GetCommercialCreditCards500ApplicationPrsOpenbankingOpendataV13PlusJSONDescriptionEnumAnErrorOccurredOnTheServerNoFurtherInformationIsAvailable GetCommercialCreditCards500ApplicationPrsOpenbankingOpendataV13PlusJSONDescriptionEnum = "An error occurred on the server. No further information is available."
)

type GetCommercialCreditCards500ApplicationPrsOpenbankingOpendataV13PlusJSONStatusEnum string

const (
	GetCommercialCreditCards500ApplicationPrsOpenbankingOpendataV13PlusJSONStatusEnumFiveHundred GetCommercialCreditCards500ApplicationPrsOpenbankingOpendataV13PlusJSONStatusEnum = "500"
)

type GetCommercialCreditCards500ApplicationPrsOpenbankingOpendataV13PlusJSONTitleEnum string

const (
	GetCommercialCreditCards500ApplicationPrsOpenbankingOpendataV13PlusJSONTitleEnumInternalServerError GetCommercialCreditCards500ApplicationPrsOpenbankingOpendataV13PlusJSONTitleEnum = "Internal server error"
)

type GetCommercialCreditCards500ApplicationPrsOpenbankingOpendataV13PlusJSON500ErrorObject struct {
	Description GetCommercialCreditCards500ApplicationPrsOpenbankingOpendataV13PlusJSONDescriptionEnum `json:"description"`
	Status      GetCommercialCreditCards500ApplicationPrsOpenbankingOpendataV13PlusJSONStatusEnum      `json:"status"`
	Title       GetCommercialCreditCards500ApplicationPrsOpenbankingOpendataV13PlusJSONTitleEnum       `json:"title"`
}

type GetCommercialCreditCards503ApplicationPrsOpenbankingOpendataV13PlusJSONDescriptionEnum string

const (
	GetCommercialCreditCards503ApplicationPrsOpenbankingOpendataV13PlusJSONDescriptionEnumTheServiceIsTemporarilyUnavailable GetCommercialCreditCards503ApplicationPrsOpenbankingOpendataV13PlusJSONDescriptionEnum = "The service is temporarily unavailable."
)

type GetCommercialCreditCards503ApplicationPrsOpenbankingOpendataV13PlusJSONStatusEnum string

const (
	GetCommercialCreditCards503ApplicationPrsOpenbankingOpendataV13PlusJSONStatusEnumFiveHundredAndThree GetCommercialCreditCards503ApplicationPrsOpenbankingOpendataV13PlusJSONStatusEnum = "503"
)

type GetCommercialCreditCards503ApplicationPrsOpenbankingOpendataV13PlusJSONTitleEnum string

const (
	GetCommercialCreditCards503ApplicationPrsOpenbankingOpendataV13PlusJSONTitleEnumServiceTemporarilyUnavailable GetCommercialCreditCards503ApplicationPrsOpenbankingOpendataV13PlusJSONTitleEnum = "Service temporarily unavailable"
)

type GetCommercialCreditCards503ApplicationPrsOpenbankingOpendataV13PlusJSON503ErrorObject struct {
	Description GetCommercialCreditCards503ApplicationPrsOpenbankingOpendataV13PlusJSONDescriptionEnum `json:"description"`
	Status      GetCommercialCreditCards503ApplicationPrsOpenbankingOpendataV13PlusJSONStatusEnum      `json:"status"`
	Title       GetCommercialCreditCards503ApplicationPrsOpenbankingOpendataV13PlusJSONTitleEnum       `json:"title"`
}

type GetCommercialCreditCardsDefaultApplicationPrsOpenbankingOpendataV13PlusJSONErrorObject struct {
	Description string `json:"description"`
	Status      string `json:"status"`
	Title       string `json:"title"`
}

type GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJSONDataBenefitsBenefitGroupBenefitItemBenefitDetailCriteriaTypeEnum string

const (
	GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJSONDataBenefitsBenefitGroupBenefitItemBenefitDetailCriteriaTypeEnumCashDeposit    GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJSONDataBenefitsBenefitGroupBenefitItemBenefitDetailCriteriaTypeEnum = "CashDeposit"
	GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJSONDataBenefitsBenefitGroupBenefitItemBenefitDetailCriteriaTypeEnumDeposit        GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJSONDataBenefitsBenefitGroupBenefitItemBenefitDetailCriteriaTypeEnum = "Deposit"
	GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJSONDataBenefitsBenefitGroupBenefitItemBenefitDetailCriteriaTypeEnumDirectDebit    GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJSONDataBenefitsBenefitGroupBenefitItemBenefitDetailCriteriaTypeEnum = "DirectDebit"
	GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJSONDataBenefitsBenefitGroupBenefitItemBenefitDetailCriteriaTypeEnumInitialDeposit GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJSONDataBenefitsBenefitGroupBenefitItemBenefitDetailCriteriaTypeEnum = "InitialDeposit"
	GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJSONDataBenefitsBenefitGroupBenefitItemBenefitDetailCriteriaTypeEnumInternetLogon  GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJSONDataBenefitsBenefitGroupBenefitItemBenefitDetailCriteriaTypeEnum = "InternetLogon"
	GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJSONDataBenefitsBenefitGroupBenefitItemBenefitDetailCriteriaTypeEnumMobileLogon    GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJSONDataBenefitsBenefitGroupBenefitItemBenefitDetailCriteriaTypeEnum = "MobileLogon"
	GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJSONDataBenefitsBenefitGroupBenefitItemBenefitDetailCriteriaTypeEnumRegularDeposit GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJSONDataBenefitsBenefitGroupBenefitItemBenefitDetailCriteriaTypeEnum = "RegularDeposit"
)

type GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJSONDataBenefitsBenefitGroupBenefitItemBenefitDetail struct {
	BenefitDescription *string                                                                                                                                   `json:"BenefitDescription,omitempty"`
	BenefitID          *string                                                                                                                                   `json:"BenefitID,omitempty"`
	BenefitName        *string                                                                                                                                   `json:"BenefitName,omitempty"`
	BenefitType        *string                                                                                                                                   `json:"BenefitType,omitempty"`
	BenefitValue       *string                                                                                                                                   `json:"BenefitValue,omitempty"`
	Counter            *int64                                                                                                                                    `json:"Counter,omitempty"`
	CriteriaType       []GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJSONDataBenefitsBenefitGroupBenefitItemBenefitDetailCriteriaTypeEnum `json:"CriteriaType,omitempty"`
	DefaultToAccounts  *bool                                                                                                                                     `json:"DefaultToAccounts,omitempty"`
	MaximumCriteria    *string                                                                                                                                   `json:"MaximumCriteria,omitempty"`
	MinimumCriteria    *string                                                                                                                                   `json:"MinimumCriteria,omitempty"`
	PromotionEndDate   *string                                                                                                                                   `json:"PromotionEndDate,omitempty"`
	PromotionStartDate *string                                                                                                                                   `json:"PromotionStartDate,omitempty"`
}

type GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJSONDataBenefitsBenefitGroupBenefitItem struct {
	BenefitDetail               []GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJSONDataBenefitsBenefitGroupBenefitItemBenefitDetail `json:"BenefitDetail,omitempty"`
	DateOfChange                *string                                                                                                                   `json:"DateOfChange,omitempty"`
	LengthPromotionalInDays     *int64                                                                                                                    `json:"LengthPromotionalInDays,omitempty"`
	StartPromotionOrFutureTerms *string                                                                                                                   `json:"StartPromotionOrFutureTerms,omitempty"`
	StopPromotionOrFutureTerms  *string                                                                                                                   `json:"StopPromotionOrFutureTerms,omitempty"`
}

type GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJSONDataBenefitsBenefitGroupBenefitSubTypeEnum string

const (
	GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJSONDataBenefitsBenefitGroupBenefitSubTypeEnumFutureMultipleTerms GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJSONDataBenefitsBenefitGroupBenefitSubTypeEnum = "FutureMultipleTerms"
	GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJSONDataBenefitsBenefitGroupBenefitSubTypeEnumPromotional         GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJSONDataBenefitsBenefitGroupBenefitSubTypeEnum = "Promotional"
	GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJSONDataBenefitsBenefitGroupBenefitSubTypeEnumRegular             GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJSONDataBenefitsBenefitGroupBenefitSubTypeEnum = "Regular"
)

type GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJSONDataBenefitsBenefitGroup struct {
	BenefitItem    GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJSONDataBenefitsBenefitGroupBenefitItem         `json:"BenefitItem"`
	BenefitSubType *GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJSONDataBenefitsBenefitGroupBenefitSubTypeEnum `json:"BenefitSubType,omitempty"`
}

type GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJSONDataBenefits struct {
	Benefit      bool                                                                                              `json:"Benefit"`
	BenefitGroup []GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJSONDataBenefitsBenefitGroup `json:"BenefitGroup,omitempty"`
}

type GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJSONDataDetailsCcSubTypeEnum string

const (
	GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJSONDataDetailsCcSubTypeEnumFutureMultipleTerms GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJSONDataDetailsCcSubTypeEnum = "FutureMultipleTerms"
	GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJSONDataDetailsCcSubTypeEnumPromotional         GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJSONDataDetailsCcSubTypeEnum = "Promotional"
	GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJSONDataDetailsCcSubTypeEnumRegular             GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJSONDataDetailsCcSubTypeEnum = "Regular"
)

type GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJSONDataDetailsCommercialCreditCardItemBalanceTransferInterestRatePeriodEnum string

const (
	GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJSONDataDetailsCommercialCreditCardItemBalanceTransferInterestRatePeriodEnumAnnual  GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJSONDataDetailsCommercialCreditCardItemBalanceTransferInterestRatePeriodEnum = "Annual"
	GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJSONDataDetailsCommercialCreditCardItemBalanceTransferInterestRatePeriodEnumMonthly GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJSONDataDetailsCommercialCreditCardItemBalanceTransferInterestRatePeriodEnum = "Monthly"
)

type GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJSONDataDetailsCommercialCreditCardItemCardSchemeEnum string

const (
	GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJSONDataDetailsCommercialCreditCardItemCardSchemeEnumCashcard         GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJSONDataDetailsCommercialCreditCardItemCardSchemeEnum = "Cashcard"
	GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJSONDataDetailsCommercialCreditCardItemCardSchemeEnumCreditMastercard GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJSONDataDetailsCommercialCreditCardItemCardSchemeEnum = "CreditMastercard"
	GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJSONDataDetailsCommercialCreditCardItemCardSchemeEnumCreditVisa       GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJSONDataDetailsCommercialCreditCardItemCardSchemeEnum = "CreditVisa"
)

type GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJSONDataDetailsCommercialCreditCardItemRepaymentFrequencyEnum string

const (
	GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJSONDataDetailsCommercialCreditCardItemRepaymentFrequencyEnumDaily       GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJSONDataDetailsCommercialCreditCardItemRepaymentFrequencyEnum = "Daily"
	GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJSONDataDetailsCommercialCreditCardItemRepaymentFrequencyEnumFlexible    GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJSONDataDetailsCommercialCreditCardItemRepaymentFrequencyEnum = "Flexible"
	GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJSONDataDetailsCommercialCreditCardItemRepaymentFrequencyEnumFortnightly GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJSONDataDetailsCommercialCreditCardItemRepaymentFrequencyEnum = "Fortnightly"
	GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJSONDataDetailsCommercialCreditCardItemRepaymentFrequencyEnumHalfYearly  GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJSONDataDetailsCommercialCreditCardItemRepaymentFrequencyEnum = "HalfYearly"
	GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJSONDataDetailsCommercialCreditCardItemRepaymentFrequencyEnumMonthly     GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJSONDataDetailsCommercialCreditCardItemRepaymentFrequencyEnum = "Monthly"
	GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJSONDataDetailsCommercialCreditCardItemRepaymentFrequencyEnumQuarterly   GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJSONDataDetailsCommercialCreditCardItemRepaymentFrequencyEnum = "Quarterly"
	GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJSONDataDetailsCommercialCreditCardItemRepaymentFrequencyEnumWeekly      GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJSONDataDetailsCommercialCreditCardItemRepaymentFrequencyEnum = "Weekly"
	GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJSONDataDetailsCommercialCreditCardItemRepaymentFrequencyEnumYearly      GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJSONDataDetailsCommercialCreditCardItemRepaymentFrequencyEnum = "Yearly"
)

type GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJSONDataDetailsCommercialCreditCardItem struct {
	AprRate                             string                                                                                                                                           `json:"APRRate"`
	AbilityToSetIndividualLimits        *bool                                                                                                                                            `json:"AbilityToSetIndividualLimits,omitempty"`
	AccessToOnlineDataReportingTool     bool                                                                                                                                             `json:"AccessToOnlineDataReportingTool"`
	AllocationofRepayment               *string                                                                                                                                          `json:"AllocationofRepayment,omitempty"`
	AnnualAccountFeeType                *string                                                                                                                                          `json:"AnnualAccountFeeType,omitempty"`
	AnnualFeeAmount                     string                                                                                                                                           `json:"AnnualFeeAmount"`
	BalanceTransferInterestRatePeriod   *GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJSONDataDetailsCommercialCreditCardItemBalanceTransferInterestRatePeriodEnum `json:"BalanceTransferInterestRatePeriod,omitempty"`
	BalanceTransferRate                 *string                                                                                                                                          `json:"BalanceTransferRate,omitempty"`
	CardScheme                          GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJSONDataDetailsCommercialCreditCardItemCardSchemeEnum                         `json:"CardScheme"`
	CashAdvanceRate                     string                                                                                                                                           `json:"CashAdvanceRate"`
	CashWithdrawalsAllowed              bool                                                                                                                                             `json:"CashWithdrawalsAllowed"`
	CashbackPercent                     *string                                                                                                                                          `json:"CashbackPercent,omitempty"`
	ChequeFeePercent                    *string                                                                                                                                          `json:"ChequeFeePercent,omitempty"`
	ConvenienceCheque                   bool                                                                                                                                             `json:"ConvenienceCheque"`
	DateOfChange                        *string                                                                                                                                          `json:"DateOfChange,omitempty"`
	DaysInterestFreeCreditIfPaymentFull int64                                                                                                                                            `json:"DaysInterestFreeCreditIfPaymentFull"`
	ExchangeRateAdjustment              string                                                                                                                                           `json:"ExchangeRateAdjustment"`
	FeesOnCheque                        *string                                                                                                                                          `json:"FeesOnCheque,omitempty"`
	ForeignCashFee                      *string                                                                                                                                          `json:"ForeignCashFee,omitempty"`
	ForeignCashFeeRate                  *string                                                                                                                                          `json:"ForeignCashFeeRate,omitempty"`
	ForeignPurchaseFee                  *string                                                                                                                                          `json:"ForeignPurchaseFee,omitempty"`
	ForeignPurchaseFeeRate              *string                                                                                                                                          `json:"ForeignPurchaseFeeRate,omitempty"`
	IssuingEmergencyCardsFees           string                                                                                                                                           `json:"IssuingEmergencyCardsFees"`
	LengthPromotionalInDays             *int64                                                                                                                                           `json:"LengthPromotionalInDays,omitempty"`
	MaximumNumberOfCardsPermitted       *int64                                                                                                                                           `json:"MaximumNumberOfCardsPermitted,omitempty"`
	MinimumCreditLimit                  string                                                                                                                                           `json:"MinimumCreditLimit"`
	MinimumLendingAmount                *string                                                                                                                                          `json:"MinimumLendingAmount,omitempty"`
	MinimumRepaymentAmount              *string                                                                                                                                          `json:"MinimumRepaymentAmount,omitempty"`
	MinimumRepaymentPercentage          *string                                                                                                                                          `json:"MinimumRepaymentPercentage,omitempty"`
	NonSterlingCashFee                  *string                                                                                                                                          `json:"NonSterlingCashFee,omitempty"`
	NonSterlingCashFeeRate              *string                                                                                                                                          `json:"NonSterlingCashFeeRate,omitempty"`
	NonSterlingPurchaseFee              *string                                                                                                                                          `json:"NonSterlingPurchaseFee,omitempty"`
	NonSterlingPurchaseFeeRate          *string                                                                                                                                          `json:"NonSterlingPurchaseFeeRate,omitempty"`
	NonSterlingTransactionFee           *string                                                                                                                                          `json:"NonSterlingTransactionFee,omitempty"`
	NonSterlingTransactionFeeRate       *string                                                                                                                                          `json:"NonSterlingTransactionFeeRate,omitempty"`
	OverLimitFee                        *string                                                                                                                                          `json:"OverLimitFee,omitempty"`
	PaymentDaysAfterStatement           int64                                                                                                                                            `json:"PaymentDaysAfterStatement"`
	PaymentSchemeExchangeFee            *string                                                                                                                                          `json:"PaymentSchemeExchangeFee,omitempty"`
	PaymentSchemeExchangeFeeRate        *string                                                                                                                                          `json:"PaymentSchemeExchangeFeeRate,omitempty"`
	PaymentSchemeExchangeRate           *string                                                                                                                                          `json:"PaymentSchemeExchangeRate,omitempty"`
	PurchaseRate                        string                                                                                                                                           `json:"PurchaseRate"`
	RepaymentFrequency                  GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJSONDataDetailsCommercialCreditCardItemRepaymentFrequencyEnum                 `json:"RepaymentFrequency"`
	RepaymentNotes                      *string                                                                                                                                          `json:"RepaymentNotes,omitempty"`
	StartPromotionOrFutureTerms         *string                                                                                                                                          `json:"StartPromotionOrFutureTerms,omitempty"`
	StatementAtAccountLevel             bool                                                                                                                                             `json:"StatementAtAccountLevel"`
	StatementAtPersonalLevel            bool                                                                                                                                             `json:"StatementAtPersonalLevel"`
	StopPromotionOrFutureTerms          *string                                                                                                                                          `json:"StopPromotionOrFutureTerms,omitempty"`
}

type GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJSONDataDetails struct {
	CcSubType                GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJSONDataDetailsCcSubTypeEnum            `json:"CCSubType"`
	CommercialCreditCardItem GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJSONDataDetailsCommercialCreditCardItem `json:"CommercialCreditCardItem"`
}

type GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJSONDataEligibilityEligibilityTypeEnum string

const (
	GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJSONDataEligibilityEligibilityTypeEnumAnyBusinessCustomer       GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJSONDataEligibilityEligibilityTypeEnum = "AnyBusinessCustomer"
	GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJSONDataEligibilityEligibilityTypeEnumBusinessOnly              GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJSONDataEligibilityEligibilityTypeEnum = "BusinessOnly"
	GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJSONDataEligibilityEligibilityTypeEnumCreditCard                GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJSONDataEligibilityEligibilityTypeEnum = "CreditCard"
	GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJSONDataEligibilityEligibilityTypeEnumCreditScoring             GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJSONDataEligibilityEligibilityTypeEnum = "CreditScoring"
	GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJSONDataEligibilityEligibilityTypeEnumEmailAddress              GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJSONDataEligibilityEligibilityTypeEnum = "EmailAddress"
	GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJSONDataEligibilityEligibilityTypeEnumExistingCustomers         GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJSONDataEligibilityEligibilityTypeEnum = "ExistingCustomers"
	GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJSONDataEligibilityEligibilityTypeEnumIDAndV                    GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJSONDataEligibilityEligibilityTypeEnum = "IdAndV"
	GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJSONDataEligibilityEligibilityTypeEnumMortgage                  GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJSONDataEligibilityEligibilityTypeEnum = "Mortgage"
	GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJSONDataEligibilityEligibilityTypeEnumNoArrearsOnLoan           GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJSONDataEligibilityEligibilityTypeEnum = "NoArrearsOnLoan"
	GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJSONDataEligibilityEligibilityTypeEnumNoCustomerInArrears       GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJSONDataEligibilityEligibilityTypeEnum = "NoCustomerInArrears"
	GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJSONDataEligibilityEligibilityTypeEnumNoOverOverdraftThirtyDays GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJSONDataEligibilityEligibilityTypeEnum = "NoOverOverdraftThirtyDays"
	GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJSONDataEligibilityEligibilityTypeEnumNoSoleUkAccountOrBankrupt GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJSONDataEligibilityEligibilityTypeEnum = "NoSoleUkAccountOrBankrupt"
	GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJSONDataEligibilityEligibilityTypeEnumNtb                       GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJSONDataEligibilityEligibilityTypeEnum = "NTB"
	GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJSONDataEligibilityEligibilityTypeEnumNtbBusiness               GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJSONDataEligibilityEligibilityTypeEnum = "NTBBusiness"
	GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJSONDataEligibilityEligibilityTypeEnumSoleStudentAccount        GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJSONDataEligibilityEligibilityTypeEnum = "SoleStudentAccount"
	GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJSONDataEligibilityEligibilityTypeEnumSoleUkAccount             GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJSONDataEligibilityEligibilityTypeEnum = "SoleUkAccount"
	GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJSONDataEligibilityEligibilityTypeEnumStudentsOnly              GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJSONDataEligibilityEligibilityTypeEnum = "StudentsOnly"
	GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJSONDataEligibilityEligibilityTypeEnumTwoMonthsOfCourseStart    GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJSONDataEligibilityEligibilityTypeEnum = "TwoMonthsOfCourseStart"
	GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJSONDataEligibilityEligibilityTypeEnumUcasFulltimeTwoYears      GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJSONDataEligibilityEligibilityTypeEnum = "UCASFulltimeTwoYears"
)

type GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJSONDataEligibilityMarketingEligibilityEnum string

const (
	GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJSONDataEligibilityMarketingEligibilityEnumExistingCustomers GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJSONDataEligibilityMarketingEligibilityEnum = "ExistingCustomers"
	GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJSONDataEligibilityMarketingEligibilityEnumNewCustomersOnly  GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJSONDataEligibilityMarketingEligibilityEnum = "NewCustomersOnly"
	GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJSONDataEligibilityMarketingEligibilityEnumSwitchersOnly     GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJSONDataEligibilityMarketingEligibilityEnum = "SwitchersOnly"
	GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJSONDataEligibilityMarketingEligibilityEnumStartUp           GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJSONDataEligibilityMarketingEligibilityEnum = "StartUp"
)

type GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJSONDataEligibilityMinimumIncomeFrequencyEnum string

const (
	GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJSONDataEligibilityMinimumIncomeFrequencyEnumAcademicTerm GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJSONDataEligibilityMinimumIncomeFrequencyEnum = "AcademicTerm"
	GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJSONDataEligibilityMinimumIncomeFrequencyEnumHalfYearly   GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJSONDataEligibilityMinimumIncomeFrequencyEnum = "HalfYearly"
	GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJSONDataEligibilityMinimumIncomeFrequencyEnumMonthly      GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJSONDataEligibilityMinimumIncomeFrequencyEnum = "Monthly"
	GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJSONDataEligibilityMinimumIncomeFrequencyEnumQuarterly    GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJSONDataEligibilityMinimumIncomeFrequencyEnum = "Quarterly"
	GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJSONDataEligibilityMinimumIncomeFrequencyEnumWeekly       GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJSONDataEligibilityMinimumIncomeFrequencyEnum = "Weekly"
	GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJSONDataEligibilityMinimumIncomeFrequencyEnumYearly       GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJSONDataEligibilityMinimumIncomeFrequencyEnum = "Yearly"
)

type GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJSONDataEligibilityResidencyRestrictedRegionEnum string

const (
	GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJSONDataEligibilityResidencyRestrictedRegionEnumUk    GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJSONDataEligibilityResidencyRestrictedRegionEnum = "UK"
	GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJSONDataEligibilityResidencyRestrictedRegionEnumEea   GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJSONDataEligibilityResidencyRestrictedRegionEnum = "EEA"
	GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJSONDataEligibilityResidencyRestrictedRegionEnumEu    GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJSONDataEligibilityResidencyRestrictedRegionEnum = "EU"
	GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJSONDataEligibilityResidencyRestrictedRegionEnumEfta  GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJSONDataEligibilityResidencyRestrictedRegionEnum = "EFTA"
	GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJSONDataEligibilityResidencyRestrictedRegionEnumGbEng GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJSONDataEligibilityResidencyRestrictedRegionEnum = "GB - ENG"
	GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJSONDataEligibilityResidencyRestrictedRegionEnumGbNir GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJSONDataEligibilityResidencyRestrictedRegionEnum = "GB - NIR"
	GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJSONDataEligibilityResidencyRestrictedRegionEnumGbSct GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJSONDataEligibilityResidencyRestrictedRegionEnum = "GB - SCT"
	GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJSONDataEligibilityResidencyRestrictedRegionEnumGbWls GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJSONDataEligibilityResidencyRestrictedRegionEnum = "GB - WLS"
	GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJSONDataEligibilityResidencyRestrictedRegionEnumIrl   GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJSONDataEligibilityResidencyRestrictedRegionEnum = "IRL"
)

type GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJSONDataEligibilitySingleJointIncomeEnum string

const (
	GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJSONDataEligibilitySingleJointIncomeEnumJoint       GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJSONDataEligibilitySingleJointIncomeEnum = "Joint"
	GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJSONDataEligibilitySingleJointIncomeEnumSoleIncome  GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJSONDataEligibilitySingleJointIncomeEnum = "SoleIncome"
	GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJSONDataEligibilitySingleJointIncomeEnumSoleOrJoint GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJSONDataEligibilitySingleJointIncomeEnum = "SoleOrJoint"
	GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJSONDataEligibilitySingleJointIncomeEnumTurnover    GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJSONDataEligibilitySingleJointIncomeEnum = "Turnover"
)

type GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJSONDataEligibility struct {
	AgeRestricted                    bool                                                                                                                 `json:"AgeRestricted"`
	AnnualBusinessTurnover           *string                                                                                                              `json:"AnnualBusinessTurnover,omitempty"`
	AnnualBusinessTurnoverCurrency   *string                                                                                                              `json:"AnnualBusinessTurnoverCurrency,omitempty"`
	Description                      string                                                                                                               `json:"Description"`
	EligibilityName                  *string                                                                                                              `json:"EligibilityName,omitempty"`
	EligibilityNotes                 *string                                                                                                              `json:"EligibilityNotes,omitempty"`
	EligibilityType                  *GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJSONDataEligibilityEligibilityTypeEnum           `json:"EligibilityType,omitempty"`
	IncomeCondition                  *string                                                                                                              `json:"IncomeCondition,omitempty"`
	IncomeTurnoverRelated            bool                                                                                                                 `json:"IncomeTurnoverRelated"`
	MarketingEligibility             []GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJSONDataEligibilityMarketingEligibilityEnum     `json:"MarketingEligibility,omitempty"`
	MaxNumberOfAccounts              *string                                                                                                              `json:"MaxNumberOfAccounts,omitempty"`
	MaximumAge                       *int64                                                                                                               `json:"MaximumAge,omitempty"`
	MaximumAgeToOpen                 *int64                                                                                                               `json:"MaximumAgeToOpen,omitempty"`
	MaximumOpeningAmount             *bool                                                                                                                `json:"MaximumOpeningAmount,omitempty"`
	MinIncomeTurnoverPaidIntoAccount *int64                                                                                                               `json:"MinIncomeTurnoverPaidIntoAccount,omitempty"`
	MinimumAge                       *int64                                                                                                               `json:"MinimumAge,omitempty"`
	MinimumDeposit                   *bool                                                                                                                `json:"MinimumDeposit,omitempty"`
	MinimumIncomeFrequency           *GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJSONDataEligibilityMinimumIncomeFrequencyEnum    `json:"MinimumIncomeFrequency,omitempty"`
	MinimumIncomeTurnoverAmount      *string                                                                                                              `json:"MinimumIncomeTurnoverAmount,omitempty"`
	MinimumIncomeTurnoverCurrency    *string                                                                                                              `json:"MinimumIncomeTurnoverCurrency,omitempty"`
	MinimumOperatingBalance          *string                                                                                                              `json:"MinimumOperatingBalance,omitempty"`
	MinimumOperatingBalanceCurrency  *string                                                                                                              `json:"MinimumOperatingBalanceCurrency,omitempty"`
	MinimumOperatingBalanceExists    *bool                                                                                                                `json:"MinimumOperatingBalanceExists,omitempty"`
	OpeningDepositMaximumAmount      *string                                                                                                              `json:"OpeningDepositMaximumAmount,omitempty"`
	OpeningDepositMaximumCurrency    *string                                                                                                              `json:"OpeningDepositMaximumCurrency,omitempty"`
	OpeningDepositMinimum            *string                                                                                                              `json:"OpeningDepositMinimum,omitempty"`
	OpeningDepositMinimumCurrency    *string                                                                                                              `json:"OpeningDepositMinimumCurrency,omitempty"`
	OtherFinancialHoldingRequired    bool                                                                                                                 `json:"OtherFinancialHoldingRequired"`
	PreviousBankruptcy               bool                                                                                                                 `json:"PreviousBankruptcy"`
	ResidencyRestricted              bool                                                                                                                 `json:"ResidencyRestricted"`
	ResidencyRestrictedRegion        *GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJSONDataEligibilityResidencyRestrictedRegionEnum `json:"ResidencyRestrictedRegion,omitempty"`
	SingleJointIncome                *GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJSONDataEligibilitySingleJointIncomeEnum         `json:"SingleJointIncome,omitempty"`
	ThirdSectorOrganisations         bool                                                                                                                 `json:"ThirdSectorOrganisations"`
}

type GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOrganisationBrandTrademarkIpoCodeEnum string

const (
	GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOrganisationBrandTrademarkIpoCodeEnumUk GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOrganisationBrandTrademarkIpoCodeEnum = "UK"
	GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOrganisationBrandTrademarkIpoCodeEnumEu GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOrganisationBrandTrademarkIpoCodeEnum = "EU"
)

type GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOrganisationBrand struct {
	TrademarkID      string                                                                                                           `json:"TrademarkID"`
	TrademarkIpoCode GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOrganisationBrandTrademarkIpoCodeEnum `json:"TrademarkIPOCode"`
}

type GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOrganisationParentOrganisationOrganisationName struct {
	LegalName string `json:"LegalName"`
}

type GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOrganisationParentOrganisation struct {
	Bic              *string                                                                                                                   `json:"BIC,omitempty"`
	Lei              *string                                                                                                                   `json:"LEI,omitempty"`
	OrganisationName GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOrganisationParentOrganisationOrganisationName `json:"OrganisationName"`
}

type GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOrganisation struct {
	Brand              GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOrganisationBrand              `json:"Brand"`
	ParentOrganisation GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOrganisationParentOrganisation `json:"ParentOrganisation"`
}

type GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJSONDataProductSegmentEnum string

const (
	GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJSONDataProductSegmentEnumCashback  GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJSONDataProductSegmentEnum = "Cashback"
	GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJSONDataProductSegmentEnumCorporate GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJSONDataProductSegmentEnum = "Corporate"
	GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJSONDataProductSegmentEnumGeneral   GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJSONDataProductSegmentEnum = "General"
	GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJSONDataProductSegmentEnumReward    GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJSONDataProductSegmentEnum = "Reward"
	GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJSONDataProductSegmentEnumSme       GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJSONDataProductSegmentEnum = "SME"
)

type GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJSONDataProductTypeEnum string

const (
	GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJSONDataProductTypeEnumCommercialCreditCards GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJSONDataProductTypeEnum = "CommercialCreditCards"
)

type GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJSONData struct {
	Benefits                  GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJSONDataBenefits             `json:"Benefits"`
	Description               string                                                                                          `json:"Description"`
	Details                   GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJSONDataDetails              `json:"Details"`
	Eligibility               GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJSONDataEligibility          `json:"Eligibility"`
	KeyFeatures               string                                                                                          `json:"KeyFeatures"`
	Organisation              GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJSONDataOrganisation         `json:"Organisation"`
	OtherKeyFeatures          *string                                                                                         `json:"OtherKeyFeatures,omitempty"`
	PaymentHoliday            bool                                                                                            `json:"PaymentHoliday"`
	PaymentHolidayDescription *string                                                                                         `json:"PaymentHolidayDescription,omitempty"`
	ProductIdentifier         string                                                                                          `json:"ProductIdentifier"`
	ProductName               string                                                                                          `json:"ProductName"`
	ProductSegment            []GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJSONDataProductSegmentEnum `json:"ProductSegment,omitempty"`
	ProductType               GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJSONDataProductTypeEnum      `json:"ProductType"`
	ProductURL                []string                                                                                        `json:"ProductURL"`
	TsandCs                   []string                                                                                        `json:"TsandCs"`
}

type GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJSONMetaAgreementEnum string

const (
	GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJSONMetaAgreementEnumUseOfTheApIsAndAnyRelatedDataWillBeSubjectToTheTermsOfTheOpenLicenceAndSubjectToTermsAndConditions GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJSONMetaAgreementEnum = "Use of the APIs and any related data will be subject to the terms of the Open Licence and subject to terms and conditions"
)

type GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJSONMetaLicenseEnum string

const (
	GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJSONMetaLicenseEnumHTTPSWwwOpenbankingOrgUkOpenLicence GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJSONMetaLicenseEnum = "https://www.openbanking.org.uk/open-licence"
)

type GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJSONMetaTermsOfUseEnum string

const (
	GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJSONMetaTermsOfUseEnumHTTPSWwwOpenbankingOrgUkTerms GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJSONMetaTermsOfUseEnum = "https://www.openbanking.org.uk/terms"
)

type GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJSONMetaMetaData struct {
	Agreement    GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJSONMetaAgreementEnum  `json:"Agreement"`
	LastUpdated  time.Time                                                                                 `json:"LastUpdated"`
	License      GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJSONMetaLicenseEnum    `json:"License"`
	TermsOfUse   GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJSONMetaTermsOfUseEnum `json:"TermsOfUse"`
	TotalResults int64                                                                                     `json:"TotalResults"`
}

type GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJSON struct {
	Data []GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJSONData       `json:"data"`
	Meta GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJSONMetaMetaData `json:"meta"`
}

type GetCommercialCreditCardsResponse struct {
	FourHundredErrorObject                                                        *GetCommercialCreditCards400ApplicationPrsOpenbankingOpendataV13PlusJSON400ErrorObject
	FourHundredAndEightErrorObject                                                *GetCommercialCreditCards408ApplicationPrsOpenbankingOpendataV13PlusJSON408ErrorObject
	FourHundredAndTwentyNineErrorObject                                           *GetCommercialCreditCards429ApplicationPrsOpenbankingOpendataV13PlusJSON429ErrorObject
	FiveHundredErrorObject                                                        *GetCommercialCreditCards500ApplicationPrsOpenbankingOpendataV13PlusJSON500ErrorObject
	FiveHundredAndThreeErrorObject                                                *GetCommercialCreditCards503ApplicationPrsOpenbankingOpendataV13PlusJSON503ErrorObject
	ContentType                                                                   string
	ErrorObject                                                                   *GetCommercialCreditCardsDefaultApplicationPrsOpenbankingOpendataV13PlusJSONErrorObject
	GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJSONObject *GetCommercialCreditCards200ApplicationPrsOpenbankingOpendataV13PlusJSON
	Headers                                                                       map[string][]string
	StatusCode                                                                    int64
}
