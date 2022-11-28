package shared

type PoliciesAllInclusiveAvailableExceptionEnum string

const (
	PoliciesAllInclusiveAvailableExceptionEnumExceptionUnspecified PoliciesAllInclusiveAvailableExceptionEnum = "EXCEPTION_UNSPECIFIED"
	PoliciesAllInclusiveAvailableExceptionEnumUnderConstruction    PoliciesAllInclusiveAvailableExceptionEnum = "UNDER_CONSTRUCTION"
	PoliciesAllInclusiveAvailableExceptionEnumDependentOnSeason    PoliciesAllInclusiveAvailableExceptionEnum = "DEPENDENT_ON_SEASON"
	PoliciesAllInclusiveAvailableExceptionEnumDependentOnDayOfWeek PoliciesAllInclusiveAvailableExceptionEnum = "DEPENDENT_ON_DAY_OF_WEEK"
)

type PoliciesAllInclusiveOnlyExceptionEnum string

const (
	PoliciesAllInclusiveOnlyExceptionEnumExceptionUnspecified PoliciesAllInclusiveOnlyExceptionEnum = "EXCEPTION_UNSPECIFIED"
	PoliciesAllInclusiveOnlyExceptionEnumUnderConstruction    PoliciesAllInclusiveOnlyExceptionEnum = "UNDER_CONSTRUCTION"
	PoliciesAllInclusiveOnlyExceptionEnumDependentOnSeason    PoliciesAllInclusiveOnlyExceptionEnum = "DEPENDENT_ON_SEASON"
	PoliciesAllInclusiveOnlyExceptionEnumDependentOnDayOfWeek PoliciesAllInclusiveOnlyExceptionEnum = "DEPENDENT_ON_DAY_OF_WEEK"
)

type PoliciesCheckinTimeExceptionEnum string

const (
	PoliciesCheckinTimeExceptionEnumExceptionUnspecified PoliciesCheckinTimeExceptionEnum = "EXCEPTION_UNSPECIFIED"
	PoliciesCheckinTimeExceptionEnumUnderConstruction    PoliciesCheckinTimeExceptionEnum = "UNDER_CONSTRUCTION"
	PoliciesCheckinTimeExceptionEnumDependentOnSeason    PoliciesCheckinTimeExceptionEnum = "DEPENDENT_ON_SEASON"
	PoliciesCheckinTimeExceptionEnumDependentOnDayOfWeek PoliciesCheckinTimeExceptionEnum = "DEPENDENT_ON_DAY_OF_WEEK"
)

type PoliciesCheckoutTimeExceptionEnum string

const (
	PoliciesCheckoutTimeExceptionEnumExceptionUnspecified PoliciesCheckoutTimeExceptionEnum = "EXCEPTION_UNSPECIFIED"
	PoliciesCheckoutTimeExceptionEnumUnderConstruction    PoliciesCheckoutTimeExceptionEnum = "UNDER_CONSTRUCTION"
	PoliciesCheckoutTimeExceptionEnumDependentOnSeason    PoliciesCheckoutTimeExceptionEnum = "DEPENDENT_ON_SEASON"
	PoliciesCheckoutTimeExceptionEnumDependentOnDayOfWeek PoliciesCheckoutTimeExceptionEnum = "DEPENDENT_ON_DAY_OF_WEEK"
)

type PoliciesKidsStayFreeExceptionEnum string

const (
	PoliciesKidsStayFreeExceptionEnumExceptionUnspecified PoliciesKidsStayFreeExceptionEnum = "EXCEPTION_UNSPECIFIED"
	PoliciesKidsStayFreeExceptionEnumUnderConstruction    PoliciesKidsStayFreeExceptionEnum = "UNDER_CONSTRUCTION"
	PoliciesKidsStayFreeExceptionEnumDependentOnSeason    PoliciesKidsStayFreeExceptionEnum = "DEPENDENT_ON_SEASON"
	PoliciesKidsStayFreeExceptionEnumDependentOnDayOfWeek PoliciesKidsStayFreeExceptionEnum = "DEPENDENT_ON_DAY_OF_WEEK"
)

type PoliciesMaxChildAgeExceptionEnum string

