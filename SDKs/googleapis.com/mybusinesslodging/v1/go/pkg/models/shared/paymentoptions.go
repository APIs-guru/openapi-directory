package shared

type PaymentOptionsCashExceptionEnum string

const (
	PaymentOptionsCashExceptionEnumExceptionUnspecified PaymentOptionsCashExceptionEnum = "EXCEPTION_UNSPECIFIED"
	PaymentOptionsCashExceptionEnumUnderConstruction    PaymentOptionsCashExceptionEnum = "UNDER_CONSTRUCTION"
	PaymentOptionsCashExceptionEnumDependentOnSeason    PaymentOptionsCashExceptionEnum = "DEPENDENT_ON_SEASON"
	PaymentOptionsCashExceptionEnumDependentOnDayOfWeek PaymentOptionsCashExceptionEnum = "DEPENDENT_ON_DAY_OF_WEEK"
)

type PaymentOptionsChequeExceptionEnum string

const (
	PaymentOptionsChequeExceptionEnumExceptionUnspecified PaymentOptionsChequeExceptionEnum = "EXCEPTION_UNSPECIFIED"
	PaymentOptionsChequeExceptionEnumUnderConstruction    PaymentOptionsChequeExceptionEnum = "UNDER_CONSTRUCTION"
	PaymentOptionsChequeExceptionEnumDependentOnSeason    PaymentOptionsChequeExceptionEnum = "DEPENDENT_ON_SEASON"
	PaymentOptionsChequeExceptionEnumDependentOnDayOfWeek PaymentOptionsChequeExceptionEnum = "DEPENDENT_ON_DAY_OF_WEEK"
)

type PaymentOptionsCreditCardExceptionEnum string

const (
	PaymentOptionsCreditCardExceptionEnumExceptionUnspecified PaymentOptionsCreditCardExceptionEnum = "EXCEPTION_UNSPECIFIED"
	PaymentOptionsCreditCardExceptionEnumUnderConstruction    PaymentOptionsCreditCardExceptionEnum = "UNDER_CONSTRUCTION"
	PaymentOptionsCreditCardExceptionEnumDependentOnSeason    PaymentOptionsCreditCardExceptionEnum = "DEPENDENT_ON_SEASON"
	PaymentOptionsCreditCardExceptionEnumDependentOnDayOfWeek PaymentOptionsCreditCardExceptionEnum = "DEPENDENT_ON_DAY_OF_WEEK"
)

type PaymentOptionsDebitCardExceptionEnum string

const (
	PaymentOptionsDebitCardExceptionEnumExceptionUnspecified PaymentOptionsDebitCardExceptionEnum = "EXCEPTION_UNSPECIFIED"
	PaymentOptionsDebitCardExceptionEnumUnderConstruction    PaymentOptionsDebitCardExceptionEnum = "UNDER_CONSTRUCTION"
	PaymentOptionsDebitCardExceptionEnumDependentOnSeason    PaymentOptionsDebitCardExceptionEnum = "DEPENDENT_ON_SEASON"
	PaymentOptionsDebitCardExceptionEnumDependentOnDayOfWeek PaymentOptionsDebitCardExceptionEnum = "DEPENDENT_ON_DAY_OF_WEEK"
)

type PaymentOptionsMobileNfcExceptionEnum string

const (
	PaymentOptionsMobileNfcExceptionEnumExceptionUnspecified PaymentOptionsMobileNfcExceptionEnum = "EXCEPTION_UNSPECIFIED"
	PaymentOptionsMobileNfcExceptionEnumUnderConstruction    PaymentOptionsMobileNfcExceptionEnum = "UNDER_CONSTRUCTION"
	PaymentOptionsMobileNfcExceptionEnumDependentOnSeason    PaymentOptionsMobileNfcExceptionEnum = "DEPENDENT_ON_SEASON"
	PaymentOptionsMobileNfcExceptionEnumDependentOnDayOfWeek PaymentOptionsMobileNfcExceptionEnum = "DEPENDENT_ON_DAY_OF_WEEK"
)

type PaymentOptions struct {
	Cash                *bool                                  `json:"cash"`
	CashException       *PaymentOptionsCashExceptionEnum       `json:"cashException"`
	Cheque              *bool                                  `json:"cheque"`
	ChequeException     *PaymentOptionsChequeExceptionEnum     `json:"chequeException"`
	CreditCard          *bool                                  `json:"creditCard"`
	CreditCardException *PaymentOptionsCreditCardExceptionEnum `json:"creditCardException"`
	DebitCard           *bool                                  `json:"debitCard"`
	DebitCardException  *PaymentOptionsDebitCardExceptionEnum  `json:"debitCardException"`
	MobileNfc           *bool                                  `json:"mobileNfc"`
	MobileNfcException  *PaymentOptionsMobileNfcExceptionEnum  `json:"mobileNfcException"`
}
