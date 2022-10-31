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
	Cash                *bool                                  `json:"cash,omitempty"`
	CashException       *PaymentOptionsCashExceptionEnum       `json:"cashException,omitempty"`
	Cheque              *bool                                  `json:"cheque,omitempty"`
	ChequeException     *PaymentOptionsChequeExceptionEnum     `json:"chequeException,omitempty"`
	CreditCard          *bool                                  `json:"creditCard,omitempty"`
	CreditCardException *PaymentOptionsCreditCardExceptionEnum `json:"creditCardException,omitempty"`
	DebitCard           *bool                                  `json:"debitCard,omitempty"`
	DebitCardException  *PaymentOptionsDebitCardExceptionEnum  `json:"debitCardException,omitempty"`
	MobileNfc           *bool                                  `json:"mobileNfc,omitempty"`
	MobileNfcException  *PaymentOptionsMobileNfcExceptionEnum  `json:"mobileNfcException,omitempty"`
}