const (
	PoliciesMaxChildAgeExceptionEnumExceptionUnspecified PoliciesMaxChildAgeExceptionEnum = "EXCEPTION_UNSPECIFIED"
	PoliciesMaxChildAgeExceptionEnumUnderConstruction    PoliciesMaxChildAgeExceptionEnum = "UNDER_CONSTRUCTION"
	PoliciesMaxChildAgeExceptionEnumDependentOnSeason    PoliciesMaxChildAgeExceptionEnum = "DEPENDENT_ON_SEASON"
	PoliciesMaxChildAgeExceptionEnumDependentOnDayOfWeek PoliciesMaxChildAgeExceptionEnum = "DEPENDENT_ON_DAY_OF_WEEK"
)

type PoliciesMaxKidsStayFreeCountExceptionEnum string

const (
	PoliciesMaxKidsStayFreeCountExceptionEnumExceptionUnspecified PoliciesMaxKidsStayFreeCountExceptionEnum = "EXCEPTION_UNSPECIFIED"
	PoliciesMaxKidsStayFreeCountExceptionEnumUnderConstruction    PoliciesMaxKidsStayFreeCountExceptionEnum = "UNDER_CONSTRUCTION"
	PoliciesMaxKidsStayFreeCountExceptionEnumDependentOnSeason    PoliciesMaxKidsStayFreeCountExceptionEnum = "DEPENDENT_ON_SEASON"
	PoliciesMaxKidsStayFreeCountExceptionEnumDependentOnDayOfWeek PoliciesMaxKidsStayFreeCountExceptionEnum = "DEPENDENT_ON_DAY_OF_WEEK"
)

type PoliciesSmokeFreePropertyExceptionEnum string

const (
	PoliciesSmokeFreePropertyExceptionEnumExceptionUnspecified PoliciesSmokeFreePropertyExceptionEnum = "EXCEPTION_UNSPECIFIED"
	PoliciesSmokeFreePropertyExceptionEnumUnderConstruction    PoliciesSmokeFreePropertyExceptionEnum = "UNDER_CONSTRUCTION"
	PoliciesSmokeFreePropertyExceptionEnumDependentOnSeason    PoliciesSmokeFreePropertyExceptionEnum = "DEPENDENT_ON_SEASON"
	PoliciesSmokeFreePropertyExceptionEnumDependentOnDayOfWeek PoliciesSmokeFreePropertyExceptionEnum = "DEPENDENT_ON_DAY_OF_WEEK"
)

// Policies
// Property rules that impact guests.
type Policies struct {
	AllInclusiveAvailable          *bool                                       `json:"allInclusiveAvailable,omitempty"`
	AllInclusiveAvailableException *PoliciesAllInclusiveAvailableExceptionEnum `json:"allInclusiveAvailableException,omitempty"`
	AllInclusiveOnly               *bool                                       `json:"allInclusiveOnly,omitempty"`
	AllInclusiveOnlyException      *PoliciesAllInclusiveOnlyExceptionEnum      `json:"allInclusiveOnlyException,omitempty"`
	CheckinTime                    *TimeOfDay                                  `json:"checkinTime,omitempty"`
	CheckinTimeException           *PoliciesCheckinTimeExceptionEnum           `json:"checkinTimeException,omitempty"`
	CheckoutTime                   *TimeOfDay                                  `json:"checkoutTime,omitempty"`
	CheckoutTimeException          *PoliciesCheckoutTimeExceptionEnum          `json:"checkoutTimeException,omitempty"`
	KidsStayFree                   *bool                                       `json:"kidsStayFree,omitempty"`
	KidsStayFreeException          *PoliciesKidsStayFreeExceptionEnum          `json:"kidsStayFreeException,omitempty"`
	MaxChildAge                    *int32                                      `json:"maxChildAge,omitempty"`
	MaxChildAgeException           *PoliciesMaxChildAgeExceptionEnum           `json:"maxChildAgeException,omitempty"`
	MaxKidsStayFreeCount           *int32                                      `json:"maxKidsStayFreeCount,omitempty"`
	MaxKidsStayFreeCountException  *PoliciesMaxKidsStayFreeCountExceptionEnum  `json:"maxKidsStayFreeCountException,omitempty"`
	PaymentOptions                 *PaymentOptions                             `json:"paymentOptions,omitempty"`
	SmokeFreeProperty              *bool                                       `json:"smokeFreeProperty,omitempty"`
	SmokeFreePropertyException     *PoliciesSmokeFreePropertyExceptionEnum     `json:"smokeFreePropertyException,omitempty"`
}
